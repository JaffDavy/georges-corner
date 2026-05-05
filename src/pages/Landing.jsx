import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-slate-50 flex flex-col selection:bg-yellow-500/30">
      {/* Decorative radial glow for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-yellow-900/10 blur-[120px]" />
      </div>

      <nav className="relative z-10 flex justify-between items-center px-8 md:px-16 py-8">
        <h1 className="text-2xl font-serif tracking-widest uppercase">
          George’s <span className="text-yellow-500">Corner</span>
        </h1>
        <div className="hidden md:block h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <span className="text-sm tracking-tighter opacity-60 italic">Est. 2026</span>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6">
        {/* Subtle accent line */}
        <div className="w-12 h-[2px] bg-yellow-500 mb-8" />

        <h2 className="text-6xl md:text-8xl font-serif italic mb-6 leading-tight">
          A Taste of <br />
          <span className="text-yellow-500">Pure Luxury</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light tracking-wide">
          Experience an exquisite blend of artisanal cuisine and 
          premium spirits, curated for the discerning palate.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={() => navigate("/menu")}
            className="cursor-pointer group relative px-10 py-4 overflow-hidden rounded-full bg-yellow-500 text-black font-bold uppercase tracking-widest transition-all hover:pr-14 active:scale-95"
          >
            <span className="relative z-10">Explore Menu</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100">
              →
            </span>
          </button>
          
          {/* <button 
            onClick={() => navigate("/reservations")}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-yellow-500 transition-colors mt-4"
          >
            Book a Table
          </button> */}
        </div>
      </main>

      <footer className="relative z-10 p-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600">
          Fine Dining • Cocktails • Experience
        </p>
      </footer>
    </div>
  );
}

export default Landing;