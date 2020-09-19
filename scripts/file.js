$(document).ready(function () {
   let info = $('.dont-show');
   let infoSum =$('.toggle-element');
   infoSum.hover(function(){
        info.removeClass('dont-show');
   });
   
});