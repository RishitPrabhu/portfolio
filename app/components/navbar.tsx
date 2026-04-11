const Navbar = () => {
  return (
  <nav className="top-0 w-full z-50 bg-[#fff8f7]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(33,26,25,0.06)] gid grid-cols-3">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">

      <div className="tracking-wide sm:text-2xl text-base font-black font-headline">
        PORTFOLIO
      </div>

        <div className="flex justify-between  mx-auto w-[50%]">
                <a href="#" className="group text-black-600 hover:text-red-500 transition duration-300 text-xl">
                                Home
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                </a>
                
                <a href="#" className="group text-black-600 hover:text-red-500 transition duration-300 text-xl">
                                Projects
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                </a>
                <a href="#" className="group text-black-600 hover:text-red-500 transition duration-300 text-xl">
                                Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                </a>
        </div>

        <div>

        </div >
                <img src="/icons/mail.svg" alt="Mail" className="w-6 h-6" />
      </div>
  </nav>
  );
};

export default Navbar;