import Switch from "./Switch";
import SwitchNoText from "./SwitchNoText";


function Settings() {

  return (
    <div dir="rtl">
        <h1 className="dialog-title mt-4 mb-7 text-xl font-extrabold tracking-widest">إعدادات</h1>
        <Switch title={'المستوى الصعب'} text={'يجب استخدام الاحرف الصحيحة في التخمين التالي'} name={'difficulty'} />
        <div className="divider-line"></div>
        <Switch title={'تلميح الاحرف المتكررة'} text={'اظهار علامة عندما يكون الحرف متكرر'} name={'repeated-hint'} />
        <div className="divider-line"></div>
        <SwitchNoText title={'الوضع الليلي'} name={'dark-mode'} defaultValue={true} />
        <div className="divider-line"></div>
        <SwitchNoText title={'وضع عمى الألوان'} name={'color-blind-mode'} defaultValue={null} />
        <div className="divider-line"></div>
        <div dir="ltr">
          <div className="flex items-center w-fit mx-auto">
            <div dir="rtl" className="w-[202px] grid grid-cols-logo-small md:grid-cols-logo grid-rows-1 gap-[2px] scale-[0.555]">
              <span className="logo-block bg-word-green">ا</span>
              <span className="logo-block bg-word-green">لـ</span>
              <span className="logo-block bg-word-dark-grey">كـ</span>
              <span className="logo-block bg-word-yellow">لـ</span>
              <span className="logo-block bg-word-dark-grey">مـ</span>
              <span className="logo-block bg-word-dark-grey">ـة</span>
            </div>
            <span>
              Version <span>1.0.0</span>
            </span>
          </div>
          <div className="w-[80%] mx-auto mt-2 text-center">
            <p className="text-[0.813rem] mb-1">TheWord is developed by <a className="text-[#137ACC]" href="https://omarhasan.netlify.app/" target="_blank" rel="noopener noreferrer">Omar Hasan</a></p>
            <p className="text-[0.813rem]">
              A game inspired by the Wordle game created by Josh Wardle <a className="text-[#137ACC]" href="https://x.com/powerlanguish" target="_blank" rel="noopener noreferrer">@powerlanguish</a>. TheWord is not associated in any shape or form with the original game.
            </p>
          </div>
        </div>
    </div>
  )
}
export default Settings