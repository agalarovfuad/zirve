// texts.js + speak.js + exams.js → build-texts.json (audio-gen.py üçün)
const fs=require('fs');
const f=new Function(['texts.js','speak.js','exams.js'].map(x=>fs.readFileSync('web/'+x,'utf8')).join('\n')+';return {TEXTS,REVIEWS,SPEAK,EXAMS};');
const {TEXTS,REVIEWS,SPEAK,EXAMS}=f();
const o={t:{},r:{},s:{},e:{}};
for(const k in TEXTS)o.t[k]=TEXTS[k].text;
for(const k in REVIEWS)o.r[k]=REVIEWS[k].text;
for(const k in SPEAK)SPEAK[k].items.forEach((s,i)=>o.s[k+'-'+(i+1)]=s);
for(const k in EXAMS){const e=EXAMS[k];const R=e.readings||(e.reading?[e.reading]:[]);
  R.forEach((r,i)=>o.e[k+'-r'+(i?i+1:'')]=r.text);
  (e.listening||[]).forEach((s,i)=>o.e[k+'-l'+(i+1)]=s);}
fs.writeFileSync('build-texts.json',JSON.stringify(o));
console.log('t',Object.keys(o.t).length,'r',Object.keys(o.r).length,'s',Object.keys(o.s).length,'e',Object.keys(o.e).length);
