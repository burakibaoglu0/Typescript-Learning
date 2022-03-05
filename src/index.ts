//*tip tanımlama

let a: string = "hello";
let b: number = 10;
let c: boolean = true;
let d: undefined = undefined;

//console.log(a,b,c,d);

//*objeler için

const Person = {
    name: "ali",
    surname: "kılıç" as string | number,
    age: 20 as number,
    isMarried: true,
    address: {
        city: "İstanbul",
        street: "Çiçekler",
        number: "1"
    }
}

Person.surname = 1;

const Person2: {
    //*objeler için tip belirtmede bu şekilde bir kullanım da mümkün
    name: string,
    surname: string,
    age: number,
    isMarried: boolean,
    address: {
        city: string,
        street: string,
        number: string
    }
} = {
    name: "ali",
    surname: "kılıç",
    age: 20,
    isMarried: true,
    address: {
        city: "İstanbul",
        street: "Çiçekler",
        number: "1"
    }
}

Person2.address.number = "2";

//! as deyimi ile değerin tipini belirleyebiliriz.

//*diziler için

const dizi: (string | number)[] = ["ali", "kılıç", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dizi2 = [] as Array < string | number > ;

const dizi3: [string, number, boolean] = ["ali", 1, true];

//*fonksiyonlar

//! fonksiyonlarda dönen değerin tipini belirtmek için parantezlerden sonra : ile tip belirtilir.

function F(): number {
    return 0;
}

//! eğer dönüş tipi verilmezse ve fonksiyonun içinde return kullanılmazsa dönüş tipi void olur.
function F2() {}

//! eğer dönüş tipi verilmezse ve fonksiyonun içinde return kullanılırsa dönüş tipi otomatik olarak ts tarafından algılanır.
function F3() {
    return "ali";
}

//* parametreler

function LogPerson(isim: string, soyisim: string, yas: number) {
    console.log({
        isim,
        soyisim,
        yas
    });
}

LogPerson("burak", "ibaoğlu", 23);

//*async fonksiyonlar için

async function LogPerson2(isim: string, soyisim: string, yas: number): Promise < number > {
    return new Promise((resolve, reject) => {
        if(yas > 18) {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if(isim == "ali") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if(soyisim == "kılıç") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
});
}

//*daha okunaklı bir kod yazmak için parametreler obje içerisinde tanımlanır.

async function LogPerson3(params: 
    {
    isim:string,
    soyisim:string,
    yas:number
    }): Promise < number > {
    return new Promise((resolve, reject) => {
        if(params.yas > 18) {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if(params.isim == "ali") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if(params.soyisim == "kılıç") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
    });
}

LogPerson3(
    {
        isim:"burak",
        soyisim:"ibaoğlu",
        yas:23
    }
)

//*Tip isimlendirme

type Colors = "red" | "green" | "blue";

const myColor: Colors = "red";

const myColors: Colors[] = ["red", "green", "blue"];

type CustomColors = "magenta" | "cyan" | "yellow";

const colorArr: (CustomColors | Colors)[] = ["red", "green", "blue", "magenta", "cyan", "yellow"];

//*tip birleştirme (diziler için)

type AllColors = Colors | CustomColors;

const colorArr2: AllColors[] = ["red", "green", "blue", "magenta", "cyan", "yellow"];

//*tip birleştirme (objeler için)

type Person = {
    name: string,
    surname: string,
    age: number,
}

type address = {
    city: string,
    street: string,
    number?: string //* soru işareti opsiyonel seçeneği belirtir. number kullanılması gerekli değildir.
}

type PersonalInfo = Person & address;

const Burak: PersonalInfo = {
    name: "Burak",
    surname: "Ibaoğlu",
    age: 23,
    city: "Ankara",
    street: "Demetevler",
    number: "1"
}

//*mapler için tip belirtme

const MyMap = new Map < string, string > ();

MyMap.set("key1", "value1");

//*modüller

import myPerson, { Student } from "./modules";

myPerson.isim;

const ogrenci:Student = {
    name: "ali",
    surname: "kılıç",
}

//console.log(ogrenci);

//*objeler için tip belirtme

type myObject = {
    name: string,
    surname: string,
}

const myobject: myObject = {
    name: "ali",
    surname: "kılıç",
}

//opsiyonel değişkenler

type myObject2 = {
    name: string,
    surname: string,
    age?: number,
}

const myobject2: myObject2 = {
    name: "ali",
    surname: "kılıç",
    //age kullanılmasa dahi hata olmaz
}

//*tüm değişkenler partial kullanımı ile opsiyonel olarak tanımlanabilir.

type myObject3 = Partial <
{
    name: string,
    surname: string,
}>

const myobject3: myObject3 = {
}

//*dinamik değişken tanımlama

type myObject4 = {
    name: string,
    surname: string,
    [key: string]: any,
}

const myobject4: myObject4 = {
    name: "ali",
    surname: "kılıç",
    age: 23,
}

//*interface kavramı

//*interface ile obje tiplendirme

//*dinamik değişken burada da geçerlidir

interface PersonInfos {
    name: string,
    surname: string,
    age?: number,
    [key: string]: any,
}

const burak: PersonInfos = {
    name: "Burak",
    surname: "Ibaoğlu"
}

//*interfaceler içerisinden tipler alınabilir

const isim: Person["name"] = "ali";

//*interface ile dizi tiplendirme

interface myArray {
    [index: number]: string | number,
}

const array: myArray = {
    0: "ali",
    1: "burak",
};

const array2: myArray = [];

//*interface ile fonksiyon tiplendirme

interface IFunction {
    (name: string, surname: number): void;
    (name: number, surname: boolean): void;
}

const myFunction: IFunction = (name, surname) => {
    console.log(name, surname);
}

const myFunction2: IFunction = (name, surname) => {
    console.log(name, surname);
}

//*interface ile kalıtım

interface IFunction2 extends IFunction {
    (yas: number, surname: boolean): void;
}

const myFunction3: IFunction2 = () => {
}

//myFunction3() > overload fonksiyon

//*interface ile kalıtım örneği 2

interface MongoResponse {
    _id: string,
    createdAt: string,
    updatedAt: string,
}

interface BooksResponse extends MongoResponse {
    name: string,
    date: Date,
}

function getBooks(): BooksResponse {
    return {
        _id: "",
        createdAt: "",
        updatedAt: "",
        name: "",
        date: new Date(),
    };
}

//*Class kullanımı

import { StudentClass } from "./Student";

const student = new StudentClass("burak", "ibaoğlu", "23");

//console.log(student.isim);

//! console.log(student.isim2); isim2 private olduğu için erişilemez. 

//student.tamAdıYazdır();

console.log(student.getStudentInformation());