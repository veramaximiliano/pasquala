import { Link } from 'react-router-dom';
import defaults from '../defaults'

export default function HomePage({language, words, onRemoveWord}){
    return (
      <article className="page page-home">
        
        <main>
          <ul className="words-list">
            {
              words.map((word, index) => 
                <li className="word" key={index}> 
                  <p className="word-description">{ defaults[language].words[word] || word }</p>
                  <button className="plain word-remove" onClick={() => onRemoveWord(index)}>+</button>
                </li>
              )
            }  
          </ul>
        </main>

        <footer>
          <Link className="button" to="/new">{defaults[language].ui['new word']}</Link>
        </footer>

      </article>
    )
  }