import { useContext } from "react";
import { AppContext } from "../App";

function LetterBlock({ letter }) {
    let { guessLetters } = useContext(AppContext);
    return (
        <div className="w-14 h-14 border-[#ffffff66] border-[1px] rounded-[3px] grid items-center text-center text-2xl">
            { letter }
        </div>
    )
}
export default LetterBlock