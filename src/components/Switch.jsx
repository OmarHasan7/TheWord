import { useState, useEffect } from "react";

function Switch({title, text, name}) {
    let [isChecked, setIsChecked] = useState(localStorage.getItem(`${name}`) === 'true');
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
    <h2 className="font-extrabold mb-3">{ title }</h2>
    <div className="flex justify-between mb-[0.938rem]">
      <span className="text-[0.85rem] text-slate-200">{ text }</span>
      <label className="switch">
          <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" name={name} />
          <span className="slider round"></span>
      </label>
    </div>
  </div>
)
}
export default Switch