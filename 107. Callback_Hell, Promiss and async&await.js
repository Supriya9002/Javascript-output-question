// Simulate async functions with callbacks
function doSomething(callback) {
  setTimeout(() => {
    console.log("Step 1: doSomething");
    callback("result1");
  }, 1000);
}


function doSomethingElse(input, callback) {
  setTimeout(() => {
    console.log("Step 2: doSomethingElse with", input);
    callback("result2");
  }, 1000);
}

function doThirdThing(input, callback) {
  setTimeout(() => {
    console.log("Step 3: doThirdThing with", input);
    callback("result3");
  }, 1000);
}

function doFourthThing(input, callback) {
  setTimeout(() => {
    console.log("Step 4: doFourthThing with", input);
    callback("result4");
  }, 1000);
}

// Callback Hell Example
doSomething(function (result1) {
  doSomethingElse(result1, function (result2) {
    doThirdThing(result2, function (result3) {
      doFourthThing(result3, function (result4) {
        console.log("Final result:", result4);
      });
    });
  });
});
