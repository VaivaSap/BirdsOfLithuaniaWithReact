export class Question {
    constructor({ id, correctAnswerId, text, options, picture }) {
      this.id = id
      this.correctAnswerId = correctAnswerId
      this.text = text || "Koks tai paukštis?"
      this.options = options
      this.picture = picture
    }

    checkAnswer(optionId) {
        return optionId === this.correctAnswerId
    }
  }