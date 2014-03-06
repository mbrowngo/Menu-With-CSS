// This domReady code was taken from StackOverflow. I wanted to load the JS like Document Ready in jQuery
// http://stackoverflow.com/questions/1795089/how-can-i-detect-dom-ready-and-add-a-class-without-jquery

function domReady () {
  document.body.className += " javascript";

  var menuArray = new Array;
  menuArray = document.getElementsByClassName('submenuitem');

  for (var i = 0; i < menuArray.length; i++) {
    console.log(menuArray[i].innerHTML);
    myCounter = i;
    menuArray[i].onclick = function(){
      console.log(myCounter);
      document.getElementsByClassName('replaceArea').innerHTML = menuArray[i].innerHTML;
    }
  }
}

/*
*   OK so I could not get the function to work. It is supposed to loop throuh the array of the menu items
*   from the .submenuitem class which is the parent. when it does, it correctly logs the innerHTML of each
*   menu item. It is then supposed to set a function for each of the elements and this where it goes wrong.
*   The code is not assigning the function to each node of the array, but to all the nodes of the array with
*   each pass thorugh the for statement. This was harder to do with javascript than with jQuery certainly.
*/

// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}