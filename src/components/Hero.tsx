import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-stone-900 flex items-center justify-center text-white">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop" 
          alt="Suasana Cafe Kopi" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-amber-50">
          Awali Harimu dengan Kopi Terbaik
        </h1>
        <p className="text-lg md:text-xl font-sans mb-8 text-stone-300">
          Nikmati racikan espresso pilihan dari biji kopi Nusantara, diseduh khusus untuk menemani setiap momen berhargamu.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Lihat Menu
          </button>
          <button className="bg-transparent border border-amber-500 hover:bg-amber-900/50 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Reservasi Tempat
          </button>
        </div>
      </div>
    </section>
  );
};