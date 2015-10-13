Meteor.setInterval(function () {
  Session.set('time', new Date());
}, 16);

Template.body.helpers({

  hours: _.range(0, 12),

  degrees: function () {
    return 30 * this;
  },

  handData: function () {
    var time = Session.get('time') || new Date();
    var ms = time.getMilliseconds();
    var s = time.getSeconds() + ms / 1000;
    var m = time.getMinutes() + s / 60;
    var h = time.getHours() + m / 60;
    return { hourDegrees: h * 30,
             minuteDegrees: m * 6,
             secondDegrees: s * 6 };
  },

  radial: function (angleDegrees,
                    startFraction,
                    endFraction) {
    var r = 100;
    var radians = (angleDegrees - 90) / 180 * Math.PI;

    return {
      x1: r * startFraction * Math.cos(radians),
      y1: r * startFraction * Math.sin(radians),
      x2: r * endFraction * Math.cos(radians),
      y2: r * endFraction * Math.sin(radians)
    };
  }
});
