$(document).ready(function() 
{
	// SECTION GENERATES BACON IPSUM PARAGRAPHS IN DIV #TEST WITH BACONIPSUM API
		$.getJSON('https://baconipsum.com/api/?callback=?', 
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'10' }, function(baconGoodness){
			if (baconGoodness && baconGoodness.length > 0)
			{
				$("#test").html('');
				for (var i = 0; i < baconGoodness.length; i++)
					$("#test").append('<p>' + baconGoodness[i] + '</p>');
				$("#test").show();
			}
		});


});
var klik = function(){
	var name = document.getElementById('imie');
	console.log(name.value);
	document.getElementById('imie').innerHTML = "<h1>"+name.value+",wzrost:" + wzr.value +"cm<h1"



