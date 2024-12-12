import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="47534092-804b13b479cbd901190151ed2",p="https://pixabay.com/api/";async function y(r,o=1,n=12){const s=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}),e=await fetch(`${p}?${s}`);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function h(r){const o=document.getElementById("gallery"),n=r.map(({webformatURL:e,largeImageURL:t,tags:i,likes:l,views:d,comments:u,downloads:m})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${l}</p>
            <p><b>Views:</b> ${d}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${m}</p>
          </div>
        </li>`).join("");o.innerHTML=n,new f(".gallery a").refresh()}function b(){const r=document.getElementById("gallery");r.innerHTML=""}const L=document.getElementById("search-form"),E=document.getElementById("search-input"),w=document.getElementById("loader");L.addEventListener("submit",async r=>{r.preventDefault();const o=E.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term!"});return}b(),c(!0);try{const n=await y(o);if(n.hits.length===0){a.warning({title:"No Results",message:"Sorry, no images found. Try again!"});return}h(n.hits)}catch(n){a.error({title:"Error",message:n.message})}finally{c(!1)}});function c(r){w.classList.toggle("hidden",!r)}
//# sourceMappingURL=index.js.map
