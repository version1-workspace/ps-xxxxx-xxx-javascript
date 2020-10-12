
# console.log

## サンプルコード

### サンプル1

下記のコードがあります。

```javascript
const A = 1;
const B = 2;

function C(x) {
    //　ここに書く
}
```

引数xを取る関数Cの中で、下記の数値を``console.log``で表示・確認できるようにしてください。

* 定数A と 定数B　の合計値（例: "The sum of A and B is 3"）
* 定数A と 引数x　の合計値（例: "The sum of A and x is 合計値"）
* 引数x + 5　の合計値（例: "The sum of x and 5 is 合計値"）

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
const A = 1;
const B = 2;

function C(x) {
    console.log("The sum of A and B is " + (A + B))
    console.log("The sum of A and x is " + (A + x))
    console.log("The sum of x and 5 is " + (x + 5))
}
```

#### 解説

JavaScriptでは、``console.log``を使って、変数や定数などの値や、任意のメッセージをコンソール画面に表示できます。

</details>

## 問題

### 問題1

引数xを取り、下記の3パターンのうちtrueになる個数を返す関数``consoleHowManyTrue``があります。

1. xが10未満
2. xそのものがtrueかどうか
3. xが文字列かどうか

```javascript
function consoleHowManyTrue(x) {
    let count = 0
    if (x < 10){
        count += 1
    }
    if(x){
        count += 1
    }
    if(typeof x == "string") {
        count += 1
    }
    return count
}
```

これから上記関数がうまく動くかテストするために、xに対しどの条件処理が実行されたか確認したいと考えています。

``console.log``を使ってそれぞれの処理が実行されたかどうか確認できるようにしてください。

funciton名： consoleHowManyTrue()

#### 例

##### 例1

```
input: 5

output: なし

表示：
x < 10
x == true
```


##### 例2

```
input: "hello"

output: なし

表示：
x == true
typeof x == string
```

##### 例3

```
input: null

output: なし

表示：
x < 10
```

##### 例4

```
input: undefined

output: なし

表示：

```


### 問題2

関数``checkComparison``を作成してください。

その中に、下記の変数と値のリストについて、値のboolean判定の結果を、変数に代入し宣言してください。

* 引数xを取る
* 変数w、値: 5
* 変数y、値: w < x < 10　かどうか
* 変数z、値: x < 0 あるいは 10 < x かどうか

また、y, zに入るboolean型が何になるか、``console.log``を使って表示してください。

funciton名： checkComparison(x)

#### 例

##### 例1

```
input: 5

output: なし

表示：
false
false
```


##### 例2

```
input: 3

output: なし

表示：
false
false
```

##### 例3

```
input: 9

output: なし

表示：
true
false
```

##### 例4

```
input: 20

output: なし

表示：
false
true
```


##### 例5

```
input: null

output: なし

表示：
false
false
```


##### 例6

```
input: undefined

output: なし

表示：
false
false
```

