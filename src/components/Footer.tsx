import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-4 border-amber-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Grid Container untuk Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Tentang */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-serif font-bold text-amber-50">
              Satja Coffee
            </h2>
            <p className="text-sm leading-relaxed text-stone-400">
              Menyajikan racikan kopi terbaik dengan biji pilihan Nusantara. Tempat yang tepat untuk memulai harimu atau sekadar melepas penat bersama teman.
            </p>
          </div>

          {/* Kolom 2: Jam Operasional */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-semibold text-amber-500">
              Jam Operasional
            </h3>
            <ul className="text-sm flex flex-col gap-2">
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>Senin - Jumat</span>
                <span>08:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>Sabtu - Minggu</span>
                <span>09:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1 text-amber-600/80">
                <span>Hari Libur Nasional</span>
                <span>Tutup</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Lokasi */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-semibold text-amber-500">
              Kunjungi Kami
            </h3>
            <address className="not-italic text-sm text-stone-400 flex flex-col gap-2">
              <p>Jl. Lebak Bulus Raya No. 123</p>
              <p>Jakarta Selatan, DKI Jakarta 12440</p>
              <a href="mailto:hello@satjacoffee.com" className="hover:text-amber-400 transition-colors mt-2">
                hello@satjacoffee.com
              </a>
              <a href="tel:+6281234567890" className="hover:text-amber-400 transition-colors">
                +62 812 3456 7890
              </a>
            </address>
            
            {/* Social Media Links (Teks sederhana) */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/satjacoffee/" className="text-stone-400 hover:text-amber-500 font-medium transition-colors">Instagram</a>
              <a href="#" className="text-stone-400 hover:text-amber-500 font-medium transition-colors">TikTok</a>
              <a href="#" className="text-stone-400 hover:text-amber-500 font-medium transition-colors">WhatsApp</a>
            </div>
          </div>

        </div>

        {/* Garis Pemisah */}
        <div className="h-px w-full bg-stone-800 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Satja Coffee. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};