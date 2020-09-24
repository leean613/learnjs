let elm1 = document.getElementById('test1');
var elm2 = document.getElementById('test2');
var timeout;
var lastTap = 0;
console.log(elm1);
if(elm1!=null) elm1.addEventListener('touchend', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) {
        elm2.innerHTML = 'Double Tap';
        event.preventDefault();
    } else {
        elm2.innerHTML = 'Single Tap';
        timeout = setTimeout(function() {
            elm2.innerHTML = 'Single Tap (timeout)';
            clearTimeout(timeout);
        }, 500);
    }
    lastTap = currentTime;
});



//
/* <button id="test1">Double Tap Me!</button>
<div id="test2">EMPTY</div> */ 