// import { useEffect, useRef, useState } from "react";

// /*
//   Video file location: client/public/video3.mp4
//   Fonts: add once in index.html <head>
//   <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet">
// */

// const FEATURES = [
//   {
//     title: "Dedicated Portfolio Director",
//     text: "A single point of executive accountability assigned exclusively to your domestic or international portfolio.",
//   },
//   {
//     title: "Transparent Real-Time Accounting",
//     text: "Live cloud ledger tracking invoices, rental remittances, and vendor contracts with zero hidden agency margins.",
//   },
//   {
//     title: "Strict 4-Stage Tenant Screening",
//     text: "Comprehensive sovereign background checks, financial capacity audits, and reference verification protocols.",
//   },
//   {
//     title: "Direct Contractor Volume Discounts",
//     text: "Pre-negotiated Tier-1 trade rates passing 100% of institutional cost savings directly to property owners.",
//   },
//   {
//     title: "99.4% Average Occupancy Rate",
//     text: "Industry-leading retention and proactive remarketing ensuring negligible asset vacancy cycles across prime markets.",
//   },
// ];

// function Tick() {
//   return (
//     <span className="wp-tick">
//       <svg viewBox="0 0 20 20" aria-hidden="true">
//         <path d="M4 10.5l4 4 8-9" />
//       </svg>
//     </span>
//   );
// }

// function FeatureItem({ title, text, delay }) {
//   const ref = useRef(null);
//   const [shown, setShown] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => setShown(true), delay);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     io.observe(el);
//     return () => io.disconnect();
//   }, [delay]);

//   return (
//     <li ref={ref} className={`wp-item ${shown ? "in" : ""}`}>
//       <Tick />
//       <div>
//         <h4>{title}</h4>
//         <p>{text}</p>
//       </div>
//     </li>
//   );
// }

// export default function WhyPartner({ videoSrc = "/video3.mp4" }) {
//   const videoRef = useRef(null);
//   const [playing, setPlaying] = useState(true);
//   const [failed, setFailed] = useState(false);

//   // React often fails to set "muted", which makes browsers block autoplay.
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     v.muted = true;
//     v.play().catch(() => setPlaying(false));
//   }, []);

//   const toggle = () => {
//     const v = videoRef.current;
//     if (!v) return;

//     if (v.paused) {
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   };

//   return (
//     <div className="wp-bg">
//       <style>{css}</style>

//       <section className="wp-wrap">
//         <header className="wp-head">
//           <div className="wp-eyebrow">Why clients partner with us</div>
//           <h2>Unrivaled Rigor in Every Dimension</h2>
//         </header>

//         <div className="wp-grid">
//           <div className="wp-media">
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//               onError={() => setFailed(true)}
//             />

//             {failed && (
//               <p
//                 style={{
//                   position: "absolute",
//                   top: 20,
//                   left: 20,
//                   right: 70,
//                   zIndex: 3,
//                   color: "#fff",
//                   fontSize: 14,
//                 }}
//               >
//                 Video failed to load: {videoSrc}
//               </p>
//             )}

//             <button
//               type="button"
//               className="wp-toggle"
//               onClick={toggle}
//               aria-label={playing ? "Pause video" : "Play video"}
//             >
//               {playing ? (
//                 <svg viewBox="0 0 16 16">
//                   <rect x="3" y="2" width="3.5" height="12" rx="1" />
//                   <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
//                 </svg>
//               ) : (
//                 <svg viewBox="0 0 16 16">
//                   <path d="M4 2.5v11l9-5.5z" />
//                 </svg>
//               )}
//             </button>

//             <div className="wp-caption">
//               <small>Standard of care</small>
//               <h3>Uncompromising Fiduciary Governance</h3>
//             </div>
//           </div>

//           <ul>
//             {FEATURES.map((f, i) => (
//               <FeatureItem key={f.title} {...f} delay={i * 140} />
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// }

// const css = `
// .wp-bg{background:#f5f2ed;width:100%}

// .wp-wrap *{box-sizing:border-box}
// .wp-wrap h2,
// .wp-wrap h3,
// .wp-wrap h4,
// .wp-wrap p,
// .wp-wrap ul{margin:0}

// .wp-wrap{
//   --card:#fff;--ink:#0d1530;--text:#4a4a55;--gold:#7a6445;--chip:#e9e6e1;
//   font-family:'Outfit',sans-serif;color:var(--text);
//   max-width:1240px;
//   margin:0 auto;
//   padding:35px 32px 65px;
//   box-sizing:border-box;
// }

// .wp-head{text-align:center;margin-bottom:56px}

// .wp-grid{
//   display:grid;
//   grid-template-columns:4fr 6fr;
//   gap:48px;
//   align-items:center;
// }

// /* video card */
// .wp-media{
//   position:relative;
//   height:720px;
//   border-radius:14px;
//   overflow:hidden;
//   background:#2a2320;
//   box-shadow:0 20px 50px rgba(30,20,10,.22);
//   clip-path:inset(100% 0 0 0 round 14px);
//   animation:wp-open 1.2s cubic-bezier(.7,0,.2,1) .1s forwards;
// }

// @keyframes wp-open{
//   to{clip-path:inset(0 0 0 0 round 14px)}
// }

// .wp-media video{
//   position:absolute;
//   inset:0;
//   width:100%;
//   height:100%;
//   object-fit:cover;
//   transform:scale(1.15);
//   animation:wp-settle 2.2s cubic-bezier(.2,.7,.2,1) .1s forwards;
// }

// @keyframes wp-settle{
//   to{transform:scale(1)}
// }

// .wp-media::after{
//   content:"";
//   position:absolute;
//   inset:0;
//   background:linear-gradient(to top,rgba(20,16,22,.9) 0%,rgba(20,16,22,.35) 32%,transparent 60%);
// }

// .wp-caption{
//   position:absolute;
//   left:28px;
//   right:28px;
//   bottom:28px;
//   z-index:2;
//   color:#fff;
// }

// .wp-caption small{
//   display:block;
//   font-weight:500;
//   font-size:13px;
//   letter-spacing:.14em;
//   text-transform:uppercase;
//   color:#e8cfa8;
//   margin-bottom:10px;
// }

// .wp-caption h3{
//   font-family:'EB Garamond',serif;
//   font-weight:400;
//   font-size:32px;
//   line-height:1.15;
// }

// .wp-toggle{
//   position:absolute;
//   top:16px;
//   right:16px;
//   z-index:3;
//   width:40px;
//   height:40px;
//   border:0;
//   border-radius:50%;
//   background:rgba(255,255,255,.2);
//   backdrop-filter:blur(8px);
//   color:#fff;
//   cursor:pointer;
//   display:grid;
//   place-items:center;
//   transition:background .2s;
// }

// .wp-toggle:hover{background:rgba(255,255,255,.35)}

// .wp-toggle:focus-visible{
//   outline:2px solid #fff;
//   outline-offset:2px;
// }

// .wp-toggle svg{
//   width:16px;
//   height:16px;
//   fill:currentColor;
// }

// /* heading */
// .wp-eyebrow{
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   gap:16px;
//   font-size:14px;
//   font-weight:600;
//   letter-spacing:.18em;
//   text-transform:uppercase;
//   color:var(--gold);
//   margin-bottom:20px;
// }

// .wp-eyebrow::before,
// .wp-eyebrow::after{
//   content:"";
//   width:48px;
//   height:2px;
//   background:var(--gold);
// }

// .wp-wrap h2{
//   font-family:'EB Garamond',serif;
//   font-weight:400;
//   font-size:clamp(36px,4.4vw,58px);
//   line-height:1.2;
//   color:var(--ink);
//   letter-spacing:-.01em;
// }

// /* list */
// .wp-wrap ul{
//   list-style:none;
//   display:grid;
//   gap:18px;
//   padding:0;
//   align-content:center;
// }

// .wp-item{
//   display:flex;
//   gap:16px;
//   background:var(--card);
//   border-radius:12px;
//   padding:17px 20px;
//   box-shadow:0 2px 10px rgba(0,0,0,.04);
//   opacity:0;
//   transform:translateY(22px);
//   transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1),box-shadow .3s,translate .3s;
// }

// .wp-item.in{
//   opacity:1;
//   transform:none;
// }

// .wp-item:hover{
//   translate:6px 0;
//   box-shadow:0 10px 28px rgba(60,40,10,.1);
// }

// .wp-tick{
//   flex:none;
//   width:40px;
//   height:40px;
//   border-radius:50%;
//   background:var(--chip);
//   display:grid;
//   place-items:center;
//   transition:background .4s;
// }

// .wp-tick svg{
//   width:20px;
//   height:20px;
//   fill:none;
//   stroke:#5b4c36;
//   stroke-width:2.2;
//   stroke-linecap:round;
//   stroke-linejoin:round;
//   stroke-dasharray:24;
//   stroke-dashoffset:24;
//   transition:stroke-dashoffset .6s ease .35s;
// }

// .wp-item.in .wp-tick svg{
//   stroke-dashoffset:0;
// }

// .wp-item:hover .wp-tick{
//   background:#e3d6bf;
// }

// .wp-wrap h4{
//   font-family:'EB Garamond',serif;
//   font-weight:500;
//   font-size:25px;
//   color:var(--ink);
//   margin-bottom:6px;
// }

// .wp-item p{
//   font-size:17px;
//   line-height:1.7;
// }

// /* Mobile and tablet */
// @media (max-width:900px) {
//   .wp-wrap {
//     padding:30px 20px 45px;
//   }

//   .wp-head {
//     margin-bottom:32px;
//   }

//   .wp-eyebrow::before,
//   .wp-eyebrow::after {
//     width:24px;
//   }

//   .wp-grid {
//     grid-template-columns:1fr;
//     gap:25px;
//   }

//   .wp-media {
//     height:auto;
//     aspect-ratio:4/3;
//   }

//   .wp-item {
//     padding:16px;
//   }

//   .wp-wrap h4 {
//     font-size:20px;
//   }

//   .wp-item p {
//     font-size:14px;
//   }
// }

// @media (prefers-reduced-motion:reduce){
//   .wp-media{animation:none;clip-path:none}
//   .wp-media video{animation:none;transform:none}
//   .wp-item{opacity:1;transform:none;transition:none}
//   .wp-tick svg{stroke-dashoffset:0;transition:none}
// }
// `;

import { useEffect, useRef, useState } from "react";

/*
  Video file location: client/public/video3.mp4
  Fonts: add once in index.html <head>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet">
*/

const FEATURES = [
  {
    title: "Dedicated Portfolio Director",
    text: "A single point of executive accountability assigned exclusively to your domestic or international portfolio.",
  },
  {
    title: "Transparent Real-Time Accounting",
    text: "Live cloud ledger tracking invoices, rental remittances, and vendor contracts with zero hidden agency margins.",
  },
  {
    title: "Strict 4-Stage Tenant Screening",
    text: "Comprehensive sovereign background checks, financial capacity audits, and reference verification protocols.",
  },
  {
    title: "Direct Contractor Volume Discounts",
    text: "Pre-negotiated Tier-1 trade rates passing 100% of institutional cost savings directly to property owners.",
  },
  {
    title: "99.4% Average Occupancy Rate",
    text: "Industry-leading retention and proactive remarketing ensuring negligible asset vacancy cycles across prime markets.",
  },
];

function Tick() {
  return (
    <span className="wp-tick">
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 10.5l4 4 8-9" />
      </svg>
    </span>
  );
}

function FeatureItem({ title, text, delay }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <li ref={ref} className={`wp-item ${shown ? "in" : ""}`}>
      <Tick />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default function WhyPartner({ videoSrc = "/video3.mp4" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [failed, setFailed] = useState(false);

  // React often fails to set "muted", which makes browsers block autoplay.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.play().catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="wp-bg">
      <style>{css}</style>

      <section className="wp-wrap">
        <header className="wp-head">
          <div className="wp-eyebrow">Why clients partner with us</div>
          <h2>Unrivaled Rigor in Every Dimension</h2>
        </header>

        <div className="wp-grid">
          <div className="wp-media">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setFailed(true)}
            />

            {failed && (
              <p
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  right: 70,
                  zIndex: 3,
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                Video failed to load: {videoSrc}
              </p>
            )}

            <button
              type="button"
              className="wp-toggle"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? (
                <svg viewBox="0 0 16 16">
                  <rect x="3" y="2" width="3.5" height="12" rx="1" />
                  <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              )}
            </button>

            <div className="wp-caption">
              <small>Standard of care</small>
              <h3>Uncompromising Fiduciary Governance</h3>
            </div>
          </div>

          <ul>
            {FEATURES.map((f, i) => (
              <FeatureItem key={f.title} {...f} delay={i * 140} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const css = `
.wp-bg{background:#f5f2ed;width:100%;overflow-x:hidden}

.wp-wrap *{box-sizing:border-box}
.wp-wrap h2,
.wp-wrap h3,
.wp-wrap h4,
.wp-wrap p,
.wp-wrap ul{margin:0}

.wp-wrap{
  --card:#fff;--ink:#0d1530;--text:#4a4a55;--gold:#7a6445;--chip:#e9e6e1;
  font-family:'Outfit',sans-serif;color:var(--text);
  max-width:1240px;
  margin:0 auto;
  padding:35px 32px 65px;
  box-sizing:border-box;
}

.wp-head{text-align:center;margin-bottom:56px}

.wp-grid{
  display:grid;
  grid-template-columns:4fr 6fr;
  gap:48px;
  align-items:center;
}

.wp-grid > *{min-width:0}

/* video card */
.wp-media{
  position:relative;
  height:720px;
  border-radius:14px;
  overflow:hidden;
  background:#2a2320;
  box-shadow:0 20px 50px rgba(30,20,10,.22);
  clip-path:inset(100% 0 0 0 round 14px);
  animation:wp-open 1.2s cubic-bezier(.7,0,.2,1) .1s forwards;
}

@keyframes wp-open{
  to{clip-path:inset(0 0 0 0 round 14px)}
}

.wp-media video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  transform:scale(1.15);
  animation:wp-settle 2.2s cubic-bezier(.2,.7,.2,1) .1s forwards;
}

@keyframes wp-settle{
  to{transform:scale(1)}
}

.wp-media::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(to top,rgba(20,16,22,.9) 0%,rgba(20,16,22,.35) 32%,transparent 60%);
}

.wp-caption{
  position:absolute;
  left:28px;
  right:28px;
  bottom:28px;
  z-index:2;
  color:#fff;
}

.wp-caption small{
  display:block;
  font-weight:500;
  font-size:13px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#e8cfa8;
  margin-bottom:10px;
}

.wp-caption h3{
  font-family:'EB Garamond',serif;
  font-weight:400;
  font-size:32px;
  line-height:1.15;
}

.wp-toggle{
  position:absolute;
  top:16px;
  right:16px;
  z-index:3;
  width:40px;
  height:40px;
  border:0;
  border-radius:50%;
  background:rgba(255,255,255,.2);
  backdrop-filter:blur(8px);
  color:#fff;
  cursor:pointer;
  display:grid;
  place-items:center;
  transition:background .2s;
}

.wp-toggle:hover{background:rgba(255,255,255,.35)}

.wp-toggle:focus-visible{
  outline:2px solid #fff;
  outline-offset:2px;
}

.wp-toggle svg{
  width:16px;
  height:16px;
  fill:currentColor;
}

/* heading */
.wp-eyebrow{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
  font-size:14px;
  font-weight:600;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:var(--gold);
  margin-bottom:20px;
}

.wp-eyebrow::before,
.wp-eyebrow::after{
  content:"";
  width:48px;
  height:2px;
  background:var(--gold);
}

.wp-wrap h2{
  font-family:'EB Garamond',serif;
  font-weight:400;
  font-size:clamp(36px,4.4vw,58px);
  line-height:1.2;
  color:var(--ink);
  letter-spacing:-.01em;
}

/* list */
.wp-wrap ul{
  list-style:none;
  display:grid;
  gap:18px;
  padding:0;
  align-content:center;
}

.wp-item{
  display:flex;
  gap:16px;
  background:var(--card);
  border-radius:12px;
  padding:17px 20px;
  box-shadow:0 2px 10px rgba(0,0,0,.04);
  opacity:0;
  transform:translateY(22px);
  transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1),box-shadow .3s,translate .3s;
}

.wp-item > div{min-width:0}

.wp-item.in{
  opacity:1;
  transform:none;
}

.wp-item:hover{
  translate:6px 0;
  box-shadow:0 10px 28px rgba(60,40,10,.1);
}

.wp-tick{
  flex:none;
  width:40px;
  height:40px;
  border-radius:50%;
  background:var(--chip);
  display:grid;
  place-items:center;
  transition:background .4s;
}

.wp-tick svg{
  width:20px;
  height:20px;
  fill:none;
  stroke:#5b4c36;
  stroke-width:2.2;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-dasharray:24;
  stroke-dashoffset:24;
  transition:stroke-dashoffset .6s ease .35s;
}

.wp-item.in .wp-tick svg{
  stroke-dashoffset:0;
}

.wp-item:hover .wp-tick{
  background:#e3d6bf;
}

.wp-wrap h4{
  font-family:'EB Garamond',serif;
  font-weight:500;
  font-size:25px;
  color:var(--ink);
  margin-bottom:6px;
}

.wp-item p{
  font-size:17px;
  line-height:1.7;
}

/* Mobile and tablet */
@media (max-width:900px) {
  .wp-wrap {
    padding:30px 20px 45px;
  }

  .wp-head {
    margin-bottom:32px;
  }

  .wp-eyebrow::before,
  .wp-eyebrow::after {
    width:24px;
  }

  .wp-grid {
    grid-template-columns:1fr;
    gap:25px;
  }

  .wp-media {
    height:auto;
    aspect-ratio:4/3;
  }

  .wp-item {
    padding:16px;
  }

  .wp-wrap h4 {
    font-size:20px;
  }

  .wp-item p {
    font-size:14px;
  }
}

/* Phones */
@media (max-width:600px) {
  .wp-wrap {
    padding:28px 16px 40px;
  }

  .wp-eyebrow {
    flex-shrink:0;
    gap:10px;
    font-size:12px;
    letter-spacing:.12em;
    margin-bottom:16px;
  }

  .wp-eyebrow::before,
  .wp-eyebrow::after {
    width:20px;
    flex:none;
  }

  .wp-wrap h2 {
    font-size:32px;
  }

  /* taller card so the caption never covers the whole video */
  .wp-media {
    aspect-ratio:4/5;
  }

  .wp-caption {
    left:18px;
    right:18px;
    bottom:18px;
  }

  .wp-caption small {
    font-size:11px;
    margin-bottom:8px;
  }

  .wp-caption h3 {
    font-size:24px;
  }

  .wp-toggle {
    top:12px;
    right:12px;
  }

  .wp-item {
    gap:12px;
    padding:14px;
  }

  .wp-tick {
    width:34px;
    height:34px;
  }

  .wp-tick svg {
    width:18px;
    height:18px;
  }

  .wp-wrap h4 {
    font-size:19px;
    line-height:1.25;
  }

  .wp-item p {
    line-height:1.6;
    overflow-wrap:anywhere;
  }
}

/* no sideways hover shift on touch screens */
@media (hover:none) {
  .wp-item:hover{translate:none}
}

@media (prefers-reduced-motion:reduce){
  .wp-media{animation:none;clip-path:none}
  .wp-media video{animation:none;transform:none}
  .wp-item{opacity:1;transform:none;transition:none}
  .wp-tick svg{stroke-dashoffset:0;transition:none}
}
`;