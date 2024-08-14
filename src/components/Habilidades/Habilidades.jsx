import './Habilidades.css';
import htmlLogo from '../img/html-5.png';
import cssLogo from '../img/css-3.png';
import jsLogo from '../img/js.png';
import reactLogo from '../img/react.png';
import bootstrapLogo from '../img/bootstrap.png';
import gitLogo from '../img/git.png';

export default function Habilidades() {

    return(
        <section id='habilidades'>
            <div className="titulo-habilidades">
            <h1>Habilidades</h1>
            </div>
            <div className="tecnologias">
                <div className="html tecnologia">
                    <p className='p-tecnologia'>HTML</p>
                    <img src={htmlLogo} alt="HTML logo" />
                    </div>
                <div className="css tecnologia">
                    <p className='p-tecnologia'>CSS</p>
                    <img src={cssLogo} alt="CSS logo" />
                    </div>
                <div className="js tecnologia">
                    <p className='p-tecnologia'>JavaScript</p>
                    <img src={jsLogo} alt="JavaScript logo" />
                    </div>
                <div className="react tecnologia">
                    <p className='p-tecnologia'>React.js</p>
                    <img src={reactLogo} alt="React logo" />
                    </div>
                <div className="bootstrap tecnologia">
                    <p className='p-tecnologia'>Bootstrap</p>
                    <img src={bootstrapLogo} alt="Bootstrap logo" />
                    </div>
                <div className="git tecnologia">
                    <p className='p-tecnologia'>Git</p>
                    <img src={gitLogo} alt="Git logo" />
                    </div>
            </div>
        </section>
    );
};