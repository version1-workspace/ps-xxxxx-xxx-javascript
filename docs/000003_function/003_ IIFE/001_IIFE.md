
# 即時関数

## サンプルコード

### サンプル1

``Hello``という語を``console.log``で表示する関数``greeting``を、実際に呼び出して実行している下記のJavaScriptコードがあります。

```javascript
function greeting() {
    console.log("Hello")
}

greeting()
```

上記を、最終行``greeting()``という呼び出し無しに、即時実行されるよう、一行目〜三行目の``function greeting()``の書き方を変えてください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
(function() { console.log(`hello`)})()
```

#### 解説

JavaScriptでは、即時関数といって、関数の記述と同時に実行する方法があります。

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
（引数``greeting``は、必ず文字列が入ります）


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

* x と y の合計値を返す
* 即時関数で記載（関数の呼び出しは行わず、読み込みと同時に実行される）

（引数x, yに値が入る場合は、必ず数値が代入されます）

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
input: x = 1, y = -5

output: -4
```

##### 例3

```
input: x = 0, y = 0

output: 0
```


