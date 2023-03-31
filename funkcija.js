let vardas = "Kestuti";
// funkcijos sukurimas
function pasisveikinimas(x){
    console.log(`Labas ${x}`)
}
// funkcijos iskvietimas
pasisveikinimas(vardas)


// uzduotis lokalus globalus scopas

// const saugiausias deklaravimas
// let maziau saugus
var gyvunas = "Dramblys";

console.log("pirmas deklaravimas "+gyvunas);

gyvunas = "ozka";

console.log("antras deklaravimas "+gyvunas);

