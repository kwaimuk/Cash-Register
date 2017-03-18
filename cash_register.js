var myCalc= calculatorModule();

var keys = document.getElementById("keys");
//operators
var add = document.getElementById("operatorKeys");
var subtract = document.getElementById("operatorKeys");
var multiply = document.getElementById("operatorKeys");
var divide = document.getElementById("operatorKeys");
var operant = 0;

var numOfKeys = 9;
for(var i = 0; i <= numOfKeys; i++){
  var btn = document.createElement("button");
  btn.innerHTML = `${i}`;
  btn.id = 'btn'+i;

    btn.addEventListener('click',function(event){
   // console.log(event.target.innerHTML);
  myCalc.load(event.target.innerHTML);
  showMe();
 });
keys.appendChild(btn);

}

var operatNumOfKeys = 6;
for(var j = 0; j < operatNumOfKeys; j++){
  var btn = document.createElement("button");
  btn.id = 'opBtn'+j;
operatorKeys.appendChild(btn);
}

opBtn0.innerHTML = "+";

opBtn0.addEventListener('click',function(event){
myCalc.saveMemory();
myCalc.flush();
console.log("saveMemory",myCalc.recallMemory());
operant = event.target.innerHTML;
  });

opBtn1.innerHTML = "-";
opBtn1.addEventListener('click',function(event){

  });

opBtn2.innerHTML = "÷";
opBtn2.addEventListener('click',function(event){
  });

opBtn3.innerHTML = "×";
opBtn3.addEventListener('click',function(event){
  });

opBtn4.innerHTML = "=";
opBtn4.addEventListener('click',function(event){
myCalc.getTotal();
showMe();

// if(operant = "+"){
// myCalc.add();}
console.log("total",myCalc.getTotal());
console.log("saveMemory",myCalc.recallMemory());
});
 //
 // );






opBtn5.innerHTML = "clear";
opBtn5.addEventListener('click',function(event){
myCalc.clear();
showMe();
  });



var display = document.getElementById("display");



function showMe(){
  display.innerHTML= myCalc.getTotal();
}

showMe();



