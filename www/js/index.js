var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key="pen";
var value="blue";
var key="book";
var value="black";
var key="cat";
var value="yellow";
var key="dog";
var value="red";
var key="mouse";
var value="black";
window.prompt("sometext","defaultText")

var key = prompt("Please enter your key");
if (key != null) {
    document.getElementById("demo").innerHTML =
    "you colour " + value ;
}
window.localStorage.setItem( key, value );

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
        
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
        alert("");
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
