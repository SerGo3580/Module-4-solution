let name = ["Tom","Yakov","Jim","jason",'John',"Jim","Tony"]
var first;
function bye (name){
    console.log("Bye "+name);
}
function hello(name){
	console.log ("Hello " + name)
}
for (var i in  name){
    first = name[i].charAt(0);
    if (first==='j' || first === 'J'){
    	bye(name[i]);
    }
    else {
       hello(name[i]);
    }
} 