import defaults from "../defaults"
import { Link } from "react-router-dom"

export default function HelpPage({language}){
    return(
        <article className="page page-help">
            <main>
            { 
                language === 'es' && 
                (
                    <p>Esta es la página de ayuda</p>
                )
            }
            { 
                language === 'en' && 
                (
                    <p>This is the help page</p>
                )
            }
            </main>
            <footer>
                <Link className="button inverted" to="/">{ defaults[language].ui['back'] }</Link>
            </footer>
        </article>
    )
}