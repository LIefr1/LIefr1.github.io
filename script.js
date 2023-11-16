





$(document).ready(()=>{


    const H = $('.skill-text').height();
    $('.skill-text').prop('minHeight', H);

    $('.text-wrapper-2').on('click', ()=> {
        window.open(
            "https://www.flaticon.com"
        );

    });
    $('.github').on('click', ()=> {
        window.open(
            "https://github.com/LIefr1"
        );

    });
    $('.telegram').on('click', ()=> {
        navigator.clipboard.writeText('+79229174580');
        alert("Copied +79229174580");

    });
    $('.whatsapp').on('click', ()=> {
        navigator.clipboard.writeText('+79229174580');
        alert("Copied +79229174580");
    });
    $('.gmail').on('click', ()=> { 
        navigator.clipboard.writeText('scheremiskin2004@gmail.com');
        alert("Copied scheremiskin2004@gmail.com");
    });

    $('#hard-skills-text').on('click', ()=> {
        $(this).css('color', '#1EC1F4');
        $(".skill-text").text(`Я владению углубленными знаниями языков Python3, 
        PHP. Базовым владением JavaScript,Dart, C++. Также знаком с языками верстки HTML, CSS
        Знаком с фрейморком Flutter`);
        
    });
    $('#soft-skills-text').on('click', ()=> {
        $(this).css('color', '#1EC1F4');
        $(".skill-text").text(`Владею английским языком на B2-C1 уровн
        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww`);
    });
    $('#contact-me-wrapper').on('click', ()=> {
        $('.send-info-modal').show();
    });

    $('#previos-work-text').on('click', ()=> {
        $(this).css('color', '#1EC1F4');
        $(".skill-text").text(`Среднее образование на базе 9 клссов,
        Не законченное среднее профисиональное образование
        по специальности Информационные системы и програмирование 
        в коледже ВятГУ`);

    });

    

})