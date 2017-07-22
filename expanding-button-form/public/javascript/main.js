$(document).ready(function() {

  var self = this;

  self.mainButton = $('.main-button').first();
  self.mainButtonToggle = $('.main-button .main-button-toggle');
  self.mainButtonToggleText = self.mainButton.text();
  self.mainButtonContent = $('.main-button .main-button-content');
  self.mainButtonWidth = self.mainButtonContent.css('width');
  self.mainButtonHeight = self.mainButtonContent.css('height');
  self.mainButtonToggled = false;
  self.inputForm = $('.main-button .input-form');

  self.mainButtonToggle.click(function(e) {
    e.preventDefault();
    if (!self.mainButtonToggled) {
      self.mainButtonToggle.text('Hide');
      self.mainButtonToggle.removeClass('center-aligned-animated');
      self.mainButtonToggle.addClass('right-aligned-animated');
      self.mainButtonContent.css({
      });
      self.mainButtonContent.animate({
        'width': '260px',
        'height': '260px',
      }, 120, function() {
        self.inputForm.show();
        self.inputForm.css({
          'margin-top': '50px',
          'padding': '10px',
          'border-left': '10px solid #FF3434',
          'border-right': '10px solid #FF3434',
        });
      });
      self.mainButtonToggled = true;
    } else {
      // self.mainButtonToggle.text(self.mainButtonToggleText);
      self.mainButtonToggle.text('Log in');
      self.mainButtonToggle.removeClass('right-aligned-animated');
      self.mainButtonToggle.addClass('center-aligned-animated');
      self.mainButtonContent.css({
      });
      self.mainButtonContent.animate({
        'width': self.mainButtonWidth,
        'height': self.mainButtonHeight,
      }, function() {
        self.inputForm.hide();
      });
      self.mainButtonToggled = false;
    }
  });

  // self.touchCircle = $('<div id="touch-circle">&nbsp;</div>');
  // $('html').append(self.touchCircle);
  // self.touchCircleWidth = 50;
  // self.touchCircleHeight = 50;
  // self.touchCircle.css({
  //   'background-color': '#FF0000',
  //   'width': self.touchCircleWidth + 'px',
  //   'height': self.touchCircleHeight + 'px',
  //   'border-radius': '100%',
  //   'display': 'none',
  //   'position': 'absolute',
  // });
  // self.mouseX = null;
  // self.mouseX = null;
  // $(document).mousemove(function(e) {
  //   self.mouseX = e.pageX;
  //   self.mouseY = e.pageY;
  // });
  // self.touchCircleAnimationSpeed = 180;

  // self.animateTouchCircle = function() {
  //   // self.touchCircle.animate({
  //   //   'width': self.touchCircleWidth * 2,
  //   //   'height': self.touchCircleHeight * 2,
  //   // });
  //   self.touchCircle.show();
  //   self.touchCircle.animate({
  //     'width': 0,
  //     'height': 0,
  //     'top': self.mouseY + self.touchCircleHeight / 2,
  //     'left': self.mouseX + self.touchCircleWidth / 2,
  //   }, self.touchCircleAnimationSpeed, function() {
  //     self.touchCircle.hide();
  //   });
  //   self.touchCircle.show();
  //   self.touchCircle.animate({
  //     'width': self.touchCircleWidth,
  //     'height': self.touchCircleHeight,
  //     'top': self.mouseY - self.touchCircleHeight * 2,
  //     'left': self.mouseX - self.touchCircleWidth * 2,
  //   }, self.touchCircleAnimationSpeed, function() {
  //     self.touchCircle.hide();
  //   });
  // };

  // $('html').first().click(function(e) {
  //   self.touchCircle.css({
  //     'top': self.mouseY - self.touchCircleWidth / 2,
  //     'left': self.mouseX - self.touchCircleHeight / 2,
  //   });
  //   self.animateTouchCircle();
  // });

  // Clone the login element multiple times.
  // for (var i = 0; i < 10; i++) {
  //   $('html').append($('.main-button').first().clone());
  // }

});
