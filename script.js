// 1.値に関数を用いたオブジェクト
// 定数animalを定義してください
// オブジェクトの「値」の部分には、関数を用いることもできる。「greet(プロパティ): ()=>(アロー関数)」
const animal = { name:"レオ", age:3, greet: () => {
    console.log("こんにちは");
  }
};
// animalのnameプロパティの値を出力してください
console.log(animal.name);
// →レオ

// animalのgreetプロパティの関数を実行してください
// 定数名.プロパティ名();
animal.greet ();
// →こんにちは


// 2.クラス(「class クラス名」クラス名は大文字)
// Animalクラスを定義してください
class Animal {  
}


// 3. インスタンスの生成(クラスから生成したオブジェクトをインスタンスと呼ぶ)
class Animal {
}
// Animalクラスのインスタンスを定数animalに代入してください
// インスタンス「new 大文字クラス名();」
const animal = new Animal();
// 定数animalの値を出力してください
console.log(animal);
// →Animal{}


// 4.コンストラクタ(1)
// コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能
// ※インスタンスが生成された直後に実行され、インスタンスごとに毎回実行される。
class Animal {
  // コンストラクタを追加してください
  // クラスの中括弧 { } 内に「constructor() { }」と記述する
  constructor () {
    console.log("インスタンスを生成しました");
  }
}
const animal = new Animal();
// →インスタンスを生成しました


// 5.コンストラクタ(2) プロパティと値の追加
// コンストラクタの中で「this.プロパティ名 = 値」とすることで、生成されたインスタンスにプロパティと値を追加することができる。
class Animal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name = "レオ";
    
    // ageの値に数値の「3」を代入してください
    this.age = 3;
  }
}
const animal = new Animal();
// 「名前: 〇〇」となるように出力してください
console.log("名前：" + animal.name);
// 「年齢: 〇〇」となるように出力してください
console.log("年齢：" + animal.age);
// →名前：レオ
// →年齢：3


// 6.コンストラクタ(3) 引数
// 「constructor」の後の「( )」内に引数名を記述することで、その引数をコンストラクタの処理内で使用できる
class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name,age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;
    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}
// 引数に「"モカ"」と「8」を渡してください
// インスタンスの()に引数の値を記述
const animal = new Animal("モカ",8);
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
// →名前：モカ
// →年齢：8


// 7.メソッド(1) メソッド(インスタンスの「動作」)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // クラスの中で「メソッド名() { }」とすることでメソッドは定義できる。
  // greetメソッドを追加してください
  greet() {
    console.log("こんにちは");
  }  
}
const animal = new Animal("レオ", 3);
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
// animalに対してgreetメソッドを呼び出してください
// 「インスタンス.メソッド名();」とすることでメソッドを呼び出し、処理を実行する
animal.greet();
// →名前：レオ
// →年齢：3
// →こんにちは


// 8.メソッド(2) メソッド内で値の使用
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  // infoメソッドを追加してください
  // メソッド内でインスタンスの値を使用するには、「this.プロパティ名」とする。
  info () {
    console.log("名前は" + this.name + "です");
    console.log(this.age + "歳です");
  }
}
const animal = new Animal("レオ", 3);
animal.greet();
// animalに対してinfoメソッドを呼び出してください
animal.info();
// →こんにちは
// →名前はレオです
// →3歳です


// 9.メソッド内でのメソッドの呼び出し(1~8迄の最終的な手順の完成形がこれ)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    // メソッド内で「this.メソッド名();」とすることで、同じクラスの他のメソッドを使うことができる
    // greetメソッドを呼び出してください
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const animal = new Animal("レオ", 3);
animal.info();
// →こんにちは
// →名前はレオです
// →3歳です
