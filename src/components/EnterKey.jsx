import { useContext } from "react";
import { AppContext, DialogContext } from "../App";


function EnterKey({ symbol, addClasses, type='letter' }) {
    const {guessLetters, setGuessLetters} = useContext(AppContext);
    const {setDialogOpen, setDialogText} = useContext(DialogContext);
    function keyEvent()
    {
        if(guessLetters.length < 5) {
            setDialogText('اقل من خمسة احرف');
            setDialogOpen(true);
            setTimeout(() => setDialogOpen(false), 1500);
        }
        else if(guessLetters.length = 5) {
            const guessCheck = async () => {
                let post = await fetch('URl', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(guessLetters),
                });
                let response = await post.json();
                if(response.ok && response !== false) {
                    // TODO Logic!!
                }
            };
            guessCheck();
        }
    }

    return (
    <button onClick={() => keyEvent() } className={`bg-[#656780] rounded-[4.83px] grid items-center justify-center hover:cursor-pointer w-[76.53px] h-11`}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_24)">
            <path d="M0.499939 13.8716L11.0729 19.9132V15.382H24.6666V4.80905L20.1354 7.82989V10.8507H11.0729V6.31947L0.499939 13.8716Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_3_24">
            <rect width="24.1667" height="24.1667" fill="white" transform="translate(0.499939 0.277771)"/>
            </clipPath>
            </defs>
        </svg>
    </button>
  )
}
export default EnterKey