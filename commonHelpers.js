import{f as h,i as y}from"./assets/vendor-651d7991.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),F=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");c.disabled=!0;let l;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){l=t[0],console.log(t[0]),d()}};h(p,C);function d(){return Date.now()>=l.getTime()?(y.show({title:"Error",titleColor:"#FFF",titleSize:"16",message:"Please choose a date in the future",messageColor:"#FFF",messageSize:"16",backgroundColor:"#EF4040",position:"topRight",icon:"ico-error",iconColor:"#FFF"}),c.disabled=!0,!1):(c.disabled=!1,!0)}let u;c.addEventListener("click",E);function E(){if(!d())return;u||(u=setInterval(r,1e3));function r(){const i=l-Date.now(),n=L(i);v(n),n.days===0&&n.hours===0&&n.minutes===0&&n.seconds===0&&q()}c.disabled=!0}function L(t){const o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:f,seconds:m}}function q(){clearInterval(u)}function a(t){return String(t).padStart(2,"0")}function v({days:t,hours:r,minutes:i,seconds:n}){g.textContent=a(t),S.textContent=a(r),F.textContent=a(i),b.textContent=a(n)}
//# sourceMappingURL=commonHelpers.js.map