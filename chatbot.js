function askQuestion() {

	var question = document.getElementById("input").value;
	var giveanswer = answer[question]
	document.getElementById("chat-area").textContent += giveanswer + " ";

}

var answer = {
	"hi" : "hey"<br>,
	"hey":"OMG I have a Boyfriend",
	"how old are you?": "21 but I am taken<br>",
	"what is your name?": "EvieBot<br>",
	"what time is it?": "I got no watch<br>",
	"what day is it?": "I got no calendar<br>",
	"what is your name?": "EvieBot<br>"

}
