
# 文字列操作

データを取り扱う上で、最低限必要とされる操作（CRUD）を把握することは重要です。

 [CRUDの概念](./000_CRUD.md)

ここでは、文字列のデータ操作における、CRUDそれぞれの処理を学んでいきます。


### Create

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

文字列の切り出して、その中身を確認する際は、下記のようにして行うことができます。

* １文字だけであれば``[]``で何文字目かを指定
* 連続した複数文字であれば、``文字列.slice(始まりの数値, 終わりの数値)``を使用

◯文字目の数え方は、JavaScriptの場合１文字目を``0``としてカウントします。

そのため、５文字目が欲しい場合は``4``を入れます。

また、``slice()``を用いる場合、たとえば1文字目から5文字目が欲しい場合、JavaScriptの数え方でいくと「01234」に対応する文字が欲しいことになります。
``slice()``の終わりの数字は、欲しい文字の次の数値を入れるため、ここでは4の次の5を入れ、``slice(0, 5)``と書くことで必要な文字列を取り出すことができます。

</details>


### UPDATE

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

### DELETE

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


### その他

文字列``"banana"``を代入した、変数``hoge``があります。
各文字が１文字ずつ入った、配列``bananaBox``を作成してください。

```javascript
let hoge = "banana"
// ここを実装
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let hoge = "banana"

let bananaBox = hoge.split('')

```

#### 解説

文字列を、特定の文字で区切り分割、配列にしたい場合は``split()``を使用します。

（）の中には、区切りたい文字を入れます。ここに入れた文字は、区切られた配列の文字列データからは除外されます。

（）の中を``('')``というようにから文字列にした場合、UTF-16の文字１文字ずつに分割されます。

</details>

## 問題

### 問題1

引数``string``をとり、``string``の文字列をを反転させた文字列を返す、関数``stringReverse``を作成してください。

引数``string``に渡される値は、必ず文字列となります。


function名：stringReverse(string)


#### 例

##### 例1

```
input: "banana"

output: "ananab"
```

##### 例2

```
input: "123456789"

output: "987654321"
```

### 問題2

下記の文字列が代入された変数``forSplit``があります。

```javascript
let forSplit = "jfkdla;djfiaopwueiljrtawl;ejtkl;aw"
```

引数``forSplit``をとり、``forSplit``を５文字ずつ分割した配列を返す関数``split5toArray``を作成してください。

なお、配列の最後は１〜５文字の範囲内であれば、文字数を問いません（残りの文字を全て入れてください）

引数``forSplit``に渡される値は、必ず文字列となります。

この文字列

funciton名：split5toArray(forSplit)


#### 例

##### 例1

```
input: "aiueoaiueoaiueoaiueo"

output: ["aiueo", "aiueo", "aiueo"]
```


##### 例2

```
input: "aiueoaiueoaiueoaiueoa"

output: ["aiueo", "aiueo", "aiueo", "a"]
```

##### 例3

```
input: "11111222223333344444555"

output: ["11111", "22222", "33333", "44444", "555"]
```