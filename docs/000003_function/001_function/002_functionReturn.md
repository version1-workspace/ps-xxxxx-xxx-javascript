
# 関数 - 返り値

## サンプルコード

### サンプル1

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

上記関数を実行した際、それぞれどのifブロックが実行されたか。その際の変数countの数値を、Chromeのデベロッパーツールを使って確認してください。



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

(ChromeのデベロッパーツールでJavaScriptをデバッグする方法（2019年版）)[https://ics.media/entry/190517/]

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
        console.log(true < 10)
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

