import dice from "../assets/icon-dice.svg";
import styles from "./DiceBtn.module.css";

export default function DiceBtn({ getAdvice }) {
  return (
    <button
      onClick={getAdvice}
      className={`${styles.dice_btn} p-5 rounded-full hover:cursor-pointer absolute transform -translate-x-1/2`}
    >
      <img src={dice} alt="dice" />
    </button>
  );
}
