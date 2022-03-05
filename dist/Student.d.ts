export interface IStudent {
    name: string;
    surname: string;
    age: string;
    getStudentInformation(): {
        name: IStudent["name"];
        surname: IStudent["surname"];
        age: IStudent["age"];
    };
}
export declare class StudentClass implements IStudent {
    name: string;
    surname: string;
    age: string;
    constructor(name: string, surname: string, age: string);
    getStudentInformation(): this;
}
