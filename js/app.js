$.fn.filterByData = function(prop, val) {
  return this.filter(
    function() { return $(this).data(prop)==val; }
  );
};

$(document).ready(function() {
  var radios  = $('.table-view.radio');
  var saveBtn = $('#save');

  var options = $.url().param();

  radios.each(function (index) {
    var radio = $(this);
    var buttons = radio.find('li.table-view-cell > a');

    if (options[radio.data('name')]) {
      var button = buttons.filterByData('value', options[radio.data('name')]);
      button.addClass('active');
    }

    buttons.click(function() {
      buttons.removeClass('active');
      $(this).addClass('active');
    });
  });

  saveBtn.click(function() {
    var object = {};

    radios.each(function (index) {
      var radio = $(this);
      var key   = radio.data('name');
      var value = radio.find('.active').first().data('value');

      object[key] = value;
    });

    window.location.href = "pebblejs://close#" + encodeURIComponent(JSON.stringify(object));
  });
});
