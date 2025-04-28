import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import defaults from './defaults'
import HomePage from './pages/HomePage'
import NewPage from './pages/NewPage'
import HelpPage from './pages/HelpPage'
import './App.css'

export default function App() {
  
  const [theme, setTheme] = useState('light'),
        [language, setLanguage] = useState(defaults.language),
        [words, setWords] = useState([])
      
  const navigate = useNavigate()

  function handleLanguageChange(){
    setLanguage(defaults.languages.filter(l => l !== language)[0])
  }      

  function handleThemeChange(theme){
    setTheme(theme)
    document.querySelector('body').setAttribute('data-theme', theme)
  }
  
  function handleWordSave(word){
    if(word !== ''){
      setWords([...words, word])
      navigate('/')
    }
  }

  function handleRemoveWord(index){
    setWords(words.filter((word, i) => i !== index))
  }


  function loadSettings(){
    const pasquala = JSON.parse(localStorage.getItem('vera-pasquala')) || 
                    { 
                      language: defaults.language, 
                      theme: defaults.theme, 
                      words: Object.keys(defaults[defaults.language].words)
                    }
                    
    setLanguage(pasquala.language)
    handleThemeChange(pasquala.theme)
    setWords(pasquala.words)
  }

  function saveSettings(){
    localStorage.setItem('vera-pasquala', JSON.stringify({ language, theme, words }))
  }

  useEffect(loadSettings, [])
  useEffect(saveSettings, [language, words, theme])

  return (
      <div className="pasquala">
        <header>
          <nav>
            <div className="left-nav">
              <button className="plain nav-item nav-language" onClick={ () => handleLanguageChange() }>{ language }</button>
              <button className={`plain nav-item nav-theme nav-theme-${theme}`} onClick={ () => handleThemeChange(theme === 'light' ? 'dark' : 'light') }>
                <svg className="theme-graphic" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="sun" d="M11 4V1M11 21V18M4 11H1M21 11H18M6.05028 15.9497L3.92896 18.0711M18.0711 3.92893L15.9498 6.05025M15.9498 15.9497L18.0711 18.0711M3.92897 3.92893L6.05029 6.05025M15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
                  <path className="moon" d="M10.7188 4.03613C14.2471 4.39599 17 7.37666 17 11C17 14.866 13.866 18 10 18C6.81566 18 4.13005 15.8731 3.28125 12.9629C3.51757 12.987 3.75731 13 4 13C7.86599 13 11 9.86599 11 6C11 5.31802 10.9006 4.65937 10.7188 4.03613Z" stroke="black" strokeLinejoin="round" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            <Link className="nav-item nav-logo" to="/">pasquala</Link>
            <Link className="nav-item" to="/help">{defaults[language].ui['help']}</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage language={language} words={words} onRemoveWord={handleRemoveWord}/>} />
          <Route path="/new" element={<NewPage language={language} onWordSave={handleWordSave}/>} />
          <Route path="/help" element={<HelpPage language={language} />} />
        </Routes>
      </div>
  )
}
