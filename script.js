// Connecting to ROS
  // -----------------

  var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
    document.getElementById('message').innerHTML = 'Connected to websocket server.'
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });

  // Publishing a Topic
  // ------------------

  var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  });

  var up = new ROSLIB.Message({
    linear : {
      x : 0.4,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : -0.0,
      y : -0.0,
      z : -0.0
    }
  });
  var down = new ROSLIB.Message({
    linear : {
      x : -0.4,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : -0.0,
      y : -0.0,
      z : -0.0
    }
  });
  var left = new ROSLIB.Message({
    linear : {
      x : 0.0,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : -0.0,
      y : -0.0,
      z :  0.2
    }
  });
  var right = new ROSLIB.Message({
    linear : {
      x : 0.0,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : -0.0,
      y : -0.0,
      z : -0.2
    }
  });
  var stop = new ROSLIB.Message({
    linear : {
      x : 0.0,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : -0.0,
      y : -0.0,
      z : -0.0
    }
  });
  // Subscribing to a Topic
  // ----------------------

  // var listener = new ROSLIB.Topic({
  //   ros : ros,
  //   name : '/listener',
  //   messageType : 'std_msgs/String'
  // });
  //
  // listener.subscribe(function(message) {
  //   console.log('Received message on ' + listener.name + ': ' + message.data);
  //   listener.unsubscribe();
  // });

  // Calling a service
  // -----------------

  // var addTwoIntsClient = new ROSLIB.Service({
  //   ros : ros,
  //   name : '/add_two_ints',
  //   serviceType : 'rospy_tutorials/AddTwoInts'
  // });

  // var request = new ROSLIB.ServiceRequest({
  //   a : 1,
  //   b : 2
  // });

  // addTwoIntsClient.callService(request, function(result) {
  //   console.log('Result for service call on '
  //     + addTwoIntsClient.name
  //     + ': '
  //     + result.sum);
  // });

  // Getting and setting a param value
  // ---------------------------------

  // ros.getParams(function(params) {
  //   console.log(params);
  // });

  // var maxVelX = new ROSLIB.Param({
  //   ros : ros,
  //   name : 'max_vel_y'
  // });

  // maxVelX.set(0.8);
  // maxVelX.get(function(value) {
  //   console.log('MAX VAL: ' + value);
  // });
  window.onload=function(){
    var button_up = document.getElementById('up');
    button_up.addEventListener('click',function () {
      cmdVel.publish(up);
    })
    // up.addEventListener('mouseup',function () {
    //   cmdVel.publish(stop);
    // })

    var button_down = document.getElementById('down');
    button_down.addEventListener('click',function () {
      cmdVel.publish(down);
    })

    var button_left = document.getElementById('left');
    button_left.addEventListener('click',function () {
      cmdVel.publish(left);
    })

    var button_right = document.getElementById('right');
    button_right.addEventListener('click',function () {
      cmdVel.publish(right);
    })
  }
