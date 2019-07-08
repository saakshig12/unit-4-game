$(document).ready(function() {

	var randomNumber;
	var totalScore = 0
	var wins = 0;
	var losses = 0;
	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

	console.log("Total score" + totalScore);
	console.log("Number of wins:" + wins);
	console.log("Number of losses:" + losses);




	randomNumber = Math.floor(Math.random() * 101)+19;
	console.log(randomNumber);
	$("#randomNumber").html('Random Number: ');

	$("#results").html('Random Result: ' + results);


$('.images').each(functon() {
	var num = Math.floor(Math.random()*11)+1,
	img = $(this);
	
	img.attr('src', 'pictures/number' + num +'.jpg');
	img.attr('alt', 'src: '+ img.attr('src'));

})



	$(".crystalimg").on("click", function() {
		if (totalScore >= randomNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === randomNumber) {
			youWin();
		} else if (totalScore > randomNumber) {
			youLose();
		}
	})

	$(".btn").on("click",function() {
		newGame();
	});
} 