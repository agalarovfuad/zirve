import json,re,sys
CMU={}
for line in open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"cmudict.dict"),encoding="utf-8"):
    line=line.split("#")[0].strip()
    if not line: continue
    w,*ph=line.split()
    base=re.sub(r"\(\d+\)$","",w)
    CMU.setdefault(base,[]).append(ph)

V={"AA":"a","AE":"ə","AH":"a","AO":"o","AW":"au","AY":"ay","EH":"e","ER":"ör","EY":"ey","IH":"i","IY":"ii","OW":"ou","OY":"oy","UH":"u","UW":"u"}
C={"B":"b","CH":"ç","D":"d","DH":"ð","F":"f","G":"g","HH":"h","JH":"c","K":"k","L":"l","M":"m","N":"n","NG":"ŋ","P":"p","R":"r","S":"s","SH":"ş","T":"t","TH":"θ","V":"v","W":"u̯","Y":"y","Z":"z","ZH":"j"}
ONSET2={("S","T"),("S","P"),("S","K"),("S","L"),("S","M"),("S","N"),("S","W"),("P","L"),("P","R"),("B","L"),("B","R"),("T","R"),("D","R"),("K","L"),("K","R"),("K","W"),("G","L"),("G","R"),("F","L"),("F","R"),("TH","R"),("SH","R"),("T","W"),("D","W"),("P","Y"),("B","Y"),("K","Y"),("F","Y"),("M","Y"),("V","Y"),("HH","Y")}
ONSET3={("S","T","R"),("S","P","R"),("S","P","L"),("S","K","R"),("S","K","W")}

# heteronymlər: POS-a görə düz variant
OVR={("read","v"):"R IY1 D",("lead","v"):"L IY1 D",("lead","n"):"L IY1 D",("live","v"):"L IH1 V",("live","adj"):"L AY1 V",
     ("close","v"):"K L OW1 Z",("close","adj"):"K L OW1 S",("use","v"):"Y UW1 Z",("use","n"):"Y UW1 S",("wind","n"):"W IH1 N D",
     ("tear","n"):"T IH1 R",("bow","n"):"B OW1",("minute","n"):"M IH1 N AH0 T",("content","n"):"K AA1 N T EH0 N T",
     ("wound","n"):"W UW1 N D",("desert","n"):"D EH1 Z ER0 T",("object","n"):"AA1 B JH EH0 K T",("present","n"):"P R EH1 Z AH0 N T",
     ("present","v"):"P R IY0 Z EH1 N T",("record","n"):"R EH1 K ER0 D",("record","v"):"R IH0 K AO1 R D",("the","det"):"DH AH0",("sometimes","adv"):"S AH1 M T AY2 M Z",("without","prep"):"W IH0 DH AW1 T",("with","prep"):"W IH1 DH",("a","det"):"AH0"}

SHIFT={"present","record","object","content","permit","produce","project","increase","decrease","desert","conduct","conflict","contract","contrast","export","import","insert","protest","rebel","subject","suspect","progress","refuse","survey","transfer","transport","upset","combine","extract","convert","convict","perfect","address","research","detail","discount","compound","digest","insult","update","upgrade","download","upload","reject","object","contest","conflict","decrease","transport"}
DUAL=SHIFT|{"close","live","lead","read","use","minute","wind","tear","wound","estimate","separate","graduate","moderate","associate","appropriate","alternate","either","neither","route","often","again","against","invalid","bow"}
def choose(word,pos):
    w=word.lower()
    if (w,pos) in OVR: return OVR[(w,pos)].split()
    vs=CMU.get(w)
    if not vs: return None
    if len(vs)==1 or w not in SHIFT: return vs[0]
    # iki+ hecalı stress fərqi: fel → sonrakı heca, isim/sifət → birinci heca
    def stress_pos(ph):
        vows=[p for p in ph if p[-1].isdigit()]
        for i,p in enumerate(vows):
            if p.endswith("1"): return i
        return 0
    if pos=="v": return max(vs,key=stress_pos)
    if pos in("n","adj"): return min(vs,key=stress_pos)
    return vs[0]

def fix_er(ph):
    out=[]
    for i,p in enumerate(ph):
        if p[:2]=="ER" and i+1<len(ph) and ph[i+1][-1].isdigit():
            out+=["AH"+p[2],"R"]
        else: out.append(p)
    return out

def syllabify(ph):
    # hər sait bir heca nüvəsi; samitləri maksimal onset qaydası ilə böl
    nuc=[i for i,p in enumerate(ph) if p[-1].isdigit()]
    if not nuc: return [ph]
    bounds=[0]
    for a,b in zip(nuc,nuc[1:]):
        cons=ph[a+1:b]
        n=len(cons)
        if n==0: cut=b
        elif n==1: cut=a+1
        else:
            nxt_stressed=ph[b].endswith("1")
            def ok(cl): return nxt_stressed or cl[0]!="S"
            if n>=3 and tuple(cons[-3:]) in ONSET3 and ok(cons[-3:]): cut=b-3
            elif tuple(cons[-2:]) in ONSET2 and ok(cons[-2:]): cut=b-2
            else: cut=b-1
        bounds.append(cut)
    bounds.append(len(ph))
    return [ph[bounds[i]:bounds[i+1]] for i in range(len(bounds)-1)]

def up(s):
    out=""
    for ch in s:
        if ch=="i": out+="İ"
        elif ch=="ı": out+="I"
        elif ch in "θðŋ": out+=ch
        else: out+=ch.upper()
    return out

def render(ph):
    ph=fix_er(ph)
    syl=syllabify(ph)
    parts=[];stressed=None
    for si,sy in enumerate(syl):
        t=""
        for p in sy:
            if p[-1].isdigit():
                base,st=p[:-1],p[-1]
                v=V[base]
                if base=="AH" and st=="0": v="ə"
                if base=="ER" and st=="0": v="ər"
                if base=="IH" and st=="0": v="i"
                if base=="IY" and st!="1": v="i"
                if st=="1": stressed=si
                t+=v
            else:
                t+=C[p]
        parts.append(t)
    if len(parts)==1: return parts[0]
    if stressed is not None: parts[stressed]=up(parts[stressed])
    return "-".join(parts)

def sig(ph):
    ph=fix_er(ph)
    vows=[p for p in ph if p[-1].isdigit()]
    for i,p in enumerate(vows):
        if p.endswith("1"): return (i,p[:-1])
    return None

def ox(word,pos):
    toks=word.split()
    res=[]
    for t in toks:
        ph=choose(t,pos)
        if ph is None: return None
        main=render(ph)
        # heteronim / iki tələffüzlü söz: vurğu yeri və ya vurğulu sait fərqlidirsə hər ikisini göstər
        if len(toks)==1 and t.lower() in DUAL:
            alts=[]
            for v in CMU.get(t.lower(),[]):
                if sig(v) is None: continue
                r=render(v)
                if r!=main and r not in alts: alts.append(r)
            if alts: main=main+" / "+alts[0]
        res.append(main)
    return " ".join(res)

if __name__=="__main__":
    src=open(sys.argv[1],encoding="utf-8").read()
    W=json.loads(re.search(r"const W=(\[.*?\]);",src,re.S).group(1))
    miss=[];changed=[];out=[]
    for r in W:
        o=ox(r[1],r[2])
        old=r[4] if len(r)>4 else None
        if o is None:
            miss.append(r[1]); o=old
        elif old and old!=o: changed.append((r[0],r[1],old,o))
        row=r[:4]+([o] if o else [])
        out.append(row)
    json.dump({"rows":out,"miss":miss,"changed":changed},open("ox-result.json","w"),ensure_ascii=False)
    print("tapılmayan:",len(miss),miss[:40])
    print("dəyişən (1-400):",len(changed))
