// 已运行多长时间
$(function () {
  var s1 = '2020-06-14';
  s1 = new Date(s1.replace(/-/g, "/"));
  s2 = new Date();
  var days = s2.getTime() - s1.getTime();
  var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = number_of_days;
});


$(window).on("scroll", function () {
if ($(window).scrollTop() >=1) {
  $('.header').addClass('topheader')
} else {
  $('.header').removeClass('topheader')
}
});

// 头部特效
VANTA.HALO({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
});
