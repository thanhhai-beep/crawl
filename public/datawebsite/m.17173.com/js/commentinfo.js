/**
 * Name: \u8bc4\u8bba\u6269\u5c55\u4fe1\u606f
 * Create: 2013-03-06
 * Version: 1.1
 *
 * Author: bsky1wcj
 * Mail:changjianwang@cyou-inc.com   10877098@qq.com
 * Tel:13405967686
 *
 *
 * Update Log:2013-06-17
 * 1.modify --  \u6dfb\u52a0\u7545\u8a00\u8bc4\u8bba\u6570
 */
/************************************/
var __CIInterface = {
  '17173': 'https://comment2.17173.com/front/comment/sums.do',
  'changyan': 'https://changyan.sohu.com/api/open/topic/comment/sums?client_id=cyqvqDTV5'
};

var CommentInfo = function(opt) {
  this.opts = $.extend({}, {
    debug: false, //\u5f00\u542fbug\u8c03\u8bd5
    commentItem: '.js-comment-item', //\u8bc4\u8bba\u9879  \u5bb9\u5668
    commentCount: '.js-comment-count', //\u8bc4\u8bba\u6570
    commentTitle: '.js-comment-title', //\u6807\u9898
    commentArticleurl: '.js-comment-articleurl', //\u6587\u7ae0URL
    callback: null
  }, opt);
  this.topicIds = null;
  this.opts.debug && console.log('opts=', this.opts);
};

//\u6839\u636e\u4e3b\u9898ID\u5217\u8868\u83b7\u53d6\u8bc4\u8bba\u4e3b\u9898\u4fe1\u606f
CommentInfo.prototype.getData = function(options) {
  var o = this;
  o.opts.debug && console.log("GroupVote.prototype.getData");
  var opts = $.extend({}, {
    topicIds: null,
    callback: function(data) {
      o.opts.debug && console.log('data=', data);
      o.decorate(data);
    }
  }, options);

  if (!opts.topicIds) return;
  _param = opts.topicIds.join(',');

  $.ajax({
    type: "get",
    url: __CIInterface['changyan'],
    data: {
      'topic_source_id': _param
    },
    dataType: "jsonp",
    success: function(changyanData) {
      $.ajax({
        type: "get",
        url: __CIInterface['17173'],
        data: {
          'sids': _param
        },
        dataType: "jsonp",
        success: function(data173) {
          data173 = data173.data;
          for (var id in changyanData.result) {
            changyanData.result[id].sum = Math.max(changyanData.result[id].sum, (data173[id] ? data173[id].totalCount : 0));
          }
          opts.callback(changyanData);
          o.opts.callback && o.opts.callback(changyanData);
        }
      });
    }
  });
};

//\u5c06\u6570\u636e\u7ed1\u5b9a\u5230\u9875\u9762\u5bf9\u8c61\u4e0a  \u4fee\u9970
CommentInfo.prototype.decorate = function(data) {
  if (!data) return;
  var o = this;
  o.opts.debug && console.log("CommentInfo.prototype.decorate");
  var comment = data.data || data.result;
  for (var i in comment) {
    var $commentCount = $('[data-topicId=' + i + ']').find(o.opts.commentCount);
    var count = comment[i].sum; //commentType == 2 ? ((comment[i].sum && (comment[i].sum != -1)) ? comment[i].sum : 0) : comment[i].totalCount;
    $commentCount.text(count);
  }
};

CommentInfo.prototype.init = function() {
  var o = this;
  o.opts.debug && console.log("CommentInfo.prototype.init");

  //\u83b7\u53d6\u4e3b\u9898ID\u5217\u8868
  var _topicIds = [];
  $(o.opts.commentItem).each(function(index, element) {

    var self = $(this);
    if (self.length <= 0) return;

    try {
      var topicId = self.attr("data-topicId");
      _topicIds.push(topicId);
    } catch (exception) {}
  });

  if (!_topicIds && _topicIds.length <= 0) return;

  o.getData({
    topicIds: _topicIds
  });

};



//$(function() {
//  var commentInfo = new CommentInfo();
//  commentInfo.init();
//
//});
