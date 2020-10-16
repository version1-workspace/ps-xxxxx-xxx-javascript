
# クロージャ

## サンプルコード

### サンプル1

クロージャを使って、下記のコードを完成させてください。

```javascript
let Greeting = function() {
        // ここを実装してください
    return {
        // ここを実装してください
    }
};
const greeting = Greeting()
greeting.morning("Mike") // => "Good morning, Mike!" が表示される
greeting.daytime("Mike") // => "Hello, Mike!" が表示される
greeting.evening("Mike") // => "Good evening, Mike!" が表示される
greeting.night("Mike") // => "Good night, Mike!" が表示される
```


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let Greeting = function() {
    // ここを実装してください
    function morning(name){
        console.log("Good morning, " + name)
    }
    function daytime(name){
        console.log("Hello, " + name)
    }
    function evening(name){
        console.log("Good evening, " + name)
    }
    function goodNight(name){
       console.log("Good night, " + name)
    }
    return {
        morning,
        daytime,
        evening,
        night: goodNight
    }
};
```

#### 解説

クロージャは、``return``でオブジェクトを返すことによって、関数を返すことができます。

また、これを使うことで、関数内で宣言したメソッドや変数へのアクセスを制限し、それらにアクセスできるパブリック関数を別途定義することができます。

さらに、``Greeting``内に定義した各関数を、``return``でどのように呼び出しているか確認しましょう。

最初の３つ、``Greeting``内で定義した関数``morning``、``daytime``、``evening``は、同じ名称を``return``に記載しています。
一方、``goodNight``については、``return``では別の名称``night``で呼び出すようにしています。

クロージャ内で定義したものを``return``で返す際、``key``と``value``の名称が同じになる場合は、``value``の記載を省略することが可能です。（省略しなかった場合は、下記のような記載になります）

```javascript
return {
    morning: morning,
    daytime: daytime,
    evening: evening,
    night: goodNight
}
```
</details>

## 問題


### 問題1

``Egg``という変数に代入された、まだ完成していない、クロージャを使った書きかけの関数があります。

また、この関数は下記条件を満たすと完成になります。

1. Egg.add()でeggの数が1足される
2. Egg.check()で現在のeggの数が``console.log``で確認される

```javascript
let Egg = function() {
    let egg = 0;
        // ここを実装してください
    return {
        // ここを実装してください
    }
};
const egg = Egg()
egg.check() // => 0 が表示される
egg.add()
egg.check() // => 1 が表示される
egg.add()
egg.add()
egg.add()
egg.check() // => 1 + 3 = 4 が表示される
```

クロージャを使って、上記のコードを完成させてください。


### 問題2

クロージャを使って、下記のコードを完成させてください。

```javascript
let CalculateTwoNum = function() {
        // ここを実装してください
    return {
        // ここを実装してください
    }
};
const calculateTwoNum = CalculateTwoNum()
calculateTwoNum.addition(10, 5) // => 15 が表示される
calculateTwoNum.subtraction(10, 5) // => 5 が表示される
calculateTwoNum.divid(10, 5) // => 2 が表示される
calculateTwoNum.multiple(10, 5) // => 50 が表示される
```
