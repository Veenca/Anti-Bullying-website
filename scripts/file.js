

$(document).ready(function () {

   let infoSum =$('.main-cicatrici');
   infoSum.siblings('p').hide();
   let bg=$('li.toggle-element');
   let hstart=bg.css("height");
 

   infoSum.click(function(){
      if(!$(this).siblings('p').hasClass('xx')){
        $(this).siblings('p').fadeIn(500);
      bg.css("height","fit-content");
      
       $(this).css("text-decoration","none");
       $(this).siblings('p').addClass('xx');
      }else{ 
       
       $(this).css("text-decoration","underline");
       $(this).siblings('p').removeClass('xx');
       $(this).siblings('p').fadeOut(200);
        bg.animate({
           "heigth":hstart
        },{
           duration: 250
        });
        
      }
   
     });
 
});

 