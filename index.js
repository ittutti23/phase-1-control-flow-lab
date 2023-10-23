function scuberGreetingForFeet(ride){
  
  let message;
if (ride <= 400) {
    message = 'This one is on me!';
  }
if (ride >= 400 && ride <= 2000) {
  message = 'That will be twenty bucks.';
}
if (ride > 2000) {
  message = 'I will gladly take your thirty bucks.';
}
if (ride > 2500) {
  message = 'No can do.';
}
return (message)
}

function ternaryCheckCity(city){
  let message;
  city === "NYC" ? (message = "Ok, sounds good.") : (message = "No go.");
return (message)  
}


function switchOnCharmFromTip(tip){
let message;
switch (tip) {
case 'generous':
message = "Thank you so much."
break;
case 'not as generous':
message = "Thank you."
break;
default:
message = "Bye.";
}
return (message)
}