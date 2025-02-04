import Guess from "./Guess";
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App";



function GuessBoard() {
    const {letters, row} = useContext(AppContext);
    useEffect(() => {}, [letters])
    return (
    <div className="mx-auto w-max">
        <Guess key={1} row={0} currentRow={row} />
        <Guess key={2} row={1} currentRow={row} />
        <Guess key={3} row={2} currentRow={row} />
        <Guess key={4} row={3} currentRow={row} />
        <Guess key={5} row={4} currentRow={row} />
        <Guess key={6} row={5} currentRow={row} />
    </div>
  )
}
export default GuessBoard