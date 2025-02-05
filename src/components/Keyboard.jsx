import EnterKey from "./EnterKey"
import Key from "./Key"

function Keyboard() {
  return (
    <div dir="rtl" className="w-max mx-auto mt-[min(5vh,3.2rem)]">
        <div className="flex justify-center gap-[5px] mb-[5px]">
            <Key symbol='د' addClasses={'w-[45.83px] h-11'} />
            <Key symbol='ج' addClasses={'w-10 h-11'} />
            <Key symbol='ح' addClasses={'w-10 h-11'} />
            <Key symbol='خ' addClasses={'w-10 h-11'} />
            <Key symbol='ه' addClasses={'w-10 h-11'} />
            <Key symbol='ع' addClasses={'w-10 h-11'} />
            <Key symbol='غ' addClasses={'w-10 h-11'} />
            <Key symbol='ف' addClasses={'w-10 h-11'} />
            <Key symbol='ق' addClasses={'w-10 h-11'} />
            <Key symbol='ث' addClasses={'w-10 h-11'} />
            <Key symbol='صـ' addClasses={'w-10 h-11'} />
            <Key symbol='ضـ' addClasses={'w-[45.78px] h-11'} />
        </div>
        <div className="flex justify-center gap-[5px] mb-[5px]">
            <Key  
                symbol={'del'
                    // <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //     <g clip-path="url(#clip0_3_32)">
                    //     <mask id="mask0_3_32" style={"maskType:luminance"} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="16">
                    //     <path d="M16.8958 1.64929L21.9305 8.19443L16.8958 14.7396H1.79165V1.64929H16.8958Z" fill="white" stroke="white" stroke-width="2.01389" strokeLinecap="round" strokeLinejoin="round"/>
                    //     <path d="M13.3715 5.67709L8.3368 10.7118M8.3368 5.67709L13.3715 10.7118" stroke="black" stroke-width="2.01389" stroke-linecap="round" stroke-linejoin="round"/>
                    //     </mask>
                    //     <g mask="url(#mask0_3_32)">
                    //     <path d="M23.9444 -3.88889H-0.222269V20.2778H23.9444V-3.88889Z" fill="white"/>
                    //     </g>
                    //     </g>
                    //     <defs>
                    //     <clipPath id="clip0_3_32">
                    //     <rect width="22.5556" height="16.1111" fill="white" transform="matrix(-1 0 0 1 23.1389 0.138885)"/>
                    //     </clipPath>
                    //     </defs>
                    // </svg>
                }
                addClasses={'w-[48.33px] h-11'}
                type="delete"
            />
            <Key symbol='ط' addClasses={'w-10 h-11'} />
            <Key symbol='ك' addClasses={'w-10 h-11'} />
            <Key symbol='م' addClasses={'w-10 h-11'} />
            <Key symbol='ن' addClasses={'w-10 h-11'} />
            <Key symbol='ت' addClasses={'w-10 h-11'} />
            <Key symbol='ا' addClasses={'w-10 h-11'} />
            <Key symbol='ل' addClasses={'w-10 h-11'} />
            <Key symbol='بـ' addClasses={'w-10 h-11'} />
            <Key symbol='يـ' addClasses={'w-10 h-11'} />
            <Key symbol='سـ' addClasses={'w-10 h-11'} />
            <Key symbol='شـ' addClasses={'w-[43.28px] h-11'} />
        </div>
        <div className="flex justify-center gap-[5px] mb-[5px]">
            <EnterKey />
            <Key symbol='ظ' addClasses={'w-10 h-11'} />
            <Key symbol='ز' addClasses={'w-10 h-11'} />
            <Key symbol='و' addClasses={'w-10 h-11'} />
            <Key symbol='ة' addClasses={'w-10 h-11'} />
            <Key symbol='ى' addClasses={'w-10 h-11'} />
            <Key symbol='ر' addClasses={'w-10 h-11'} />
            <Key symbol='ؤ' addClasses={'w-10 h-11'} />
            <Key symbol='ء' addClasses={'w-10 h-11'} />
            <Key symbol='ئـ' addClasses={'w-10 h-11'} />
            <Key symbol='ذ' addClasses={'w-[60.42px] h-11'} />
        </div>
    </div>
  )
}
export default Keyboard