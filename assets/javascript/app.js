// *************PSUEDOCODE**********
// *************VARIABLES**************
var right = 0
var wrong = 0
var TIMER = 50
var intervcalId;

// **************FUNCTION***********
$("#start").on("click", startGame);
$("#submit").on("click", submit);

function startGame() {
    clearInterval(intervcalId);
    intervcalId = setInterval(countdown, 1000);
}

function countdown() {
    TIMER--;
    $(".countdown").html("<h1>" + TIMER + "</h1>");
    if (TIMER === 0) {
        clearInterval(intervcalId);
        submit();
    }
}
function submit() {


    // ***************SCORE****************

    var radioValueOne = $("input[name='questionOne']:checked").val();
    if (radioValueOne === "4") {
        right++
    } else wrong++
    var radioValueTwo = $("input[name='questionTwo']:checked").val();
    if (radioValueTwo === "2") {
        right++
    } else wrong++
    var radioValueThree = $("input[name='questionThree']:checked").val();
    if (radioValueThree === "3") {
        right++
    } else wrong++
    var radioValueFour = $("input[name='questionFour']:checked").val();
    if (radioValueFour === "8") {
        right++
    } else wrong++
    var radioValueFive = $("input[name='questionFive']:checked").val();
    if (radioValueFive === "4") {
        right++
    } else wrong++

    alert("GREAT SCOTT YOUR SCORE IS, RIGHT: " + right + " " + "WRONG: " + wrong)
    clearInterval(intervcalId)  
}


