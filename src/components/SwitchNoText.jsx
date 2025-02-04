import { useState, useEffect } from "react";

function SwitchNoText({title, name, defaultValue}) {
    let [isChecked, setIsChecked] = useState(localStorage.getItem(`${name}`) === 'true'? true : defaultValue);
      useEffect(() => {
        if(!(localStorage.getItem(name))) {
            localStorage.setItem(name, isChecked);
        }
      }, []);
      useEffect(() => {
        localStorage.setItem(name, isChecked);
      }, [isChecked]);
      
  return (
    <div className="w-[75%] mx-auto mt-3">
        <div className="flex justify-between mb-[0.938rem]">
            <h2 className="font-extrabold mb-1">{ title }</h2>
            <label className="switch">
                <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" name={name} />
                <span className="slider round"></span>
            </label>
        </div>
    </div>
  )
}
export default SwitchNoText