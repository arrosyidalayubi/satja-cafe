import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-12 flex justify-between items-center text-amber-50">
      
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-serif font-bold tracking-widest cursor-pointer">
        SATJA
      </div>

      {/* Link Navigasi (Disembunyikan di layar HP, muncul di layar medium ke atas) */}
      <ul className="hidden md:flex gap-8 font-medium text-sm md:text-base">
        <li>
          <a href="#hero" className="hover:text-amber-400 hover:underline underline-offset-4 transition-all">
            Beranda
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:text-amber-400 hover:underline underline-offset-4 transition-all">
            Menu
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-amber-400 hover:underline underline-offset-4 transition-all">
            Tentang Kami
          </a>
        </li>
      </ul>

      {/* Tombol Aksi Kanan */}
      <div className="hidden md:block">
        <a 
          href="#kontak" 
          className="border border-amber-500 text-amber-50 hover:bg-amber-500 hover:text-stone-900 px-6 py-2 rounded-full font-semibold transition-colors duration-300"
        >
          Hubungi Kami
        </a>
      </div>

      {/* Hamburger Menu Icon (Hanya untuk Mobile) */}
      <div className="md:hidden flex items-center">
        <button className="text-amber-50 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

    </nav>
  );
};