import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom'; 
import './App.css';
import Button from './components/Button';
import Image from './components/Image';
import { Option } from './option';
import { Question } from './question';
import gandras from '/images/birds/gandras.jpg';
import didzioji_antis from '/images/birds/didzioji_antis.jpg';
import gulbe_giesmininke from '/images/birds/gulbe_giesmininke.jpg';
import gulbe_nebyle from '/images/birds/gulbe_nebyle.jpg';
import kuoduotoji_antis from '/images/birds/kuoduotoji_antis.jpg';
import mandarinine_antis from '/images/birds/mandarinine_antis.jpg';
import medzioklinis_sakalas from '/images/birds/medzioklinis_sakalas.jpg';
import meldines_nendrinukes from '/images/birds/meldines_nendrinukes.jpg';
import melynoji_zyle from '/images/birds/melynoji_zyle.jpg';
import namine_peleda from '/images/birds/namine_peleda.jpg';
import pilkoji_gerve from '/images/birds/pilkoji_gerve.jpg';
import pilkoji_zasis from '/images/birds/pilkoji_zasis.jpg';
import tetervinas from '/images/birds/tetervinas.jpg';
import tulzys from '/images/birds/tulzys.jpg';



function App() {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  //const [currentScore, setCurrentScore] = useState(0);

	const navigate = useNavigate();

	const navigateToQuestions = () => {
		navigate("/klausimai");
	};
  

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

  const options2 = [
    new Option({ id: 1, text: 'Kuoduotoji zylė' }),
    new Option({ id: 2, text: 'Paprastasis žvirblis' }),
    new Option({ id: 3, text: 'Didžioji zylė' }),
    new Option({ id: 4, text: 'Mėlynoji zylė' })
  ]
  
  const options3 = [
    new Option({ id: 1, text: 'Naminė pelėda' }),
    new Option({ id: 2, text: 'Didysis apuokas' }),
    new Option({ id: 3, text: 'Paprastasis tulžys' }),
    new Option({ id: 4, text: 'Uralinė pelėda' })
  ]

  const options4 = [
    new Option({ id: 1, text: 'Gulbė giesmininkė' }),
    new Option({ id: 2, text: 'Mažoji gulbė' }),
    new Option({ id: 3, text: 'Juodoji gulbė' }),
    new Option({ id: 4, text: 'Gulbė nebylė' })
  ]
  
  const options5 = [
    new Option({ id: 1, text: 'Gulbė giesmininkė' }),
    new Option({ id: 2, text: 'Mažoji gulbė' }),
    new Option({ id: 3, text: 'Juodoji gulbė' }),
    new Option({ id: 4, text: 'Gulbė nebylė' })
  ]
  
  const options6 = [
    new Option({ id: 1, text: 'Islandinis bėgikas' }),
    new Option({ id: 2, text: 'Tilvikas' }),
    new Option({ id: 3, text: 'Tulžys' }),
    new Option({ id: 4, text: 'Lygutė' })
  ]
  
  const options7 = [
    new Option({ id: 1, text: 'Kuoduotoji antis' }),
    new Option({ id: 2, text: 'Žiloji antis' }),
    new Option({ id: 3, text: 'Jerubė' }),
    new Option({ id: 4, text: 'Dryžagalvė kryklė' })
  ]
  
  const options8 = [
    new Option({ id: 1, text: 'Juodasis gandras' }),
    new Option({ id: 2, text: 'Svirbelis' }),
    new Option({ id: 3, text: 'Pilkoji gervė' }),
    new Option({ id: 4, text: 'Pilkasis garnys' })
  ]
  
  const options9 = [
    new Option({ id: 1, text: 'Tetervinas' }),
    new Option({ id: 2, text: 'Kurtinys' }),
    new Option({ id: 3, text: 'Ausuotasis kragas' }),
    new Option({ id: 4, text: 'Želmeninė žąsis' })
  ]
  
  const options10 = [
    new Option({ id: 1, text: 'Didžioji antis' }),
    new Option({ id: 2, text: 'Pilkoji žąsis' }),
    new Option({ id: 3, text: 'Urvinė antis' }),
    new Option({ id: 4, text: 'Riešutinė' })
  ]
  
  const options11 = [
    new Option({ id: 1, text: 'Margasparnė musinukė' }),
    new Option({ id: 2, text: 'Šiaurinė pečialinda' }),
    new Option({ id: 3, text: 'Meldinė nendrinukė' }),
    new Option({ id: 4, text: 'Sodinė devynbalsė' })
  ]
  
  const options12 = [
    new Option({ id: 1, text: 'Slanka' }),
    new Option({ id: 2, text: 'Didžioji antis' }),
    new Option({ id: 3, text: 'Šalminė antis' }),
    new Option({ id: 4, text: 'Didžioji kuolinga' })
  ]

   
  const options13 = [
    new Option({ id: 1, text: 'Krantinis tilvikas' }),
    new Option({ id: 2, text: 'Tikutis' }),
    new Option({ id: 3, text: 'Keršulis' }),
    new Option({ id: 4, text: 'Mandarininė antis' })
  ]

   
  const options14 = [
    new Option({ id: 1, text: 'Rudasis peslys' }),
    new Option({ id: 2, text: 'Vapsvaėdis' }),
    new Option({ id: 3, text: 'Medžioklinis sakalas' }),
    new Option({ id: 4, text: 'Mažasis erelis rėksnys' })
  ]
  
  const question = new Question({ id: 1, options, picture: gandras, correctAnswerId: 2 })
  const question2 = new Question({id: 2, options2, picture: melynoji_zyle, correctAnswerId:4})
  const question3 = new Question({id: 3, options3, picture: namine_peleda, correctAnswerId:1})
  const question4 = new Question({id: 4, options4, picture: gulbe_giesmininke, correctAnswerId: 1})
  const question5 = new Question({id: 5, options5, picture: gulbe_nebyle, correctAnswerId:4})
  const question6 = new Question({id: 6, options6, picture: tulzys, correctAnswerId:3})
  const question7 = new Question({id: 7, options7, picture: kuoduotoji_antis, correctAnswerId:1})
  const question8 = new Question({id: 8, options8, picture: pilkoji_gerve, correctAnswerId:3})
  const question9 = new Question({id: 9, options9, picture: tetervinas, correctAnswerId: 1})
  const question10 = new Question({id: 10, options10, picture: pilkoji_zasis , correctAnswerId:2})
  const question11 = new Question({id: 11, options11, picture: meldines_nendrinukes , correctAnswerId:3})
  const question12 = new Question({id: 12, options12, picture: didzioji_antis, correctAnswerId:2})
  const question13 = new Question({id: 13, options13, picture: mandarinine_antis, correctAnswerId:4})
  const question14 = new Question({id: 14, options14, picture: medzioklinis_sakalas, correctAnswerId: 3})

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

function NextQuestion(){
  	if (currentQuestionIndex + 1 >= questions.length) {
			alert("Pabaiga");
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			console.log("new", currentQuestionIndex);
			setCurrentQuestion(questions[currentQuestionIndex + 1]);
		}
		setGuessMade(false);
	}




  return (
    <>
    <div>
      {question.text}
    </div>
      <div>
        <Image picture={question.picture}></Image>
      </div >
      <div style = {{backgroundColor: isCorrectAnswer ? 'green' : 'purple'}} >
      { isCorrectAnswer ? 'Atspėjai!' : 'Bandyk dar kartą' }
      </div>
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
