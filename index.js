$(function () {
  $('a').tooltipster({
    content: '<div id="tooltip-panel">Hello</div>',
    contentAsHTML: true,
    arrow: false,
    functionPosition: function(instance, helper, position){
      console.log('### position', position);
      console.log('### window', $(window).width());

      position.coord.left = ($(window).width() - position.size.width)/2;
      return position;
    }
  });
});
