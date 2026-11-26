// Shared pieces for both NJSD videos: easing, word slides, the guide worksheet page with a hand that
// writes into it, and the end card (primary logo + Scott's photo). Everything is a function of time.
(function(){
const clamp=x=>Math.min(1,Math.max(0,x)), span=(t,a,b)=>clamp((t-a)/(b-a));
const eo=x=>1-Math.pow(1-x,4), eio=x=>x<.5?8*x*x*x*x:1-Math.pow(-2*x+2,4)/2, lerp=(a,b,k)=>a+(b-a)*k;
const sm=x=>x*x*(3-2*x);
function words(el,list){const out=[];list.forEach((w,i)=>{if(i)el.append(document.createTextNode(' '));const box=document.createElement('span');box.className='word';const s=document.createElement('span');s.innerHTML=w;box.append(s);el.append(box);out.push(s);});return out;}
function slide(spans,t,tin,tout,gap=0.08,dur=0.55){spans.forEach((s,i)=>{const up=eo(span(t,tin+i*gap,tin+i*gap+dur));const away=tout==null?0:eio(span(t,tout+i*gap*.5,tout+i*gap*.5+.4));s.style.transform=`translateY(${(1-up)*112-away*112}%)`;s.style.filter=`blur(${(1-up)*6+away*6}px)`;});}
function el(tag,css,html,parent){const e=document.createElement(tag);if(css)e.style.cssText=css;if(html!=null)e.innerHTML=html;if(parent)parent.append(e);return e;}

const NAVY='#1B2A4A', ORANGE='#F66733', GOLD='#D4AF37', OFF='#F8F9FA', CHAR='#333333';

// ---------- the worksheet page (760 x 1036 design units) ----------
// Copy is a placeholder page for the proposed guide (no draft exists yet). Numbers are sample entries (50/30/20 of $4,800).
function buildWorksheet(parent){
  const W=760,H=1036;
  const pg=el('div',`position:absolute;left:0;top:0;width:${W}px;height:${H}px;background:${OFF};border-radius:10px;overflow:hidden;font-family:Archivo,sans-serif;color:${CHAR};`,null,parent);
  el('div',`position:absolute;left:0;top:0;right:0;height:104px;background:${NAVY};`,null,pg);
  el('div',`position:absolute;left:44px;top:36px;font-family:Oswald;font-weight:600;font-size:28px;letter-spacing:.24em;color:${GOLD};`,'THE FINANCIAL GUIDE',pg);
  el('div',`position:absolute;right:44px;top:38px;font-family:Oswald;font-weight:600;font-size:24px;letter-spacing:.2em;color:${ORANGE};`,'WORKSHEET 01',pg);
  el('div',`position:absolute;left:0;right:0;top:104px;height:6px;background:${GOLD};`,null,pg);
  el('div',`position:absolute;left:44px;top:140px;font-family:Oswald;font-weight:700;font-size:58px;color:${NAVY};letter-spacing:.01em;`,'MONTHLY MONEY SNAPSHOT',pg);
  el('div',`position:absolute;left:46px;top:218px;font-size:26px;color:${CHAR};`,'Step one: <b style="color:'+ORANGE+'">know your numbers.</b>',pg);
  const rows=[['Take-home pay','$4,800'],['Needs <span style="color:#777;font-size:20px">(housing, food, bills)</span>','$2,400'],['Wants <span style="color:#777;font-size:20px">(fun, dining, extras)</span>','$1,440'],['Savings &amp; debt payoff','$960']];
  const vals=[];
  rows.forEach(([lab,val],i)=>{
    const y=292+i*80;
    el('div',`position:absolute;left:46px;top:${y}px;font-size:28px;font-weight:600;color:${NAVY};`,lab,pg);
    el('div',`position:absolute;left:500px;width:214px;top:${y+40}px;height:2px;background:#C9CDD6;`,null,pg);
    const v=el('div',`position:absolute;left:512px;top:${y-14}px;font-family:Caveat;font-weight:700;font-size:56px;color:${i===0?NAVY:(i===3?'#B8921F':ORANGE)};white-space:nowrap;clip-path:inset(0 100% 0 0);`,val,pg);
    vals.push({e:v,x:512,y:y+30,w:0});
  });
  el('div',`position:absolute;left:46px;top:640px;font-family:Oswald;font-weight:600;font-size:30px;letter-spacing:.14em;color:${NAVY};`,'WHERE IT GOES',pg);
  el('div',`position:absolute;left:46px;top:686px;width:120px;height:4px;background:${GOLD};`,null,pg);
  const base=946, bars=[], bx=[140,330,520], bh=[210,126,84], bc=[NAVY,ORANGE,GOLD], bl=['NEEDS','WANTS','SAVE'], bp=['50%','30%','20%'];
  el('div',`position:absolute;left:96px;width:572px;top:${base}px;height:3px;background:${NAVY};`,null,pg);
  bx.forEach((x,i)=>{
    const b=el('div',`position:absolute;left:${x}px;width:110px;bottom:${H-base}px;height:0px;background:${bc[i]};border-radius:6px 6px 0 0;`,null,pg);
    el('div',`position:absolute;left:${x}px;width:110px;text-align:center;top:${base+12}px;font-family:Oswald;font-weight:600;font-size:22px;letter-spacing:.12em;color:${NAVY};`,bl[i],pg);
    const p=el('div',`position:absolute;left:${x}px;width:110px;text-align:center;top:${base-bh[i]-62}px;font-family:Caveat;font-weight:700;font-size:44px;color:${i===1?ORANGE:NAVY};clip-path:inset(0 100% 0 0);`,bp[i],pg);
    bars.push({e:b,p,x,h:bh[i]});
  });
  const foot=el('div',`position:absolute;left:44px;right:44px;top:992px;height:2px;background:#E1E4EA;`,null,pg);
  el('div',`position:absolute;left:46px;top:1000px;font-size:18px;color:#666;`,'NJSD Capital LLC &middot; njsdcapital.com',pg);
  el('div',`position:absolute;right:46px;top:998px;font-family:Oswald;font-weight:600;font-size:18px;letter-spacing:.2em;color:#B8921F;`,'SAMPLE ENTRIES',pg);
  // measure text widths once fonts are ready
  const measure=()=>vals.forEach(v=>{v.w=v.e.offsetWidth;});
  // writing plan, local seconds from the start of writing
  const plan=[]; let tt=0;
  vals.forEach((v,i)=>{plan.push({kind:'text',v,t0:tt,t1:tt+0.48}); tt+=0.62;});
  tt+=0.15;
  bars.forEach((b,i)=>{plan.push({kind:'bar',b,t0:tt,t1:tt+0.45}); tt+=0.52; plan.push({kind:'pct',b,t0:tt,t1:tt+0.26}); tt+=0.36;});
  const total=tt;
  return {pg,W,H,vals,bars,plan,total,measure,
    // returns the pen tip in page units, and whether the pen is down
    write(u){
      let pen=null, down=false;
      for(const s of plan){
        const k=span(u,s.t0,s.t1);
        if(s.kind==='text'){ const w=s.v.w||110; s.v.e.style.clipPath=`inset(0 ${(1-k)*100}% 0 0)`; if(u>=s.t0&&u<=s.t1){pen={x:s.v.x+w*k, y:s.v.y+Math.sin(k*Math.PI*7)*7}; down=true;} }
        else if(s.kind==='bar'){ const kk=sm(k); s.b.e.style.height=(s.b.h*kk)+'px'; if(u>=s.t0&&u<=s.t1){pen={x:s.b.x+100, y:base-s.b.h*kk}; down=true;} }
        else { s.b.p.style.clipPath=`inset(0 ${(1-k)*100}% 0 0)`; if(u>=s.t0&&u<=s.t1){pen={x:s.b.x+18+76*k, y:base-s.b.h-22+Math.sin(k*Math.PI*5)*6}; down=true;} }
      }
      if(!pen){ // travel between strokes: from the end of the last stroke to the start of the next
        const prev=[...plan].reverse().find(s=>s.t1<=u), next=plan.find(s=>s.t0>u);
        const endOf=s=>s.kind==='text'?{x:s.v.x+(s.v.w||110),y:s.v.y}:s.kind==='bar'?{x:s.b.x+100,y:base-s.b.h}:{x:s.b.x+94,y:base-s.b.h-22};
        const startOf=s=>s.kind==='text'?{x:s.v.x,y:s.v.y}:s.kind==='bar'?{x:s.b.x+100,y:base}:{x:s.b.x+18,y:base-s.b.h-22};
        if(prev&&next){const k=eio(span(u,prev.t1,next.t0));const a=endOf(prev),b=startOf(next);pen={x:lerp(a.x,b.x,k),y:lerp(a.y,b.y,k)-Math.sin(k*Math.PI)*40};}
        else if(next){pen=startOf(next);} else if(prev){pen=endOf(prev);}
      }
      return {pen,down};
    }};
}

// ---------- the hand: a flat illustration, pen tip at (0,0) ----------
function buildHand(parent){
  const NS='http://www.w3.org/2000/svg';
  const wrap=el('div','position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;',null,parent);
  wrap.innerHTML=`<svg width="560" height="520" viewBox="-30 -480 560 520" style="position:absolute;left:-30px;top:-480px;overflow:visible;filter:drop-shadow(-14px 22px 18px rgba(10,18,36,.28))">
   <g>
    <!-- sleeve + cuff (white shirt, gold cufflink) -->
    <g transform="translate(250,-300) rotate(-32)">
      <rect x="0" y="-80" width="360" height="170" rx="30" fill="#FFFFFF" stroke="#D9DCE2" stroke-width="3"/>
      <rect x="-6" y="-84" width="70" height="178" rx="22" fill="#F3F4F7" stroke="#D2D6DE" stroke-width="3"/>
      <circle cx="30" cy="40" r="11" fill="#D4AF37" stroke="#B08A1E" stroke-width="2"/>
    </g>
    <!-- back of hand -->
    <ellipse cx="170" cy="-205" rx="118" ry="84" transform="rotate(-32 170 -205)" fill="#8B5A3C"/>
    <ellipse cx="190" cy="-225" rx="70" ry="40" transform="rotate(-32 190 -225)" fill="#9A6646" opacity=".55"/>
    <!-- pen (navy body, gold tip and clip) -->
    <g transform="rotate(-57)">
      <polygon points="0,0 30,-8 30,8" fill="#D4AF37"/>
      <rect x="28" y="-10" width="300" height="20" rx="9" fill="#1B2A4A"/>
      <rect x="28" y="-10" width="46" height="20" rx="6" fill="#2A3D66"/>
      <rect x="220" y="-16" width="80" height="6" rx="3" fill="#D4AF37"/>
      <rect x="318" y="-10" width="16" height="20" rx="6" fill="#F66733"/>
    </g>
    <!-- curled fingers over the pen -->
    <ellipse cx="96" cy="-112" rx="40" ry="24" transform="rotate(-20 96 -112)" fill="#7C4E33"/>
    <ellipse cx="128" cy="-98" rx="36" ry="22" transform="rotate(-10 128 -98)" fill="#835338"/>
    <ellipse cx="160" cy="-96" rx="32" ry="20" transform="rotate(0 160 -96)" fill="#7C4E33"/>
    <!-- index finger along the pen, thumb -->
    <path d="M70,-120 C52,-110 40,-88 46,-70 C52,-56 70,-60 78,-74 L112,-140 Z" fill="#8B5A3C"/>
    <ellipse cx="58" cy="-80" rx="12" ry="9" transform="rotate(-50 58 -80)" fill="#C79A7E" opacity=".7"/>
    <path d="M20,-150 C40,-176 84,-176 100,-150 C90,-130 60,-118 38,-122 C24,-126 14,-138 20,-150 Z" fill="#94603F"/>
   </g></svg>`;
  return wrap;
}

// ---------- end card: primary logo, photo, titles (on off-white) ----------
function buildEnd(parent,opts){
  const L=opts.logo; // {x,y,w}
  const box=el('div','position:absolute;inset:0;',null,parent);
  const logo=el('img',`position:absolute;left:${L.x}px;top:${L.y}px;width:${L.w}px;`,null,box); logo.src='../assets/logos/SDV_Primary_Logo_Horizontal_Full-Color.svg';
  const P=opts.photo; // {cx,cy,w,h}
  const frame=el('div',`position:absolute;left:${P.cx-P.w/2}px;top:${P.cy-P.h/2}px;width:${P.w}px;height:${P.h}px;border-radius:26px;background:${GOLD};padding:9px;box-sizing:border-box;box-shadow:0 26px 60px rgba(27,42,74,.28);`,null,box);
  const inner=el('div',`position:absolute;inset:9px;border-radius:19px;background:${ORANGE};padding:5px;box-sizing:border-box;`,null,frame);
  const clip=el('div','position:absolute;inset:5px;border-radius:15px;overflow:hidden;background:#dfe2ea;',null,inner);
  const img=el('img','position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;object-position:50% 50%;transform-origin:50% 30%;',null,clip); img.src='../assets/photos/Scott_DSC02338_seated-vest-orange-tie.jpg';
  const tag=el('div',`position:absolute;left:${P.cx-P.w/2+30}px;top:${P.cy+P.h/2-74}px;height:58px;background:${NAVY};border-radius:10px;padding:0 22px;display:flex;align-items:center;gap:12px;font-family:Oswald;font-weight:600;font-size:30px;letter-spacing:.08em;color:${OFF};white-space:nowrap;`,`SCOTT DAVIS <span style="color:${GOLD}">&middot;</span> <span style="color:${ORANGE}">FINANCIAL COACH</span>`,box);
  const title=el('div',`position:absolute;left:0;width:1080px;text-align:center;top:${opts.titleY}px;font-family:Oswald;font-weight:700;font-size:92px;color:${NAVY};white-space:nowrap;`,null,box);
  const soon=el('div',`position:absolute;left:0;width:1080px;text-align:center;top:${opts.titleY+118}px;font-family:Oswald;font-weight:600;font-size:38px;letter-spacing:.3em;color:${ORANGE};white-space:nowrap;`,null,box);
  const url=el('div',`position:absolute;left:0;width:1080px;text-align:center;top:${opts.titleY+176}px;font-size:34px;color:${CHAR};letter-spacing:.06em;white-space:nowrap;`,null,box);
  const rule=el('div',`position:absolute;left:64px;right:64px;top:1772px;height:3px;background:linear-gradient(90deg,${NAVY} 0 33%,${ORANGE} 33% 66%,${GOLD} 66%);transform-origin:0 50%;`,null,box);
  const fine=el('div',`position:absolute;left:0;width:1080px;text-align:center;top:1800px;font-size:24px;color:#777;white-space:nowrap;`,null,box);
  const tW=words(title,['THE','FINANCIAL','GUIDE']), sW=words(soon,['COMING','SOON']), uW=words(url,['njsdcapital.com']), fW=words(fine,'Concept preview. Educational content, not financial advice.'.split(' '));
  return {box,logo,frame,img,tag,
    seek(t,B){ // B: {reveal, revealed, photo, title}
      const rv=eo(span(t,B.reveal,B.revealed));
      logo.style.display=t>=B.reveal?'block':'none';
      logo.style.clipPath=`inset(0 ${(1-404/1154)*100*(1-rv)}% 0 0)`;
      const ph=eo(span(t,B.photo,B.photo+0.9));
      frame.style.display=t>=B.photo?'block':'none';
      frame.style.transform=`translateY(${(1-ph)*160}px) scale(${lerp(0.9,1,ph)})`;
      frame.style.clipPath=`inset(0 0 ${(1-ph)*100}% 0 round 26px)`;
      img.style.transform=`scale(${1.08-0.06*span(t,B.photo,B.end)})`;
      const tg=eo(span(t,B.photo+0.6,B.photo+1.2));
      tag.style.display=t>=B.photo+0.6?'flex':'none'; tag.style.clipPath=`inset(0 ${(1-tg)*100}% 0 0 round 10px)`;
      slide(tW,t,B.title,null,0.12,0.6); slide(sW,t,B.title+0.45,null,0.1,0.5); slide(uW,t,B.title+0.7,null,0.1,0.5);
      rule.style.transform=`scaleX(${eo(span(t,B.title+0.5,B.title+1.4))})`; rule.style.display=t>B.title?'block':'none';
      slide(fW,t,B.title+0.9,null,0.02,0.45);
    }};
}

window.SH={clamp,span,eo,eio,lerp,sm,words,slide,el,buildWorksheet,buildHand,buildEnd,NAVY,ORANGE,GOLD,OFF,CHAR};
})();
