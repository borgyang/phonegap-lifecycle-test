var paused_count =0;
var resumed_count = 0;
var launched_count = 0;



alert("Hello!");
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);

        var Chocbar = {
"Name": "BOUNTY",
"weight": "228g",
"Nutrition": {
"Energy": "Energy (kJ)	2036	580	7%",
"Energy2": "Energy (kcal)	487	139	7%",
}
}
        var InfoString = JSON.stringify(Chocbar);
        window.localStorage.setItem("BOUNTY", InfoString);
        var getChocbar = window.localStorage.getItem("BOUNTY");
        var ChocbarJSON = JSON.parse(getChocbar);
	    alert(ChocbarJSON.Nutrition.Energy);
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