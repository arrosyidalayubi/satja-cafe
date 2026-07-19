import React from 'react';

export const About: React.FC = () => {
  return (
    // Tambahkan id="about" agar bisa diakses lewat Navbar
    <section id="about" className="py-24 bg-stone-100 text-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sisi Gambar (Kiri di Desktop, Atas di Mobile) */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              {/* Kamu bisa ganti URL ini dengan gambar aset lokalmu misal: "/asset/barista.jpg" */}
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
                alt="Barista meracik kopi Satja" 
                className="w-full h-100 md:h-125 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Ornamen Desain (Kotak aksen di belakang gambar) */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-800/10 rounded-3xl -z-10 hidden md:block"></div>
          </div>

          {/* Sisi Teks (Kanan) */}
          <div className="flex flex-col gap-6">
            <h3 className="text-amber-700 font-bold tracking-widest text-sm uppercase">
              Kisah Kami
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Lebih dari Sekadar <br/> Secangkir Kopi
            </h2>
            
            <div className="w-16 h-1 bg-amber-800 rounded-full my-2"></div>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Berawal dari kecintaan pada aroma biji kopi lokal Nusantara, Satja Coffee lahir sebagai ruang singgah yang hangat. Kami memadukan teknik penyeduhan modern dengan cita rasa klasik yang selalu mengundang rindu.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Setiap menu yang kami sajikan, mulai dari <strong>Kopi Satja Atas</strong> yang ikonis hingga racikan non-kopi yang menyegarkan, dibuat khusus dengan presisi dan bahan premium. Tempat yang sempurna untuk merajut cerita, menyelesaikan pekerjaan, atau sekadar melepas penat.
            </p>

            <div className="mt-4">
              <a 
                href="#menu" 
                className="inline-flex items-center gap-2 text-amber-900 font-bold border-b-2 border-amber-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
              >
                Jelajahi Menu Kami 
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};