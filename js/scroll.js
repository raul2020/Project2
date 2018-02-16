$('#inicio').on('click', function(){
    $('html, body').animate( {scrollTop: 0}, 800);

})

$('#servicios').on('click', function(){
    $('html, body').animate( {scrollTop:$('#servicios1').position().top}, 800);
    	$('#servicios1').focus();
})

$('#nosotros').on('click', function(){
    $('html, body').animate( {scrollTop:$('#nosotros1').position().top}, 800);
    	$('#nosotros1').focus();
})

$('#contacto').on('click', function(){
    $('html, body').animate( {scrollTop:$('#contacto1').position().top}, 800);
    	$('#contacto1').focus();
})


