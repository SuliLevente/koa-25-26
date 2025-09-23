import input from "./input.js"

let txt = await input("Kérek egy szöveget: ");

// 1. feladat
const elsoMegoldas = txt.substr(0, 5);
console.log(`Az elso 5 karakter: ${elsoMegoldas}`);

// 2. feladat
const haromtolNyolcig = txt.slice(2,8);
console.log(`A 3. karaktertol a 8. karakterig: ${haromtolNyolcig}`);

// 3. feladat
const otodiktol = txt.substring(4)
console.log(`Az 5. karaktertol a vegeig: ${otodiktol}`);

// 4. feladat
const otodiktolHatig = txt.substring(4,10);
console.log(`Az 5. karaktertol 6 karakter hosszan: ${otodiktolHatig}`)

// 5. feladat
const nagybetukkel = txt.toUpperCase();
console.log(`Nagybetukkel: ${nagybetukkel}`);

// 6. feladat
let mindenmasodik = "";
for (let i = 0; i < txt.length; i++) {
    if(i % 2 != 0) {
        mindenmasodik+= txt[i].toUpperCase();
    }
    else {
        mindenmasodik += txt[i];
    }
}
console.log(`Minden masodik nagybetus: ${mindenmasodik}`);

// 7. feladat
let nagyebetuk = txt.replaceAll("e", "E");
console.log(`Nagy E betukkel: ${nagyebetuk}`)

// 8. feladat
console.log("E betuk szerint szetvalasztva:")
var ebetukkelValasztva = txt.split('e')
ebetukkelValasztva.forEach(e => {
    console.log("\t" + e)
});

console.log(txt);
