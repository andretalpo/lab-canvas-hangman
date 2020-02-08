let hangman;

class Hangman {
  constructor() {
    this.words = ['Andre','Joao','Henrique'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter =``;
    this.errorsLeft = 10;

  }

  getWord(){
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keycode){
    let keyChar = String.fromCharCode(keycode)
    return !(keyChar.match(/[A-z]/g) === null)
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    this.guessedLetter +=String.fromCharCode(i)
    this.letters.push(String.fromCharCode(i))
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft--
  }

  checkGameOver() {
    return this.errorsLeft <= 0
  }

  checkWinner() {
    return this.guessedLetter.split(``).sort((e1,e2)=> e1.localeCompare(e2)).join(``)===this.secretWord.split(``).sort((e1,e2)=> e1.localeCompare(e2)).join(``)
  }
  
  checkIfCorrectLetter(keycode){
    let key =String.fromCharCode(keycode)
    if(this.checkIfLetter(keycode) && this.checkClickedLetters(key)){
      let acc = 0
      for(let i = 0;i<this.secretWord.length;i++){
        if(key === this.secretWord[i]) {
          this.addCorrectLetter(keycode)
          acc++
        }
      }
      if(acc<1) this.addWrongLetter(key)
    }
  }
}

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };

hangman = new Hangman()
console.log(hangman.checkIfLetter(76))