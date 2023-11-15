$(document).ready(()=>{

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
        $(".skill-text").text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean a mi quis augue fringilla faucibus. Donec posuere dapibus dignissim.
        Integer semper quam mauris. Mauris vehicula, neque id feugiat fermentum, tortor erat cursus ex,
        a volutpat massa arcu ut lectus. Mauris1`);
        
    });
    $('#soft-skills-text').on('click', ()=> {
        $(this).css('color', '#1EC1F4');
        $(".skill-text").text(`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta tristique finibus. Proin id imperdiet
        enim. Etiam sapien odio, faucibus eget nibh eget, euismod semper arcu. Integer pulvinar ante non lorem
        gravida`);

    });
    $('#previos-work-text').on('click', ()=> {
        $(this).css('color', '#1EC1F4');
        $(".skill-text").text("Prev work");

    });

    

})