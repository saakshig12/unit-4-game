$(document).ready(function() {

	var randomNumber;
	var totalScore = 0
	console.log("Total score" + totalScore);
	var wins = 0;
	console.log("Number of wins:" + wins);
	var losses = 0;
	console.log("Number of losses:" + losses);
	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;


	randomNumber = Math.floor(Math.random() * 101)+19;
	console.log(randomNumber);
	$("#randomNumber").html('Random Number: ');

	$("#results").html('Random Result: ' + results);


	var crystal1 = Math.floor(Math.random() * 11) + 1; 
		console.log("Crystal 1: " + crystal1); 
		$("#img1").html("assets/images/crystal1" + " value=" + crystal1); 

	var crystal2 = Math.floor(Math.random() * 11) + 1; 
		console.log("Crystal 2: " + crystal2); 
		$("#img2").html("assets/images/crystal2" + " value=" + crystal2); 

	var crystal3 = Math.floor(Math.random() * 11) + 1; 
		console.log("Crystal 3: " + crystal3); 
		$("#img3").html("assets/images/crystal3" + " value=" + crystal3);
	
	var crystal4 = Math.floor(Math.random() * 11) + 1; 
		console.log("Crystal 4: " + crystal4); 
		$("#img4").html("assets/images/crystal4" + " value=" + crystal4s);



	for(var i =0; i<4; i++){
    	var random = Math.floor(Math.random() * 11)+1;
    	console.log(random);

    	var crystal = $("div");
    	crystal.attr("class","crystal");
    	$(".crystals").append(crystal);
	}

	$(".crystal").on('click',function () {
   	 	var results;
    	var num = $(this).attr('data-random');
    	result += num;
    	console.log(result);

	}




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