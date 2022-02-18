jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Screentime"]').prop('selected', true)
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"]').prop('selected', true)
			jQuery('select[name^=ACCESSinput[name=OPC]] option[value="Screentime"]').prop('selected', false)
		}
	});


	// Si se marca checkbox: agregar valor a [OPC]
	jQuery('#check_freelance').change(function() {
		if ( this.checked ) {
			var radio_checked = jQuery('input[name=OPC]:checked').val();
			var checkbox_checked = jQuery(this).val();
			console.log(radio_checked);
			console.log(checkbox_checked);
			//jQuery('input[name=OPC]:checked').val(radio_checked+' + '+checkbox_checked);
		}
	});

	
});