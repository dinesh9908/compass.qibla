window.getCompassHeading = function() {
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', function(event) {
        var heading = event.alpha;
        if (heading !== null) {
          window.flutter_inbox.sendToFlutter(heading);
        }
      });
    } else {
      console.log('Device orientation is not supported on this browser.');
    }
  };
  