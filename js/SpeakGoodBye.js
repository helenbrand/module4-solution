(function (window) {
  var byeSpeaker = {};
  byeSpeaker.name = "John";
  var greeting = "Good Bye";
  byeSpeaker.sayGoodBye = function () {
    console.log("Good Bye " +  byeSpeaker.name);
}
  
window.byeSpeaker = byeSpeaker;
  
})(window);
  
  


