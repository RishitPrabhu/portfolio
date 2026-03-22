import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#fff8f7]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(33,26,25,0.06)]">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
      <div className="tracking-wide text-2xl font-black font-headline tracking-tighter text-[#211a19]">
        PORTFOLIO
        <p className='text-secondary text-xs tracking-wide'>RISHIT PRABHU</p>
      </div>
      <div className="flex justify-between gap-8  font-headline tracking-tight text-sm uppercase font-bold text-[#211a19]/60 ">
        <a className="hover:text-primary transition-colors cursor-pointer active:scale-95" href="#projects">Projects</a>
        <a className="text-primary border-b-2 border-primary pb-1 cursor-pointer active:scale-95" href="#about">About</a>
        <a className="hover:text-primary transition-colors cursor-pointer active:scale-95" href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-4 text-primary">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">M</span>
      </div>
    </div>
    <div className="bg-[#fff0ef] h-[1px] w-full absolute bottom-0 opacity-10"></div>
  </nav>
);

const Hero = () => (
  <section className="grid grid-cols-2 md:grid-cols-12 gap-12 items-end mb-40">

    <div className="md:col-span-5 relative group">
      <div className="w-100 bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl">
        <img 
          alt="Professional profile portrait" 
          className=" object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
          src="/potrait.png"
        />
      </div>

    </div>
    <div className="md:col-span-7 md:pl-12 pb-10">
      <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">The Visionary</span>
      <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
        I'm RISHIT <br/>PRABHU.
      </h1>
<div className="w-full overflow-hidden py-4">
  {/* The "Track" that moves */}
  <div className="flex w-max animate-infinite-scroll select-none">
    
    {/* First Set of Items */}
    <div className="flex gap-12 pr-12">
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Game Development
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Robotics Engineer
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Business Management
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Programming
      </p>
    </div>

    {/* Duplicate Set (Crucial for the seamless loop) */}
    <div className="flex gap-12 pr-12" aria-hidden="true">
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Game Development
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
       - Robotics Engineer
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Business Management
      </p>
      <p className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-on-surface-variant leading-none whitespace-nowrap">
        - Programming
      </p>
    </div>

  </div>
</div>
      
    </div>

    
  </section>
);

const Skills = () => {
  const services = [
    { icon: '/icons/gamepad.svg', title: 'Game Development', desc: 'Making beautiful games that Entertain and Educate.', color: 'text-primary' },
    { icon: '/icons/robot.svg', title: 'Robotics', desc: 'Soldering and Compiling the best machines.', color: 'text-secondary' },
    { icon: '/icons/tag.svg', title: 'Brand Strategy', desc: 'Helping you bridge the gap between your Targets and Execution.', color: 'text-primary' },
    { icon: '/icons/code.svg', title: 'Creative Motion', desc: 'Adding life to interfaces through meaningful transitions.', color: 'text-secondary' },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <h2 className="font-headline text-4xl font-black tracking-tighter text-on-surface">Core Expertise.</h2>
        <p className="font-label text-sm text-outline-variant uppercase tracking-widest">Building Products you'll love using</p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
        {services.map((s, i) => (
          <div key={i} className="bg-surface-container-lowest p-10 hover:bg-surface-variant transition-colors group">
            <span className={`material-symbols-outlined ${s.color} mb-6 block text-3xl group-hover:scale-110 transition-transform`}>
              <img
                src={s.icon}
                className='w-8 grayscale'
              />

            </span>
            <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">{s.title}</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <Hero />

        {/* Story Section */}
        <section className="grid grid-cols-2 gap-8 mb-40">
          <div className="md:col-span-2 bg-surface-container-lowest p-12 md:p-20 rounded-xl">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-outline mb-8 block">My Story</span>
            <h2 className="font-headline text-3xl font-bold mb-10 text-on-surface">The Craft of <br/>World-Class Products.</h2>
            <div className="space-y-8 font-body text-lg leading-loose text-on-surface-variant">
              <p>Born from a desire to push forward the current limits of modern technology, my journey began in Rrobotics and Automation.</p>
              <p>Today, I translate that tactile sensibility into digital landscapes. I believe every pixel should serve a purpose.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-primary-container/20 p-12 rounded-xl flex-1">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Philosophy</span>
              <p className="font-headline text-2xl font-bold text-on-primary-container leading-snug">"Good design is a silent ambassador."</p>
            </div>
            <div className="bg-secondary-container/30 p-12 rounded-xl">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 block">Current Location</span>
              <p className="font-headline text-xl font-bold text-on-secondary-container flex items-center gap-2">
                <span className="material-symbols-outlined">
                                <img 
                        alt="Location" 
                        className='w-4.5'
                        src="/icons/location.svg"
                        />
                        
                </span> Pune, India
              </p>
            </div>
          </div>
        </section>

        <Skills />

        {/* CTA Section */}
        <section className="mt-40 text-center">
          <div className="inline-block py-20 px-8 md:px-24 bg-surface-variant rounded-xl relative overflow-hidden w-full">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-10 text-on-surface">Have something in mind?</h2>
              <a href="mailto:hello@studiocurated.com" className="inline-flex items-center justify-center h-14 px-10 bg-primary text-on-primary rounded-full font-label font-bold uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                Let's Talk
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#fff0ef] w-full py-24 px-8 mt-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto gap-12">
          <div>
            <div className="font-headline font-bold text-lg text-on-surface mb-4">Portfolio</div>
            <p className="font-body italic text-base text-on-surface opacity-70">You're at rishitprabhu.com</p>
          </div>
          <div className="flex gap-8">

            <a href="https://www.linkedin.com/in/rishitprabhu/" target='_blank' className="font-body italic text-base text-on-surface opacity-70 hover:opacity-100 hover:text-primary transition-all underline decoration-primary-container underline-offset-4">
                LinkedIn
            </a>

            <a href="https://github.com/RishitPrabhu" target='_blank' className="font-body italic text-base text-on-surface opacity-70 hover:opacity-100 hover:text-primary transition-all underline decoration-primary-container underline-offset-4">
                Github
            </a>
            <a href="https://leetcode.com/u/RishitP/" target='_blank' className="font-body italic text-base text-on-surface opacity-70 hover:opacity-100 hover:text-primary transition-all underline decoration-primary-container underline-offset-4">
                Leetcode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;