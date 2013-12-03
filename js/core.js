$(document).ready(function(){
	$("#lbl_educacion").click(function(){
		$.scrollTo("#educacion", 800);
		return false;
	});

	$("#lbl_experiencia_laboral").click(function(){
		$.scrollTo("#experiencia_laboral", 800);
		return false;
	});

	$("#lbl_proyectos_personales").click(function(){
		$.scrollTo("#proyectos_personales", 800);
		return false;
	});

	$("#lbl_habilidades").click(function(){
		$.scrollTo("#habilidades", 800);
		return false;
	});
});