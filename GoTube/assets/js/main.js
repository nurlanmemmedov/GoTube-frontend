$(document).ready(function () {
    $(".submenu a").click((e) => {
        e.preventDefault();
        $(".submenu ul").toggleClass("active-submenu");
        if ($(".submenu ul").hasClass("active-submenu")) {
            $(".arrow-down").removeClass("arrow-active");
            $(".arrow-down").addClass("arrow-deactive");
            $(".arrow-up").removeClass("arrow-deactive");
            $(".arrow-up").addClass("arrow-active");
        }
        else if (!$(".submenu ul").hasClass("active-submenu")) {
            $(".arrow-down").removeClass("arrow-deactive");
            $(".arrow-down").addClass("arrow-active");
            $(".arrow-up").removeClass("arrow-active");
            $(".arrow-up").addClass("arrow-deactive");


        }
    })

    $(".menu-icon").click((e)=>{
        $(".sidebar").toggleClass("active-sidebar");
    })

    $(".search-icon").click((e)=>{
        $(".search input").focus();
    })

    $(".search input").focus((e)=>{
        $(".search-history").css("display","block");
            $(".search-history").animate({
                top: "0%",
                opacity: 1,
            },300);
    });



    $(".search input").blur((e)=>{
        $(".search-history").css("display", "none");
        $(".search-history").css("opacity", "0");
        $(".search-history").animate({
            top: "35px",
        },300);
    });
})