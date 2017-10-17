
/****************************************
			NAVBAR TOGGLE BUTTON
*****************************************/

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});

$(document).ready(function(){
    $(".desktop").sticky({topSpacing:0});
  });



/****************************************
				GOOGLE MAP
*****************************************/

      function initMap() {
        var uluru = {lat: 51.507698, lng: -0.124884};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 


/****************************************
            MIXITUP PORTFOLIO 
*****************************************/

mixitup('#mix-wrapper', {
  load: {
  	sort: 'order:asc'
  },
	animation: {
    effects: 'fade scale',
    duration: 700
  },
  selectors: {
    target: '.mix-target'
  }
});






