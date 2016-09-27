function askQuestion() {

	var question = document.getElementById("input").value;
	var giveanswer = answer[question]
	document.getElementById("chat-area").textContent += giveanswer + " ";

}

var answer = {
	"hi" : "hey",
	"hey":"OMG I have a Boyfriend",
	"how old are you?": "21 but I am taken",
	"what is your name": "EvieBot",
	"what time is it?": "I got no watch"
}
