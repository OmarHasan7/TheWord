import { useState } from "react"

function toggle() {

}

function Dialog({ children, id }) {
    let [isOpen, setIsOpen] = useState(false);
  return (
    <dialog id={id} open={isOpen} className="fixed top-[5.7rem] w-[min(34.375rem,90%)] h-[min(33.6rem,95%)] overflow-y-auto bg-[#010B13] dialog-border rounded-lg">
        <form method="dialog">
            <button className="absolute top-4 right-5">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 24C18.5753 24 23.5 19.0753 23.5 13C23.5 6.9247 18.5753 2 12.5 2C6.4247 2 1.5 6.9247 1.5 13C1.5 19.0753 6.4247 24 12.5 24Z" stroke="white" strokeOpacity="0.8" strokeWidth="2.2" strokeLinejoin="round"/>
                    <path d="M15.6113 9.88861L9.38861 16.1113M9.38861 9.88861L15.6113 16.1113" stroke="white" strokeOpacity="0.8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </form>
        { children }
    </dialog>
  )
}
export default Dialog