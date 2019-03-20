$(function () {
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        titleTemplate: '<span class="number">#index#</span>',
        labels: {
            current: "",
            previous: '<i class="fas fa-angle-left"></i>',
            next: '<i class="fas fa-angle-right"></i>',
            finish: '<i class="fas fa-angle-right"></i>'
        },
        onStepChanging: function (event, currentIndex, newIndex) {
//            if (newIndex >= 1) {
//                $('.steps ul li:first-child a').addClass('active');
////                $('.steps ul li:first-child a .step-arrow').remove();
//            }
////            else {
////            }
            if (newIndex === 1) {
                $('.steps ul li:nth-child(2)').addClass('active');
            } else {
//                $('.steps ul li:nth-child(2) .step-arrow').remove();
            }
            if (newIndex === 2) {
                $('.steps ul li:nth-child(3)').addClass('active');
            } else {
//                $('.steps ul li:nth-child(3) .step-arrow').remove();
            }
            if (newIndex === 3) {
                $('.steps ul li:nth-child(4)').addClass('active');
            } else {
//                $('.steps ul li:nth-child(4) .step-arrow').remove();
            }
            return true;
        },
        onFinished: function (event, currentIndex) {
            $('.wrapper').append('<div class="finish"><h1>Hi!</h1></div>');
            return true;
        }
    });
    
    $('.actions ul li a').append('<i class="zmdi zmdi-chevron-left"></i>');
    $('.steps ul li:first-child').addClass('active');
    
    
    $('.toggle .icon').on('click',function(){
        $('.header nav').slideToggle();
    });
    
    
})
