import { useState, useEffect } from “react”;

const TIFFANY = “#81D8D0”;
const NARDO = “#9EA0A3”;
const WHITE = “#F4F4F2”;
const BG = “#1C1C1E”;
const CARD = “#242426”;
const DARK = “#141416”;

const faqData = [
{ q: “Quelle est la qualité de vos lunettes ?”, a: “Nos lunettes Radar EV Path sont des répliques qualité 1.1 — identiques aux originales en termes de design, finitions et rendu visuel. Nous proposons uniquement de la qualité à nos clients, chaque paire est soigneusement contrôlée avant expédition.” },
{ q: “Comment fonctionne la livraison ?”, a: “La livraison est gérée via Shopify Payments. Tu reçois un email de confirmation avec ton numéro de suivi dès l’expédition.” },
{ q: “Quels sont les délais de livraison ?”, a: “En général 3 à 5 jours ouvrés en France métropolitaine. Un suivi en temps réel est disponible après expédition.” },
{ q: “Puis-je retourner ma commande ?”, a: “Si ta paire arrive abîmée ou non conforme, contacte-nous via notre Linktree et on arrange ça ensemble.” },
{ q: “Les Radar EV conviennent à quel sport ?”, a: “Conçues pour le cyclisme, les Radar EV Path sont parfaites pour le vélo, la course à pied, le triathlon et le quotidien urbain.” },
{ q: “C’est quoi la différence entre 70€ et 100€ ?”, a: “Les paires à 70€ sont des coloris standards disponibles en stock. La paire à 100€ est une édition exclusive en quantité ultra limitée.” },
];

const placeholderProducts = [
{ id: 1, name: “Coloris Standard 01”, price: 70, desc: “Radar EV Path — Verres Prizm. Photos à venir.”, badge: “À venir”, badgeType: “soon” },
{ id: 2, name: “Coloris Standard 02”, price: 70, desc: “Radar EV Path — Verres Prizm. Photos à venir.”, badge: “À venir”, badgeType: “soon” },
{ id: 3, name: “Coloris Standard 03”, price: 70, desc: “Radar EV Path — Verres Prizm. Photos à venir.”, badge: “À venir”, badgeType: “soon” },
{ id: 4, name: “Édition Exclu”, price: 100, desc: “Coloris exclusif. Introuvable ailleurs. Stock ultra limité.”, badge: “⚡ Exclu”, badgeType: “exclu” },
];

export default function OakleyMassif() {
const [cart, setCart] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [notif, setNotif] = useState(false);
const [modal, setModal] = useState(null);
const [faqOpen, setFaqOpen] = useState(null);
const [menuOpen, setMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const check = () => setIsMobile(window.innerWidth < 768);
check();
window.addEventListener(“resize”, check);
return () => window.removeEventListener(“resize”, check);
}, []);

const addToCart = (p) => {
setCart((prev) => {
const ex = prev.find((i) => i.id === p.id);
return ex ? prev.map((i) => i.id === p.id ? { …i, qty: i.qty + 1 } : i) : […prev, { …p, qty: 1 }];
});
setNotif(true);
setTimeout(() => setNotif(false), 2200);
setCartOpen(true);
setModal(null);
};

const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
const cartCount = cart.reduce((s, i) => s + i.qty, 0);

const scrollTo = (id) => {
document.getElementById(id)?.scrollIntoView({ behavior: “smooth” });
setMenuOpen(false);
};

const px = isMobile ? “16px” : “28px”;

return (
<div style={{ fontFamily: “system-ui, sans-serif”, background: BG, color: WHITE, minHeight: “100vh”, overflowX: “hidden” }}>
<style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} } @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} } @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} } @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} } .fu1{animation:fadeUp 0.8s ease both} .fu2{animation:fadeUp 0.8s 0.12s ease both} .fu3{animation:fadeUp 0.8s 0.24s ease both} .pcard{transition:transform 0.25s ease,box-shadow 0.25s ease} .pcard:active{transform:scale(0.98)!important} .addbtn:active{background:${TIFFANY}!important;color:${DARK}!important} .feat:hover{border-top-color:${TIFFANY}!important} .faqitem:hover{border-color:rgba(129,216,208,0.25)!important} .linktree-btn:hover,.linktree-btn:active{background:${TIFFANY}!important;color:${DARK}!important;border-color:${TIFFANY}!important} * { -webkit-tap-highlight-color: transparent; } ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-thumb{background:${TIFFANY};border-radius:2px}`}</style>

```
  {/* NOTIF */}
  {notif && (
    <div style={{ position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)", background:TIFFANY, color:DARK, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", padding:"12px 20px", zIndex:9999, whiteSpace:"nowrap", borderRadius:2 }}>
      ✓ Ajouté au panier !
    </div>
  )}

  {/* TOP BAR */}
  <div style={{ background:TIFFANY, padding:"9px 16px", textAlign:"center" }}>
    <p style={{ fontSize: isMobile ? 10 : 11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:DARK }}>
      🔥 Lancement bientôt — Suivez-nous !
    </p>
  </div>

  {/* NAV */}
  <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(28,28,30,0.97)", borderBottom:`1px solid rgba(129,216,208,0.1)` }}>
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:`14px ${px}` }}>
      <div style={{ fontSize: isMobile ? 16 : 20, fontWeight:900, letterSpacing:4, textTransform:"uppercase", cursor:"pointer" }} onClick={() => scrollTo("hero")}>
        OAKLEY <span style={{ color:TIFFANY }}>MASSIF</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <button onClick={() => setCartOpen(true)}
          style={{ display:"flex", alignItems:"center", gap:6, background:TIFFANY, color:DARK, border:"none", padding:"8px 14px", fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", cursor:"pointer" }}>
          🛒{cartCount > 0 && <span style={{ background:DARK, color:TIFFANY, padding:"1px 6px", fontSize:10 }}>{cartCount}</span>}
        </button>
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background:"transparent", border:`1px solid rgba(158,160,163,0.2)`, color:WHITE, padding:"8px 12px", cursor:"pointer", fontSize:16 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
        {!isMobile && (
          <div style={{ display:"flex", gap:20 }}>
            {[["Produits","produits"],["Exclu","exclu"],["FAQ","faq"],["Contact","contact"]].map(([label,id]) => (
              <span key={id} onClick={() => scrollTo(id)}
                style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO, cursor:"pointer" }}>
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* MOBILE MENU */}
    {isMobile && menuOpen && (
      <div style={{ background:DARK, borderTop:`1px solid rgba(129,216,208,0.1)`, animation:"slideDown 0.2s ease" }}>
        {[["Produits","produits"],["Édition Exclu","exclu"],["FAQ","faq"],["Contact","contact"]].map(([label,id]) => (
          <div key={id} onClick={() => scrollTo(id)}
            style={{ padding:"16px 20px", fontSize:13, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO, borderBottom:`1px solid rgba(158,160,163,0.06)`, cursor:"pointer" }}>
            {label}
          </div>
        ))}
      </div>
    )}
  </nav>

  {/* HERO */}
  <div id="hero" style={{ minHeight: isMobile ? "85vh" : "90vh", display:"flex", flexDirection:"column", justifyContent:"center", padding: isMobile ? "60px 16px 48px" : "80px 28px 56px", position:"relative", overflow:"hidden", background:`radial-gradient(ellipse 80% 70% at 75% 50%, rgba(129,216,208,0.055) 0%, transparent 70%)` }}>
    <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(158,160,163,0.02) 80px, rgba(158,160,163,0.02) 81px)" }} />
    <div style={{ position:"relative", zIndex:2 }}>
      <div className="fu1" style={{ display:"inline-block", fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:TIFFANY, border:`1px solid ${TIFFANY}`, padding:"6px 12px", marginBottom:20 }}>
        🔥 Marseille × Performance
      </div>
      <div className="fu2" style={{ fontSize: isMobile ? "clamp(52px, 18vw, 80px)" : "clamp(58px, 13vw, 108px)", fontWeight:900, lineHeight:0.88, letterSpacing:1, textTransform:"uppercase", marginBottom:20 }}>
        RADAR<br />
        <span style={{ WebkitTextStroke:`2px ${NARDO}`, WebkitTextFillColor:"transparent" }}>EV PATH</span>
      </div>
      <p className="fu3" style={{ fontSize: isMobile ? 14 : 15, fontWeight:300, lineHeight:1.75, color:NARDO, maxWidth:400, marginBottom:28 }}>
        Les lunettes de ceux qui vont vite. Cyclistes, coureurs, et les gars de Marseille qui savent ce que c'est.
      </p>
      <div className="fu3" style={{ display:"flex", flexDirection: isMobile ? "column" : "row", gap:10 }}>
        <button onClick={() => scrollTo("produits")}
          style={{ background:TIFFANY, color:DARK, border:"none", padding:"14px 28px", fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer" }}>
          Voir les modèles ↓
        </button>
        <button onClick={() => scrollTo("exclu")}
          style={{ background:"transparent", color:WHITE, border:`1px solid rgba(244,244,242,0.2)`, padding:"14px 28px", fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer" }}>
          Édition Exclu →
        </button>
      </div>
    </div>

    {/* STATS */}
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap: isMobile ? "20px 32px" : "0 36px", marginTop:44, paddingTop:24, borderTop:`1px solid rgba(158,160,163,0.12)`, position:"relative", zIndex:2 }}>
      {[["100%","Protection UV"],["70€","À partir de"],["Prizm","Technologie"],["MRS","Marseille"]].map(([n,l]) => (
        <div key={l}>
          <div style={{ fontSize: isMobile ? 24 : 28, fontWeight:900, color:TIFFANY, lineHeight:1 }}>{n}</div>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO, marginTop:4 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>

  {/* MARQUEE */}
  <div style={{ overflow:"hidden", background:TIFFANY, padding:"10px 0" }}>
    <div style={{ display:"flex", animation:"marquee 18s linear infinite", whiteSpace:"nowrap" }}>
      {[...Array(2)].flatMap((_,k) =>
        ["RADAR EV PATH","MARSEILLE","SPORT & STREET","OAKLEY MASSIF","PRIZM","100% UV400"].map((t,i) => (
          <span key={k+"-"+i} style={{ fontSize:13, fontWeight:900, letterSpacing:3, textTransform:"uppercase", color:DARK, padding:"0 18px" }}>
            {t} <span style={{ opacity:0.3 }}>·</span>
          </span>
        ))
      )}
    </div>
  </div>

  {/* PRODUITS */}
  <div id="produits" style={{ padding: isMobile ? "52px 16px" : "72px 28px" }}>
    <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:8 }}>Nos modèles</div>
    <div style={{ fontSize: isMobile ? "clamp(26px,8vw,40px)" : "clamp(28px,5vw,50px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1, marginBottom:10 }}>
      COLLECTION<br />RADAR EV
    </div>
    <p style={{ fontSize:13, fontWeight:300, color:NARDO, marginBottom:32, lineHeight:1.7 }}>
      Photos & stocks disponibles bientôt. Structure prête pour Shopify.
    </p>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap: isMobile ? 3 : 4 }}>
      {placeholderProducts.map((p) => (
        <div key={p.id} className="pcard" style={{ background:CARD, cursor:"pointer" }} onClick={() => setModal(p)}>
          <div style={{ position:"relative", aspectRatio:"1", background:`linear-gradient(135deg, ${DARK} 0%, #2a2a2c 100%)`, display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize: isMobile ? 28 : 36, marginBottom:6 }}>🕶️</div>
              <div style={{ fontSize:8, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO, animation:"pulse 2s infinite" }}>À venir</div>
            </div>
            <div style={{ position:"absolute", top:10, left:10, background: p.badgeType==="exclu" ? TIFFANY : "rgba(28,28,30,0.85)", color: p.badgeType==="exclu" ? DARK : NARDO, fontSize:8, fontWeight:700, letterSpacing:1, textTransform:"uppercase", padding:"4px 8px" }}>
              {p.badge}
            </div>
            <div style={{ position:"absolute", bottom:10, right:10, background:"rgba(20,20,22,0.9)", padding:"4px 10px" }}>
              <span style={{ fontSize: isMobile ? 16 : 20, fontWeight:900, color:TIFFANY }}>{p.price}€</span>
            </div>
          </div>
          <div style={{ padding: isMobile ? "12px 12px 14px" : "18px 18px 20px", borderTop:`1px solid rgba(158,160,163,0.08)` }}>
            <div style={{ fontSize: isMobile ? 11 : 13, fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:5, color: p.badgeType==="exclu" ? TIFFANY : WHITE }}>{p.name}</div>
            {!isMobile && <div style={{ fontSize:12, fontWeight:300, color:NARDO, lineHeight:1.6, marginBottom:12 }}>{p.desc}</div>}
            <button className="addbtn"
              style={{ background:WHITE, color:DARK, border:"none", padding: isMobile ? "9px 10px" : "10px 18px", fontSize: isMobile ? 9 : 10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", cursor:"pointer", transition:"all 0.2s", width:"100%" }}
              onClick={(e) => { e.stopPropagation(); addToCart(p); }}>
              + Panier
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* FEATURES */}
  <div style={{ background:DARK, padding: isMobile ? "52px 16px" : "68px 28px", borderTop:`1px solid rgba(129,216,208,0.07)` }}>
    <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:8 }}>Technologie</div>
    <div style={{ fontSize: isMobile ? "clamp(24px,7vw,36px)" : "clamp(26px,4vw,46px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1, marginBottom:30 }}>
      POURQUOI<br />LES RADAR EV ?
    </div>
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(200px, 1fr))", gap:3 }}>
      {[["👁️","Champ visuel","Verre plus haut — meilleure vision périphérique."],
        ["⚡","Prizm Tech","Contraste optimisé. Tu vois ce que les autres ratent."],
        ["💧","Anti-sueur","Unobtainium® — plus tu transpires, plus ça accroche."],
        ["🛡️","UV400","Protection totale certifiée."]].map(([icon,title,text]) => (
        <div key={title} className="feat" style={{ background:CARD, padding: isMobile ? "20px 16px" : "28px 22px", borderTop:"2px solid transparent", transition:"border-color 0.25s" }}>
          <div style={{ fontSize: isMobile ? 22 : 26, marginBottom:10 }}>{icon}</div>
          <div style={{ fontSize: isMobile ? 11 : 13, fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:7, color:WHITE }}>{title}</div>
          <div style={{ fontSize: isMobile ? 11 : 12, fontWeight:300, color:NARDO, lineHeight:1.6 }}>{text}</div>
        </div>
      ))}
    </div>
  </div>

  {/* ÉDITION EXCLU */}
  <div id="exclu" style={{ padding: isMobile ? "52px 16px" : "72px 28px", background:BG, borderTop:`1px solid rgba(129,216,208,0.07)` }}>
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 28 : 48, alignItems:"center" }}>
      <div style={{ position:"relative", aspectRatio:"1", background:CARD, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ textAlign:"center", padding:40 }}>
          <div style={{ fontSize:64, marginBottom:12 }}>🕶️</div>
          <div style={{ fontSize:9, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:NARDO, animation:"pulse 2s infinite" }}>Visuel à venir</div>
        </div>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 60% 40%, rgba(129,216,208,0.1) 0%, transparent 65%)` }} />
        <div style={{ position:"absolute", bottom:16, left:16, background:TIFFANY, padding:"8px 14px" }}>
          <span style={{ fontSize:12, fontWeight:900, letterSpacing:2, textTransform:"uppercase", color:DARK }}>ÉDITION LIMITÉE</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:10 }}>Exclusivité</div>
        <div style={{ fontSize: isMobile ? "clamp(30px,8vw,44px)" : "clamp(34px,5vw,56px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1, marginBottom:16 }}>
          LA PAIRE<br />SIGNATURE
        </div>
        <p style={{ fontSize: isMobile ? 13 : 14, fontWeight:300, color:NARDO, lineHeight:1.75, marginBottom:24 }}>
          Un coloris unique, introuvable en boutique. Quantité ultra limitée. Premier arrivé, premier servi.
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
          <span style={{ fontSize: isMobile ? 44 : 52, fontWeight:900, color:TIFFANY, lineHeight:1 }}>100€</span>
          <span style={{ fontSize:10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO, lineHeight:1.4 }}>Stock<br />limité</span>
        </div>
        <button style={{ background:TIFFANY, color:DARK, border:"none", padding:"13px 28px", fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer", width: isMobile ? "100%" : "auto" }}
          onClick={() => addToCart(placeholderProducts[3])}>
          Commander maintenant
        </button>
      </div>
    </div>
  </div>

  {/* FAQ */}
  <div id="faq" style={{ padding: isMobile ? "52px 16px" : "72px 28px", background:DARK, borderTop:`1px solid rgba(129,216,208,0.07)` }}>
    <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:8 }}>Questions fréquentes</div>
    <div style={{ fontSize: isMobile ? "clamp(24px,7vw,36px)" : "clamp(26px,4vw,46px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1, marginBottom:32 }}>FAQ</div>
    <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
      {faqData.map((item, i) => (
        <div key={i} className="faqitem"
          style={{ background:CARD, border:`1px solid rgba(158,160,163,0.08)`, transition:"border-color 0.2s", overflow:"hidden" }}>
          <div onClick={() => setFaqOpen(faqOpen === i ? null : i)}
            style={{ padding: isMobile ? "16px 16px" : "20px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer", gap:12 }}>
            <span style={{ fontSize: isMobile ? 13 : 14, fontWeight:700, color:WHITE, flex:1, lineHeight:1.4 }}>{item.q}</span>
            <span style={{ fontSize:18, color:TIFFANY, flexShrink:0, transition:"transform 0.25s", transform: faqOpen===i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
          </div>
          {faqOpen === i && (
            <div style={{ padding: isMobile ? "0 16px 16px" : "0 22px 20px", paddingTop:14, fontSize: isMobile ? 13 : 13, fontWeight:300, color:NARDO, lineHeight:1.75, borderTop:`1px solid rgba(158,160,163,0.06)` }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* AVIS */}
  <div style={{ padding: isMobile ? "52px 16px" : "68px 28px", background:BG }}>
    <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:8 }}>Ce qu'ils disent</div>
    <div style={{ fontSize: isMobile ? "clamp(24px,7vw,36px)" : "clamp(26px,4vw,46px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", marginBottom:28 }}>LES AVIS</div>
    <div style={{ display:"flex", flexDirection: isMobile ? "column" : "row", gap:3 }}>
      {[["Livraison rapide, lunettes nickel. Je les porte tous mes entraînements vélo. Top qualité.","Karim T. · Cycliste, Lyon"],
        ["L'édition exclu est feu. Tout le monde me demande où je les ai trouvées.","Sofiane M. · Marseille"],
        ["Radar EV depuis des années mais là je les ai eu bien moins cher. Emballage impec.","Lucas D. · Runner, Paris"]].map(([text,author]) => (
        <div key={author} style={{ background:CARD, padding: isMobile ? "20px 16px" : "24px 20px", borderTop:`2px solid rgba(129,216,208,0.14)`, flex:1 }}>
          <div style={{ color:TIFFANY, fontSize:12, letterSpacing:2, marginBottom:10 }}>★★★★★</div>
          <p style={{ fontSize:13, fontWeight:300, lineHeight:1.7, color:"rgba(244,244,242,0.68)", fontStyle:"italic", marginBottom:12 }}>{text}</p>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO }}>— {author}</div>
        </div>
      ))}
    </div>
  </div>

  {/* CONTACT */}
  <div id="contact" style={{ padding: isMobile ? "52px 16px" : "68px 28px", background:DARK, borderTop:`1px solid rgba(129,216,208,0.07)` }}>
    <div style={{ maxWidth:480, margin:"0 auto", textAlign:"center" }}>
      <div style={{ fontSize:10, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:TIFFANY, marginBottom:10 }}>Nous suivre</div>
      <div style={{ fontSize: isMobile ? "clamp(24px,7vw,36px)" : "clamp(26px,4vw,46px)", fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1, marginBottom:16 }}>
        RESTONS<br />EN CONTACT
      </div>
      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight:300, color:NARDO, lineHeight:1.75, marginBottom:28 }}>
        Pour toute question ou suivre les nouvelles sorties — retrouve-nous sur tous nos réseaux.
      </p>
      <a href="https://linktr.ee/Dollarzvip" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
        <button className="linktree-btn"
          style={{ background:"transparent", color:TIFFANY, border:`2px solid ${TIFFANY}`, padding:"15px 32px", fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer", transition:"all 0.2s", width: isMobile ? "100%" : "auto" }}>
          🔗 Suivre Oakley Massif
        </button>
      </a>
      <p style={{ fontSize:11, color:NARDO, marginTop:14 }}>linktr.ee/Dollarzvip</p>
    </div>
  </div>

  {/* FOOTER */}
  <footer style={{ background:"#111113", borderTop:`1px solid rgba(129,216,208,0.08)`, padding: isMobile ? "36px 16px 20px" : "48px 28px 24px" }}>
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? "28px 20px" : 28, marginBottom:32 }}>
      <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
        <div style={{ fontSize: isMobile ? 18 : 20, fontWeight:900, letterSpacing:5, textTransform:"uppercase", marginBottom:10 }}>
          OAKLEY <span style={{ color:TIFFANY }}>MASSIF</span>
        </div>
        <p style={{ fontSize:12, fontWeight:300, color:NARDO, lineHeight:1.65, maxWidth:220 }}>
          Performance & street. Marseille et toute la France.
        </p>
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:WHITE, marginBottom:12 }}>Navigation</div>
        {[["Produits","produits"],["Exclu","exclu"],["FAQ","faq"],["Contact","contact"]].map(([label,id]) => (
          <div key={id} onClick={() => scrollTo(id)} style={{ fontSize:12, fontWeight:300, color:NARDO, marginBottom:8, cursor:"pointer" }}>{label}</div>
        ))}
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:WHITE, marginBottom:12 }}>Info</div>
        {["À propos","CGV","Retours","Mentions légales"].map((l) => (
          <div key={l} style={{ fontSize:12, fontWeight:300, color:NARDO, marginBottom:8, cursor:"pointer" }}>{l}</div>
        ))}
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:WHITE, marginBottom:12 }}>Contact</div>
        <a href="https://linktr.ee/Dollarzvip" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration:"none", display:"inline-block", background:TIFFANY, color:DARK, fontSize:10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", padding:"9px 14px", marginBottom:10 }}>
          🔗 Nos réseaux
        </a>
      </div>
    </div>
    <div style={{ display:"flex", flexDirection: isMobile ? "column" : "row", justifyContent:"space-between", alignItems: isMobile ? "flex-start" : "center", borderTop:`1px solid rgba(158,160,163,0.1)`, paddingTop:16, gap:8 }}>
      <p style={{ fontSize:11, color:"#3a3a3c" }}>© 2025 Oakley Massif — Marseille</p>
      <p style={{ fontSize:11, color:"#3a3a3c" }}>Prêt pour import Shopify</p>
    </div>
  </footer>

  {/* MODAL */}
  {modal && (
    <div style={{ position:"fixed", inset:0, background:"rgba(20,20,22,0.95)", zIndex:500, display:"flex", alignItems: isMobile ? "flex-end" : "center", justifyContent:"center", padding: isMobile ? 0 : 16 }}
      onClick={() => setModal(null)}>
      <div style={{ background:CARD, width:"100%", maxWidth: isMobile ? "100%" : 740, display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", position:"relative", maxHeight: isMobile ? "90vh" : "88vh", overflow:"auto", borderRadius: isMobile ? "16px 16px 0 0" : 0 }}
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setModal(null)} style={{ position:"absolute", top:12, right:12, width:32, height:32, background:"#333", border:"none", color:WHITE, fontSize:14, cursor:"pointer", zIndex:10, borderRadius:4 }}>✕</button>
        <div style={{ background:`linear-gradient(135deg, ${DARK} 0%, #2a2a2c 100%)`, display:"flex", alignItems:"center", justifyContent:"center", minHeight: isMobile ? 180 : 300 }}>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:56, marginBottom:10 }}>🕶️</div>
            <div style={{ fontSize:9, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:NARDO }}>Photo à venir</div>
          </div>
        </div>
        <div style={{ padding: isMobile ? "20px 20px 28px" : "28px 22px", display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ fontSize:9, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:TIFFANY, border:`1px solid ${TIFFANY}`, padding:"4px 10px", width:"fit-content" }}>
            {modal.badgeType === "exclu" ? "⚡ Édition Limitée" : "Radar EV Path"}
          </div>
          <div style={{ fontSize: isMobile ? 22 : 28, fontWeight:900, letterSpacing:2, textTransform:"uppercase", lineHeight:1 }}>{modal.name}</div>
          <div style={{ fontSize: isMobile ? 36 : 42, fontWeight:900, color:TIFFANY, lineHeight:1 }}>{modal.price}€</div>
          <p style={{ fontSize:13, fontWeight:300, color:NARDO, lineHeight:1.7 }}>{modal.desc}</p>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {["Verre Prizm — Contraste optimisé","Monture O Matter™ — Ultra légère","Grip Unobtainium® — Anti-sueur","Protection UV400 certifiée"].map((f) => (
              <div key={f} style={{ display:"flex", alignItems:"center", gap:9, fontSize:12, color:"rgba(244,244,242,0.6)" }}>
                <span style={{ width:5, height:5, background:TIFFANY, borderRadius:"50%", flexShrink:0 }} />{f}
              </div>
            ))}
          </div>
          <button style={{ background:TIFFANY, color:DARK, border:"none", padding:"14px", fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer", marginTop:4 }}
            onClick={() => addToCart(modal)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )}

  {/* CART DRAWER */}
  {cartOpen && <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200 }} onClick={() => setCartOpen(false)} />}
  <div style={{ position:"fixed", top:0, right:0, bottom:0, width: isMobile ? "100%" : 340, background:"#111113", borderLeft: isMobile ? "none" : `1px solid rgba(129,216,208,0.08)`, zIndex:300, transform:cartOpen?"translateX(0)":"translateX(100%)", transition:"transform 0.32s ease", display:"flex", flexDirection:"column" }}>
    <div style={{ padding:"20px 20px 16px", borderBottom:`1px solid rgba(158,160,163,0.08)`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <span style={{ fontSize:18, fontWeight:900, letterSpacing:2, textTransform:"uppercase" }}>MON PANIER</span>
      <button onClick={() => setCartOpen(false)} style={{ width:36, height:36, background:"#222", border:"none", color:WHITE, cursor:"pointer", fontSize:16, borderRadius:4 }}>✕</button>
    </div>
    <div style={{ flex:1, overflowY:"auto", padding:"14px 20px", display:"flex", flexDirection:"column", gap:12 }}>
      {cart.length === 0 ? (
        <div style={{ textAlign:"center", paddingTop:60, color:NARDO }}>
          <div style={{ fontSize:48, marginBottom:14 }}>🕶️</div>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase" }}>Ton panier est vide</p>
        </div>
      ) : cart.map((item) => (
        <div key={item.id} style={{ display:"flex", gap:12, paddingBottom:14, borderBottom:`1px solid rgba(158,160,163,0.08)` }}>
          <div style={{ width:64, height:52, background:DARK, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, borderRadius:4 }}>🕶️</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:5 }}>{item.name}</div>
            <div style={{ fontSize:20, fontWeight:900, color:TIFFANY }}>{item.price * item.qty}€ <span style={{ fontSize:12, color:NARDO, fontWeight:300 }}>× {item.qty}</span></div>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ background:"none", border:"none", color:NARDO, cursor:"pointer", fontSize:16, alignSelf:"flex-start", padding:"4px" }}>✕</button>
        </div>
      ))}
    </div>
    <div style={{ padding:"14px 20px 32px", borderTop:`1px solid rgba(158,160,163,0.08)` }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
        <span style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:NARDO }}>Total</span>
        <span style={{ fontSize:32, fontWeight:900 }}>{cartTotal}€</span>
      </div>
      <button style={{ width:"100%", background:TIFFANY, color:DARK, border:"none", padding:16, fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer", borderRadius:2 }}
        onClick={() => alert("Redirection vers Shopify Payments — Total : " + cartTotal + "€")}>
        Commander →
      </button>
    </div>
  </div>
</div>
```

);
}
