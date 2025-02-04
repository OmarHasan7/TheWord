import { useState } from "react"

function NextWordTimer() {
    let [time, setTime] = useState('14:20:15');
  return (
    <div id="next-word-timer" className="white-border h-max opacity-0">
        <span className="hidden md:inline">تبقى على الكلمة التالية</span>
        <div className="flex justify-center gap-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_13_329)">
                <path d="M6.25309 16.4898L5.00446 18.7428" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7469 16.4898L14.9956 18.7428" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17.4939C14.1385 17.4939 17.4934 14.139 17.4934 10.0005C17.4934 5.86208 14.1385 2.50719 10 2.50719C5.86154 2.50719 2.50665 5.86208 2.50665 10.0005C2.50665 14.139 5.86154 17.4939 10 17.4939Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.75734 8.00302C2.18206 7.57183 1.74298 6.98424 1.4925 6.31035C1.24202 5.63647 1.19072 4.90474 1.34471 4.2025C1.49869 3.50025 1.85148 2.85713 2.36095 2.34989C2.87043 1.84265 3.51509 1.49269 4.21801 1.34179C4.92092 1.19089 5.65242 1.24541 6.32519 1.49885C6.99797 1.75229 7.58363 2.19395 8.01228 2.77111" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.99994 2.50722L9.99997 1.25833" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6.25389V10.0006" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 10.0005L12.6493 12.6498" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.2426 8.00302C17.8179 7.57183 18.257 6.98424 18.5075 6.31035C18.758 5.63647 18.8093 4.90474 18.6553 4.2025C18.5013 3.50025 18.1485 2.85713 17.639 2.34989C17.1296 1.84265 16.4849 1.49269 15.782 1.34179C15.0791 1.19089 14.3476 1.24541 13.6748 1.49885C13.002 1.75229 12.4164 2.19395 11.9877 2.77111" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_13_329">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span id="time-left">{ time }</span>
        </div>
    </div>
  )
}
export default NextWordTimer