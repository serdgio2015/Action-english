$(document).ready(function() {
	
	
    positionCenter($('.windowThanks'));	
    positionCenter($('.windowTeachers'));
    
    	
    $(window).scroll(function() {
    	if($(window).scrollTop() > 200) {
			$('.topWindow').fadeIn();
		}
		else {
			$('.topWindow').fadeOut();
		}
    })
    $('.topWindow').click(function() {
    	$('body,html').animate({scrollTop: 0},400);
    })
    
    $('form').submit(function() {
		$('.windowThanks').show();
	})
	
	$('form input').focus(function() {
		$(this).attr('placeholder','');
	})
	
	$('.close').click(function() {
		$('.windowThanks').hide();
	})
	
	$('.close2').click(function() {
		$('.windowTeachers').hide();
	})
	
	$('.block-8 img').click(function() {
		var cl = $(this).attr('src');
		var name = $(this).attr('title');
		$('.windowTeachers #teacher').attr('src',cl);
		$('.windowTeachers h2').html(name);
		$('.windowTeachers p').html('<b>Образование:</b><br/>- Пед. училище;<br/>- Кандидат наук высшей степени;<br/>- Бакалавр лингвистики (Оксфордский университет);<br/><br/><b>Опыт работы:</b><br/>- 10 лет в средней школе;<br/>- 20 лет в Оксфорде;<br/>- 30 лет репетиторства;<br/>');
		$('.windowTeachers').fadeIn();
	})
    
    $(window).scroll(function(e){
  	parallax();
	});
	function parallax(){
  	var scrolled = $(window).scrollTop();
  	$('.bg').css('top',-(scrolled*0.2)+'px');
	}	
	
    function positionCenter(elem) { // Функция, которая позиционирует всплывающее окно по центру
        elem.css({
            marginTop: '-' + elem.height() / 2 + 'px',
			marginLeft: '-' + elem.width() / 2 + 'px'
        });
    }
    
    $('.block-4 span').click(function() {
    	$(this).next('p').slideToggle(100);
    })
    
    $('.block-4 p').click(function() {
    	$(this).hide();
    })
    
    
});