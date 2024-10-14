class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get name() {
    return this._numberOfStudents;
  }

  quickFact() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomTeacher;
    randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomTeacher];
  }

  set numberOfStudents(newNumberOfStudent) {
    if (typeof newNumberOfStudent === Number) {
      this._numberOfStudents = newNumberOfStudent;
    } else
      console.log("Invalid input: numberOfStudents must be set to a Number");
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, newNumberOfStudent, sportsTeam) {
    super(name, "high", newNumberOfStudent);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return console.log(this._sportsTeam);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Loraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFact();
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.sportsTeam;
