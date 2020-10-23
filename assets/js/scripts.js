// popovers initialization - on hover
$('[data-toggle="popover-hover"]').popover({
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: function () { return '<img src="' + $(this).data('img') + '" />'; }
  });
  
  // popovers initialization - on click
  $('[data-toggle="popover-click"]').popover({
    html: true,
    trigger: 'click',
    placement: 'bottom',
    content: function () { return '<img src="' + $(this).data('img') + '" />'; }
  });


  var zoom_percent = "100";
  function zoom(zoom_percent){
      $(".mfp-figure figure").click(function(){
          switch(zoom_percent){
              case "100":
                  zoom_percent = "150";
                  break;
              case "120":
                  zoom_percent = "150";
                  break;
              case "150":
                  zoom_percent = "200";
                  $(".mfp-figure figure").css("cursor", "zoom-out");
                  break;
              case "200":
                  zoom_percent = "100";
                  $(".mfp-figure figure").css("cursor", "zoom-in");
                  break;
          }
          $(this).css("zoom", zoom_percent+"%");
      });
  }

  $(document).ready(function() {
    $('.popup-link').magnificPopup({
      type:'image',
      callbacks: {
        open: function() {
          $(".mfp-figure figure").css("cursor", "zoom-in");
          zoom(zoom_percent);
        },
        close: function() {
          // Will fire when popup is closed
        }
        // e.t.c.
      }
    });
  });