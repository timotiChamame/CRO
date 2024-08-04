vwo_$.getScript( "https://code.jquery.com/jquery-3.7.1.min.js" , function ( data, textStatus, jqxhr ) {
    /*
     Write your library dependent code here 
     i.e. If you included underscore:-
     _.select(campaigns, function(campaign) { return campaign === awesomeCampaign });
    */
   function openFilter () {
   console.log('open')
   $('.card button[name="order_by"]').click();
   setTimeout(pressFilter, 1000);
   }
   function pressFilter () {
   console.log('press')
   $('button[value="BEST_RATING"]').click()
   }
   setTimeout(openFilter, 1000);
   });