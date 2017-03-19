 var calculatorModule =  function () {
  //private
  var calculator={};
  var memory=0;
  var total=0;


  calculator.load = function (x){
    // if(typeof x !== 'number') {
    //   throw new Error('I AM ERROR');
    // }
    total += x;
    total = Number(total);
    return total;
  };


  calculator.getTotal =  function(){
        return total;
    };

  calculator.add =  function(x){
        if(typeof x !== 'number') {
      throw new Error('I AM ERROR');
    }
    total+=x;
      return total;
  };

  calculator.subtract =  function(x){
        if(typeof x !== 'number') {
      throw new Error('I AM ERROR');
    }
      total-=x;
      return total;
  };

  calculator.multiply =  function(x){
        if(typeof x !== 'number') {
      throw new Error('I AM ERROR');
    }
      total*=x;
      return total;
  };

  calculator.divide =  function(x){
        if(typeof x !== 'number') {
    throw new Error('I AM ERROR');
    }
      total/=x;
      return total;
  };
  calculator.recallMemory= function(){
    memory = Number(memory);
    return memory;
  };
  calculator.saveMemory= function(){
    memory = total;
    return memory;
  };
  calculator.clearMemory= function(){
    memory=0;
  };

  calculator.clear= function(){
    total=0;
    return total;
  };
  calculator.reset= function(){
    total=0;
    memory=0;
  };

  calculator.flush= function () {
    total=0;
    console.log(total);
    };

//public
return calculator;

};




