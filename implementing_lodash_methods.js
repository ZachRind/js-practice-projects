const _ = {
    _clamp (number, lowerBound, upperBound){
      if (number > upperBound){
      number = Math.min(number, upperBound);
      } else if(number < lowerBound) {
      number = Math.max(number, lowerBound);
      }
      return number;
    },
  
  _inRange (num, start, end){
    if(end = undefined){
      end = start;
      start = 0;
    }
  
    if(start > end){
      let temp = end;
      end = start;
      start = temp;
    }
  
  let isInRange = (start <= num && num <= end);
  return isInRange;

  },
  
    _words(string){
    const words = string.split(' ');
    return words;
  }

  
  
  }
