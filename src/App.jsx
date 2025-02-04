import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import NextWordTimer from "./components/NextWordTimer";
import GuessBoard from "./components/GuessBoard";
import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import js from "@eslint/js";
import Dialog from "./components/Dialog";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import Info from "./components/Info";

export const AppContext = createContext();

function App() {
  let [guessLetters, setGuessLetters] = useState([]);
  let [row, setRow] = useState(0);
  return (
    <div className="relative ">
      <AppContext.Provider value={{guessLetters, setGuessLetters, row, setRow}}>
          <header className="flex w-[min(55.5rem,95%)] mx-auto mt-7 justify-around">
            <NextWordTimer />
            <Logo />
            <Navbar />
          </header>
          <GuessBoard />
          <Keyboard/>
      </AppContext.Provider>
      <Dialog id={'stats'}>
        <Stats />
      </Dialog>
      <Dialog id={'settings'}>
        <Settings />
      </Dialog>
      <Dialog id={'info'}>
        <Info />
      </Dialog>

    </div>
  )
}


export default App
