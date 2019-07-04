

var randomNumber;
var totalScore = 0
var wins = 0;
var losses = 0;

randomNumber = Math.floor(Math.random() * 101)+19;
console.log(randomNumber);
$("#randomNumber").html('Results: ');

$("#results").html('Random Result: ' + results);

for(var i =0; i<4; i++){
    var crystal = $("div");
    var random = Math.floor(Math.random() * 11)+1;
    console.log(random);
    crystal.attr("class","crystal")
    $(".crystals").append(crystal);
}

$(".crystal").on('click',function () {
    console.log($(this));
}