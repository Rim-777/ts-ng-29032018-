// Object.defineProperty(
//   window,
//   "MySweetApp",
//   {
//     value: "v1.0.0",
//     writable: true
//   }
// );
//
// function deliveryMethod() {
//   // TODO
//   return "overnight";
// }
//
// function shipWeight() {
//   const el = document.getElementById('weight');
//   const content = el ? el.innerHTML : '0';
//   return parseInt(content);
// }
//
// /**
//  * @param {(string | string[])} emailAddr - An email address of array of email addresses
//  */
// function sendUpdates(emailAddr: string | string[]) {
//   function sendEmail(addr: string) {
//     // Default to standard delivery if empty
//     console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);
//
//     if (shipWeight() > 100) {
//       console.log("WARNING: Oversize package");
//     }
//   }
//
//   // If it's an array, loop over it
//   if (Array.isArray(emailAddr)) {
//     emailAddr.forEach((val, idx) => {
//       sendEmail(val.trim());
//     });
//   } else {
//     sendEmail(emailAddr.trim());
//   }
// }

// interface Account {
//   firstName: string;
//   age: number;
// }
//
// let account = Account;


// let account = {
//   firstName: 'Igor',
//   age: 31
// }
//
// let person: typeof account;
// person = 1;
//
// let a = 1;
//
// a = 'as';
// let a: number | undefined = 1;
// a = undefined;

// let a: void;
//
// function  f(): void {
//
// }

// const account: {
//   readonly firstName: string,
//   readonly age: number
// } = {
//   firstName: 'Igor',
//   age: 31
// }
//
// account.age = 32;

// let account: Readonly<{
//    firstName: string,
//    age: number
// }> = {
//   firstName: 'Igor',
//   age: 31
// }
// account.age = 32;

// let hashMap: { [key: string]: string } = {
//   'as':1
// }

// let cb: new (value: string) => void

//
// interface IAccount<T extends { id: number, name: string }> {
//   user: T;
// }
//
// let account: IAccount<{ id: number, name: string, female: boolean }> = {
//   user: {
//     id: 1,
//     name: 'igor',
//     female: false
//   }
// }
// interface IAge {
//   age: number,
// }
//
// interface IAccount extends IName, IAge {
//   id: number,
//   firstName: string
//   items: any[]
// }
//
// class Person implements IAccount {
//   id!: number;
//   firstName!: string;
//   age!: number;
// }
//
//function isString(myVar: number | string): myVar is string {
//  return typeof myVar === "string";
//}
//
//function average(a: number | string): number {
//  let total = 0;
//  if (isString(a)) {
//    total += parseInt(a, 10);
//  } else {
//    total += a;
//  }
//  return 1;
// }

// average(1);

// class SuperPoint {
//
//   public constructor(protected x: number, private y: number) {
//
//   }
//
//   public sum(): number {
//     return this.x + this.y;
//   }
//
//   public set superY(value: number) {
//     this.y = value;
//   }
// }
//
// class Point extends SuperPoint {
//   public constructor(x: number, y: number) {
//     super(x, y);
//     this
//   }
// }
//
// let point = new Point(1, 3);
// point.superY = 4;

// class Singleton {
//   public static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }
//
//   private static instance: Singleton;
//
//   private static readonly className: string = "Singleton";
//
//   private constructor() {}
// }
//
// let a = Singleton.getInstance();
// let b = Singleton.getInstance();

// abstract class SuperPoint {
//   public abstract sum(): number;
// //
// //   public getPointName(): string {
// //     return "Some Name";
// //   }
// // }
// //
// // class Point extends SuperPoint implements OnInit, OnDestroy {
//   public sum(): number {
//     return 3;
//   }
// }
//
// let p =  new Point();
// p.