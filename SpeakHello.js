(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = "Yaakov";
  var greeting = "Hello";
  helloSpeaker.sayHello = function () {
  console.log("Hello " + helloSpeaker.name);
}

window.helloSpeaker = helloSpeaker;

})(window);






