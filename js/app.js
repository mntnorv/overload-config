$(document).ready(function() {
  var radios = $('.table-view.radio');
  var saveBtn = $('#save');

  radios.each(function (index) {
    var radio = $(this);
    var buttons = radio.find('li.table-view-cell > a');

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

      if (value) {
        object[key] = value;
      }
    });

    window.location.href = "pebblejs://close#" + encodeURIComponent(JSON.stringify(object));
  });
});
