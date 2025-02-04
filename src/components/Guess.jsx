import LetterBlock from "./LetterBlock";
import { useEffect, useContext, useRef, useState } from "react";
import { AppContext } from "../App";


function Guess({ row, currentRow }) {
    let { guessLetters } = useContext(AppContext);
    let [letters, setLetters] = useState(null);
    useEffect(() => {
        if(row === currentRow) {
            setLetters(guessLetters);
        }
    }, [guessLetters])
    return (
        <div dir="rtl" className="flex gap-[6px] mb-[5px]">
            <LetterBlock letter={letters? letters[0]: null} />
            <LetterBlock letter={letters? letters[1]: null} />
            <LetterBlock letter={letters? letters[2]: null} />
            <LetterBlock letter={letters? letters[3]: null} />
            <LetterBlock letter={letters? letters[4]: null} />
        </div>
    )
}
export default Guess