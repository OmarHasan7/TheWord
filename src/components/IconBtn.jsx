function ToggleDialog(e)
{
    let dialog = document.querySelector(`#${e.target.getAttribute('data-id')}`);
    dialog.open = !dialog.open;
}

function IconBtn({id, svg}) {
  return (
    <button onClick={(e) => ToggleDialog(e)} className="hover:cursor-pointer" id={id}>{ svg }</button>
  )
}
export default IconBtn