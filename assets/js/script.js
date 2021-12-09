$(document).ready(function(){
  //kv
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots : true,
    responsive: [
      
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        
        }
        
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots:false
        }  
      }
   
    ]
  });

  //promo
  $('.promotion-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    //[a , b,, c]
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        
        }},
      
        
        {breakpoint: 820,
        settings: {
          slidesToShow: 2
        }},
        
        {breakpoint: 768,
        settings: 'unslick',
        //768일때 슬릭을 해제하겠다
        //1. 768이하가 될때, 슬라이드가 죽었습니다.
        //2. 슬라이드가 죽어서, css도 같이 죽었어요 -> 옷을 입혀줬어요
        //3. 화면을 다시 키워봤더니, 슬라이드가 안들어와요 ->화면의 크기가 바뀌면 슬라이드를 다시 붙어주는 작업
    }
   
    ]
  });
  
  //product
  $('.product-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4
        
        }},
      
        
        {breakpoint: 820,
        settings: {
          slidesToShow: 3
        }},
        
        {breakpoint: 768,
        settings: {
          slidesToShow: 2
        }},
        {breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows:false,
            variableWidth: true
          }    
      }
   
    ]
  });

  // $('.select-label').click(function(){
  //   console.log('---클릭');
  // });

  // $('.select-list').hide();

  $('.select-label').on('click',function(){
    console.log('000클릭');
    //회색박스 영역이 자연스럽게 올라오고 사라지고
    $('.select-list').slideToggle('slow');
  });

  //햄버거버튼이 클릭이 되면 -> 메뉴가 나오고
  //햄버거버튼이 또클릭이 되면 -> 메뉴가 사라지고
  //메뉴가 나타나고 사라지는 작업 -> css 에 active클래스로 미리해뒀다
  // $('.toggle-menu').click(function(){
  //   console.log('토글메뉴클릭');
  //   $('.mob-gnb').toggleClass('active');
  // });
  $(".toggle-menu").click(function(){
    $('.mob-gnb').toggleClass("active");
    $(this).toggleClass("active");
  });


  //메뉴가 클릭이 되면 그 href값으로 스크롤이 이동이 됩니다.
  $('.gnb .dep1 > a').click(function(e){
    //조건문
    // if (참){
    //   //참 값 => false(거짓: false, 0, 빈값, null, undefined))를 제외한 모든 값
    // }
    if(this.hash) {
      e.preventDefault();
      console.log('e' , e);
       
      var targetPos = $($(this).attr('href')).offset().top - 80;
      $('body, html').animate({'scrollTop' : targetPos});


      console.log('this.hash 값이 있어')
    } else { //거짓일때만 해당되는 문자
      console.log('빈값이야');
      // event.preventDefault();
      // // 태그가 가지고있는 기본 기능을 막아주는 역할
    }
    $('.mob-gnb').toggleClass("active");
    $('.toggle-menu').toggleClass("active");

    console.log('클릭');
    console.log('this',this);
    //$(this).attr('href');
    //this는 나 자신
    
    console.log('attr', $(this).attr('href'));
    //  (위의 코드)  현재 선택된 아이에서(this), 속성을 가져오는데, 'href'라는 속성의 값을 가져와줘
    // console.log('attr', $(this).attr('id'));
    //  (위의 코드)  현재 선택된 아이에서(this), 속성을 가져오는데, 'id'라는 속성의 값을 가져와줘


    // $('#magazine').offset().top
    //#magazine 의 좌표값중에 top값을 가져와줘



    // console.log('this offset', $($(this).attr('href')).offset().top);
    // console.log('magazine offset top = ', $('#magazine').offset().top)
    // console.log('story offset top = ', $('#story').offset().top)
    // console.log('promotion offset top = ', $('#promotion').offset().top)
    // console.log('product offset top = ', $('#product').offset().top)
    

    
    //제외시킬수 있는 방법
    //1. href의 값에서 #이 들어간 아이들만 좌표값을 구하게끔
    // var targetPos = $($(this).attr('href')).offset().top - 80;
    // //구해진 좌표값을 변수 targetPos 에 대입
    // // $(this).attr('href') -> $(this.hash)
    // console.log('hash = ', this.hash, 'attr = ', $(this).attr('href'));

    // $('body, html').animate({'scrollTop' : targetPos});
    //문서전체의 스크롤을 이동~
    // $('.mob-gnb').toggleClass("active");
    // $('.toggle-menu').toggleClass("active");
  });

  $(window).resize(function() {
    //창크기 변화 감지
    var windowWidth = $(window).width();
    
    // console.log('windowWidth = ' + windowWidth + '입니다.');
    //문자열 잇기 : +
    // '문자열' + 변수 + '문자열

    // //Q. 프로모션의 이미지영역 높이를 구해주세요
    // var pmSlideHeight =  $('.promotion .promotion-list .img-area').height();
    // console.log('pmSlideHeight = ' + pmSlideHeight);
    
    // //화살표의 선택
    // $('.promotion .slider .slick-arrow').css({'top' : pmSlideHeight / 2 }); //다중값일때 ({}); 이런걸쓴다

    $('.promotion-list').slick('resize');
 });

  $('.promotion-list').on('setPosition', function(){
    var pmSlideHeight =  $('.promotion .promotion-list .img-area').height();
    $('.promotion .slider .slick-arrow').css({'top': pmSlideHeight / 2 , 'backgroundcolor' : 'red'});
  });

  $('.product-list').on('setPosition', function(){
    var pdSlideHeight =  $('.product .product-list .img-area').height();
    $('.product .slider .slick-arrow').css({'top': pdSlideHeight / 2 });
  });

});
