(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(l){const n=document.getElementById("foto-principal"),i=document.getElementById(l);n!=null&&i!==null&&i!==void 0&&n instanceof HTMLImageElement&&i instanceof HTMLImageElement&&(n.src=i.src)}const o=document.getElementById("miniatura1"),c=document.getElementById("miniatura2"),s=document.getElementById("miniatura3");o!=null&&o.addEventListener("click",function(){u("miniatura1")});c!=null&&c.addEventListener("click",function(){u("miniatura2")});s!=null&&s.addEventListener("click",function(){u("miniatura3")});
