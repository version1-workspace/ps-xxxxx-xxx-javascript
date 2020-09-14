
# 比較

## サンプルコード

### サンプル1

引数aを取り、下記の条件を満たす関数``if1``を書いてください。

* a が 10未満 の場合 true を返す
* a が 上記以外の場合 false を返す


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function if1(a) {
    if (a < 10) {
        return true
    }
    return false
}
```

#### 解説

JavaScriptの中では、◯◯の時はXX、◯◯ではない時はYYを行う、といった条件分岐が作成可能です。

代表的な条件文は「if」を使用したものです。

```javascript
if (条件文) {
    条件が「正（true）」の時の処理
}
```

条件文が「true」の場合のみ、``{}``で作られたブロックの中の処理が実行されます。
()内の条件がfalseだった場合、if条件文のブロックの内容はスキップされます。


</details>


### サンプル2

引数aを取り、下記の条件を満たす関数``if2``を書いてください。

* a が 10未満 の場合 "true" と ``console.log``を使って表示する
* a が 上記以外の場合 "false" と ``console.log``を使って表示する


<details><summary><b>回答と解説</b></summary>

#### 回答


```javascript
function if2(a) {
    if (a < 10) {
        console.log("true")
    } else {
        console.log("false")
    }
}
```

#### 解説

a < 10の場合、"true"が表示されますが、もし``else``を使わなかった場合、そこで関数処理が終了しないため、その後"false"も表示されてしまいます。
elseは「if条件文がfalseだった場合」に実行される処理を書きます。
「a < 10」がtrueの場合は、``console.log("true")``を、falseの場合は``console.log("false")``を実行し、どちらでもない場合は両方の処理がスキップされます。

</details>

### サンプル3

引数aを取り、下記の条件を満たす関数``if3``を書いてください。

* a が 10未満 の場合 "aは10未満です" と ``console.log``を使って表示する
* a が 5未満 の場合 "aは5未満です" と ``console.log``を使って表示する
* a が 上記以外の場合 "aは10以上です" と ``console.log``を使って表示する


<details><summary><b>回答と解説</b></summary>

#### 回答


```javascript
function if3(a) {
    if (a < 5) {
        return "aは5未満です"
    } else if (a < 10 ){
        return "aは10未満です"
    } else {
        return "aは10以上です。"
    }
}
```

#### 解説

「if　〜　else文」に、さらに条件を加えることで、段階的な条件分岐を作成することができます。

この時、上から下に向かって、どう条件を設定していくかに注意してください。

たとえば、上記の条件文の順番を下記のように入れ替えると、条件分岐がうまく機能しません。

```javascript
function check(a) {
    if (a < 10 ){
        return "aは10未満です"
    } else if (a < 5) {
        return "aは5未満です"
    } else {
        return "aは10以上です。"
    }
}
```

何故なら、JavaScriptは上から下に順番にコードを読み込んでいき、条件がtrueになった時点で **残りの条件を確認せずに処理を実行するからです**

つまり、「a = 4」の場合も、「a = 9」の場合も、最初の条件である「a < 10」に当てはまってしまい、その処理が実行されてしまいます。

結果、「a = 4」の場合は、最初の「a < 10」の条件がtrueになり、「aは10未満です」という結果を返して関数自体の処理が終了してしまいます。

複数の条件分岐を設定する場合は、より小さい範囲の条件から、だんだんと「trueの対象になる枠を広げていく」ことを意識してください。

</details>



## 問題


### 問題1

引数``x``を取り、下記のboolean型の値を返す関数``moreEqualThan10``を作ってください。

* x が 10 以上なら true
* x が 10　未満なら false

funciton名：moreEqualThan10(x)

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
input: x = "10"

output: true
```

### 問題2

引数``x``を取り、下記のboolean型の値を返す関数``isString``を作ってください。

* x が string型なら true
* x が string型以外なら false

funciton名： isString(x)

#### 例

##### 例1

```
input: x = "hello"

output: true
```

##### 例2

```
input: x = 15

output: false
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

引数``x``を取り、下記のboolean型の値を返す関数``moreEqualThan10``を作ってください。

* x が 10 より大きい（10は含まない）なら true
* x が 10　以下なら false
* x が 数値以外の型なら false

funciton名：strictMoreEqualThan10(x)

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

output: false
```

##### 例4

```
input: x = true

output: false
```

##### 例5

```
input: x = "11"

output: false
```


### 問題4

引数x（Int）を取り、下記の条件に当て嵌まった場合に文字列を返す関数``check10``を完成させてください。

* xが10未満の場合: "xは10未満です"
* xが11以上の場合: "xは11以上です"
* 10ぴったりの場合: "xは10です"
* それ以外の値の場合: "xは数字ではありません"

funciton名： check10() 

#### 例

##### 例1

```
input: x = 3

output: "xは10未満です"
```

##### 例2

```
input: x = 15

output: "xは11以上です"
```

##### 例3

```
input: x = 10

output: "xは10です"
```

##### 例4

```
input: x = true

output: "xは数字ではありません"
```

##### 例5

```
input: x = "11"

output: "xは数字ではありません"
```


### 問題5

引数xを取り、下記の５パターンのうちtrueになる個数を返す関数``howManyTrue``を作成してください。

1. xが10未満
2. xの３倍が15以下
3. xそのものがtrueかどうか
4. xが文字列かどうか
5. xが5かどうか

funciton名： howManyTrue(x)


#### 例

##### 例1

```
input: x = 3

output: 3
```

##### 例2

```
input: x = 15

output: 1
```

##### 例3

```
input: x = 5

output: 3
```

##### 例4

```
input: x = undefined

output: 0
```

##### 例5

```
input: x = "11"

output: 2
```

##### 例6

```
input: x = "hello"

output: 2
```

