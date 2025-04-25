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
            <button className="plain nav-item nav-language" onClick={ () => handleLanguageChange() }>{ language }</button>
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
