const narxlar = { telefon: 200, laptop: 800, quloqchin: 50 };
let mahsulot = ("Mahsulot turini kiriting (telefon, laptop, quloqchin):");
let soni = ("Nechta dona olasiz?");
let chegirma = ("Chegirma kartangiz bormi? (ha/yo'q):");
let narx = 0

if (mahsulot === "quloqchin")
{
    narx = 100
}

else if (mahsulot === "laptop")
    {
        narx = 500
    }
    
    else if (mahsulot === "telefon")
        {
            narx = 300
        }
else {
    console.log(`mahsulot kiriting`);
    
}
let jamimahsulot  = narx * soni;

if (chegirma === "ha" && jamimahsulot > 300) {
    jamimahsulot *= 0.9;
}
else(
jamimahsulot *= 0.7
)

console.log("Umumiy to'lov: $" + jami(2));