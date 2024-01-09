/*ローディングページアニメーション用*/
$(window).on('load',function (){
  $("#splash").delay(1500).fadeOut('slow');

  $("#splash_logo").delay(1200).fadeOut('slow');

});

/*しまい込みボタン用*/
$(".openbtn1").click(function (){
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});
$("#g-nav a").click(function(){
  $(".openbtn1").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});

/*スクロールアニメーション*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});





let shop =[
  {name:"minato coffee",picture:"img/bg_menu_mochasoft(460-300).jpg",link:"sub1.html"},
  {name:"Merengue",picture:"img/IMG_0437(460-300).jpg",link:"sub2.html"},
  {name:"サモアール",picture: "img/sco-n(460-300).JPG",link:"sub3.html"},
  {name:"文明堂茶館ル・カフェ",picture:"img/kasutera(460-300).JPG",link:"sub4.html"},
]

/*RECOMMENDATIONの写真一覧*/
let pictures=document.querySelector('#pictures');
let outputHtml = '<ul>';
let i=0;
while(i<shop.length){
  outputHtml += `<li style="list-style: none;"><a href="${shop[i].link}"><img src="${shop[i].picture}" alt=""></a> <h4><a href="${shop[i].link}">${shop[i].name}</a></h4></li>`;
  i++;
}
outputHtml+='</ul>';
pictures.innerHTML = outputHtml;


/*footer用*/
let shopList=document.querySelector('#shopList');
let outputHtml2 = '<ul>';
let i2 =0;
while (i2<shop.length){
  outputHtml2 += `<li><a href="${shop[i2].link}"><p>${shop[i2].name}</p></a></li>`;
  i2++;
}
outputHtml2+='</ul>';
shopList.innerHTML = outputHtml2;




