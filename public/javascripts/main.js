
window.onload = function() {
	google.maps.event.addListenerOnce(map, 'idle', function() {
		var map = document.querySelector('hack-map');
	 	map.addPin(43.0261722, -88.0073259 ,'pin', '6/9/2015, 5pm - 7pm<br/>17th & Vine Playground Discussion<br/>House of Peace<br/>1702 Walnut St<br/>Milwuakee, WI, 53205<br/>');
	});
};
