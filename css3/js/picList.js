$('.item').click(function (e) {
    $(this).parents().find('.wrapper').addClass('wrapper-active');
    $(this).addClass('active');
});
$('.item > .inner > .head > .close').click(function (e) {
    // 按钮本身并无处理事件函数，则传播到父级去处理
    e.stopPropagation(); // 停止时间冒泡
    $(this).parents().find('.item').removeClass('active')
                                        .end().find('.wrapper-active').removeClass('wrapper-active');
});