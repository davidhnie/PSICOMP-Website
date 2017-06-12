(function () {
    $(function () {
        var homeNavHeight = $(".nav-main").height();
        $("[id!='']").each(function (i) {
            var $elem = $(this);
            var id = $elem.attr("id");
            var $targetNav = $(".nav-main").find("a[href='#" + id + "']");
            if ($targetNav.length) {
                var position = $elem.position();
                $elem.scrollspy({
                    min: position.top - homeNavHeight,
                    max: position.top - homeNavHeight + $elem.outerHeight(),
                    onEnter: function (element, position) {
                        $(".nav-main")
                            .find("a")
                            .removeClass("is-current");
                        $targetNav.addClass("is-current");
                    }
                });
            }
        });
    });
})();
