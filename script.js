(function(){
const e="820851251",t={"🇧🇩 Bangladesh":"bd","🇮🇳 India":"in","🇵🇰 Pakistan":"pk","🇳🇵 Nepal":"np"};
const n=document.createElement("style");
n.innerHTML=`@keyframes fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
#fancy-modal *{box-sizing:border-box}
#fancy-modal{font-family:'Segoe UI',sans-serif;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
background:rgba(255,255,255,.95);border-radius:16px;padding:25px;width:340px;box-shadow:0 10px 40px rgba(0,0,0,0.3);
z-index:99999;animation:fadeIn .3s ease-out;backdrop-filter:blur(8px);border:1px solid #e0ffe0}
#fancy-modal .header{text-align:center;margin-bottom:16px}
#fancy-modal .header h3{margin:0 0 10px;font-size:16px;color:#000;font-weight:700}
#fancy-modal .header img{width:40px;height:40px}
#fancy-modal label{display:block;margin-top:10px;color:#2e7d32;font-weight:600}
#fancy-modal input,#fancy-modal select{width:100%;padding:9px;margin-top:4px;border:1px solid #ccc;border-radius:8px;
outline:0;font-size:14px}
#fancy-modal input:focus{border-color:#4caf50}
#verify-btn,#save-btn,#close-btn{margin-top:12px;width:100%;padding:11px;border:0;border-radius:8px;font-weight:700;
cursor:pointer;transition:background .3s}
#verify-btn{background:#4caf50;color:#fff}
#verify-btn:hover{background:#43a047}
#save-btn{background:#2e7d32;color:#fff;opacity:.5;cursor:not-allowed}
#save-btn.enabled{opacity:1;cursor:pointer}
#close-btn{background:#f44336;color:#fff;margin-top:8px}
#close-btn:hover{background:#d32f2f}
#verify-status{text-align:center;margin-top:6px;font-weight:700}`;
document.head.appendChild(n);

const o=document.createElement("div");
o.id="fancy-modal";
o.innerHTML=`<div class="header"><h3>Only Buy For @123Hasking</h3><img src="https://telegram.org/img/t_logo.png" alt="Telegram"/></div>
<label>Leaderboard Name</label><input type="text" id="leaderboard-name" placeholder="Enter Name"/>
<label>Leaderboard Balance</label><input type="text" id="initial-balance" placeholder="Enter Balance"/>
<label>Country Flag</label><select id="country-flag">
<option selected>🇧🇩 Bangladesh</option>
<option>🇮🇳 India</option>
<option>🇵🇰 Pakistan</option>
<option>🇳🇵 Nepal</option>
</select>
<label>License Key</label><input type="text" id="license-input" placeholder="Enter license key"/>
<button id="verify-btn">Verify License</button>
<p id="verify-status" style="color:red">✘ Not Verified</p>
<button id="save-btn" disabled>Save Settings</button>
<button id="close-btn">Close</button>`;
document.body.appendChild(o);

const s=o.querySelector("#verify-btn"),
      d=o.querySelector("#save-btn"),
      c=o.querySelector("#close-btn"),
      a=o.querySelector("#license-input"),
      l=o.querySelector("#verify-status");

s.onclick=()=>{const n=a.value.trim();n===e?(l.textContent="✔ License Verified",l.style.color="green",d.disabled=!1,d.classList.add("enabled")):(l.innerHTML="✘ Invalid License<br>Contact @123Hasking",l.style.color="red")};
c.onclick=()=>o.remove();

d.onclick=function(){
if(!d.disabled){
const n=document.getElementById("leaderboard-name").value||"BUY NOW",
      a=parseFloat(document.getElementById("initial-balance").value.replace(/[^\d.]/g,""))||1e4,
      i=document.getElementById("country-flag").value,
      r=t[i]||"pk";
o.remove();
window.history.pushState({},"","https://market-qx.pro/en/demo-trade");

const p=document.getElementsByClassName("usermenu__info-name")[0];
p&&(p.innerHTML="LIVE",p.style.color="green");

const u=document.getElementsByClassName("sidebar__button");
u.length>2&&(u[1].classList.add("active"),u[2].classList.remove("active"));

function m(){
const e=document.getElementsByClassName("usermenu__info-balance")[0];
if(e){
const t=e.innerHTML.replace(/[,$]/g,""),n=parseFloat(t)||0;
let i;n<5e3?i="icon-profile-level-standart":n<1e4?i="icon-profile-level-pro":i="icon-profile-level-vip";
const r=document.getElementsByClassName("usermenu__info-levels")[0];
r&&(r.innerHTML=`<svg class="${i}"><use xlink:href="/profile/images/spritemap.svg#${i}"></use></svg>`);
const p=document.getElementsByClassName("usermenu__dropdown")[0];
if(p){
let u,m,g;
n<5e3?(u="STANDARD:",m="+0% profit",g="icon-profile-level-standart"):
n<1e4?(u="PRO:",m="+2% profit",g="icon-profile-level-pro"):
(u="VIP:",m="+4% profit",g="icon-profile-level-vip");
document.getElementsByClassName("usermenu__level-icon")[0].innerHTML=`<svg class="${g}"><use xlink:href="/profile/images/spritemap.svg#${g}"></use></svg>`;
document.getElementsByClassName("usermenu__level-name")[0].innerHTML=u;
document.getElementsByClassName("usermenu__level-profit")[0].innerHTML=m;
const b=document.getElementsByClassName("usermenu__select-balance");
b.length>1&&(b[0].innerHTML=e.innerHTML,b[1].innerHTML="$10,000.00");
}}}

function g(){
const e=document.querySelector(".app--sidepanel-open");
if(e){
const t=document.querySelector(".position__loading");
t&&(t.style.background="#0faf59",t.style.height="2px");
const o=document.getElementsByClassName("usermenu__info-balance")[0];
if(o){
const s=o.innerHTML.replace(/[,$]/g,""),c=parseFloat(s)||0,u=c-a;
let m;
if(0===u)m="$0.00";
else{
const e=Math.abs(u).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
m=u<0?`-${e}$`:`$${e}`;
}
const p=document.querySelector(".position__header-money.--green");
p&&(p.innerHTML=m,p.style.color=u<0?"#f44336":"#0faf59");

const d=document.querySelector(".position__footer");
if(d){
const l=document.querySelectorAll(".panel-leader-board__item-money.--green"),
b=Array.from(l).slice(0,20).map(e=>{
let t=e.innerHTML.replace(/[,$]/g,"");
const n=t.includes("-");
t=t.replace(/-/g,"");
t=parseFloat(t);
return n?-t:t;
}).sort((e,t)=>t-e),
v=b[19]||0,y=v-1e4;

if(u<y){
h=Math.round(y/5e4)||1;
f=Math.abs(Math.round((32500-u/h)/100));
d.innerHTML=`<div class="position__footer-title">Your position:</div>${f}`;
} else {
w=u<0?'style="color:#f44336"':'style="color:#0faf59"';
k=`<svg class="flag flag-${r}"><use xlink:href="/profile/images/flags.svg#flag-${r}"></use></svg>`;

if(u>b[0]){
d.innerHTML='<div class="position__footer-title">Your position:</div>1';
document.querySelectorAll(".panel-leader-board__item")[0].innerHTML=/* top 1 HTML with values */`...`;
} else if(u<b[0]&&u>b[1]){
d.innerHTML='<div class="position__footer-title">Your position:</div>2';
document.querySelectorAll(".panel-leader-board__item")[1].innerHTML=/* top 2 HTML with values */`...`;
} else if(u<b[1]&&u>b[2]){
d.innerHTML='<div class="position__footer-title">Your position:</div>3';
document.querySelectorAll(".panel-leader-board__item")[2].innerHTML=/* top 3 HTML with values */`...`;
}
}}}}

m();
g();
setInterval(m,1000);
setInterval(g,1000);
}}})();
