function getSleepHours(day){
  switch(day){
    case 'monday':
    return 8;
    case 'tuesday':
    return 8.5;
    case 'wednesday':
    return 9;
    case 'thursday':
    return 10;
    case 'friday':
    return 9.5;
    case 'saturday':
    return 11;
    case 'sunday':
    return 12;
  }
}
function getActualSleepHours(){
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
}
function getIdealSleepHours(idealHours){
  return idealHours*7
}
function calculateSleepDebt(){
  var actualSleepHours=getActualSleepHours();
  var idealSleepHours=getIdealSleepHours(8);
  if(actualSleepHours===idealSleepHours){
    console.log('Got the perfect amount of sleep');
  }
  else if(actualSleepHours>idealSleepHours){
    console.log('Got more sleep than needed by '+(actualSleepHours-idealSleepHours)+' hours');
  }
  else{
    console.log('Got less sleep than needed by '+(idealSleepHours-actualSleepHours)+' hours');
  }
}
calculateSleepDebt();
