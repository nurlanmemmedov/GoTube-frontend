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
})