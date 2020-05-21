(function (window) {
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];



for (var i in names) 
{
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') 
  {
    window.byeSpeaker.speak(names[i]);
  }
  else 
  {
    window.helloSpeaker.speak(names[i]);
  }
}
})(window);