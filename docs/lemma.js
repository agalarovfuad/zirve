// Mətndəki sözü siyahıdakı əsas formaya gətirir (sadə lemmatizator). Runtime-da və yoxlama skriptində istifadə olunur.
const IRREG={am:'be',is:'be',are:'be',was:'be',were:'be',been:'be',being:'be',has:'have',had:'have',having:'have',does:'do',did:'do',done:'do',doing:'do',
said:'say',went:'go',gone:'go',goes:'go',got:'get',gotten:'get',made:'make',came:'come',told:'tell',took:'take',taken:'take',knew:'know',known:'know',thought:'think',gave:'give',given:'give',
found:'find',saw:'see',seen:'see',stood:'stand',wrote:'write',written:'write',felt:'feel',kept:'keep',left:'leave',met:'meet',began:'begin',begun:'begin',ran:'run',sat:'sit',spoke:'speak',spoken:'speak',
understood:'understand',won:'win',lost:'lose',bought:'buy',brought:'bring',built:'build',heard:'hear',held:'hold',led:'lead',paid:'pay',sent:'send',spent:'spend',taught:'teach',fell:'fall',fallen:'fall',
grew:'grow',grown:'grow',became:'become',children:'child',men:'man',women:'woman',better:'good',best:'good',worse:'bad',worst:'bad',more:'more',most:'most',
me:'i',my:'i',mine:'i',myself:'i',him:'he',his:'he',himself:'he',her:'she',hers:'she',herself:'she',them:'they',their:'they',theirs:'they',themselves:'they',us:'we',our:'we',ours:'we',ourselves:'we',
your:'you',yours:'you',yourself:'you',its:'it',itself:'it',an:'a',cannot:'can',could:'can',would:'will',might:'may',those:'that',these:'this',feet:'foot',teeth:'tooth',lives:'live',
let:'let',put:'put',read:'read',cut:'cut',set:'set',hit:'hit',hurt:'hurt',cost:'cost',shut:'shut',meant:'mean',sold:'sell',shown:'show',showed:'show',caught:'catch',chose:'choose',chosen:'choose',
drew:'draw',drawn:'draw',drove:'drive',driven:'drive',ate:'eat',eaten:'eat',flew:'fly',forgot:'forget',forgotten:'forget',rose:'rise',risen:'rise',sang:'sing',slept:'sleep',threw:'throw',thrown:'throw',woke:'wake',wore:'wear',worn:'wear'};
function lemmas(word){
  const w=word.toLowerCase().replace(/[^a-z']/g,'');if(!w)return [];
  const out=[w];
  if(IRREG[w])out.push(IRREG[w]);
  if(w.endsWith("'s"))out.push(w.slice(0,-2));
  if(w.endsWith('ies'))out.push(w.slice(0,-3)+'y');
  if(w.endsWith('es'))out.push(w.slice(0,-2));
  if(w.endsWith('s'))out.push(w.slice(0,-1));
  if(w.endsWith('ied'))out.push(w.slice(0,-3)+'y');
  if(w.endsWith('ed')){out.push(w.slice(0,-2),w.slice(0,-1));if(w.length>4&&w[w.length-3]===w[w.length-4])out.push(w.slice(0,-3));}
  if(w.endsWith('ing')){out.push(w.slice(0,-3),w.slice(0,-3)+'e');if(w.length>5&&w[w.length-4]===w[w.length-5])out.push(w.slice(0,-4));}
  if(w.endsWith('er'))out.push(w.slice(0,-2),w.slice(0,-1));
  if(w.endsWith('est'))out.push(w.slice(0,-3),w.slice(0,-2));
  if(w.endsWith('ly'))out.push(w.slice(0,-2));
  return out;
}
if(typeof module!=='undefined')module.exports={lemmas,IRREG};
