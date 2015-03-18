function chained(functions) {
  //FIXME
  return function(input) {
    for (var i = 0; i < functions.length; i++) {
        input = functions[i](input);
    }

    return input;
  }
}

// for test

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

chained([f1,f2])(0)
chained([f1,f2,f3])(0)