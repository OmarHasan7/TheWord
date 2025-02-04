// chrome.storage.sync.get(["playOnpause"], (result) => {
//     if(result) {
//         let inputSwitch = document.querySelector("#input-switch");
//         inputSwitch.checked = result.playOnpause;
//         changeText(inputSwitch);
//     }
//   });
  
//   window.addEventListener('load', () => {
//   });
//   document.addEventListener('DOMContentLoaded', () => {    
//     document.querySelector('#input-switch').addEventListener('click', (e) => {
//         changeText(e.target);
//         chrome.storage.sync.set({"playOnpause": e.target.checked}, () => {
//             chrome.storage.sync.get(["playOnpause"], (result) => console.log(result));
//         });
//     });
//   });
function RetriveTheme()
{
    let theme = localStorage.getItem('theme');
    if(!theme) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    }
    let themeSwitch = document.querySelector('input[name="dark-mode"]');
    themeSwitch.checked = theme === 'dark'? true : false;
}

function Listener()
{
  document.querySelector('#input-switch').addEventListener('click', (e) => { changeText(e.target) });
}


export function changeText(input) {
    let x = document.getElementById("light-text");
    if (input.checked) {
        x.innerHTML = "ON";
    } else {
        x.innerHTML = "OFF";
    }
}
  