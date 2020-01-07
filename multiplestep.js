$(document).ready(function(){
    $('.hiddenStep').css('display','none')
    $('a').click(function(event){
        event.preventDefault();
        var parent = $(this).closest('.step');
        var mainContent = $('.content>.step')
        var index = mainContent.index(parent)+1;
        parent.css('display','none');
        mainContent.eq(index).css('display','block')
    })
})