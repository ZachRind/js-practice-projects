let thisYear = new Date();

const howOld = (age, year) => {
  if(year > (thisYear.getFullYear())){
    let calculatedAge = (age + (year - (thisYear.getFullYear())));
    return 'You will be ' + calculatedAge + ' in the year ' + year;

  } else if(year < ((thisYear.getFullYear()) - age)){
      let yearsAgo = ((thisYear.getFullYear()) - year - age);
      return 'The year ' + year + ' was ' + yearsAgo + ' years before you were born';

  } else if(year < (thisYear.getFullYear()) && age > ((thisYear.getFullYear()) - year)){
      let pastAge = (age - (thisYear.getFullYear() - year));
      return 'You were ' + pastAge + ' in the year ' + year; 
  }
}