$(document).ready(function() {
    ajustesControlNav();
    startSlider();
    subMenusMobile();
    changeArtist();
    changeEmployer();
    scrollMenu();
    fechaMenu();
    validaForm();
    envioEmail();

    // validacao do numero de telefone
    $("#telefone").mask("(99) 9999-9999?9");
    // validacao do numero de telefone
});


$(window).scroll(function() {
    menuFlutuante();

    var screenSize = $(window).width();
    if (screenSize >= 800) {
        ballAnimation();
        animateWhats();
    }
});

// Função para inicial o slider da section de vantagens
function startSlider() {
    $(".owl-carousel").owlCarousel({
        autoPlay: 4000,
        singleItem: true,
        items: 1,
        dots: true,
        margin: 100
    });
}
// End Função para inicial o slider da section de vantagens


// Menu mobile
function ajustesControlNav() {
    $(".control-nav").click(function(event) {
        $(this).toggleClass('is-control-nav');
        $(".line").toggleClass('is-clicked');
        $(".options-menu-mobile").slideToggle("slow");
    });
}

function fechaMenu() {
    var closeAba = function() {
        $(".control-nav").click();
    }
    $(".sub-menu-mobile li a, .whats-is-opt").click(closeAba);
}
// Fim Menu mobile

// Abrindo submenus do menu mobile e Desktop
function subMenusMobile() {
    $(".sub-active").each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            // Abrindo o submenu mobile
            $(this).children(".sub-menu-mobile").slideToggle("slow");
            // Abrindo o submenu desktop
            $(this).children(".sub-menu-desk").slideToggle("slow");

        })
    });
}
// Fim Abrindo submenus do menu mobile e Desktop

// Construindo o menu Menu Flutuante
function menuFlutuante() {
    var pTop = $(window).scrollTop();
    if (pTop >= 100) {
        $(".menu-desk").addClass('menu-flutuante');
        $("#cadastrarTop").attr("src", "assets/img/checkTopFlutuante.png");
    } else {
        $(".menu-desk").removeClass('menu-flutuante');
        $("#cadastrarTop").attr("src", "assets/img/checkTop.png");
    }
}
// Fim Construindo o menu Menu Flutuante

// Função para animar os globos 
function ballAnimation() {
    var pTop = $(window).scrollTop();
    if (pTop >= 1300) {
        $('.ball').addClass('animated bounceInUp');
    } else {
        $('.ball').removeClass('animated bounceInUp');
    }
}
// End Função para animar os globos

// Animando a section de whats-is / o que é
function animateWhats() {
    var pTop = $(window).scrollTop();

    if (pTop >= 500) {
        $(".whats-is h2").addClass("animated bounceInLeft");
        $(".whats-is p").addClass("animated bounceInRight");
        $(".choice").addClass("animated bounceInRight");
    } else {
        $(".whats-is h2").removeClass("animated bounceInLeft");
        $(".whats-is p").removeClass("animated bounceInRight");
        $(".choice").removeClass("animated bounceInRight");
    }
}
// Animando a section de whats-is / o que é

// Mudando site para artista
function changeArtist() {
    $(".souArtista").each(function() {
        $(this).click(function(event) {
            event.preventDefault();

            $(".how-works").css('display', 'none');
            $(".how-works-artist").css('display', 'block');
            $(".third-section").addClass("third-section-artist");
            $(".comprador").css('display', 'none');
            $(".artista").css('display', 'block');
            $("#radio-1").prop("checked", true);
            $("#nomeArtisticoBanda").css("display", "block");
        });
    });

    $("#radio-1").click(function() {
        $("#nomeArtisticoBanda").css("display", "block");

    });
}
// Mudando site para artista

// Mudando site para Contratador
function changeEmployer() {
    $(".queroContratar").each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            $(".how-works").css('display', 'block');
            $(".how-works-artist").css('display', 'none');
            $(".third-section").removeClass("third-section-artist");
            $(".comprador").css('display', 'block');
            $(".artista").css('display', 'none');
            $("#radio-2").prop("checked", true);
            $("#nomeArtisticoBanda").css("display", "none");
        });
    });

    $("#radio-2").click(function() {
        $("#nomeArtisticoBanda").css("display", "none");
    });

}
// Mudando site para Contratador

// Scroll do menu
function scrollMenu() {
    // Section de o que é
    $('.whats-is-opt').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#index-1').offset().top
        }, 1000);
    });
    // Section de o que é

    $('.comoFun .souArtista').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#index-2').offset().top
        }, 1000);
    });

    $('.comoFun .queroContratar').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#index-3').offset().top
        }, 1000);
    });

    $('.vant .souArtista').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#advantege-sec').offset().top
        }, 1000);
        changeArtist();
    });

    $('.vant .queroContratar').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#advantege-sec').offset().top
        }, 1000);
        changeEmployer();
    });

    $('.logo').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('.first-section').offset().top
        }, 1000);
        changeEmployer();
    });

    $('.im-artist .souArtista').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#index-2').offset().top
        }, 1000);
        changeEmployer();
    });

    $('.want-hire .queroContratar').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#index-3').offset().top
        }, 1000);
        changeEmployer();
    });

    $('.duvidasCase, #cadastroBtn').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('.fomulario').offset().top
        }, 1000);
    });
}
// End Scroll do menu

// Validação de formulario de envio
function validaForm() {
    $("#formContact").validate({
        onkeyup: false,
        rules: {
            cadastro: "required",
            name: "required",
            telefone: "required",
            nomeArtisticoBanda: "required",
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            name: "Por favor, digite seu nome",
            telefone: "Por favor, digite seu telefone",
            nomeArtisticoBanda: "Por favor, digite seu nome artistico ou de sua banda",
            email: {
                required: "Por favor, digite seu e-mail",
                email: "E-mail inválido"
            },
        }
    });
}
// Fim Validação de formulario de envio

// Enviando informações do e-mail
function envioEmail() {
    $("#formContact").on("submit", function(e) {
        e.preventDefault();
        if (!$("#formContact").valid()) {
            return false;
        }
        

        var check = $(".check:checked").val();
        var name = $("#name").val();
        var telefone = $("#telefone").val();
        var email = $("#email").val();
        var nomeArtisticoBanda = $("#nomeArtisticoBanda").val();

        $.ajax({
            url: "includes/processForm.php",
            type: "post",
            dataType: "json",
            data: {
                name: name,
                email: email,
                check:check,
                telefone:telefone,
                nomeArtisticoBanda: nomeArtisticoBanda,
            },
            beforeSend: function(){
                $(".modal-load").fadeIn();
            },
            success: function(data) {
                if (data[0] == "ok") {
                    location.href = "sucess.php";
                    $(".modal-load").fadeOut();
                } else {
                    $(".rect").css("visibility", "hidden");
                    $(".spinner p").html("Ocorreu um erro ao enviar o contato. Tente novamente mais tarde.", "Dados smtp incorretos");
                    setTimeout(function() {
                        $(".modal-load").fadeOut();
                    }, 3000);
                }
            },
            error: function () {
                $(".rect").css("visibility", "hidden");
                $(".spinner p").html("Ocorreu um erro ao enviar o contato. Tente novamente mais tarde.", "Dados smtp incorretos");
                setTimeout(function() {
                    $(".modal-load").fadeOut();
                }, 3000);
             }
        });

        
    });
}
// Fim Enviando informações do e-mail