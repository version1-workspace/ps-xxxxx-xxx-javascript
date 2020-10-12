
# クロージャ

## サンプルコード

### サンプル1

``Egg``という変数に代入された、まだ完成していない、クロージャを使った書きかけの関数があります。

また、この関数は下記条件を満たすと完成になります。

1. Egg.add()でeggの数が1足される
2. Egg.check()で現在のeggの数が``console.log``で確認される

```javascript
let Egg = function() {
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

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let Egg = function() {
    let egg = 0;
    function addEgg() {
        egg++
    }
    return {
        check: function() {
            console.log(egg)
        },
        add: function() {
            addEgg();
        }
    }
};
```

#### 解説

クロージャは、``return``でオブジェクトを返すことによって、関数を返すことができます。

また、これを使うことで、関数内で宣言したメソッドや変数へのアクセスを制限し、それらにアクセスできるパブリック関数を別途定義することができます。

#####　関数の呼び出しと評価

課題中の最終下段``greeting()``は、関数を**実行する**という表記になります。

しかし、ここでもし``greeting``だけを記載した場合、``greeting``関数の中身は評価されず、ただ関数のみが呼び出しされる（実行はされない）こととなります。

```javascript
function greeting() {
    console.log("Hello")
}

greeting()
```

</details>

## 問題


### 問題1

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
