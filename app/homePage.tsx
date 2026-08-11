"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
    :root{
      --bg:#08090b;
      --surface:#101216;
      --surface2:#15171c;
      --text:#f4f4f1;
      --muted:#9b9da5;
      --line:#272a31;
      --accent:#c8ff45;
      --accent2:#9fe11e;
      --max:1120px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:var(--bg);
      color:var(--text);
      font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      line-height:1.55;
    }
    a{color:inherit;text-decoration:none}
    .wrap{max-width:var(--max);margin:auto;padding:0 28px}
    nav{
      position:sticky;top:0;z-index:10;
      background:rgba(8,9,11,.82);
      backdrop-filter:blur(16px);
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .nav-inner{height:70px;display:flex;align-items:center;justify-content:space-between}
    .logo{font-weight:800;letter-spacing:-.04em;font-size:20px}
    .logo span{color:var(--accent)}
    .nav-links{display:flex;gap:26px;color:var(--muted);font-size:14px}
    .nav-links a:hover{color:var(--text)}
    .hero{min-height:calc(100vh - 70px);display:grid;align-items:center;padding:90px 0 100px}
    .eyebrow{
      color:var(--accent);font-size:12px;font-weight:800;letter-spacing:.16em;
      text-transform:uppercase;margin-bottom:22px
    }
    h1{
      font-size:clamp(58px,9vw,116px);
      line-height:.88;letter-spacing:-.075em;margin:0;max-width:950px;
    }
    h1 .dim{color:#696c75}
    .hero-copy{max-width:680px;color:#b9bbc1;font-size:18px;margin:34px 0}
    .actions{display:flex;gap:12px;flex-wrap:wrap}
    .btn{
      padding:12px 18px;border:1px solid var(--line);border-radius:999px;
      font-size:14px;font-weight:700;transition:.2s ease;
    }
    .btn.primary{background:var(--accent);color:#0b0d08;border-color:var(--accent)}
    .btn:hover{transform:translateY(-2px)}
    .meta{
      margin-top:70px;display:grid;grid-template-columns:repeat(3,1fr);
      border-top:1px solid var(--line);border-bottom:1px solid var(--line)
    }
    .meta div{padding:22px 0}
    .meta div+div{border-left:1px solid var(--line);padding-left:28px}
    .meta b{display:block;font-size:13px;color:var(--muted);font-weight:500;margin-bottom:5px}
    .meta span{font-weight:700}
    section{padding:105px 0;border-top:1px solid var(--line)}
    .section-head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin-bottom:42px}
    .section-num{color:var(--accent);font:700 12px/1 monospace;letter-spacing:.12em}
    h2{font-size:clamp(38px,5vw,64px);line-height:.95;letter-spacing:-.06em;margin:10px 0 0}
    .section-intro{max-width:420px;color:var(--muted);font-size:15px}
    .projects{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .card{
      background:var(--surface);border:1px solid var(--line);border-radius:20px;
      padding:26px;min-height:275px;display:flex;flex-direction:column;justify-content:space-between;
      transition:.25s ease;
    }
    .card:hover{border-color:#454952;transform:translateY(-4px)}
    .card-top{display:flex;justify-content:space-between;gap:20px}
    .tag{font:700 11px monospace;color:var(--accent);text-transform:uppercase;letter-spacing:.08em}
    .card h3{font-size:27px;letter-spacing:-.04em;margin:18px 0 10px}
    .card p{color:var(--muted);font-size:14px;max-width:480px}
    .stack{display:flex;gap:7px;flex-wrap:wrap;margin-top:20px}
    .stack span{border:1px solid var(--line);border-radius:999px;padding:5px 9px;font-size:11px;color:#b7bac1}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px}
    .about-text{font-size:20px;line-height:1.55;color:#d7d8dc}
    .about-text strong{color:var(--accent)}
    .skills{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .skill{padding:15px 0;border-bottom:1px solid var(--line);font-size:14px}
    .skill small{display:block;color:var(--muted);margin-top:3px}
    .timeline{border-top:1px solid var(--line)}
    .item{display:grid;grid-template-columns:170px 1fr;gap:35px;padding:28px 0;border-bottom:1px solid var(--line)}
    .date{font:12px monospace;color:var(--muted)}
    .item h3{margin:0 0 4px;font-size:20px}
    .item p{margin:0;color:var(--muted);font-size:14px}
    .contact{
      display:flex;justify-content:space-between;align-items:end;gap:30px;
      padding-bottom:120px
    }
    .contact h2{max-width:700px}
    footer{border-top:1px solid var(--line);padding:25px 0;color:var(--muted);font-size:12px}
    .reveal{opacity:0;transform:translateY(18px);transition:.65s ease}
    .reveal.visible{opacity:1;transform:none}
    @media(max-width:760px){
      .nav-links{display:none}
      .hero{padding-top:65px}
      .meta,.projects,.about-grid{grid-template-columns:1fr}
      .meta div+div{border-left:0;border-top:1px solid var(--line);padding-left:0}
      .section-head,.contact{display:block}
      .section-intro{margin-top:20px}
      .item{grid-template-columns:1fr;gap:7px}
      .skills{grid-template-columns:1fr}
    }
  
      `}</style>

  <nav>
    <div className="wrap nav-inner">
      <a className="logo" href="#">RP<span>.</span></a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <main>
    <header className="hero">
      <div className="wrap reveal">
        <div className="eyebrow">Robotics · Software · Game Development</div>
        <h1>Rishit<br/><span className="dim">Prabhu.</span></h1>
        <p className="hero-copy">
          Robotics & Automation Engineering student at Symbiosis Institute of Technology, Pune.
          I build software, interactive systems, and games at the intersection of engineering and creativity.
        </p>
        <div className="actions">
          <a className="btn primary" href="#work">View selected work</a>
          <a className="btn" href="https://www.linkedin.com/in/rishitprabhu" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn" href="https://github.com/RishitPrabhu" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div className="meta">
          <div><b>Currently</b><span>B.Tech · Robotics & Automation</span></div>
          <div><b>Based in</b><span>Pune, India</span></div>
          <div><b>Focus</b><span>Software · Games · Robotics</span></div>
        </div>
      </div>
    </header>

    <section id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div><div className="section-num">01 / SELECTED WORK</div><h2>Things I've<br/>built.</h2></div>
        </div>

        <div className="projects">
          <article className="card reveal">
            <div>
              <div className="card-top"><span className="tag">Game Development</span><span>01</span></div>
              <h3>Mir-elm: Through the Portals</h3>
              <p>Atmospheric exploration-platformer work created for Genesis V Game Jam, combining level design, gameplay systems and a distinctive visual direction.</p>
            </div>
            <div className="stack"><span>Unity / Godot</span><span>Game Design</span><span>Gameplay</span></div>
          </article>

          <article className="card reveal">
            <div>
              <div className="card-top"><span className="tag">Computer Vision</span><span>02</span></div>
              <h3>Smart Conveyor System</h3>
              <p>A smart conveyor system for automated sorting and monitoring luggage on conveyor belts, utilizing C++ and Node-red for APIS</p>
            </div>
            <div className="stack"><span>Python</span><span>OpenCV</span><span>Raspberry Pi</span></div>
          </article>

          <article className="card reveal">
            <div>
              <div className="card-top"><span className="tag">Embedded Systems</span><span>03</span></div>
              <h3>ESP32 Monitoring System</h3>
              <p>An embedded monitoring prototype integrating sensors, I²C peripherals and wireless communication for real-time readings.</p>
            </div>
            <div className="stack"><span>ESP32</span><span>C/C++</span><span>I²C</span></div>
          </article>

          <article className="card reveal">
            <div>
              <div className="card-top"><span className="tag">Full Stack</span><span>04</span></div>
              <h3>ARVR Club Website</h3>
              <p>A responsive website for the Augmented Reality and Virtual Reality club, built with Flutter and integrated with Supabase for backend services.</p>
            </div>
            <div className="stack"><span>Flutter</span><span>Supabase</span><span>Postgres</span></div>
          </article>
        </div>
      </div>
    </section>

    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div><div className="section-num">02 / ABOUT</div><h2>Engineer<br/>who builds.</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            I’m a <strong>Robotics & Automation</strong> engineering student who enjoys moving from an idea to a working system.
            My interests span robotics, embedded systems, computer vision, software engineering and game development.
            I’m especially interested in projects where hardware, software and interaction meet.
          </div>
          <div className="skills reveal">
            <div className="skill"><b>C / C++ / Python</b><small>Systems, algorithms & robotics</small></div>
            <div className="skill"><b>C# / Unity / Godot</b><small>Gameplay & interactive systems</small></div>
            <div className="skill"><b>Flutter / React / Next.js</b><small>Application & web development</small></div>
            <div className="skill"><b>ESP32 / Raspberry Pi</b><small>Embedded & IoT systems</small></div>
            <div className="skill"><b>OpenCV</b><small>Computer vision & image processing</small></div>
            <div className="skill"><b>Git / GitHub / Supabase</b><small>Development & deployment workflow</small></div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div><div className="section-num">03 / EXPERIENCE</div><h2>Where I<br/>work.</h2></div>
        </div>
        <div className="timeline">
          <div className="item reveal">
            <div className="date">2024 — 2028</div>
            <div><h3>Symbiosis Institute of Technology</h3><p>B.Tech in Robotics & Automation · Pune, India</p></div>
          </div>
          <div className="item reveal">
            <div className="date">CURRENT</div>
            <div><h3>ARVR & Game Development Club — SIT Pune</h3><p>Building and exploring interactive experiences, game development and emerging real-time technologies.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="wrap contact reveal">
        <div>
          <div className="section-num">04 / CONTACT</div>
          <h2>Have a project<br/>worth building?</h2>
        </div>
        <div className="actions">
          <a className="btn primary" href="https://www.linkedin.com/in/rishitprabhu" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a className="btn" href="mailto:rishitprabhu.personal@gmail.com">Email me ↗</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div className="wrap">© <span id="year"></span> Rishit Prabhu · Pune, India</div>
  </footer>

  
    </>
  );
}