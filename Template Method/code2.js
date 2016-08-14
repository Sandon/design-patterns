class BallSports {
  constructor () {
    this._init()
  }
  _init () {
    this.playersEnter()
    this.pickTheField()
    this.blowBeginWhistle()
    this.startGame()
    this.blowEndWhistle()
    this.playersLeave()
  }
  playersEnter () {
    // playersEnter
  }
  pickTheField () {
    // pickTheField
  }
  blowBeginWhistle () {
    // blowBeginWhistle
  }
  startGame () {
    // empty, leave the sub class to override
    // football and basketball are different
  }
  blowEndWhistle () {
    // blowEndWhistle
  }
  playersLeave () {
    // playersLeave
  }
}

class Football extends BallSports {
  startGame () {
    // implementation according to football rule
  }
}

class Basketball extends BallSports {
  startGame () {
    // implementation according to basketball rule
  }
}