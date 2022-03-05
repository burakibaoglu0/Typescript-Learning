"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = void 0;
class StudentClass {
    name;
    surname;
    age;
    // public isim: string = 'burak';
    // soyad: string;
    // //! class dışında bu değere erişilmesini istemiyorsak private yapıyoruz
    // private isim2: string = 'burak';
    // constructor(isim:string, soyad:string){
    //     this.isim = isim;
    //     this.soyad = soyad;
    // }
    // tamAdıYazdır(){
    //     console.log(
    //         {isim: this.isim,
    //         soyad: this.soyad}
    //     )
    // }
    //* constructor içerisinden erişim aşağıdaki gibi sağlanır
    // constructor(public isim: string, public soyad: string){}
    // tamAdıYazdır(){
    //     console.log(
    //         {isim: this.isim,
    //         soyad: this.soyad}
    //     )
    // }
    //! interface ile birlikte kullanımı
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getStudentInformation() {
        return this;
    }
}
exports.StudentClass = StudentClass;
