
# 関数 - 引数

## サンプルコード

### サンプル1

引数x, yを取り、下記条件を満たす関数``additionTwo``を作成してください。

* x, yが数値のとき x と y の合計値を``console.log``で表示する
* x, yのどちらかが文字列のとき x と y を合わせた文字列を``console.log``で表示する

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function additionTwo(x, y) {
    console.log(x + y)
}
```

#### 解説

JavaScriptでは、関数を定義する際、いくつでも引数を設定することができます。

もし今回の関数を呼び出す際、下記のように片方に何も入れなかった場合は、``undefined``が引数yとして渡されます。
``additionTwo("1") //=> 1undefined``

</details>

## 問題

### 問題1

引数xを取り、下記の５パターンのうちtrueになる個数を返す関数``consoleHowManyTrue``があります。

1. xが10未満
3. xそのものがtrueかどうか
4. xが文字列かどうか

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

