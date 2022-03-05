export interface IStudent {
    name: string,
    surname: string,
    age: string,

    getStudentInformation(): {
        name: IStudent["name"],
        surname: IStudent["surname"],
        age: IStudent["age"],
    };
}

export class StudentClass implements IStudent {

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

    constructor(public name: string, public surname: string, public age: string) { }

    getStudentInformation(){
        return this;
    } 
    
}