const vara = 'vara'
const primavara = 'primavara'
const iarna = 'iarna'
const toamna = 'toamna'

const anotimpulDeAfara = vara

switch (anotimpulDeAfara) {
    case vara:
        console.log('Vara este cel mai cald dintre cele patru anotimpuri. Solstițiul ce are loc în timpul său se numește solstițiul de vară și marchează momentul în care, în emisfera respectivă, ziua are cea mai mare durată.')
        break
    case primavara:
        console.log('Primăvara este unul din cele patru anotimpuri ale zonei temperate, marcând tranziția de la iarnă spre vară. Din punct de vedere astronomic, marcarea începutului primăverii este, de cele mai multe ori, legată de echivalența dintre durata temporală zilei și a nopții, timp al anului numit echinocțiu în astronomie.')
        break
    case iarna:

        console.log('Iarna este unul din cele patru anotimpuri ale zonei temperate. Vremea este mai rece în perioada iernii, fiind anotimpul cu cele mai mici temperaturi, zilele cele mai scurte și nopțile cele mai lungi.')
        break
    case toamna:
        console.log('Toamna este unul din cele patru anotimpuri ale climei temperate. Este anotimpul care face legătura între vară și iarnă.')
    default:
        console.log('Nu reprezinta nici un anotimp')


}

const Diana = 'Diana'
const Vlad = 'Vlad'
const Maria = 'Maria'
const Ana = 'Ana'
const Marc = 'Marc'

const desprePersoana = Vlad
 
const obj = {
    Diana: 'hobby-pictura',
    Vlad: 'hobby-fotbal',
    Maria: 'hobby-dansul',
    Ana: 'hobby-muzica',
    Marc: 'hobby-arta digitala'
}
console.log(obj[desprePersoana])


class Animale {
    constructor(options) {
        this.blana = options.blana
        this.picioare = options.picioare
        this.urechi = options.urechi
    }
}

const animale = new Animale({blana:'pufoasa', picioare: 4,urechi: 2})

class Pisici extends Animale{

    constructor(options){
        super(options)
        this.culoareBlana = options.culoareBlana
    }
    desprePisici(){
        console.log(`Pisica ${this.culoareBlana} e cea mai draguta `)
    }
}
const pisici = new Pisici({blana:'pufoasa', picioare: 4,urechi: 2, culoareBlana : 'neagra'})

class Caini extends Animale{

    constructor(options){
        super(options)
        this.culoareOchi = options.culoareOchi
    }
}
const caini = new Caini({blana:'pufoasa', picioare: 4,urechi: 2, culoareOchi : 'albastru'})

console.log(animale)
console.log(pisici)
console.log(caini)
pisici.desprePisici()
  
const an = 365;
const luna = 30;
const saptamana =7;


const raspuns='timpul pina la finilizarea productiei este de '

const raspunsBack = 145;

if(raspunsBack/an >=1){
    const perioadaAni = Math.floor(raspunsBack/an) >1 ? 'ani' : 'an'
    const perioadaLuni = Math.floor(raspunsBack%an / luna) > 1 ? 'luni' : 'luna'
console.log(`${raspuns} ${Math.floor(raspunsBack/an)} ${perioadaAni} ${Math.floor(raspunsBack%an/luna)} ${perioadaLuni}`)
} else if (raspunsBack/luna >=1){
    const perioadaLuni = Math.floor(raspunsBack/luna )> 1 ? 'luni' : 'luna'
    const perioadaSaptamani = Math.floor(raspunsBack/luna % saptamana) > 1 ? 'saptamani' : 'saptamana'
    console.log(`${raspuns} ${Math.floor(raspunsBack/luna)} ${perioadaLuni} ${Math.floor(raspunsBack%luna/saptamana)} ${perioadaSaptamani}`)
}else if (raspunsBack/saptamana >=1){
    const perioadaLuni = raspunsBack/saptamana > 1 ? 'saptamani' : 'saptamana'
    const perioadaZile = Math.floor(raspunsBack/saptamana % zi) > 1 ? 'zile' : 'zi'
    console.log(`${raspuns} ${Math.floor(raspunsBack/saptamana)} ${perioadaSaptamani} ${Math.floor(raspunsBack%saptamana/zi)} ${perioadaZile}`)
}else{
    console.log('Mai putin de o saptamana')
}
