import { useContext } from "react";
import { AppContext } from "../App";

function Key({ symbol, addClasses, type='letter' }) {
    const {guessLetters, setGuessLetters} = useContext(AppContext);
    function keyEvent()
    {
        if(type === 'letter') {
            if(guessLetters.length < 5) {
                setGuessLetters((prev) => {
                    return [...prev, symbol];
                });
            }
            console.log(guessLetters);
        }
        else if(type === 'delete') {
            if(guessLetters.length >= 1) {
                setGuessLetters((prev) => {
                    prev.pop();
                    return [...prev];
                });
            }
        }
    }

    return (
    <button onClick={() => { keyEvent(type); }} className={`bg-[#656780] rounded-[4.83px] grid items-center justify-center hover:cursor-pointer ${addClasses}`}>
        { symbol }
    </button>
  )
}
export default Key