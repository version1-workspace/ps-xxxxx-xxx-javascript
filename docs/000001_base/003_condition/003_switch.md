
# 比較

## サンプルコード

### サンプル1

引数xを取り、下記の条件を満たす関数``switch1``を書いてください。

* x が 10未満 の場合 文字列 false を返す
* x が 11 の場合 文字列 "11です" を返す
* x が 12 の場合 文字列 "12です" を返す
* x が 13 の場合 文字列 "13です" を返す
* x が 14以上 の場合 文字列 false を返す
* 上記をif文による条件分岐ではなく、switch文で書く

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function switch1(x) {
    switch(x) {
        case 11:
            return "11です"
        case 12:
            return "12です"
        case 13:
            return "13です"
        default:
            return false
    }
}
```

#### 解説

JavaScriptの中では、◯◯の時はXX、◯◯ではない時はYYを行う、といった条件分岐が作成可能です。

「switch」は条件分岐のための構文です。

```javascript
switch(式あるいは値1) {
    case 値2: 
        式あるいは値1 == 値2の時に実行する処理
        break;
    case 値3:
        式あるいは値1 == 値3の時に実行する処理
        break;
    case 値4:
        式あるいは値1 == 値4の時に実行する処理
        break;
    default:
        上記のcase以外の時
}
```

式あるいは値が、caseに書かれた値と、データ型含めてイコール（``===``）だった場合のみ、
その後〜``break``までの処理が実行されます。
いずれも一致しない場合は、``default``の処理が実行されます（不要な場合は省略可能）

上記の問題の場合は、caseごとに``return``で関数処理を止めているため、``break``の記載をしていません。

</details>


## 問題

### 問題1

引数``x``を取り、下記のboolean型の値を返す関数``switchMoreEqualThan10``を``switch``による条件分岐で作ってください。

* x が 10 以上なら true
* x が 10　未満なら false

funciton名： switchMoreEqualThan10(x)

#### 例

##### 例1

```
input: x = 3

output: false
```

##### 例2

```
input: x = 15

output: true
```

##### 例3

```
input: x = 10

output: true
```

##### 例4

```
input: x = true

output: false
```

##### 例5

```
input: x = "15"

output: true
```

### 問題2

引数``x``を取り、下記のboolean型の値を返す関数``switchIsStringOrNum``を``switch``による条件分岐で作ってください。

* x が string型なら true
* x が number型なら true
* x が 上記以外の型なら false

funciton名： switchIsStringOrNum(x)

#### 例

##### 例1

```
input: x = "hello"

output: true
```

##### 例2

```
input: x = 15

output: true
```

##### 例3

```
input: x = true

output: false
```

##### 例4

```
input: x = undefined

output: false
```

##### 例5

```
input: x = "10"

output: true
```


### 問題3

引数xを取り、下記の条件を満たす関数``isWednesday``を``switch``による条件分岐で作成してください。

1. xが``"水曜日"``の場合　``"correct"``の文字列を``console.log``で表示する
2. xが``Wednesday``の場合 ``"correct"``の文字列を``console.log``で表示する
3. xが``wednesday``の場合 ``"correct"``の文字列を``console.log``で表示する
4. xが上記以外の場合 ``"wrong"``の文字列を``console.log``で表示する

funciton名： isWednesday(x)


#### 例

##### 例1

```
input: x = "水曜日"

output: なし

表示: "correct"
```

##### 例2

```
input: x = "Wednesday"

output: なし

表示: "correct"
```

##### 例3

```
input: x = "wednesday"

output: なし

表示: "correct"
```

##### 例4

```
input: x = "15"

output: なし

表示: "wrong"
```

##### 例5


```
input: x = true

output: なし

表示: "wrong"
```

##### 例6

```
input: x = null

output: なし

表示: "wrong"
```

