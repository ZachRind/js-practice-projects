const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  let currentStrand =mockUpStrand();
  
  const pAequorFactory = (number, mockStrand) => {
    return {
    specimenNum: number,
    dna: mockStrand,
    mutate(){
      let randomIndex = Math.floor(Math.random() * this.dna.length)
       let newBase = returnRandBase();
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
        },
    compareDNA(){
        let example1 = this.dna;
        let example2 = currentStrand;
        let counter = 0;
        for(let i = 0; i < example1.length; i++){
          for(let j = 0; j < example2.length; j++){
            if(example2[j] === example1[i] && i === j){
              counter++;
            }
          }
        }
        console.log(`Specimen 1 and Specimen 2 have ${Math.floor(100 / 15 * counter)}% DNA in common`)
    },
     willLikelySurvive () {
        let dnaScore = 0;
        const survivedStrand = [];
        for (let l = 0; l < this.dna.length; l++) {
          if (this.dna[l] === 'C' || this.dna[l] === 'G') {
           dnaScore = dnaScore + 1;
          }
        }
        if (Math.floor(100 / 15 * dnaScore) > 60) {
          survivedStrand.push(this.dna);
        }
        return console.log(survivedStrand);
      }
      }
    };
    
  
  
  
  
  
  