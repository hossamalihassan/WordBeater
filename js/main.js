$(function() {

	// 60 Words
	var words = ["neighbour", "grief","pity","wire","harmful","exploit","clarify","improve","bulletin","jet",
	"hit","mobile","wound","pile","nightmare","falsify","distort","pasture","manual","glide",
	"limited","battery","offensive","girlfriend","admire","brand","studio","divorce",
	"begin","second","taxi","variation","act","student","pass","say","item","expression",
	"constituency","grip","slide","chart","relation","year","Mars","cooperation","satisfied",
	"rice","happen","hen","pest","dare","cultivate","scramble","perceive","study","hut","pattern",
	"dip","card"];

	var random = Math.floor(Math.random() * 61);
	$("#current-word").html(words[random]);

	var check = false;
	var score = 0;
	var time = 5; 
	$("#score").html(score);
	$("#time").html(time);
	$("#try").hide();

	function correctWord() {
		$("#word-input").val("");
		$("#message").html("");
		$("#message1").addClass("text-success");
		setTimeout(function(){
			$("#message1").removeClass("text-success");
		},500);
	}

	
	function checkInput() {
		$("#word-input").keyup(function (){
			if( $(this).val() == $("#current-word").html() ) {
				check = true;
			}
			else {
				check = false;
			}

			if(check) {
				correctWord();
				random = Math.floor(Math.random() * 61);
				$("#current-word").html(words[random]);
				score += 5;
				time = 5;
				$("#score").html(score);
				$("#message2").removeClass("text-danger");
			}

			else {
				console.log("NO");
			}
		})
	}

	function timer() {
		var tim = setInterval(function(){
			$("#time").html(time--);
			if (time == -1) {
				clearInterval(tim);
				$("#message2").addClass("text-danger");
				$("#word-input").prop('disabled', true);
				$("#try").show();
			}
		},1000);
	}

	timer();

	window.onload = function(){
		setInterval(checkInput,100);
	}

	$("#try").click(function (){
		time = 5;
		score = 0;
		random = Math.floor(Math.random() * 61);
		$("#current-word").html(words[random]);
		$("#message1").removeClass("text-success");
		$("#message2").removeClass("text-danger");
		$("#try").hide();
		$("#word-input").prop('disabled', false);
		$("#word-input").val("");
		timer();
		$("#word-input").focus();
	});

});