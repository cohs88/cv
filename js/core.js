$(document).ready(function(){
	$("#lbl_educacion").click(function(){
		$.scrollTo("#educacion", 800);
		return false;
	});

	$("#lbl_experiencia_laboral").click(function(){
		$.scrollTo("#experiencia_laboral", 800);
		return false;
	});
});