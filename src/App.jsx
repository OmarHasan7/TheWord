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
import Alert from "./components/Alert";

export const AppContext = createContext();
export const DialogContext = createContext();

function App() {
  let [guessLetters, setGuessLetters] = useState([]);
  let [row, setRow] = useState(0);
  let [dialogOpen, setDialogOpen] = useState(false);
  let [dialogText, setDialogText] = useState('');
  return (
    <div className="relative ">
      <AppContext.Provider value={{guessLetters, setGuessLetters, row, setRow}}>
          <header className="flex w-[min(55.5rem,95%)] mx-auto mt-7 justify-around">
            <NextWordTimer />
            <Logo />
            <Navbar />
          </header>
          <GuessBoard />
          <DialogContext.Provider value={{setDialogOpen, setDialogText}}>
            <Keyboard/>
          </DialogContext.Provider>
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
      <Alert dialogOpen={dialogOpen} text={dialogText} />
    </div>
  )
}


export default App
