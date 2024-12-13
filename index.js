import{S as m,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="47534092-804b13b479cbd901190151ed2",g="https://pixabay.com/api/";async function p(r,o=1,n=12){const s=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}),e=await fetch(`${g}?${s}`);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}const y=new m(".gallery a");function h(r){const o=document.getElementById("gallery"),n=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:l,comments:d,downloads:u})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${s}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${l}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>`).join("");o.innerHTML=n,y.refresh()}function b(){const r=document.getElementById("gallery");r.innerHTML=""}const L=document.getElementById("search-form"),E=document.getElementById("search-input"),w=document.getElementById("loader");L.addEventListener("submit",async r=>{r.preventDefault();const o=E.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term!"});return}b(),c(!0);try{const n=await p(o);if(n.hits.length===0){i.warning({title:"No Results",message:"Sorry, no images found. Try again!"});return}h(n.hits)}catch(n){i.error({title:"Error",message:n.message})}finally{c(!1)}});function c(r){w.classList.toggle("hidden",!r)}
//# sourceMappingURL=index.js.map
