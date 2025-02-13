import style from "./Home.module.scss";
import { useState, useEffect } from "react";

export default function Home() {
  const capitals = [
    "🌍",
    "🌈",
    "🌟",
    "🌙",
    "🌞",
    "🌻",
    "🌼",
    "🌷",
    "🌺",
    "🌿",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍊",
    "🍋",
    "🍉",
    "🍇",
    "🍓",
    "🍒",
    "🍍",
    "🥝",
    "🍅",
    "🥑",
    "🥕",
    "🌽",
    "🥔",
    "🍠",
    "🍗",
    "🍖",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🍿",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍨",
    "🍧",
    "🍦",
    "🍯",
    "🥛",
    "☕",
    "🍵",
  ];

  // Function to shuffle the capitals array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // State to hold the shuffled capitals
  const [shuffledCapitals, setShuffledCapitals] = useState([]);

  useEffect(() => {
    // Shuffle capitals when the component mounts
    setShuffledCapitals(shuffleArray([...capitals]));
  }, []);

  // Generate an array of card data using the capitals
  const cardsData = shuffledCapitals.map((capital, index) => ({
    title: `${index + 1}`,
    capital: capital,
  }));

  // State to track which card is flipped
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle the flipped state for the clicked card
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <div className={style.container}>

      <div className={style.box}>
        {cardsData.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={style.flip_card}
          >
            <div
              className={`${style.flip_card_inner} ${
                flippedCardIndex === index ? style.flipped : ""
              }`}
            >
              <div className={style.flip_card_front}>
                <h2>{card.title}</h2>
              </div>
              <div className={style.flip_card_back}>
                <h1>{card.capital}</h1>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
