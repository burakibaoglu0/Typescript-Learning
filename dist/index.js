"use strict";
//*tip tanımlama
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let a = "hello";
let b = 10;
let c = true;
let d = undefined;
//console.log(a,b,c,d);
//*objeler için
const Person = {
    name: "ali",
    surname: "kılıç",
    age: 20,
    isMarried: true,
    address: {
        city: "İstanbul",
        street: "Çiçekler",
        number: "1"
    }
};
Person.surname = 1;
const Person2 = {
    name: "ali",
    surname: "kılıç",
    age: 20,
    isMarried: true,
    address: {
        city: "İstanbul",
        street: "Çiçekler",
        number: "1"
    }
};
Person2.address.number = "2";
//! as deyimi ile değerin tipini belirleyebiliriz.
//*diziler için
const dizi = ["ali", "kılıç", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi2 = [];
const dizi3 = ["ali", 1, true];
//*fonksiyonlar
//! fonksiyonlarda dönen değerin tipini belirtmek için parantezlerden sonra : ile tip belirtilir.
function F() {
    return 0;
}
//! eğer dönüş tipi verilmezse ve fonksiyonun içinde return kullanılmazsa dönüş tipi void olur.
function F2() { }
//! eğer dönüş tipi verilmezse ve fonksiyonun içinde return kullanılırsa dönüş tipi otomatik olarak ts tarafından algılanır.
function F3() {
    return "ali";
}
//* parametreler
function LogPerson(isim, soyisim, yas) {
    console.log({
        isim,
        soyisim,
        yas
    });
}
LogPerson("burak", "ibaoğlu", 23);
//*async fonksiyonlar için
async function LogPerson2(isim, soyisim, yas) {
    return new Promise((resolve, reject) => {
        if (yas > 18) {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if (isim == "ali") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if (soyisim == "kılıç") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
    });
}
//*daha okunaklı bir kod yazmak için parametreler obje içerisinde tanımlanır.
async function LogPerson3(params) {
    return new Promise((resolve, reject) => {
        if (params.yas > 18) {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if (params.isim == "ali") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
        if (params.soyisim == "kılıç") {
            resolve(25);
        }
        else {
            reject(new Error("hata"));
        }
    });
}
LogPerson3({
    isim: "burak",
    soyisim: "ibaoğlu",
    yas: 23
});
const myColor = "red";
const myColors = ["red", "green", "blue"];
const colorArr = ["red", "green", "blue", "magenta", "cyan", "yellow"];
const colorArr2 = ["red", "green", "blue", "magenta", "cyan", "yellow"];
const Burak = {
    name: "Burak",
    surname: "Ibaoğlu",
    age: 23,
    city: "Ankara",
    street: "Demetevler",
    number: "1"
};
//*mapler için tip belirtme
const MyMap = new Map();
MyMap.set("key1", "value1");
//*modüller
const modules_1 = __importDefault(require("./modules"));
modules_1.default.isim;
const ogrenci = {
    name: "ali",
    surname: "kılıç",
};
const myobject = {
    name: "ali",
    surname: "kılıç",
};
const myobject2 = {
    name: "ali",
    surname: "kılıç",
    //age kullanılmasa dahi hata olmaz
};
const myobject3 = {};
const myobject4 = {
    name: "ali",
    surname: "kılıç",
    age: 23,
};
const burak = {
    name: "Burak",
    surname: "Ibaoğlu"
};
//*interfaceler içerisinden tipler alınabilir
const isim = "ali";
const array = {
    0: "ali",
    1: "burak",
};
const array2 = [];
const myFunction = (name, surname) => {
    console.log(name, surname);
};
const myFunction2 = (name, surname) => {
    console.log(name, surname);
};
const myFunction3 = () => {
};
function getBooks() {
    return {
        _id: "",
        createdAt: "",
        updatedAt: "",
        name: "",
        date: new Date(),
    };
}
//*Class kullanımı
const Student_1 = require("./Student");
const student = new Student_1.StudentClass("burak", "ibaoğlu", "23");
//console.log(student.isim);
//! console.log(student.isim2); isim2 private olduğu için erişilemez. 
//student.tamAdıYazdır();
console.log(student.getStudentInformation());
