$(document).ready(function(){

    init();

    var $body    = $('html, body'),
        content  = $('#main').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 500,
                render: function (url, $container) {
                    $('.article').addClass('animate_out');
                }
            },
            onProgress : {
                duration: 0, // Duration of the animations, if any.
                render: function (url, $container) {
                    $body.css('cursor', 'wait');
                    $body.find('a').css('cursor', 'wait');
                }
            },
            onEnd : {
                duration: 500, // Duration of the animations, if any.
                render: function (url, $container, $content) {
                    $body.css({
                        scrollTop: 0
                    });
                    $('body').toggleClass('inverse');
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');
                    $container.html($content);
                    
                    init();
                }
            },
        }).data('smoothState');
});

function init() {
    $('.article_list_item').click(function(){
        $(this).addClass('animate_out');
    });

    $('.article_list_item').each(function(i){
        $(this).velocity(
            { top: 0, opacity: 1 }, 
            { 
                duration: 200,
                easing: 'ease-out',
                delay: 200+100*i
            }
        );
    });
}