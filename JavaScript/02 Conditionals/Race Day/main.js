let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;
let runnerAge = 21;

if (runnerAge > 18 && runnerEarly) {
  raceNumber = raceNumber + 1000;
}

if (raceNumber > 999) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 9:30 am.`
  );
} else if (runnerAge > 18 && !runnerEarly) {
  console.log(
    `Your race number is ${raceNumber} and you will run race at 11:00 am.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race number is ${raceNumber} and you will run race at 12:30 am.`
  );
} else {
  console.log("Please contact registration desk.");
}
