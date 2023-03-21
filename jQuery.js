
jQuery(document).ready(function() {
    jQuery('.box1').hover(function() {
      jQuery(this).text('');
      jQuery(this).siblings('.barra').fadeIn();
    }, function() {
      jQuery(this).siblings('.barra').fadeOut();
      jQuery(this).text('CSS');
    });
  });