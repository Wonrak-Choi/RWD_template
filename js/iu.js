// a태그 이벤트 제거
$('a[href="#"]').on('click',function(e){
    e.preventDefault();
});

// 모바일 햄버거 토글
$('.menu_toggle_btn').click(function(){
    $('.gnb').stop().toggle();
})
// 박스슬라이더 옵션
$('.slide_gallery').bxSlider({
    mode: 'horizontal',
    pager: true,
    slideWidth: 1920
});


// 메뉴 클릭 시 스크롤 이벤트 처리
$('nav a').click(function(e) {
    e.preventDefault(); // 기본 동작(링크 이동) 방지

    var target = $(this.hash);
    $('html, body').animate({
    scrollTop: target.offset().top
    }, 800); // 스크롤 애니메이션 지속시간 설정
});

// $(window).on('resize', function() {
//     var windowWidth = $(window).width();
//     var prev = $('.bx-prev');

//     if (windowWidth >= 767) {
//       prev.removeClass('bx-prev').addClass('none');
//     } else {
//       prev.removeClass('none').addClass('bx-prev');
//     }
//   });

