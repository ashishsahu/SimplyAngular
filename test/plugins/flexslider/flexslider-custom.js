// JavaScript Document

/*Basic Slider*/
					
$(window).load(function() {
    $('#news-slider').flexslider({
      animation: 'slide',
      controlsContainer: '.flex-container'
    });
  
    $('#discover-slider').flexslider({
      animation: 'slide',
      controlsContainer: '.flex-container'
    });

  $('#testimonial-slider').flexslider({
      animation: 'slide',
      controlsContainer: '.flex-container',
      itemWidth: 580,
      minItems: 2,
      maxItems: 2
  });

  $('#featholi-slider').flexslider({
      animation: 'slide',
      controlsContainer: '.flex-container',
      itemWidth: 580,
      minItems: 3,
      maxItems: 3
  });

});



/*carousel slider*/

(function() {
      // store the slider in a local variable
      var $window = $(window),
          flexslider;

      // tiny helper function to add breakpoints
      function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
               (window.innerWidth < 900) ? 3 : 4;
      }

      $(function() {
        SyntaxHighlighter.all();
      });

      $window.load(function() {
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 400,
          animationLoop: false,
          itemWidth: 245,
          itemMargin: 15,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
      });

      // check grid size on resize event
      $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      });
    }());
	
		
	
	
