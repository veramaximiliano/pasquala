import defaults from "../defaults"
import { Link } from "react-router-dom"

export default function HelpPage({language}){
    return(
        <article className="page page-help">
            <main>
            { 
                language === 'es' && 
                (<>
                    <h2>Acerca de Pasquala</h2>
                    <p>Pasquala es una aplicación creada para optimizar la interacción comunicativa entre pacientes con limitaciones en su capacidad de expresión habitual y las personas que los rodean, como ser familiares o personal de salud. Su función principal es asistir a estos últimos en la interpretación de las necesidades y sentimientos del paciente, superando los desafíos que impone la limitación física en la comunicación habitual.</p>

                    <h2>¿Cómo funciona?</h2>
                    <p>Pasquala facilita la comunicación entre el paciente y un usuario (quien guía el proceso en la aplicación). El sistema está optimizado para cualquier tipo de dispositivo, aunque se recomienda uno con pantalla grande.</p>
                    <h3>Flujo de uso</h3>
                    <ol>
                        <li><strong>El paciente piensa</strong> una palabra que quiera transmitir al usuario.</li>
                        <li><strong>Pantalla principal (Usuario)</strong>  <br/>
                            <ul>
                                <li>Muestre la lista de Palabras de la pantalla principal al paciente, enunciándolas si es necesario.
                                </li>
                                <li>Si la palabra está aquí, el proceso finaliza.</li>
                                <li>Si no, toque "Nueva palabra" (abajo) para acceder a esta pantalla.</li>
                            </ul>
                            
                        <li><strong>Pantalla "Nueva palabra" (Usuario y Paciente):</strong>
                            <ul>
                                <li>El sistema mostrará en todo momento un grupo de letras ordenadas alfabéticamente y una pregunta que deberá responder el paciente, por "si" o por "no". Para ello puede gesticular con su cabeza, o en caso de no poder hacerlo, puede parpadear con sus ojos, lo importante es que el usuario comprenda la respuesta. <br/><br/>
                                La palabra se generará letra por letra y estará visible en todo momento en la caja de texto "Tu palabra".</li>
                            
                                <li>
                             Para comenzar, muestre la pantalla al paciente y pregunte si la primera letra de su palabra se encuentra en el grupo mostrado. Toque "Si" o "No" según la respuesta del paciente. 
                             </li>
                             <li>
                             El proceso se repite hasta aislar la letra, con una cantidad máxima de 5 preguntas por letra. Tenga en cuenta que en la práctica, el paciente siempre puede dirigir la mirada hacia la letra deseada, reduciendo el tiempo de búsqueda a 2 o 3 preguntas por letra. Una vez identificada, el usuario puede tocar directamente sobre la letra para agregarla a la palabra.
                             </li>
                             <li>
                             <strong>Corrección (Usuario):</strong> En caso de error o confusión, el usuario puede presionar "Restablecer" para comenzar a buscar la letra nuevamente. También es posible corregir o completar la palabra manualmente tocando en la caja de texto donde se forma la palabra.
                             </li>
                             <li>
                                <strong>Guardar o Cancelar (Usuario):</strong> 
                                    <ul>
                                        <li><strong>"Guardar" (abajo):</strong> Añade la palabra generada a la lista de acceso rápido en la pantalla principal. Esta persistirá hasta limpiar el almacenamiento local del navegador.
                                        </li>
                                        <li>
                                        <strong>"Cancelar" (abajo):</strong> Vuelve a la pantalla principal sin guardar la palabra.
                                        </li>
                                    </ul>
                             </li>
                             </ul>

                        </li>
                        </li>
                        <li>
                            <strong>Opciones adicionales (Navegación Superior - Usuario):</strong>
                            <ul>
                                <li><strong>Idioma:</strong> Seleccione entre español (<strong>ES</strong>, predeterminado) e inglés (<strong>EN</strong>).</li>
                                <li><strong>Tema:</strong> Cambie entre los modos diurno y nocturno.</li>
                            </ul>
                        </li>
                    </ol>

                    <h2>Su opinión es importante</h2>    
                    <p>Pasquala fue originalmente creada para ayudar a una persona en terapia intensiva que sólo podía mover su cabeza y sus ojos para comunicarse. La aplicación facilitó la interacción con seres queridos, cuidadores y profesionales de la salud. Hoy, Pasquala es una herramienta pública y gratuita para quienes quieran hacer uso de ella. Sus sugerencias, ideas para mejorar y reportes de errores son muy importantes y puede compartirlos enviando un mail a vera.maximilianoj@gmail.com.  </p>
                    <h2>Aviso legal</h2>
                    <h3>Acerca de la aplicación y su uso</h3>
                    <p>Se informa al usuario que esta aplicación es de uso gratuito y se encuentra en una fase de desarrollo continuo. Por lo tanto, no se ofrece garantía alguna sobre su efectividad total. El desarrollador no será responsable por las consecuencias derivadas de un uso indebido o inapropiado de la presente aplicación.</p>
                    <h3>Privacidad y uso de datos</h3>
                    <p>La presente aplicación emplea el almacenamiento local del navegador de su dispositivo con el único fin de preservar las palabras generadas por el usuario. Se declara explícitamente que <strong>esta aplicación no recopila, transmite ni almacena datos de carácter privado fuera del ámbito exclusivo de su dispositivo</strong>. Para obtener información detallada sobre el funcionamiento del almacenamiento local, se facilita el siguiente <a href="https://developer.mozilla.org/es/docs/Web/API/Window/localStorage">enlace</a>. </p>
                    
                 </>)
            }
            { 
                language === 'en' && 
                (<>
                    <h2>About Pasquala</h2>
                    <p>Pasquala is an application created to optimize communicative interaction between patients with limitations in their usual expressive abilities and the people around them, such as family members or healthcare personnel. Its main function is to assist the latter in interpreting the patient's needs and feelings, overcoming the challenges posed by physical limitations in habitual communication.</p>

                    <h2>How it Works?</h2>
                    <p>Pasquala facilitates communication between the patient and a user (who guides the process in the application). The system is optimized for any type of device, although one with a large screen is recommended.</p>

                    <h3>Usage Flow</h3>
                    <ol>
                        <li><strong>The patient thinks of</strong> a word they want to convey to the user.</li>
                        <li><strong>Main screen (User)</strong>  <br/>
                            <ul>
                                <li>Show the list of words on the main screen to the patient, enunciating them if necessary.</li>
                                <li>If the word is here, the process ends.</li>
                                <li>If not, tap "New word" (below) to access this screen.</li>
                            </ul>
                            
                        <li><strong>"New word" screen (User and Patient):</strong>
                            <ul>
                                <li>The system will continuously display a group of alphabetically ordered letters and a question that the patient must answer with "yes" or "no." To do this, they can gesture with their head, or if unable to do so, they can blink their eyes; the important thing is that the user understands the response. <br/><br/>
                                The word will be generated letter by letter and will be visible at all times in the "Your word" text box.</li>
                                <li>
                                To begin, show the screen to the patient and ask if the first letter of their word is in the displayed group. Tap "Yes" or "No" according to the patient's response. 
                             </li>
                             <li>
                             The process is repeated until the letter is isolated, with a maximum of 5 questions per letter. Keep in mind that in practice, the patient can always direct their gaze towards the desired letter, reducing the search time to 2 or 3 questions per letter. Once identified, the user can tap directly on the letter to add it to the word.
                             </li>
                             <li>
                             <strong>Correction (User):</strong> In case of error or confusion, the user can press "Reset" to begin searching for the letter again. It is also possible to correct or complete the word manually by tapping in the text box where the word is being formed.
                             </li>
                             <li>
                                <strong>Save or Cancel (User):</strong> 
                                    <ul>
                                        <li><strong>"Save" (below):</strong> Adds the generated word to the quick access list on the main screen. This will persist until the browser's local storage is cleared.
                                        </li>
                                        <li>
                                        <strong>"Cancel" (below):</strong> Returns to the main screen without saving the word.
                                        </li>
                                    </ul>
                             </li>
                             </ul>

                        </li>
                        </li>
                        <li>
                            <strong>Additional options (Top Navigation - User):</strong>
                            <ul>
                                <li><strong>Language:</strong> Select between Spanish (<strong>ES</strong>, default) and English (<strong>EN</strong>).</li>
                                <li><strong>Theme:</strong> Switch between light and dark modes.</li>
                            </ul>
                        </li>
                    </ol>

                    <h2>Your opinion matters</h2>    
                    <p>Pasquala was originally created to help a person in intensive care who could only move their head and eyes to communicate. The application facilitated interaction with loved ones, caregivers, and healthcare professionals. Today, Pasquala is a public and free tool for anyone who wants to use it. Your suggestions, ideas for improvement, and bug reports are very important and can be shared by sending an email to vera.maximilianoj@gmail.com. </p>
                    <h2>Legal notice</h2>
                    <h3>About the application and its use</h3>
                    <p>The user is informed that this application is free to use and is in a continuous development phase. Therefore, no guarantee is offered regarding its total effectiveness. The developer will not be responsible for the consequences arising from improper or inappropriate use of this application.</p>
                    <h3>Privacy and Data Usage</h3>
                    <p>
                    This application uses the local storage of your device's browser for the sole purpose of preserving user-generated words. It is explicitly stated that <strong>this application does not collect, transmit, or store private data outside the exclusive scope of your device</strong>. For detailed information on how local storage works, the following <a href="https://developer.mozilla.org/en/docs/Web/API/Window/localStorage" target="_blank">link</a> is provided.
                    </p>
                    
                 </>)
            }
            </main>
            <footer>
                <Link to={-1} className="button inverted">{ defaults[language].ui['back'] }</Link>
            </footer>
        </article>
    )
}