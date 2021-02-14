let name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var first;
var byeSpeaker = {
	speak:function (name){
		console.log("Bye "+name);
	}
};
var helloSpeaker = {
	speak:function (name){
		console.log("Hello "+name);
	}
};

for (var i in  name){
    first = name[i].charAt(0);
    if (first==='j' || first === 'J'){
    	byeSpeaker.speak(name[i]);
    }
    else {
       helloSpeaker.speak(name[i]);
    }
} 
