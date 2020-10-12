
# 文字列

## サンプルコード

### Create

#### サンプル1

変数``hoge``に、文字列``Hello world!!``を代入・作成してください

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let hoge = "Hello world!!!"
```

#### 解説

文字列は、ダブルクオーテーション``"``あるいは``'``で文字を囲むことで作成できます。

</details>


### READ

#### サンプル1

上記で作成した``hoge``の文字列について、下記の内容を``console.log``で表示してください

1. 5文字目のみ
2. 1文字目から5文字目まで
3. 7文字目から最後まで

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let hoge = "Hello world!!!"
console.log(hoge[4])
console.log(hoge.slice(0, 5))
console.log(hoge.slice(6, hoge.length - 1))
```

#### 解説

文字列の切り出しは、下記のようにして行うことができます。

* １文字だけであれば``[]``で何文字目かを指定
* 連続した複数文字であれば、``文字列.slice(始まりの数値, 終わりの数値)``を使用

◯文字目の数え方は、JavaScriptの場合１文字目を``0``としてカウントします。

そのため、５文字目が欲しい場合は``4``を入れます。

また、``slice()``を用いる場合、たとえば1文字目から5文字目が欲しい場合、JavaScriptの数え方でいくと「01234」に対応する文字が欲しいことになります。
``slice()``の終わりの数字は、欲しい文字の次の数値を入れるため、ここでは4の次の5を入れ、``slice(0, 5)``と書くことで必要な文字列を取り出すことができます。

</details>


### DELETE

#### サンプル1

文字列``"banana"``を代入した、変数``hoge``があります。
この文字列のうち、``"a"``の文字を全て取り除いてください

```javascript
let hoge = "banana"
// ここを実装
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let hoge = "banana"

// 回答例１
let temp = ""
for (let i = 0; i < hoge.length; i++){
    if (fruit[i] != "a" && fruit[i]){
        temp += fruit[i]
    } else {
      
    }
}
console.log(temp)

// 回答例２
let replace = /a/g;
console.log(fruit.replace(replace, ''))
```

#### 解説

ある特定の文字列のうち、特定の文字を取り除いた文字列を作成したい場合、下記の方法で実行が可能です。

* forループを使用し、必要な文字だけ別の変数に代入
* ``文字列.replace``&正規表現を用いて取り換える

回答例１の場合、条件分岐に``&& fruit[i]``を入れることで、false判定となる``undefined``を除く必要があります。（入れない場合は、``undefined``の文字が追加されていきます。）

また、回答例2の場合、もし``fruit.replace('a', '')``と書いた場合は、最初に発見した``'a'``を``''``に取り換えることで処理が終了してしまいます。

正規表現を使用することで、文字列の中にある``'a'``を全て対象に取り換えることができるようになります。

</details>



### UPDATE

#### サンプル1

文字列``"apple,banana,pineapple"``を代入した、変数``word``があります。
この文字列の``","``を、すべて改行に取り換えるよう変更してください。

```javascript
let word = "apple,banana,pineapple"

// ここを実装
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let word = "apple,banana,pineapple"

word.replace(/,/g, '\n')
```

#### 解説

文字の切り出しでは、取り換える文字を``''``とすることで、文字そのものを無くしていきました。
しかし、上記のように取り換える文字を指定することで、文字列の内容をアップデートすることも可能です。

</details>

## 問題


### 問題1

引数``x``を取り、xを3で割って10を足した数を返す関数``divide3``を作ってください。

funciton名：divide3(x)

#### 例

##### 例1

```
input: x = 3

output: 11
```

##### 例2

```
input: x = 10

output: 13.3333333....
```

##### 例3

```
input: x = null

output: 10
```

##### 例4

```
input: x = undefined

output: NaN
```

##### 例5

```
input: x = "10"

output: 13.3333333....
```


### 問題2

関数``restOfx``は、引数xを7で割った際の答えと余りを

```
◯余り△
```

というような文字列で返す関数です。

関数``restOfx``を作成してください。

funciton名：restOfx(x)


#### 例

##### 例1

```
input: x = 21

output: 3余り0
```

##### 例2

```
input: x = 3

output: 0.42857142857142855余り3
```

##### 例3

```
input: x = 0

output: 0余り0
```

##### 例4

```
input: x = undefined

output: NaN余りNaN
```

##### 例5

```
input: null

output: 0余り0
```