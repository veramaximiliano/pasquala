import { Link } from 'react-router-dom';
import defaults from '../defaults';
import { useEffect, useState } from 'react';

let half1 = [], half2 = [] 

export default function NewPage({language, onWordSave }){
    const [word, setWord] = useState(''),
          [currentAlphabet, setCurrentAlphabet] = useState([])
    
         

    function handleWordChange(e){
        setWord(e.target.value)
    }

    function handleAddLetter(letter){
        setWord(word + letter)
        reset()
    }

    function cycle(option){
        let alphabet = defaults.alphabet
        
        if(option === 'y'){
            alphabet = half1   
            if(currentAlphabet.length == 1){
                return handleAddLetter(currentAlphabet[0])
            }    
        }    
        else if(option === 'n') 
            alphabet = half2
            
        if(alphabet.length >= 2){
            half1 = alphabet.slice(0, Math.floor(alphabet.length/2))
            half2 = alphabet.slice(Math.floor(alphabet.length/2), alphabet.length)  

            alphabet = half1
        }          
        else {
            alphabet = half2
        }
        
        setCurrentAlphabet(alphabet)

        
    }

    function reset(){
        cycle()
    }

    useEffect(reset,[])

    return (
        <article className="page page-new">
            <main>
                <section className="abc-section">
                    <p>{ word.length > 0 ? defaults[language].ui['next letter question'] : defaults[language].ui['first letter question'] }</p>
                    <div className="abc-letters">
                        <ul className="abc-letters-list">
                            {
                                currentAlphabet.map((letter, index) => (
                                    <li key={index} className="abc-letter" onClick={() => handleAddLetter(letter) }>{letter}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="abc-controls">
                        <button className="inverted" onClick={ () => cycle('y')}>{ defaults[language].ui['yes']}</button>
                        <button className="inverted" onClick={ () => cycle('n')}>{ defaults[language].ui['no']}</button>
                        <button className="inverted" onClick={ reset }>{ defaults[language].ui['reset']}</button>
                    </div>
                </section>
                <section className="word-section">
                    <form onSubmit={(e) => { e.preventDefault(); onWordSave(word)}}>
                        <input type="text" placeholder= {defaults[language].ui['your word']} value={ word } onChange={handleWordChange}/>
                    </form>
                </section>
            </main>
            <footer>
                <button onClick={() => onWordSave(word)}>{ defaults[language].ui['save'] }</button>
                <Link className="button inverted" to="/">{ defaults[language].ui['cancel'] }</Link>
            </footer>
        </article>
    )
}