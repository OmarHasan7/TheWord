function Stats() {
  return (
    <div dir="rtl">
        <h1 className="dialog-title text-xl font-extrabold tracking-widest">إحصائيات</h1>
        <div id="stats-cards" className="flex flex-wrap gap-[20px] w-[min(24rem,90%)] justify-center mx-auto mt-5 font-semibold tracking-wide">
            <div className="dialog-card">
                <div className="text-2xl">#3</div>
                <span className="text-sm font-bold">أقل تخمينات</span>
            </div>
            <div className="dialog-card">
                <div className="text-2xl">100%</div>
                <span className="text-sm font-bold">نسبة الفوز</span>
            </div>
            <div className="dialog-card">
                <div className="flex gap-[5px] items-center">
                    <span className="text-2xl">10</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_19_33)">
                        <path d="M6.27001 20C4.93751 17.2263 5.64751 15.6375 6.67126 14.14C7.79251 12.5 8.08251 10.8775 8.08251 10.8775C8.08251 10.8775 8.96501 12.0238 8.61126 13.8175C10.1688 12.0838 10.4638 9.32 10.2275 8.26125C13.7488 10.7225 15.2538 16.0513 13.2263 20.0013C24.015 13.8975 15.91 4.76375 14.4988 3.735C14.9688 4.76375 15.0588 6.505 14.1075 7.35125C12.4988 1.2525 8.52251 0.00250244 8.52251 0.00250244C8.99251 3.1475 6.81751 6.5875 4.72001 9.1575C4.64626 7.90375 4.56751 7.0375 3.90876 5.8375C3.76126 8.11625 2.02001 9.97375 1.54751 12.2563C0.90876 15.3475 2.02626 17.6113 6.26876 20.0025L6.27001 20Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_19_33">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <span className="text-sm font-bold">السلسلة الحالية</span>
            </div>
            <div className="dialog-card">
                <div className="flex gap-[5px] items-center">
                    <span className="text-2xl">247421</span>
                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_12_309)">
                        <g filter="url(#filter0_d_12_309)">
                        <path d="M25.3613 3.54468C24.1053 3.54468 22.5703 4.94021 22.5703 6.33575H11.406C11.406 4.94021 9.87089 3.54468 8.61491 3.54468H3.03278V16.1045C3.03278 17.5 4.42831 18.8956 5.82384 18.8956H8.89402C9.45223 21.6866 11.2664 24.059 15.5926 24.4777V27.3804C11.406 28.0224 11.406 31.4554 11.406 31.4554H22.5703C22.5703 31.4554 22.5703 28.0224 18.3837 27.3804V24.4777C22.7098 24.059 24.524 21.6866 25.0822 18.8956H28.1524C29.5479 18.8956 30.9435 17.5 30.9435 16.1045V3.54468H25.3613ZM8.61491 16.1045H5.82384V6.33575H8.61491V16.1045ZM28.1524 16.1045H25.3613V6.33575H28.1524V16.1045Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_12_309" x="-0.967224" y="3.54468" width="35.9107" height="35.9107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_309"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_309" result="shape"/>
                        </filter>
                        <clipPath id="clip0_12_309">
                        <rect width="33.4928" height="33.4928" fill="white" transform="translate(0.241638 0.753601)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <span className="text-sm font-bold">مرات الفوز</span>
            </div>
            <div className="dialog-card">
                <div className="flex gap-[5px] items-center">
                    <span className="text-2xl">17</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_14_471)">
                        <path d="M18.2656 14.6154C18.2656 14.2949 18.1534 14.0225 17.929 13.7981L15.429 11.2981C15.2047 11.0737 14.9322 10.9616 14.6117 10.9616C14.2752 10.9616 13.9867 11.0898 13.7463 11.3462C13.7704 11.3702 13.8465 11.4443 13.9747 11.5685C14.1029 11.6927 14.1891 11.7789 14.2331 11.8269C14.2772 11.875 14.3373 11.9511 14.4134 12.0553C14.4895 12.1595 14.5416 12.2616 14.5697 12.3618C14.5977 12.462 14.6117 12.5721 14.6117 12.6923C14.6117 13.0128 14.4996 13.2853 14.2752 13.5096C14.0508 13.734 13.7784 13.8462 13.4579 13.8462C13.3377 13.8462 13.2275 13.8321 13.1274 13.8041C13.0272 13.7761 12.925 13.724 12.8209 13.6479C12.7167 13.5717 12.6406 13.5116 12.5925 13.4676C12.5444 13.4235 12.4583 13.3374 12.3341 13.2091C12.2099 13.0809 12.1358 13.0048 12.1117 12.9808C11.8473 13.2292 11.7151 13.5216 11.7151 13.8582C11.7151 14.1787 11.8273 14.4511 12.0516 14.6755L14.5276 17.1635C14.7439 17.3798 15.0164 17.488 15.3449 17.488C15.6654 17.488 15.9379 17.3838 16.1622 17.1755L17.929 15.4207C18.1534 15.1963 18.2656 14.9279 18.2656 14.6154ZM9.81606 6.14184C9.81606 5.82133 9.70388 5.54889 9.47952 5.32453L7.00356 2.83655C6.7792 2.61219 6.50676 2.50001 6.18625 2.50001C5.87375 2.50001 5.60132 2.60819 5.36894 2.82453L3.60212 4.57934C3.37776 4.8037 3.26558 5.07213 3.26558 5.38463C3.26558 5.70514 3.37776 5.97758 3.60212 6.20194L6.10212 8.70194C6.31846 8.91828 6.5909 9.02646 6.91942 9.02646C7.25596 9.02646 7.54442 8.90226 7.78481 8.65386C7.76077 8.62982 7.68465 8.5557 7.55644 8.4315C7.42824 8.30731 7.3421 8.22117 7.29803 8.17309C7.25396 8.12501 7.19386 8.04889 7.11774 7.94473C7.04162 7.84056 6.98954 7.7384 6.96149 7.63824C6.93345 7.53807 6.91942 7.4279 6.91942 7.30771C6.91942 6.98719 7.0316 6.71476 7.25596 6.4904C7.48032 6.26604 7.75276 6.15386 8.07327 6.15386C8.19346 6.15386 8.30364 6.16788 8.4038 6.19593C8.50396 6.22397 8.60612 6.27606 8.71029 6.35218C8.81446 6.4283 8.89058 6.4884 8.93865 6.53247C8.98673 6.57654 9.07287 6.66267 9.19707 6.79088C9.32127 6.91908 9.39539 6.99521 9.41942 7.01925C9.68385 6.77085 9.81606 6.47838 9.81606 6.14184ZM20.5733 14.6154C20.5733 15.5769 20.2327 16.3902 19.5516 17.0553L17.7848 18.8101C17.1197 19.4752 16.3064 19.8077 15.3449 19.8077C14.3754 19.8077 13.558 19.4672 12.893 18.7861L10.417 16.2981C9.75196 15.633 9.41942 14.8197 9.41942 13.8582C9.41942 12.8726 9.77199 12.0353 10.4771 11.3462L9.41942 10.2885C8.73032 10.9936 7.89699 11.3462 6.91942 11.3462C5.95789 11.3462 5.14058 11.0096 4.4675 10.3366L1.9675 7.83655C1.29442 7.16348 0.957886 6.34617 0.957886 5.38463C0.957886 4.42309 1.29843 3.60979 1.97952 2.94473L3.74635 1.18992C4.41141 0.524854 5.22471 0.192322 6.18625 0.192322C7.1558 0.192322 7.97311 0.532867 8.63817 1.21396L11.1141 3.70194C11.7792 4.367 12.1117 5.1803 12.1117 6.14184C12.1117 7.12742 11.7592 7.96476 11.054 8.65386L12.1117 9.71155C12.8008 9.00642 13.6342 8.65386 14.6117 8.65386C15.5733 8.65386 16.3906 8.9904 17.0637 9.66348L19.5637 12.1635C20.2367 12.8366 20.5733 13.6539 20.5733 14.6154Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_14_471">
                        <rect width="20" height="20" fill="white" transform="translate(0.765564)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <span className="text-sm font-bold">أطول سلسلة</span>
            </div>
        </div>
        <div id="guess-distribution">
            <div dir="ltr" className="grid grid-cols-5 grid-rows-7 gap-3 w-[min(22.25rem,90%)] mx-auto mt-5 items-center">
                <div className="col-span-4 text-center">
                    <h3 className="text-sm font-bold">توزيع التخمينات</h3>
                </div>
                <div className="col-start-5 text-center">
                    <h3 className="text-sm font-bold">المرات</h3>
                </div>
                <div className="col-span-4 row-start-2 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#1</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl"></div>
                </div>
                <div className="col-start-5 row-start-2 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">0</div>
                <div className="col-span-4 row-start-3 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#2</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl"></div>
                </div>
                <div className="col-start-5 row-start-3 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">0</div>
                <div className="col-span-4 row-start-4 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#3</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl">
                        <div className="w-[33%] bg-[#0E63A7] rounded-xl flex justify-end">
                            <span className="px-2">33%</span>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 row-start-4 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">8</div>
                <div className="col-span-4 row-start-5 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#4</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl"></div>
                </div>
                <div className="col-start-5 row-start-5 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">0</div>
                <div className="col-span-4 row-start-6 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#5</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl"></div>
                </div>
                <div className="col-start-5 row-start-6 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">0</div>
                <div className="col-span-4 row-start-7 flex justify-between">
                    <span className="text-[#0E63A7] font-semibold">#6</span>
                    <div className="bg-[#021B2F] custom-shadow w-[92%] rounded-xl">
                        <div className="w-[67%] bg-[#0E63A7] rounded-xl flex justify-end">
                                <span className="px-2">67%</span>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 row-start-7 text-center bg-[#021B2F] custom-shadow w-[92%] rounded-xl">16</div>
            </div>
        </div>
    </div>
  )
}
export default Stats