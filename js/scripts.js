$(document).ready(function(){

    init();

    function init() {
        $('.article_list_item').click(function(){
            console.log('click');
            $(this).addClass('animate_out');
        });
    }
     

    var $body    = $('html, body'),
        content  = $('#main').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 500,
                render: function (url, $container) {
                    $('.article').addClass('animate_out');
                    $body.animate({
                        scrollTop: 0
                    });
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
                    $('body').toggleClass('inverse');
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');
                    $container.html($content);
                    init();
                }
            },
        }).data('smoothState');
})