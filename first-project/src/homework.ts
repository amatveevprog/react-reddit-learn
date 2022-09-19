// задание 1:
function concat(arg1:string,arg2:string):string{
    return arg1.concat(arg2,' ');
}
console.log(concat('Hello ', 'World'));

// задание 2
const MyHometask:IMyHomeTask  = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface IMyHomeTask{
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: Array<{
        howIDoIt: string;
        simeArray: (string | number)[];
    }>;
}

// задание 3
// reduce 
interface MyArray<T> {
    [N: number]: T;
    //добавьте типизацию для метода reduce
    reduce<U>(fn:(accumulator:U,value:T)=>U, initialValue:U):U;
  }

// задание 4
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

