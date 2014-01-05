$('#selectCampanya').on('change', function() {
	window.location = location.origin + location.pathname + '?selectCampanya=' + $('#selectCampanya').prop("selectedIndex");
});