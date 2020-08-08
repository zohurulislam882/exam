(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$(".menu-filter li").on('click', function(){

            var selector = $(this).attr("data-filter");

            $(".menu-filter li").removeClass('active');
            $(this).addClass('active');

            $(".project-list").isotope({
                filter: selector,
                margin: 0,
            });
        });

        $(".project-list").isotope();
    });


}(jQuery));	