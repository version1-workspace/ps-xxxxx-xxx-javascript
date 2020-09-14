
# 比較

## サンプルコード

### サンプル1

下記の変数と値のリストを宣言してください

* 変数a、値: 3
* 変数b、値: 3
* 変数c、値: aとbが同値かを比較し、true

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let a = 10;
let b = 2;
let c = 6 * 3;
let d = a * 5;   // -> 50
let e = a * d;   // -> 500
```

#### 解説

掛け算を行う時は、「*」を使用します。
数値の値そのものの代わりに、変数名を使用することもできます。

</details>


### サンプル2

下記の変数と値のリストを宣言してください

* 変数a、値: 10
* 変数b、値: 2
* 変数c、値: 2の3乗
* 変数d、値: 変数aの3乗

<details><summary><b>回答と解説</b></summary>

#### 回答


```javascript
let a = 10;
let b = 2;
let c = 2 ** 3;   // -> 8
let d = a ** 3;   // -> 100
```

#### 解説

2の3乗など、累乗を行う場合は「**」を使用します。

</details>


## 問題


### 問題1

引数``x``を取り、xから5を引いて、10を掛けた数を返す関数``muletiple10``を作ってください。

funciton名：muletiple10(x)

#### 例

##### 例1

```
input: x = 10

output: 50
```

##### 例2

```
input: x = 5

output: 0
```

##### 例3

```
input: x = 0

output: -50
```

##### 例4

```
input: x = undefined

output: NaN
```

##### 例5

```
input: x = "10"

output: 50
```


### 問題2

関数``divide5orNot``は、引数xが5の倍数かどうかで返す値が変わる関数です。

下記の２つの条件を満たす関数``divide5orNot``を作成してください。

* xが5の倍数の場合は、xを2乗した値を返す
* xが5の倍数でない場合、xを5で割った時の余りの値を返す


funciton名： divide5orNot(x)


#### 例

##### 例1

```
input: x = 10

output: 100
```

##### 例2

```
input: x = 8

output: 3
```

##### 例3

```
input: x = 0

output: 0
```

##### 例4

```
input: x = undefined

output: NaN
```

##### 例5

```
input: "hello"

output: NaN
```