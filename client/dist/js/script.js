jQuery(document).ready(function() {
  jQuery('section, footer').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated fadeIn delay-1',
  offset: 100
});
});