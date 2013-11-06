(function($) {
  function montalize() {
    var el = $(this);
    var orig_bg = el.css('background');
    el.css('background', el.css('color'));
    el.one('click', function() {
      el.css('background', orig_bg);
    });
  }

  $.fn.monta = function() {
    return this.each(montalize);
  }
}(jQuery));
