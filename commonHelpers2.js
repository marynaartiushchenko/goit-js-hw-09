import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),e=t.querySelector('input[name="email"]'),a=t.querySelector('textarea[name="message"]'),s="feedback-form-state",m=JSON.parse(localStorage.getItem(s))||{};e.value=m.email||"",a.value=m.message||"",t.addEventListener("input",l=>{if(l.target.name==="email"||l.target.name==="message"){const o={email:e.value,message:a.value};localStorage.setItem(s,JSON.stringify(o))}}),t.addEventListener("submit",l=>{if(l.preventDefault(),e.value.trim()===""||a.value.trim()===""){alert("Please fill in both email and message fields.");return}const o={email:e.value,message:a.value};console.log(o),e.value="",a.value="",localStorage.removeItem(s)})});
//# sourceMappingURL=commonHelpers2.js.map