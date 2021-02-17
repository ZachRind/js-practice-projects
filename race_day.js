let raceNumber = Math.floor(Math.random() *1000);
let registeredEarly = false;
let runnersAge = 17;

if(runnersAge >= 18 && registeredEarly){
  raceNumber += 1000;
}

if(runnersAge >= 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber}, and you will be running at 9:30am.`);
} else if (runnersAge >= 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}, and you will be running at 11:00am.`);
} else if (runnersAge < 18){
  console.log(`Your race number is ${raceNumber}, and you will be running at 12:30pm.`);
} else {
  console.log('You are not registered to run!');
}