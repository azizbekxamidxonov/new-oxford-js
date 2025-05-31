// let yil = prompt("Tug‘ilgan yilingizni kiriting:");
// let hozirgiYil = 2025;
// let yosh = hozirgiYil * yil;

console.log(" " + yosh + " yoshdasiz");
let yil = prompt("Yilni kiriting (masalan: 1500):");
let boshlanish = new Date(yil + "-01-01");
let bugun = new Date();
let kunlar = (bugun - boshlanish) / (1000 * 60 * 60 * 24);
alert("Kiritilgan yildan hozirgacha kunlar soni: " +kunlar);

