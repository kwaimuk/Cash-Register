var myCalc= calculatorModule();

var keys = document.getElementById("keys");
//operators
var add = document.getElementById("operatorKeys");
var subtract = document.getElementById("operatorKeys");
var multiply = document.getElementById("operatorKeys");
var divide = document.getElementById("operatorKeys");
var operant = 0;

var numOfKeys = 9;

function showMe(total){
  display.innerHTML = total;
}

for(var i = 0; i <= numOfKeys; i++){
  var btn = document.createElement("button");
  btn.innerHTML = `${i}`;
  btn.id = 'btn'+i;

  btn.addEventListener('click',function(event){
   // console.log(event.target.innerHTML);
   var currentTotal = myCalc.load(event.target.innerHTML);
   showMe(currentTotal);
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
  myCalc.saveMemory();
  myCalc.flush();
  console.log("saveMemory",myCalc.recallMemory());
  operant = event.target.innerHTML;
});

opBtn2.innerHTML = "÷";
opBtn2.addEventListener('click',function(event){
  myCalc.saveMemory();
  myCalc.flush();
  console.log("saveMemory",myCalc.recallMemory());
  operant = event.target.innerHTML;
});

opBtn3.innerHTML = "×";
opBtn3.addEventListener('click',function(event){
  myCalc.saveMemory();
  myCalc.flush();
  console.log("saveMemory",myCalc.recallMemory());
  operant = event.target.innerHTML;
});

opBtn4.innerHTML = "=";
opBtn4.addEventListener('click',function(event){
  var currentTotal = myCalc.getTotal();
  showMe(currentTotal);
  if(operant === "+"){
    showMe(myCalc.add(myCalc.recallMemory()));
  } else if(operant === "-") {
    showMe(myCalc.subtract(myCalc.recallMemory()));
  } else if(operant === "÷") {
    showMe(myCalc.divide(myCalc.recallMemory()));
  }else if(operant === "×") {
    showMe(myCalc.multiply(myCalc.recallMemory()));
  }
});
 //
 // );



 opBtn5.innerHTML = "clear";
 opBtn5.addEventListener('click',function(event){
  myCalc.clear();
  // display.innerHTML= "0";

});



 var display = document.getElementById("display");





 showMe(0);


