// JavaScript source code

$(document).ready(function() { // do this when the document is loaded
    $("#home").show(); // home page
    $("#funfacts").hide(); // hide pages 
    $("#fact").hide(); // example fact

	
});

$("#b4").click(function (event) {
    $("#home").hide()
    $("#funfacts").show();
    $("#fact").hide(); // example fact
    
});

$("#c2").click(function (event) {
    $("#home").hide()
    $("#funfacts").hide();
    $("#fact").show(); // example fact

});