var print = function(msg) { 
  document.getElementById("output").innerHTML = `The Word Length is ${msg}`
}
    
document.getElementById("btn").onclick = function(){
  print(document.getElementById('str').value.split(" ").join("").length);
  // print(document.getElementById('str').value.length);

}

