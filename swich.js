let menesis = "Liepa";

switch(menesis){
    case 'Gruodis':
    case 'Sausis':
    case 'Vasaris':
        console.log(`tai ziemos metu laikas.`);
        break;
    case 'Kovas':
    case 'Balandis':
    case 'Geguze':
        console.log(`tai pavasario metu laikas.`);
        break;
    case 'Birzelis':
    case 'Liepa':
    case 'Rugpjutis':
        console.log(`tai vasaros metu laikas.`);
        break;
    case 'Rugsejis':
    case 'Spalis':
    case 'Lapkritis':
        console.log(`tai rudens metu laikas.`);
        break;
    default:
        console.log(`ka cia do nesamone parasiai - ${menesis}`)
}