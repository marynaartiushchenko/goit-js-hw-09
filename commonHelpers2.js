import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),s="feedback-form-state",n=JSON.parse(localStorage.getItem(s))||{};t.value=n.email||"",a.value=n.message||"",e.addEventListener("input",o=>{if(o.target.name==="email"||o.target.name==="message"){const m={email:t.value,message:a.value};localStorage.setItem(s,JSON.stringify(m))}}),e.addEventListener("submit",o=>{o.preventDefault();const m={email:t.value,message:a.value};console.log(m),t.value="",a.value="",localStorage.removeItem(s)})});
//# sourceMappingURL=commonHelpers2.js.map
