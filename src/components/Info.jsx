function Info() {
  return (
    <div dir="rtl">
      <h1 className="dialog-title mt-4 mb-7 text-xl font-extrabold tracking-widest">طريقة اللعب</h1>
      <div className="w-[75%] mx-auto">
        <p className="w-[100%] mx-auto mb-5 text-center text-[0.85rem]/7 text-white">خمن الكلمة الصحيحة في ستة محاولات. سيتغير لون الأحرف ليريك مدى
        قرب تخمينك من الاجابة الصحيحة.</p>
        <ul className="flex gap-[0.277rem] my-3 text-[1.083rem]">
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ز</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ر</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#B59F3B] rounded text-center font-extrabold">ا</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#B59F3B] rounded text-center font-extrabold">فـ</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ـة</li>
        </ul>
        <p className="text-[0.938rem] font-extrabold"><span className="text-[#B59F3B]">المربع الأصفر: </span><span className="font-light text-slate-300">حرف</span> صحيح <span className="font-light text-slate-300">في</span> المكان الغير صحيح.</p>
        <p className="mt-1 text-[0.938rem] font-extrabold"><span className="text-[#3A3A3C] text-stroke">المربع الرمادي: </span><span className="font-light text-slate-300">حرف</span> غير صحيح.</p>
        <ul className="flex gap-[0.277rem] my-3 text-[1.083rem]">
          <li className="w-[1.625rem] h-[1.625rem] bg-[#538D4E] rounded text-center font-extrabold">ا</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#538D4E] rounded text-center font-extrabold">فـ</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ر</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#538D4E] rounded text-center font-extrabold">ا</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ح</li>
        </ul>
        <p className="text-[0.938rem] font-extrabold"><span className="text-[#538D4E]">المربع الأخضر: </span><span className="font-light text-slate-300">حرف</span> صحيح <span className="font-light text-slate-300">في</span> المكان الصحيح.</p>
        <ul className="flex gap-[0.277rem] my-3 text-[1.083rem]">
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ز</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">مـ</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">جـ</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#3A3A3C] rounded text-center font-extrabold">ر</li>
          <li className="w-[1.625rem] h-[1.625rem] bg-[#B59F3B] rounded text-center text-[#0E63A7] font-extrabold">ة</li>
        </ul>
        <p className="mb-1 text-[0.938rem] font-extrabold"><span className="text-[#0E63A7]">الحرف الأزرق: </span><span className="font-light text-slate-300">علامة على أن</span> شكل الحرف غير صحيح.</p>
        <h2 className="mt-2 mb-1 text-[0.938rem] font-extrabold">الأحرف متعددة الأشكال:</h2>
        <div className="flex flex-wrap gap-6 text-slate-200">
          <span>الألف: (ا, ى)</span>
          <span>التاء: (ت, ة)</span>
          <span>الهمزة: (ء, ئ, ؤ)</span>
        </div>
      </div>
    </div>
  )
}
export default Info