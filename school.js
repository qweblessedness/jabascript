class School{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    return Math.floor((substituteTeachers.length - 1)*Math.random())
  }
  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === 'number'){
      this._numberOfStudents=newNumberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
}
class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}
class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeam){
    super(name,'HighSchool',numberOfStudents);
    this._sportsTeam=sportsTeam;
  }
  get sportsTeam(){
    return this._sportsTeam
  }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansburry',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeam);
