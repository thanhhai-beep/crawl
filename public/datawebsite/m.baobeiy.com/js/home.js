$(function(){
  new Swiper('.hdpppt', {
    autoplay: true,//��ѡѡ��Զ�����
  
    loop: true,
    observer: true,  //������̬����������swiper��slide
    observeParents: true,  //���Swiper ����/��Ԫ��
    pagination: {
      el: '.swiper-pagination',
    },
  })

  new Swiper('.forgame', {
    autoplay: false,//��ѡѡ��Զ�����
    loop: false,
    observer: true,  //������̬����������swiper��slide
    observeParents: true,  //���Swiper ����/��Ԫ��
    pagination: {
      el: '.forgame-pagination',
    },
  })
  indexLoading()
  
  $('.tabcwc span').click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".u-loadmore-btn").attr('data-rid',$(this).attr('data-rid'))
    $(".u-loadmore-btn").attr('data-p',Number($(this).attr('data-p')))
    $(this).parents('.bgwhite').find('.update').eq($(this).index()).show().siblings('.update').hide()
  })
})

function indexLoading(){
  let isLoading = false;
  $(".u-loadmore-btn").click(function(){
    if(!isLoading){
      var rid = $(this).attr('data-rid')
      var p = $(this).attr('data-p')
      $(".u-loadmore-btn").html("���ݼ�����...")
      isLoading = true;
      p++;

      $.ajax({
        type: "Get",
        url: "/sajax.asp",
        data: 'action=4&t=0&s=2&num=10&o=UpdateTime desc&p='+p+'&rid='+rid,			
        success:(msg) => {
          let objJson = eval('(' + msg + ')');					
          if (objJson.PageCount >= p) {						
            let html = '';
            for (let i = 0; i < objJson.ResName.length; i++) {
              let time = decodeURI(objJson.UpdateTime[i].split(' ')[0].replace(/\//g,'-'))
              let myDate=new Date()
              if(time == myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate()){
                time = '<font color="red">'+decodeURI(objJson.UpdateTime[i].split(' ')[0])+'</font>'
              }
              html += `
                <li>
                <i></i>
                <a href="${objJson.DownURL[i]}" class="g-a-left">
                  <img src="${objJson.SmallImg[i]}" alt="${decodeURI(objJson.ResName[i])}${decodeURI(objJson.ResVer[i])}">
                  <p>
                    <strong>${decodeURI(objJson.ResName[i])}</strong>
                    <b>
                      <span class="bor-right-one">${objJson.CatalogName[i]}</span><span class="bor-right-two">${objJson.ResSize[i]}</span><span
                        class="bor-right-tree"> ${objJson.ResLanguage[i]}</span>
                    </b>
                    <b>
                      <span class="vis bor-right-one">${decodeURI(objJson.ResVer[i])}</span><span class="time">
                          ${time}
                      </span>
                    </b>
                  </p>
                </a>
                <a href="{url}" class="g-a-right">����</a>
              </li>
              `
            };
            if(rid == 2){
              $('.upload').eq(0).append(html);
              $('.tabcwc span').eq(0).attr('data-p',Number(p))
            }else{
              $('.upload').eq(1).append(html);
              $('.tabcwc span').eq(1).attr('data-p',Number(p))
            }

            $(this).attr('data-p',Number(p))
            $(".u-loadmore-btn").html("����鿴����")
            isLoading = false;
          } else {
            $(".u-loadmore-btn").html("��Ҳ���е��ߵ�")
          }
        }
      });
    }
  })
}