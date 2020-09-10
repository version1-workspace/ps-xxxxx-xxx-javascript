
## 解説

### 変数の1種類：定数

JavaScriptで変数を宣言する場合、それを表すためのキーワードが3種類あると紹介しました。

|種類|例|
|-|-|
|var|変数を宣言し、異なる値として宣言し直すことも可能|
|let|ローカル変数を宣言し、異なる値として宣言し直すことも可能|
|const|読み取り専用の定数を宣言する|

今回はこの中で定数を宣言できる``const``について紹介します。

``const``は、 **一度宣言したら、あとから中身のデータを再代入できない** 宣言方法になります。

一度宣言した後は読み取り専用の変数として参照することができます。

#### 変数名

```javascript
const MY_PET = "Rabbit";
```




## サンプルコード


```javascript
const MY_PET = "Rabbit";
MY_PET = "Dog";  // エラー
```

``const``は読み取り専用、再代入ができない宣言方法です。
そのため、一度宣言した後に他のデータを再代入しようとした場合、エラーが発生します。

定数を上手に使っていくことで、あとから誤ってデータを変更してしまう。といったアクシデントをなくすことができます。

## 問題

1.``const``を使って、変数「NUM_PEOPLE」に「3」というデータを代入してください。また、それをreturnで返してください。

funciton名：declarationC1()

input:なし

output: Int

2.下記の``declarationC2()``では、ホームパーティに来る人数を``NUM_PEOPLE``として宣言しています。食べ物として、``pizza``を1人あたり2枚、``beer``を1人あたり3缶用意する予定です。

下記のfunctionの中身を変更し、``NUM_PEOPLE``、``pizza``の変数のみを使って、必要なピザの枚数を``sumOfPizza``に、``NUM_PEOPLE``、``beer``の変数のみを使って、ビールの必要本数を``sumOfBeer``に代入してください。

funciton名：declarationV2(){
    const NUM_PEOPLE = 8;
    let pizza = 2;
    let beer = 3;

    let sumOfPizza = ;
    let sumOfBeer = ;

    return sumOfPizza + sumOfBeer;
}

input:なし

output: Int

