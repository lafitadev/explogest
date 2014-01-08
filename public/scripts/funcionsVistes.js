$('#selectCampanya').on('change', function() {
	window.location = location.origin + location.pathname + '?selectCampanya=' + $('#selectCampanya').prop("selectedIndex");
	
	$('input[name=nomCampanya]').val($('#selectCampanya').val());
});

$('#selectParcela').on('change', function() {
	$('input[name=nomParcela]').val($('#selectParcela').val());
});

$('input[name=nomCampanya]').val($('#selectCampanya').val());
$('input[name=nomParcela]').val($('#selectParcela').val());

$('#afegirParcela').on('click',function(){
	$.ajax({ 
        url: '/admin/parcela',
        type: 'post',
        data: $('#formParcela').serialize(),
        success: function(data){
        	alert('Parcela Ok!');
        }
        , error: function(jqXHR, textStatus, err){
        	alert('Parcela Ko!');
        }
     })
  }); 



