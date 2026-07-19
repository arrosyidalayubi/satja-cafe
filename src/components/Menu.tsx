import React from 'react';

// 1. Definisikan Tipe Data (TypeScript)
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

// 2. Data Menu Aktual (Diekstrak dari referensi gambar GoFood Satja Coffee)
const menuData: MenuCategory[] = [
  {
    category: "Coffee",
    items: [
      { id: "c1", name: "Kopi Satja Atas", description: "Kopi susu dengan gula aren khas Satja. Manis, creamy, dan kopinya berasa.", price: 28000,imageUrl: "/assets/kopi-satja-atas.webp" },
      { id: "c2", name: "Kopi Satja Bawah", description: "Kopi susu dengan racikan sirup rahasia Satja yang creamy.", price: 25000,imageUrl: "/assets/kopi-satja-bawah.webp" },
      { id: "c3", name: "Kopi Satja Samping", description: "Kopi susu dengan perpaduan hazelnut syrup.", price: 28000,imageUrl: "/assets/kopi-satja-samping.webp" },
      { id: "c4", name: "Kopi Satja Kanan", description: "Kopi susu dengan campuran rum (halal) & vanilla.", price: 28000,imageUrl: "/assets/kopi-satja-kanan.webp" },
      { id: "c5", name: "Kopi Satja Kiri", description: "Kopi susu dengan campuran rum (halal) & vanilla.", price: 28000,imageUrl: "/assets/kopi-satja-kiri.webp" },
      { id: "c6", name: "Americano", description: "Espresso murni dengan air.", price: 22000,imageUrl: "/assets/americano.webp" },
      { id: "c7", name: "Applecano", description: "Espresso murni dengan air.", price: 30000,imageUrl: "/assets/applecano.webp" },
      { id: "c8", name: "Cappucino", description: "Espresso dan susu steamed dengan foam tebal.", price: 33000,imageUrl: "/assets/cappucino.webp" },
      { id: "c9", name: "Cafe Latte", description: "Kopi dan susu dengan proporsi susu lebih banyak.", price: 33000,imageUrl: "/assets/latte.webp" },
    ]
  },
  {
    category: "Non Coffee",
    items: [
      { id: "nc1", name: "Matcha", description: "Perpaduan matcha premium dengan susu segar yang creamy.", price: 30000,imageUrl: "/assets/matcha.webp" },
      { id: "nc2", name: "Taro", description: "Rasa ubi ungu taro yang manis diblend dengan susu.", price: 28000,imageUrl: "/assets/taro.webp" },
      { id: "nc3", name: "Red Velvet", description: "Karakteristik rasa kue red velvet dalam balutan minuman dingin.", price: 28000,imageUrl: "/assets/red-velvet.webp" },
      { id: "nc4", name: "Tiramisu", description: "Rasa tiramisu dalam balutan minuman dingin.", price: 28000,imageUrl: "/assets/tiramisu.webp" },
      { id: "nc5", name: "Early Grey Milk Tea", description: "Teh early grey wangi berpadu dengan susu creamy.", price: 28000,imageUrl: "/assets/early-grey-milk-tea.webp" },
      { id: "nc6", name: "Lychee Yakult", description: "Kesegaran yakult dipadukan dengan sirup leci dan buah asli.", price: 28000,imageUrl: "/assets/lychee-yakult.webp" },
      { id: "nc7", name: "Strawberry Yakult", description: "Kesegaran yakult dipadukan dengan sirup stroberi dan buah asli.", price: 28000,imageUrl: "/assets/strawberry-yakult.webp" },
      { id: "nc8", name: "Mango Yakult", description: "Perpaduan yakult asam manis dengan sirup mangga segar.", price: 25000,imageUrl: "/assets/mango-yakult.webp" },
      { id: "nc9", name: "Milk Strawberry Yakult", description: "Kesegaran yakult dipadukan dengan sirup stroberi dan buah asli.", price: 28000,imageUrl: "/assets/milk-strawberry-yakult.webp" },
    ]
  },
  {
    category: "Satja To Go",
    items: [
      { id: "stg1", name: "To Go Satja Atas", description: "Perpaduan matcha premium dengan susu segar yang creamy.", price: 30000,imageUrl: "/assets/matcha.webp" },
      { id: "stg2", name: "To Go Satja Bawah", description: "Rasa ubi ungu taro yang manis diblend dengan susu.", price: 28000,imageUrl: "/assets/taro.webp" },
      { id: "stg3", name: "To Go Satja Applecano", description: "Karakteristik rasa kue red velvet dalam balutan minuman dingin.", price: 28000,imageUrl: "/assets/red-velvet.webp" },
      { id: "stg4", name: "To Go Satja Matcha", description: "Rasa tiramisu dalam balutan minuman dingin.", price: 28000,imageUrl: "/assets/tiramisu.webp" },
      { id: "stg5", name: "To Go Satja Early Grey Milk Tea", description: "Teh early grey wangi berpadu dengan susu creamy.", price: 28000,imageUrl: "/assets/early-grey-milk-tea.webp" },
    ]
  },
  {
    category: "Snack",
    items: [
      { id: "s1", name: "Risol Mayo Smoked Beef", description: "Risol isi smoked beef, telur, dan mayo.", price: 10000,imageUrl: "/assets/risol-mayo-brisket.webp" },
      { id: "s2", name: "Chocolate Chip Cookie", description: "Kue kering klasik dengan taburan choco chip.", price: 10000,imageUrl: "/assets/chocolate-chip-cookie.webp" },
      { id: "s3", name: "Red Velvet Cookie", description: "Kue kering rasa red velvet yang lembut.", price: 10000,imageUrl: "/assets/red-velvet-cookie.webp" },
      { id: "s4", name: "Rogout Smoked Chicken", description: "Soft smoked chicken, special spices, a tempting smoky taste.", price: 10000,imageUrl: "/assets/rogout-smoked-chicken.webp" },
      { id: "s5", name: "Salt Bread", description: "Roti garam yang lembut dan gurih.", price: 10000,imageUrl: "/assets/salt-bread.webp" },
    ]
  }
];

// Helper fungsi untuk format Rupiah
const formatRupiah = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

export const Menu: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 text-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
            Menu Pilihan Kami
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Dari biji kopi pilihan hingga kudapan pendamping yang lezat. Temukan favoritmu di sini.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((categoryData) => (
            <div key={categoryData.category} className="flex flex-col gap-6">
              
              {/* Category Title */}
              <h3 className="text-2xl font-serif font-semibold text-stone-900 border-b-2 border-amber-800 pb-2 inline-block self-start">
                {categoryData.category}
              </h3>

              {/* Items List - Revisi Tata Letak */}
              <div className="flex flex-col gap-6">
                {categoryData.items.map((item) => (
                  <div key={item.id} className="flex flex-col group p-4 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between gap-6">
                      
                      {/* Bagian Teks (Kiri) - Beri flex-1 agar mengambil sisa ruang */}
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-1">
                          {/* Nama Menu */}
                          <h4 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                            {item.name}
                          </h4>
                          
                          {/* Garis Putus-putus untuk estetik buku menu */}
                          <div className="grow mx-4 border-b border-dotted border-stone-400"></div>
                          
                          {/* Harga */}
                          <span className="text-lg font-semibold text-amber-900">
                            {formatRupiah(item.price)}
                          </span>
                        </div>
                        
                        {/* Deskripsi Menu */}
                        <p className="text-sm text-stone-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Bagian Gambar (Kanan) - Render hanya jika ada imageUrl */}
                      {item.imageUrl && (
                        <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl shadow-md">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

        {/* Order CTA (Opsional) */}
        <div className="mt-20 text-center">
          <a 
            href="#" 
            className="inline-block bg-amber-800 hover:bg-amber-900 text-white font-medium py-3 px-10 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Pesan Sekarang via GoFood
          </a>
        </div>

      </div>
    </section>
  );
};