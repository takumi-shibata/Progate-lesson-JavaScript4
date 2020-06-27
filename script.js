// オビジェクトと関数

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