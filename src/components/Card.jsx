import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import DiceBtn from "./DiceBtn";

export default function Card() {
  const [randomNum, setRandomNum] = useState("");
  const [randomAdvice, setRandomAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    setIsLoading(true);
    const rand = Math.floor(Math.random() * 217);
    const res = await fetch(`https://api.adviceslip.com/advice/${rand}`);
    const data = await res.json();
    setRandomNum(rand);
    setRandomAdvice(data.slip.advice);
    setIsLoading(false);
  };

  return (
    <div
      className={`mx-3 p-8 rounded-lg ${styles.card__dark_graylish_blue} text-center sm:max-w-sm relative`}
    >
      <p
        className={`${styles.advice_title__neon_green} uppercase text-xs font-extrabold mb-5`}
      >
        Advice #{randomNum}
      </p>

      <h2 className={`${styles.quote__color} font-extrabold text-xl mb-5`}>
        {isLoading ? "Loading..." : randomAdvice}
      </h2>

      <div className={`${styles.line} mb-5`}>
        <div className={`${styles.line__text} mx-1`}></div>
        <div className={`${styles.line__text} mx-1`}></div>
      </div>
      <DiceBtn getAdvice={getAdvice} />
    </div>
  );
}
