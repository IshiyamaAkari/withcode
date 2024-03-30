//ヘッダー//
document.addEventListener('DOMContentLoaded', function () {
  var parentMenus = document.querySelectorAll('.parent-menu');

  parentMenus.forEach(function(parentMenu) {
    var childrenMenu = parentMenu.querySelector('.children-menu');

    parentMenu.addEventListener('mouseover', function () {
      childrenMenu.classList.add('active');
    });

    parentMenu.addEventListener('mouseout', function () {
      childrenMenu.classList.remove('active');
    });
  });
});

//トップ-バナー1//
$('.banner-wrap__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __right">←</div>',
  nextArrow: '<div class="next-arrow __right">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

//タブ切り替え//
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});

//トップ-コース教材紹介//
$('.content__bottom__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __right">←</div>',
  nextArrow: '<div class="next-arrow __right">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
  ],
});

//トップ-制作実績//
$('.works-wrap__con__list').slick({
  autoplaySpeed: 1500,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __side">←</div>',
  nextArrow: '<div class="next-arrow __side">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  centerMode: true,
  centerPadding: "25%",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "15%",
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        centerPadding: "0%",
      },
    },
  ],
});

//トップ-メディア//
$('.media-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __side">←</div>',
  nextArrow: '<div class="next-arrow __side">→</div>',
  dots: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  centerMode: true,
  centerPadding: "0%",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//アコーディオンメニュー
$('.faq-wrap__con__list__item__ttl').on('click', function() {
  $('.faq-wrap__con__list__item__answer').slideUp(500);
  var findElm = $(this).next(".faq-wrap__con__list__item__answer");    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});

//コース-バナー1//
$('.course-banner-wrap__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __right">←</div>',
  nextArrow: '<div class="next-arrow __right">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        arrows:false,
      },
    },
  ],
});

//アコーディオンメニュー(スキル)
$('.skill-wrap__con__list__item__ttl').on('click', function() {
  $('.skill-wrap__con__list__item__detail').slideUp(500);
  var findElm = $(this).next(".skill-wrap__con__list__item__detail");    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});

//コース-制作実績//
$('.course-works-wrap__con__list').slick({
  autoplaySpeed: 1500,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __side">←</div>',
  nextArrow: '<div class="next-arrow __side">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  centerMode: true,
  centerPadding: "25%",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "23%",
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        centerPadding: "0%",
      },
    },
  ],
});

//コース-卒業生の声//
$('.course-voice-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __right">←</div>',
  nextArrow: '<div class="next-arrow __right">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        arrows:false,
      },
    },
  ],
});

//WithFree-導入事例//
$('.works-free-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow-free"></div>',
  nextArrow: '<div class="next-arrow-free"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

//WithFree-利用者の声//
$('.voice-free-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  centerMode: true,
  centerPadding: "28%",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerPadding: "17%",
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        centerPadding: "0%",
        centerMode: false,
      },
    }
  ],
});

// Withfree-高さ調整
function equalizeHeight(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;
  elements.forEach(element => {
    const height = element.clientHeight;
    maxHeight = Math.max(maxHeight, height);
  });
  elements.forEach(element => {
    // 480px以下の場合は高さを変更しない
    if (window.innerWidth > 480) {
      element.style.height = `${maxHeight}px`;
    }
  });
}

equalizeHeight('.flow-free-wrap__con__block');

//Withfree-スムーススクロール
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//ハンバーガーメニュー
// ハンバーガーメニュー
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 1025) {
    // PCサイズの場合の処理をここに記述
  } else { 
    $("header .drawer").click(function(){
      $('body').toggleClass('nav-open');
      $('header .header-wrap__nav').css('visibility', 'visible').toggleClass('slide-in');
    });
    $("header .header-wrap__nav__list__item a").click(function(event){
      // tabindex="-1" が設定されていない場合のみナビゲーションを閉じる
      if ($(this).attr('tabindex') !== '-1') {
        $('body').toggleClass('nav-open');
        $('header .header-wrap__nav').toggleClass('slide-in');
      }
    });
  }
}); 

// ハッシュリンクを持つaタグがクリックされたときの処理を修正
$('a:not(.tab a)[href^="#"]').on('click', function(e) {
  e.preventDefault(); // デフォルトの動作をキャンセル
  var target = $(this.hash);
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});


//ヘッダースクロール
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 200);
});

//表スクロール
window.onload = function() {
  new ScrollHint('.scroll', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white',
    suggestiveShadow:false,
    i18n: {
      scrollable: 'スクロールできます',
      }
  });
}
//コース-卒業生の声//
$('.taiken-voice-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow __side">←</div>',
  nextArrow: '<div class="next-arrow __side">→</div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        arrows:false,
      },
    },
  ],
});

//Withfree-スムーススクロール
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//アコーディオンメニュー
$('.faq-contents-wrap__list__con__item__ttl').on('click', function() {
  $('.faq-contents-wrap__list__con__item__answer').slideUp(500);
  var findElm = $(this).next(".faq-contents-wrap__list__con__item__answer");    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});