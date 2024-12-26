$(document).ready(function () {
    $.ajax({
        url: '/Api/infoHits/',
        type: 'post',
        dataType: 'json',
        data: {
            id: $('#id').val(),
            classid: $('#classid').val(),
            noncestr: $('#noncestr').val(),
            sign: $('#sign').val(),
        },
        success: function () {
        },
        error: function () {
        }
    });
});