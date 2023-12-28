import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Image from './components/Image'
import { Option } from './option'
import gandras from '/images/birds/gandras.jpg'
import { Question } from './question'


function App() {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  function makeGuess(question, optionId) {
    if(question.checkAnswer(optionId)) {
      setIsCorrectAnswer(true)
    } else {
      setIsCorrectAnswer(false)
    }
  }

  const options = [
    new Option({ id: 1, text: 'Gervė' }),
    new Option({ id: 2, text: 'Gandras' }),
    new Option({ id: 3, text: 'Genys' }),
    new Option({ id: 4, text: 'Zylė' })
  ]

  const question = new Question({ id: 1, options, picture: gandras, correctAnswerId: 2 })
  
  return (
    <>
    <div>
      {question.text}
    </div>
      <div>
        <Image picture={question.picture}></Image>
      </div>
      { isCorrectAnswer ? 'Atspėjai!' : '' }
      <div>
        <h2>Variantai</h2>
        {
          question.options.map(option => {
            return (
              <Button onClick={ () => makeGuess(question, option.id) } text={option.text} key={option.id}></Button>
            )
          })
        }
      </div>
    </>
  )
}

export default App
