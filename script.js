var pkr = document.getElementById("pkr");
var usd = document.getElementById("usd");
var usdRate = 104.92;
function exchange(input){
  if (input.id == "pkr") {
    var parsing = parseFloat(input.value);
    var rate = (parsing / usdRate);
    usd.value = rate;
  }
  else if (input.id == "usd") {
  var parsing = parseFloat(input.value);
  var rate = parsing * usdRate;
  pkr.value = rate;   
  }
}