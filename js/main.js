var myArray = [2.34, 3.98, 7.32, 6.51, 9.99];
var roundedArray = [];
var randomArray = [];


for(var i = 0; i < myArray.length ; i++){
  var rNum = Math.round(myArray[i]);
  roundedArray.push(rNum);
}

function tenRandom(rdmArray){
  var numOfNumbers = 10;
  for (var i = 0; i < numOfNumbers; i++){
    var rdm = Math.floor(Math.random() * (100)+ 1);
    rdmArray.push(rdm);
  }
}

tenRandom(randomArray);

setInterval(
function showDate(){
  // creates a variable with the the date properties
  var today = new Date();
  var todayHour = today.getHours();
  var todayMin = today.getMinutes();
  var todaySec = today.getSeconds();
  var todayMonth = today.getMonth();
  var todayDate = today.getDate();
  var todayYear = today.getFullYear();

  var fT = formatTime(todayHour) + ":" + formatTime(todayMin) +
  ":" + formatTime(todaySec);
  var fD = formatTime(todayDate) + "/" + formatTime(todayMonth+1)
  + "/" + formatTime(todayYear);

  document.body.innerHTML = "<h1>time: " + fT + " Date: " + fD + "</h1>";
}, 1000);

// formats time to include a 0 if under 10
function formatTime(timeDenom){
  if(timeDenom < 10){
    return "0" + timeDenom;
  } else {
    return timeDenom;
  }
};
