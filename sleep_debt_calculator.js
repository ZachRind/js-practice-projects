const getSleepHours = day => {
    switch (day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 6;
        break;
      case 'sunday':
        return 9;
        break;
      default:
        return 'Error!';
        break;
    }
  }
  
  const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('You are getting the perfect ammount of sleep!');
    } else if(actualSleepHours > idealSleepHours){
      console.log('You slept ' + (actualSleepHours - idealSleepHours) + '  more than you neeeded too!');
    } else {
      console.log('You should get some more rest. You have a sleep debt of ' + (idealSleepHours - actualSleepHours) + ' hours.');
    }
  }
  
  calculateSleepDebt();
  
  