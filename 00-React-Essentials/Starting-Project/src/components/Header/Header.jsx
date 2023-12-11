// Css classes in this file will affect throughout all the webpage even though the css file is only it is imported here
import "./Header.css";
import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* Might be lost through build process */}
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />*/} {/* shouln't load img through src */}
      <img src={reactImg} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
  </header>
  );
}
