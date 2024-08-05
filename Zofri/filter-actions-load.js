vwo_$.getScript( "https://code.jquery.com/jquery-3.7.1.min.js" , function ( data, textStatus, jqxhr ) {
    /*
     Write your library dependent code here 
     i.e. If you included underscore:-
     _.select(campaigns, function(campaign) { return campaign === awesomeCampaign });
    */
   $('input[type="button"][name="order_by"]').click();
   console.log('load')
   $('input[type="button"][value="BEST_RATING"]').click();
});
   