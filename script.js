// 1.値に関数を用いたオブジェクト
// 定数animalを定義してください
// オブジェクトの「値」の部分には、関数を用いることもできる。「greet(プロパティ): ()=>(アロー関数)」
const animal = { 
  name:"レオ", 
  age:3, 
  greet: () => {
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
// インスタンスの生成「new 大文字クラス名();」newでインスタンスを生成し、Animal()を定数名animalに代入する
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


// 10.クラスの継承 「extends」
// すでにあるクラスをもとに、新しくクラスを作成する方法のこと
// 例えば「Animalクラス」から「Dogクラス」を継承すると「Animalクラス」の全ての機能を引き継いで「Dogクラス」を作成することができる
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// Animalクラスを継承してDogクラスを定義してください
// 「class 大文字子クラス extends 大文字親クラス」
class Dog extends Animal {  
}
const animal = new Animal("レオ", 3);
animal.info();


// 11.継承したクラスの使用
// 継承したクラスは継承先のクラスを全て引き継いでいるので、メソッドなども使用する事が可能
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
}
// 定数dogにDogクラスのインスタンスを代入してください
const dog = new Dog("レオ",4);
// dogに対してinfoメソッドを呼び出してください
dog.info();
// →こんにちは
// →名前はレオです
// →4歳です


// 12.メソッドの追加
// ※継承先で定義したメソッドは、継承元のクラスでは出力できない
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // getHumanAgeメソッドを追加してください
  // メソッドでは戻り値を用いることができる
  getHumanAge() {
    return this.age * 7;
  }
}
const dog = new Dog("レオ", 4);
dog.info();

// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
const humanAge = dog.getHumanAge(); //「();」つける事に注意！
// 「人間年齢で〇〇歳です」と出力してください
console.log("人間年齢で" + humanAge + "歳です");
// →こんにちは
// →名前はレオです
// →4歳です
// →人間年齢で28歳です


// 13.オーバーライド(1)
// 親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用される
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // infoメソッドを追加してください
  // オーバーライド(子クラスのメソッドが優先して使用される)
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    // 元はconst humanAge = dog.getHumanAge(); →他のメソッドのため「dog」が「this」に書きかわる
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }  

  getHumanAge() {
    return this.age * 7;
  }
}
const dog = new Dog("レオ", 4);
dog.info();
// →こんにちは
// →名前はレオです
// →4歳です
// →人間年齢で28歳です


// 14.コンストラクタのオーバーライド「super()」 ※全ての項目のまとめ
// メソッドと同じように、コンストラクタもオーバーライドすることができ、子クラスにプロパティを追加したい場合などに用いる
// ※親クラスのコンストラクタが引数を受け取る場合には、「super」の後ろの丸括弧「( )」に親クラスの引数を渡す必要がある！
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // コンストラクタのオーバーライド(新しいプロパティの追加)
  // constructorを追加してください
  constructor(name, age, breed) {
  // superに親クラスの引数を渡す!
    super(name, age);
    // 犬種(新しいプロパティの定義)
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log("犬種は" + this.breed + "です" );
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog = new Dog("レオ", 4 ,"チワワ");
dog.info();
// →こんにちは
// →名前はレオです
// →犬種はチワワです
// →4歳です
// →人間年齢で28歳です