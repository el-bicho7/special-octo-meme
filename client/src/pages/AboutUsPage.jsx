import Cris from '../assets/Cris.jpg'
import Flavio from '../assets/Flavio.jpg'
import Isis from '../assets/Isis.jpg'
import Dalia from '../assets/Dalia.jpg'

export default function AboutPage() {
  return (
    <div className="text">
        <h1>About Us</h1>

        <img className="rounded-lg mr-4" width="65" height="70" src={Cris} />
        <h2 className="m-auto new-amsterdam-regular text-6xl text-primary p">Cristian Loera </h2>
          <p>
              Hello! I'm an Industrial Engineer, that found fun on coding. I'm a big sports aficionado, specially for the Champions League. I won last NFL fantasy football.<br></br>
              A book that I love: Ringside Seat to a Revolution: An Underground Cultural History of El Paso and Juarez, 1893-1923, by David Dorado Romo.<br></br>
              This is a great book that talks about my hometown in times of the Revolution.<br></br>
              A book that changed my way of thinking: Beginning Programming for Dummies, by Wallace Wang.<br></br>
              A book that I want to read: Las cosas que perdimos en el fuego, by Mariana Enriquez.<br></br>
              <br></br>
              <br></br>
          </p>

        <img className="rounded-lg mr-4" width="65" height="70" src={Flavio} />
        <h2 className="m-auto new-amsterdam-regular text-6xl text-primary p">Flavio Castorena </h2>
          <p>
              Hello! I am a Computer Systems Engineer. I love to play the piano and to dance. <br></br>
              A book that I love: Buddha, by Deepack Chopra.<br></br>
              A book that changed my way of thinking: The disappearance of the Universe, by Gary Renard.<br></br>
              A book that I want to read: The Lifetimes When Jesus and Buddha Knew Each Other, by Gary Renard.<br></br>
              <br></br>
              <br></br>
          </p>

        <img className="rounded-lg mr-4" width="65" height="70" src={Isis} />
        <h2 className="m-auto new-amsterdam-regular text-6xl text-primary p">Isis Nava </h2>
          <p>
              Hi! I'm an internationalist that embrace the ambiguity of Social Science/Humanities with Technology in a changing world. I love Nature and outdoor activities, spend time with family and friends, and reading but mostly writing.<br></br>
              A book that I love: Frankenstein, by Mary Shelley.<br></br>
              A book that changed my way of thinking: Origins: Cosmos, Earth, And Mankind, by Yves Coppens, Hubert Reeves, Dominique Simonnet and Joel de Rosney. <br></br>
              A book that I want to read: Crime and Punishment, by Fyodor Dostoevsky.<br></br>
              <br></br>
              <br></br>
          </p>

        <img className="rounded-lg mr-4" width="65" height="70" src={Dalia} />
        <h2 className="m-auto new-amsterdam-regular text-6xl text-primary p">Dalia Gómez </h2>
          <p>
              Hello! I am a Biotechnology Engineer passionate for technology. I love swimming, dancing, traveling and hanging out with my family. <br></br>
              A book that I love: Fahrenheit 451, by Ray Bradbury. <br></br>
              A book that changed my way of thinking: Sophie's World, by Jostein Gaarder <br></br>
              A book that I want to read: War and Peace, by Leo Tolstoy.<br></br>
              <br></br>
              <br></br>
          </p>

    </div>
  );
}
