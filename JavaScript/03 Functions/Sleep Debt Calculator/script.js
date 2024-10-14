// const getSleepHours = (day) => {
//   switch (day) {
//     case "monday":
//       return 8;
//     case "monday":
//       return 8;
//     case "tuesday":
//       return 8;
//     case "wednesday":
//       return 8;
//     case "thursday":
//       return 8;
//     case "saturday":
//       return 8;
//     case "sunday":
//       return 7;
//   }
// };

const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 10;

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours == idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hours more sleep than needed`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You should get more ${
        idealSleepHours - actualSleepHours
      } hours of rest to meet target`
    );
  }
};

calculateSleepDebt();
