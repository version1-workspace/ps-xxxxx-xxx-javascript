
# クロージャ

## サンプルコード

### サンプル1

``countEgg``という変数に代入された、まだ完成していない、書きかけの即時関数があります。

```javascript
let countEgg = (function() {
    let egg = 0;
    function addEgg() {
        egg++
    }
    return {}
})();
```

また、変数``countEgg``の即時関数は下記条件を満たすと完成になります。

1. countEgg.add()でeggの数が1足される
2. countEgg.check()で現在のeggの数が``console.log``で確認される

クロージャを使って、上記のコードを完成させてください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let countEgg = (function() {
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
})();
```

#### 解説

クロージャは、関数内で宣言したメソッドや変数へのアクセスを制限し、それらにアクセスできるパブリック関数を別途定義することができます。

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

引数``greeting``を``console.log``で表示し、文字列``"Hello"``を実際に引数として取る即時関数を書いてください。
また、それを変数名``hello``に代入し、呼び出し実行して下さい。


#### 例

##### 例1

```
input: greeting = "Hello"

output: なし

表示：
"Hello"
```


##### 例2

```
input: food = "Okonomiyaki", snack = "", drink = "Beer"

output: なし

表示：
My favorite food is Okonomiyaki.
My favorite snack is nothing.
My favorite drink is Coke.
```


### 問題2

引数x, yを取り、下記条件を満たす関数を**即時関数**で作成してください。

* x, yが数値のとき x と y の合計値を返す
* 即時関数で記載（関数の呼び出しは行わず、読み込みと同時に実行される）

また、作成した関数については、下記の要件を満たすようにしてください。

* 変数``addTwoNumResult``に代入し、``console.log``で結果を呼び出す

funciton： addTwoNumResultに代入

#### 例

##### 例1

```
input: x = 5, y = 10

output: 15
```


##### 例2

```
input: x = 1, y = なし （1）

output: NaN
```

##### 例3

```
input: なし　()

output: NaN
```

##### 例4

```
input: x = 1, y = なし　(1,)

output: NaN
```
