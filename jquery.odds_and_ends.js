$.fn.extend({

  confirmation: function() {
    return this.click(function(e) {
      if (confirm('Are you sure?')) {
        return true;
      } else {
        e.stopImmediatePropagation();
        return false;
      }
    });
  },

  printOnClick: function() {
    return this.click(function() {
      window.print();
      return false;
    });
  },

  toggleTarget: function() {
    return this.click(function() {
      var selector = $(this).attr('target');
      $(selector).toggle();
      return false;
    });
  }

});

$.number = function(str) {
  if (str && str.match(/\d+\.?\d*/)) {
    return Number(str.match(/\d+\.?\d*/)[0]);
  }
}


