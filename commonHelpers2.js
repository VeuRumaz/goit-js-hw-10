import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";s.settings({resetOnHover:!0,position:"topCenter",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,closeOnEscape:!0,theme:"dark"});document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const t=e.target,r=parseInt(t.delay.value),o=t.state.value;n(r,o).then(i=>{s.success({title:"OK",titleColor:"#fff",titleSize:"16px",message:i,messageColor:"white",iconUrl:"../img/green.png",backgroundColor:"green"})}).catch(i=>{s.error({title:"Error",titleColor:"#fff",titleSize:"16px",message:i,messageColor:"white",iconUrl:"../img/red.png",backgroundColor:"red"})})});function n(e,t){return new Promise((r,o)=>{setTimeout(()=>{t==="fulfilled"?r(`Fulfilled promise in ${e}ms`):o(`Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
