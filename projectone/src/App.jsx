import './App.css';
import Card from './Card.jsx'
import gtapic from './assets/gta.jpg'
import callofduty from './assets/callofduty.jpg'
import sleepingdogs from './assets/sleeping dogs.jpg'
import watchdogs from './assets/watchdogs.jpg'
import reddeadredemption from './assets/reddeadredemption.jpg'
import goftsushima from './assets/ghosttsu.jpg'
import spiderman from './assets/spiderman.jpg'
import cyberpunk from './assets/cyberpunk.jpg'
import mafia from './assets/mafiagame.jpg'
import assassinscreed from './assets/assasinscreed.jpg'
import nba2k from './assets/nba2k.jpeg'

const App = () => {

  const cardData = [
    {
      imgSrc: gtapic,
      title: "GTA",
      description: "Explore an open-world crime saga where you build your empire through heists, action, and chaos.",
      link: "https://www.rockstargames.com/"
    },
    {
      imgSrc: callofduty,
      title: "Call Of Duty",
      description: "Experience intense first-person military combat across various modern and historical battlegrounds.",
      link: "https://www.callofduty.com"
    },
    {
      imgSrc: assassinscreed,
      title: "Assassin's Creed",
      description: "Step into the shadows as a skilled assassin and unravel historical conspiracies across different eras.",
      link: "https://www.ubisoft.com/game/assassins-creed"
    },
    {
      imgSrc: sleepingdogs,
      title: "Sleeping Dogs",
      description: "Immerse yourself in a gripping undercover cop story set in the vibrant streets of Hong Kong.",
      link: "https://store.steampowered.com/app/307690/Sleeping_Dogs_Definitive_Edition/"
    },
    {
      imgSrc: mafia,
      title: "Mafia",
      description: "Enter the world of organized crime in a dramatic narrative set during the Prohibition era.",
      link: "https://mafiagame.com"
    },
    {
      imgSrc: reddeadredemption,
      title: "Red Dead Redemption",
      description: "Venture through the Wild West in this epic tale of outlaws, survival, and redemption.",
      link: "https://www.rockstargames.com/reddeadredemption2"
    },
    {
      imgSrc: spiderman,
      title: "Spider-Man",
      description: "Swing through New York City as the iconic superhero and take down villains in a thrilling adventure.",
      link: "https://www.playstation.com/en-us/games/marvels-spider-man/"
    },
    {
      imgSrc: cyberpunk,
      title: "Cyberpunk",
      description: "Navigate a futuristic dystopian city where cyber-enhancements and high-stakes choices shape your destiny.",
      link: "https://www.cyberpunk.net"
    },
    {
      imgSrc: goftsushima,
      title: "Ghost of Tsushima",
      description: "Defend your homeland as a skilled samurai during the Mongol invasion of feudal Japan.",
      link: "https://www.playstation.com/en-us/games/ghost-of-tsushima/"
    },
    {
      imgSrc: watchdogs,
      title: "Watch Dogs",
      description: "Hack into the digital world and use technology to fight against corruption in a modern cityscape.",
      link: "https://www.ubisoft.com/game/watch-dogs"
    },

    {
      imgSrc: nba2k,
      title: "NBA 2K",
      description: "Experience the excitement of professional basketball with realistic gameplay.",
      link: "https://nba.2k.com/"
    },
    
  ];



  return (
    <div className="gamecard-app">
      <h2>TOP RPG GAMES TO PLAY</h2>
      {cardData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
          pagelink= {card.link}
        />
      ))}
    </div>
  )
}

export default App