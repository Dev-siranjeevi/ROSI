/* Siranjeevi & Roshna — invitation behaviour. Content lives in data.js */
const $=s=>document.querySelector(s);
const ic={cal:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',clk:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',pin:'<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'};

const gc=e=>`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.tag+" · Siranjeevi & Roshna")}&dates=${e.s}/${e.e}&ctz=Asia/Kolkata&location=${encodeURIComponent(e.v+", "+e.a)}`;
$("#grid").innerHTML=EV.map((e,i)=>`<article class="ec rv" style="transition-delay:${i*.1}s"><div class="ph"><img src="${e.photo||e.img}" alt="${e.v}" data-fb="${e.img}" onerror="if(this.dataset.fb&&this.src.indexOf(this.dataset.fb)<0){this.src=this.dataset.fb}else{this.onerror=null}" width="1200" height="800" loading="lazy" decoding="async"><div class="dt"><small>${e.d}</small><b>${e.n}</b><small>${e.m}</small></div></div><div class="bd"><span class="tag">${e.tag}</span><h3>${e.v}</h3><div class="ro">${ic.cal}<span>${e.date}</span></div><div class="ro">${ic.clk}<span><b>${e.time}</b></span></div><div class="ro"><span class="pn">${ic.pin}</span><span>${e.a}</span></div><div class="btns"><a class="b s" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.q)}">Directions</a><a class="b" target="_blank" rel="noopener" href="${gc(e)}">Add to calendar</a></div></article>`).join("");
$("#cal").href=gc(EV[0]);
$("#share").href="https://wa.me/?text="+encodeURIComponent(SHARE_MSG+"\n"+location.href.split("#")[0].split("?")[0]);


/* storyboard: wrap cards, spine, intertitles */
(()=>{const g=$("#grid"),IT=["…and by evening, the celebration glows on","Four days later, in Cuddalore…"];
g.insertAdjacentHTML("afterbegin",'<i class="sp"></i>');
g.querySelectorAll(".ec").forEach((c,i)=>{const s=document.createElement("div");s.className="st";c.before(s);s.append(c);s.insertAdjacentHTML("beforeend",`<i class="mk">${i+1}</i>`);if(i)s.insertAdjacentHTML("beforebegin",`<p class="it rv">${IT[i-1]}</p>`);c.querySelector(".ph img").dataset.speed=".05"})})();
/* countdown */
const calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
const T=new Date("2026-12-10T09:00:00+05:30").getTime(),p2=n=>String(n).padStart(2,"0");
const set=(id,v)=>{const e=$(id);if(e.textContent!==v){const first=!e.textContent.trim()||e.textContent==="00";e.textContent=v;if(!calm&&id!=="#d"&&!first){e.classList.remove("flip");void e.offsetWidth;e.classList.add("flip")}}};
function tick(){let x=Math.max(0,T-Date.now());const d=Math.floor(x/864e5);x%=864e5;set("#d",p2(d));set("#h",p2(Math.floor(x/36e5)));x%=36e5;set("#m",p2(Math.floor(x/6e4)));set("#s",p2(Math.floor(x%6e4/1e3)));$("#dl").textContent=d>0?d+" days to go":"Today’s the day!"}
tick();setInterval(()=>document.hidden||tick(),1000);


const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(()=>t.style.transitionDelay="0s",1300)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(n=>io.observe(n));

/* effects */
const R=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.random()*a.length|0];
if(!calm){
 $("#pt").innerHTML=Array.from({length:11},()=>`<i style="left:${R(0,100)}%;--d:${R(10,17).toFixed(1)}s;--x:${R(-60,80)|0}px;animation-delay:${-R(0,14).toFixed(1)}s;scale:${R(.7,1.3).toFixed(2)};background:${pick(["#e23b4e","#ff9db4","#fff3d6"])}"></i>`).join("");
 const hero=$(".hero");
 if(matchMedia("(hover:hover)").matches){
  hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5).toFixed(3));hero.style.setProperty("--my",((e.clientY-r.top)/r.height-.5).toFixed(3))});
  document.querySelectorAll(".ec").forEach(c=>{c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${(x*8).toFixed(2)}deg) rotateX(${(-y*8).toFixed(2)}deg) translateY(-4px)`});c.addEventListener("pointerleave",()=>c.style.transform="")});
 }
 document.addEventListener("pointerdown",e=>{const b=e.target.closest(".b");if(!b)return;const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement("span");s.className="rpl";s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),650)});
}
function hearts(x,y){if(calm)return;for(let i=0;i<9;i++){const h=document.createElement("span");h.className="heart";h.textContent=pick(["♥","♥","✦","❀"]);h.style.cssText=`left:${x}px;top:${y}px;color:${pick(["#7B1B22","#B8892B","#e23b4e","#e49a9f"])};--x:${R(-70,70)|0}px;--r:${R(-40,40)|0}deg;animation-delay:${(i*.05).toFixed(2)}s`;document.body.appendChild(h);setTimeout(()=>h.remove(),1800)}}
function confetti(){if(calm)return;for(let i=0;i<46;i++){const c=document.createElement("i");c.className="conf";c.style.cssText=`left:${R(0,100)}vw;background:${pick(["#7B1B22","#B8892B","#f2cf7a","#e49a9f","#4d5530","#fff3d6"])};--x:${R(-80,80)|0}px;--r:${R(200,720)|0}deg;--d:${R(1.8,3.4).toFixed(1)}s;animation-delay:${R(0,.5).toFixed(2)}s`;document.body.appendChild(c);setTimeout(()=>c.remove(),4200)}}

/* gate, hud, parallax, lamps */
const hero=$(".hero"),sc=[...document.querySelectorAll(".sc")],clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
let snd=true,AC,G="",lc=0,twT=0;
function chime(f=[784,1175],vol=1){if(!snd)return;try{AC=AC||new AudioContext();f.forEach((q,i)=>{[1,2.76].forEach((m,k)=>{const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+i*.13;o.frequency.value=q*m;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09*vol/(k+1),t+.02);g.gain.exponentialRampToValueAtTime(.001,t+1.8);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+1.9)})})}catch{}}
const go=id=>document.getElementById(id).scrollIntoView({behavior:calm?"auto":"smooth"});
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){e.preventDefault();go(g.dataset.go)}});
function petals(x,y,n=12){if(calm)return;for(let i=0;i<n;i++){const p=document.createElement("i");p.className="pet";p.style.cssText=`left:${x}px;top:${y}px;background:${pick(["#f6a21e","#e23b4e","#fff3d6","#f2cf7a"])};--x:${R(-150,150)|0}px;--r:${R(-420,420)|0}deg;animation-delay:${R(0,.15).toFixed(2)}s`;document.body.appendChild(p);setTimeout(()=>p.remove(),2400)}}
hero.addEventListener("click",e=>{petals(e.clientX,e.clientY,14);chime([1047])});
function guest(n){n=n.trim().slice(0,40);if(!n)return;G=n;const k=$(".plaque .k1");k.textContent="";k.append("Dear "+n+", ",document.createElement("br"),"together with our families")}
const hs=(new URLSearchParams(location.search).get("to")||(()=>{try{return decodeURIComponent(location.hash.slice(1))}catch{return""}})()).replace(/_/g," ");if(/^[\p{L} .'-]{2,40}$/u.test(hs)&&!document.getElementById(location.hash.slice(1)))guest(hs);
function tiltOn(){if(calm||!matchMedia("(hover:none)").matches||!window.DeviceOrientationEvent)return;const on=()=>addEventListener("deviceorientation",e=>{if(e.gamma==null)return;hero.style.setProperty("--mx",clamp(e.gamma/40,-.5,.5).toFixed(3));hero.style.setProperty("--my",clamp((e.beta-50)/80,-.5,.5).toFixed(3))});
 DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(r=>r==="granted"&&on()).catch(()=>{}):on()}
setTimeout(()=>petals(innerWidth/2,innerHeight*.3,34),900);if(!(window.DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission))tiltOn();
let pad=null,ambT=0;
function ambient(){if(!AC||pad)return;try{const g=AC.createGain(),f=AC.createBiquadFilter();f.type="lowpass";f.frequency.value=700;g.gain.value=0;[130.81,196,261.63].forEach((q,i)=>{const o=AC.createOscillator();o.type="sine";o.frequency.value=q;o.detune.value=i*4;o.connect(f);o.start()});f.connect(g).connect(AC.destination);pad=g;ambT=setInterval(()=>{if(snd&&!document.hidden)chime([[784,880,1047,1175,1319][Math.random()*5|0]],.35)},7000)}catch{}}
function padVol(){if(pad)pad.gain.setTargetAtTime(snd?.014:0,AC.currentTime,.6)}
let woke=false;
const wake=()=>{if(woke)return;try{AC=AC||new AudioContext();AC.resume().then(()=>{if(AC.state==="running"&&!woke){woke=true;$("#mt").classList.remove("wait");if(snd){ambient();padVol();chime([523,784,1047],.8)}}})}catch{}};
["pointerdown","keydown","touchend","click"].forEach(t=>addEventListener(t,wake,{capture:true,passive:true}));
$("#mt").onclick=()=>{snd=!snd;$("#mt").classList.toggle("off",!snd);if(snd){try{AC=AC||new AudioContext();AC.resume()}catch{}ambient();padVol();chime([880])}else padVol()};
const sg=$("#sg");sc.forEach(s=>{const b=document.createElement("button");b.setAttribute("aria-label",s.dataset.t);b.onclick=()=>go(s.id);sg.append(b)});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=sc.indexOf(e.target);$("#sn").textContent=p2(i+1)+"/"+p2(sc.length);$("#st").textContent=e.target.dataset.t;[...sg.children].forEach((b,j)=>b.classList.toggle("on",j===i));if(i&&performance.now()-lc>1500){lc=performance.now();chime([660])}}}),{rootMargin:"-45% 0px -50% 0px"});sc.forEach(s=>so.observe(s));
const px=[...document.querySelectorAll("[data-speed]")],sp=[...document.querySelectorAll(".note p")].map(p=>{p.innerHTML=p.textContent.split(" ").map(w=>`<span>${w}</span>`).join(" ");return[p,[...p.children]]}),grid=$("#grid"),ht=$(".plaque"),art=$(".art"),arch=$(".arch"),kids=$(".kids");let vh=innerHeight,tk=0,gv=0,man=0,mt=0,anim=0;
function upd(){tk=0;vh=innerHeight;const y=scrollY;$("#prog").style.scale=(y/Math.max(1,document.documentElement.scrollHeight-vh)).toFixed(4)+" 1";if(calm)return;
 ht.style.opacity=clamp(1-y/(vh*.55),0,1);art.style.scale=(1+Math.min(y,vh)/vh*.14).toFixed(4)
 for(const n of px){const hh=n.closest(".hero");let off=y;if(!hh){const r=n.parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)continue;off=vh/2-(r.top+r.height/2)}n.style.transform=`translate3d(0,${(off*n.dataset.speed).toFixed(1)}px,0)`}
 for(const[p,w]of sp){const r=p.getBoundingClientRect(),k=Math.ceil(clamp((vh*.9-r.top)/(vh*.4),0,1)*w.length);if(p._k===k)continue;p._k=k;w.forEach((s,i)=>s.style.opacity=i<k?1:.2)}
 const g=grid.getBoundingClientRect();grid.style.setProperty("--pg",clamp((vh*.6-g.top)/g.height,0,1).toFixed(4))}
addEventListener("scroll",()=>{tk||(tk=1,requestAnimationFrame(upd))},{passive:true});addEventListener("resize",upd);addEventListener("load",upd);upd();

const lamp='<svg viewBox="0 0 60 80" aria-hidden="true"><path class="lf" d="M30 2C41 19 46 29 30 45 14 29 19 19 30 2z"/><path class="lb" d="M4 50h52c0 16-12 26-26 26S4 66 4 50z"/><ellipse class="lr" cx="30" cy="50" rx="26" ry="4.2"/><rect class="wk" x="28.4" y="43" width="3.2" height="8" rx="1.4"/><circle class="em" cx="30" cy="43" r="2.4"/></svg>',NT=[523,587,659,784,880];
$("#lamps").innerHTML=NT.map(()=>`<button class="lamp" aria-label="Light the lamps">${lamp}</button>`).join("");
const lp=[...document.querySelectorAll(".lamp")];let inFin=false,lampsDone=false;
new IntersectionObserver(es=>es.forEach(e=>inFin=e.isIntersecting),{threshold:.35}).observe($("#date"));
function lightAll(){if(lampsDone)return;lampsDone=true;lp.forEach((l,i)=>setTimeout(()=>{l.classList.add("on");chime([NT[i]]);petals(l.getBoundingClientRect().left+l.offsetWidth/2,l.getBoundingClientRect().top,5);$("#lh").textContent=i<4?(i+1)+" of 5 lit…":"";if(i==4)setTimeout(()=>{$("#date").classList.add("lit");confetti();setTimeout(confetti,600);chime([523,659,784,1047]);$("#lh").textContent=(G?G+", t":"T")+"hank you for lighting up our celebration. See you on 10 December ♥"},500)},i*330))}
document.addEventListener("click",e=>{if(!inFin||lampsDone||e.target.closest(".b,a,.hud,.arch"))return;lightAll()});

document.querySelectorAll("h2").forEach(h=>{let i=0;[...h.childNodes].forEach(n=>{if(n.nodeType==3&&n.textContent.trim()){const f=document.createDocumentFragment();n.textContent.trim().split(/\s+/).forEach(w=>{const s=document.createElement("span");s.className="w";s.style.setProperty("--i",i++);s.innerHTML="<span>"+w+"</span>";f.append(s," ")});n.replaceWith(f)}})});
if(!calm&&matchMedia("(hover:hover)").matches){
 document.querySelectorAll(".b").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.translate=`${(((e.clientX-r.left)/r.width-.5)*10).toFixed(1)}px ${(((e.clientY-r.top)/r.height-.5)*8-2).toFixed(1)}px`});b.addEventListener("pointerleave",()=>b.style.translate="")});
 document.querySelectorAll(".ec").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--sx",(e.clientX-r.left)+"px");c.style.setProperty("--sy",(e.clientY-r.top)+"px")}));
 let ls=0;addEventListener("pointermove",e=>{const t=performance.now();if(t-ls<45||e.pointerType!=="mouse")return;ls=t;const s=document.createElement("i");s.className="spk";s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px`;document.body.append(s);setTimeout(()=>s.remove(),800)})}

document.querySelectorAll(".bell").forEach((b,i)=>b.addEventListener("click",e=>{e.stopPropagation();b.classList.remove("ring");void b.offsetWidth;b.classList.add("ring");chime([[1319,1760],[1568,2093],[1175,1568]][i]);setTimeout(()=>b.classList.remove("ring"),1700)}));
function setG(v){gv=clamp(v,0,1);kids.style.setProperty("--g",gv.toFixed(3))}
function play(to){man=1;clearTimeout(mt);cancelAnimationFrame(anim);const a=gv,t0=performance.now();(function f(t){const k=clamp((t-t0)/2400,0,1),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;setG(a+(to-a)*(calm?1:e));if(k<1)anim=requestAnimationFrame(f);else{if(to>.5){chime([523,784,1047,1568]);const b=arch.getBoundingClientRect();hearts(b.left+b.width/2,b.top+b.height*.45);petals(b.left+b.width/2,b.top+b.height*.3,24)}mt=setTimeout(()=>man=0,6000)}})(t0)}
arch.addEventListener("click",e=>{const up=gv<.5;play(up?1:0);if(up)petals(e.clientX,e.clientY,26)});
arch.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();play(gv<.5?1:0)}});

/* wedding animations: garland, diya, petals on directions */
document.querySelectorAll(".ec").forEach(c=>{const cols=["#f6a21e","#fff3d6","#e23b4e","#f2cf7a","#f6a21e","#ff9db4"];let h="";
 for(let i=0;i<=16;i++){const t=i/16;h+=`<i style="--x:calc(${(2+t*96).toFixed(1)}% - 6px);--y:${(3+Math.sin(Math.PI*t)*20).toFixed(1)}px;--c:${cols[i%6]};--d:${(i*.045+.2).toFixed(2)}s"></i>`}
 c.insertAdjacentHTML("afterbegin",`<div class="gw" aria-hidden="true">${h}</div>`);
 c.querySelector(".ph").insertAdjacentHTML("beforeend",'<i class="dya" aria-hidden="true"></i>')});
if(!calm){
 const eo=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const r=e.target.getBoundingClientRect();petals(r.left+r.width/2,Math.max(r.top,60),9);eo.unobserve(e.target)}}),{threshold:.55});
 document.querySelectorAll(".ec").forEach(c=>eo.observe(c));
}
document.addEventListener("pointerdown",e=>{const b=e.target.closest(".ec .b");if(b){petals(e.clientX,e.clientY,16);chime([1047,1319])}});
