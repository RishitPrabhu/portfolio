import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#fff8f7]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(33,26,25,0.06)]">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">

      <div className="tracking-wide sm:text-2xl text-base font-black font-headline tracking-tighter text-[#211a19]">
        PORTFOLIO
        <p className='text-secondary sm:text-sm text-xs  tracking-wide'>RISHIT PRABHU</p>
      </div>

      <div className="flex justify-between gap-8  font-headline tracking-tight sm:text-sm text-xs uppercase font-bold text-[#211a19]/60 ">
        <a className="hover:text-primary transition-colors cursor-pointer active:scale-95" href="#projects">Projects</a>
        <a className="text-primary border-b-2 border-primary pb-1 cursor-pointer active:scale-95" href="#about">About</a>
        <a className="hover:text-primary transition-colors cursor-pointer active:scale-95" href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-4 text-primary">
      
        <img src='/icons/mail.svg' className='w-5 sm:w-8'/>
      </div>
    </div>
    <div className="bg-[#fff0ef] h-[1px] w-full absolute bottom-0 opacity-10"></div>
  </nav>
);

const Hero = () => (
  <section className="grid grid-cols-2 gap-5 md:gap-12 items-end mb-40">

    <div className="relative group">
      <div className="w-full bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl">
        <img 
          alt="Professional profile portrait" 
          className=" object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
          src="/potrait.png"
        />
      </div>

    </div>
    <div className="md:pl-12">
      <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">The Visionary</span>

      <h1 className="font-headline text-3xl md:text-7xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
        I'm RISHIT <br/>PRABHU.
      </h1>

<div className="w-full overflow-hidden py-4 ml-12  md:ml-0">
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
    <div>
      <h1>Website under Development. Thank you for your curiosity.</h1>
    </div>
  );
};

export default Portfolio;