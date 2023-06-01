const Arry_title_card =[
    "مشروع الأول",
    "مشروع الثاني",
    "مشروع الثالث",
    "مشروع الرابع"

]
const Arry_text_card = [
    "أنا فخور جدًا بمشروعي الأول الذي أكتملت فيه رحلتي في تعلم جافا سكريبت. قمت بإنشاء برنامج بسيط وشامل يجمع جميع المفاهيم التي تعلمتها خلال هذه المغامرة. يعد هذا المشروع حجر الزاوية لمسيرتي في تطوير الويب ويعكس تقدمي وتفانيي في فهم لغة جافا سكريبت. باستخدام مهاراتي الجديدة في جافا سكريبت، قمت بتصميم وتطوير برنامج يتضمن مجموعة واسعة من الوظائف والميزات المفيدة. استغليت قدرات اللغة لتحقيق تفاعلية فعالة وتحسين تجربة المستخدم. كان الهدف الرئيسي لهذا المشروع هو إظهار ما تعلمته وتقديم برنامج قوي ومليء بالمزايا.",
    "فخور جدًا بمشروعي الثاني، حيث قمت بإنشاء موقع شخصي يعكس هويتي ويقدم معلومات مفصلة عني. هذا المشروع يعتبر إحدى الأعمال التي أشعر بالاعتزاز بها نظرًا للمهارات التي أتقنتها في CSS وتصميم الواجهات في ذلك الوقت. قمت بتصميم موقعٍ شخصي بسيطٍ وأنيقٍ يعرض صفحات متعددة تعرف عني وتوضح مؤهلاتي ومهاراتي وخبراتي العملية. انتقيت ألوانًا مناسبة ونسقت العناصر بشكل استراتيجي لتحقيق تجربة مشاهدة ممتعة وجذابة للزوار. استخدمت خبرتي في CSS لإضفاء جمالية وتنسيق فريد على الموقع. قمت بتطبيق أنماط متقدمة وتأثيرات مثل الانتقالات والظلال والخطوط المخصصة لجعل التصميم أكثر حيوية واحترافية. كما استخدمت تقنيات CSS المتقدمة مثل Flexbox وGrid لتنظيم المحتوى بشكل مناسب وتحقيق تناسق وتوزيع مثالي للعناصر.",
    "قمت ببناء نظام يسمح للمستخدمين بإدارة بياناتهم من خلال واجهة سهلة الاستخدام. تم تطوير هذا النظام لتمكين المستخدمين من إنشاء سجلات جديدة وقراءة السجلات الموجودة وتحديثها وحذفها بسهولة تامة. استخدمت العديد من المفاهيم المتقدمة في جافا سكريبت لتحقيق هذا النظام. استخدمت الجداول والمصفوفات لتخزين البيانات وتنظيمها بشكل هرمي. بنيت واجهة مستخدم متقدمة باستخدام تقنيات HTML وCSS لتوفير تجربة سلسة وجذابة للمستخدم.",
    "في مشروعي الرابع، قمت بالتعمق في مفهوم واجهات برمجة التطبيقات (API) وقمت بإنشاء برنامج بسيط وعملي يقدم أوقات الصلاة حسب المدينة المحددة. استكشفت ودرست عدة API للحصول على أوقات الصلاة واخترت واحدة تتناسب مع احتياجات المشروع. قمت بتحليل تنسيق البيانات المستردة من الAPI وتنظيمها بشكل صحيح لعرضها بشكل مفهوم ومنظم للمستخدم. تم تصميم واجهة المستخدم للبرنامج ببساطة وسهولة الاستخدام. تتيح للمستخدم إدخال اسم المدينة التي يرغب في معرفة أوقات الصلاة فيها. استخدمت تقنيات جافا سكريبت للتفاعل مع المستخدم وجمع البيانات المدخلة.",
]
const img_card =["CRUD.jpg","My personal site.jpg" ,"New_World.jpg","Social networking site.jpg"]

// متغيرات
let text_card = document.getElementById("text_card")
let text_title = document.getElementById("text_title")
let Body_img_card = document.getElementById("img_card")
let But_menu = document.getElementById("menu")
let nav_bar = document.getElementById("menus")
But_menu.addEventListener("click",()=>{
        nav_bar.classList.toggle("active")
})
function EditText(id){
    text_card.innerText = Arry_text_card[id]
    text_title.innerText = Arry_title_card[id]
    Body_img_card.setAttribute("src",`/images/ImgCard/${img_card[id]}`)

}

