const tipCalculator = (quality, total) => {
  switch(quality) {
    case 'bad':
      tip = total * .05;
      return tip;
      break;
    case 'ok':
      tip = total * .15;
      return tip;
      break;
    case 'good':
      tip = total * .20;
      return tip;
      break;
    case 'excellent':
      tip = total * .30;
      return tip;
      break
    default:
      tip = total * .18;
      return tip;
      break;
}
}