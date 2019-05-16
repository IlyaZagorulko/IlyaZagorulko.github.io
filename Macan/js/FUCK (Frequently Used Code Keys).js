// JavaScript Document

// TABS
// 	HTML EXAMPLE
// 			<ul id="menu-tabs" class="tabs">
// 				<li class="t1"><a href="#"></a></li>
// 				<li class="t2"><a href="#"></a></li>
// 				<li class="t3"><a href="#"></a></li>
// 			</ul>
// 			<div class="tab-content">
// 				<div class="t1">
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 				</div>
// 				<div class="t2">
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 				</div>
// 				<div class="t3">
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 					<div class="block">grey \ blue</div>
// 				</div>
// 			</div>

$('#menu-tabs li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.' + thisClass).fadeIn(500);
	$('#menu-tabs li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('li.t1').click();


// Ищем в родителе что-то на клик (он же аккордеон в данном случае)

$('.avatar ul li a.second').click(
	function()
	{
		ext = $(this).parent();
		ext.find('.wrap').slideToggle('fast', function() {
		// Animation complete.
		});
		return false;
	}
);

// Анимация чего-либо
$('#sidebar ul li').click(function(){
	$('#sidebar ul li.active a p').animate({
		color: 'ivory2',
		}, 1000, function() {
			// Сюда можно загнать следующий этап анимации, точно так же, создавая что-то вроде ступенчатой анимации или цикла
	});
});


// Запуск какой-либо лабуды спустя некое время от загрузки страницы

setTimeout(function(){
	$('.visual .play p').animate({
		//например
		opacity: 1,
		marginTop: 0,
	}, 1000, function(){});
}, 500 );
// последнее значение "500" - собсно, время таймаута


// Удобный ховер
$(".coll").hover(
	function () {
		//код, который будет исполняться, когда наведено
	},
	function () {
		//код, который будет исполняться, когда ушло
	}
);

// Параллакс

$(window).bind('scroll',function(e){
	parallaxScroll();
	});
	function parallaxScroll(){
	var scrolledY = $(window).scrollTop();
	$('.the stuff we need to parallax').css('top','+'+(($(window).scrollTop()*0.5))+'px');
}


// Выполняется код, если есть некий класс на искомом объекте
$("#header .city").click(function() {
		if ($("#header .login-box").hasClass('active')) { // условие выполнено, идем дальше
			$(this).removeClass('active');
		}
		else {
			// условие не выполнено - отрабвтывается код, что здесь, либо вообще ничего, если здесь пусто
		}
});

// якорь т.е. по клику проскролливает страницу до выбраного элемента
$('.arrow .top').click(function () {
	$('html, body').animate({
		scrollTop: $(".header ").offset().top
	}, 2000);
});


// отступ на высоту вышестоящего блока

var marginHeight = $('.top-block').outerHeight();
$('.bottom-block').css('margin-top', marginHeight );
