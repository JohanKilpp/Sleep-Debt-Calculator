function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 8; 
  } else if (day === 'wednesday'){
    return 8; 
  } else if (day === 'thursday'){
    return 8; 
  } else if (day === 'friday'){
    return 8; 
  } else if (day === 'saturday'){
    return 8; 
  } else if (day === 'sunday'){
    return 8; 
  };
  
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours = 8) => { 
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    console.log('You have got the perfect weekly amount of sleep of ' + idealSleepHours + ' hours');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You have got ' + (actualSleepHours - idealSleepHours) + ' hours MORE sleep than needed');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You have got ' + (idealSleepHours - actualSleepHours) + ' hours LESS sleep than needed');
  };
};
calculateSleepDebt()

