
# オブジェクト操作

データを取り扱う上で、最低限必要とされる操作（CRUD）を把握することは重要です。

 [CRUDの概念](./000_CRUD.md)

ここでは、オブジェクトのデータ操作における、CRUDそれぞれの処理を学んでいきます。


### Create

下記のデータを作成してください。

|変数名|値|
|-|-|
|obj0|空のオブジェクト|
|obj123|プロパティ（key）が「a」「b」「c」、それぞれの値（value）が「1」「2」「3」のオブジェクト|


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
//回答例１
let obj0 = {}
let obj123 = {a: 1, b: 2, c: 3}

//回答例２
let obj0 = new Object()
let obj123 = {a: 1, b: 2, c: 3}
```

#### 解説

オブジェクトの作成は、空であれば``{}``、あるいは``new Object{}``で作成できます。

また、最初から値の入った配列を作成する場合は、各プロパティと値のかたまりを``,``で区切って作成します。

JavaScriptのオブジェクトのプロパティには、空文字列を含む、文字列に変換できるものが使用できます。

</details>


### READ

上記で作成した``array1to5``の配列について、下記の内容を``console.log``で表示してください

1. 1文字目のみ
2. 1文字目から3文字目まで
3. 2文字目から最後まで

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let array1to5 = [1, 2, 3, 4, 5]
console.log(array1to5[0])
console.log(array1to5.slice(0, 3))
console.log(array1to5.slice(1, array1to5.length))
```

#### 解説

配列を切り出して、その中身を確認する際は、下記のようにして行うことができます。

* 格納要素１つだけであれば``[]``で要素位置を指定
* 連続した要素であれば、``配列.slice(始まりの数値, 終わりの数値)``を使用

要素位置の数え方は、JavaScriptの場合1つ目を``0``としてカウントします。

そのため、５つ目の要素が欲しい場合は``4``を入れます。

また、``slice()``を用いる場合、たとえば1つ目から３つ目の要素が欲しい場合、JavaScriptの数え方でいくと「012」に対応する文字が欲しいことになります。
``slice()``の終わりの数字は、欲しい文字の次の数値を入れるため、ここでは2の次の3を入れ、``slice(0, 3)``と書くことで必要な配列を取り出すことができます。

</details>


### UPDATE

#### Replace

上記で作成した``array1to5``の配列について、3つ目の要素``3``を、文字列``"3"``に変更してください

```javascript
let array1to5 = [1, 2, 3, 4, 5]
// ここを実装
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let array1to5 = [1, 2, 3, 4, 5]

array1to5[2] = "3"
```

#### 解説

対象となる要素位置を指定し、``=``で新しい要素を指定することで、配列の中身を変更することができます。

</details>


#### 追加（push, unshift）

上記で作成した``array1to5``の配列について、最後に ``6``、最初に``0``の値を追加してください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
array1to5.push(6)   // [1, 2, "3", 4, 5, 6]
array1to5.unshift(0)  // [0, 1, 2, "3", 4, 5, 6]
```

#### 解説

配列は新しい要素を加えることができます。

最後に追加する場合は``push``、最初に追加する場合は``unshift``を使用します。

</details>


#### 挿入

上記で作成した``array1to5``の配列について、配列の3つ目に文字列``"insert"``を挿入してください。

完成形は下記のようになります。

```javascript
let array1to5 = [1, 2, "insert", "3", 4, 5]

```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
array1to5.splice(2, 0, "insetad")
```

#### 解説

配列の途中に新しい要素を挿入する場合は、spliceを使用します。

第一引数：配列の先頭からn個を無視
第二引数：第一引数の後のn個を削除
第三引数：第一引数の後ろに追加する要素

</details>

### DELETE

#### 途中の要素の削除

上記で作成した``array1to5``の配列について、配列の3つ目にある文字列``"insert"``を削除してください。

完成形は下記のようになります。

```javascript
let array1to5 = [1, 2, "3", 4, 5]
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
array1to5.splice(2, 1)
```

#### 解説

配列の途中に新しい要素を削除する場合も、spliceを使用します。

第一引数：配列の先頭からn個を無視
第二引数：第一引数の後のn個を削除

</details>

#### 要素の削除（pop, shift）

上記で作成した``array1to5``の配列について、最後の ``6``、最初の``0``の値を削除してください。


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
array1to5.pop()   // [0, 1, 2, "3", 4, 5]
array1to5.shift()  // [1, 2, "3", 4, 5]
```

#### 解説

配列は、要素を削除することが可能です。

最後の要素を削除する場合は``pop``、最初の要素を削除する場合は``shift``を使用します。

</details>



#### フィルタリング

下記の配列``randomNum``の配列について、``3``の要素をすべて取り除いてください。

```javascript
let randomNum = [1, 5, 3, 6, 7, 3, 4, 2, 9, 4, 6, 4, 3]
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
randomNum = randomNum.filter(item => item != 3)
```

#### 解説

配列の``filter``を使用すると、特定の条件にあった要素のみで構成された新しい配列を作成することができます。

```javascript
配列.filter(要素 => 条件)
```

上記の「要素」とは、配列に格納された要素を指します。
filterは配列の要素を先頭から末尾まで一つ一つ確認していくため、各要素に仮で名称をつけてあげます。（今回は``item``にしていますが、自分のわかりやすいもので構いません）

また、その後の条件については、各要素が``true``か``false``の判定が出るように条件式を記入します。
ここで``true``になった要素のみが、新しく生成される配列に格納されます。

</details>

### その他

配列の代入された変数``fruits``があります。
この配列を、``", "``で区切られた一つの文字列に変換し``console.log``で表示してください。

```javascript
let fruits = ["banana", "apple", "orange"]
// ここを実装

// 完成形
// "banana and apple and orange"
```

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let fruits = ["banana", "apple", "orange"]

fruits.join(" and ")

```

#### 解説

配列を、文字列にしたい場合は``join()``を使用します。

（）の中には、配列の各要素の間に挿入したい文字を入れます。

何も入れなかった場合は、","のみで結合された文字列に変換されます。


</details>

## 問題

### 問題1

引数``arr``をとり、``arr``の配列を反転させた配列を返す、関数``arrayReverse``を作成してください。

引数``arr``に渡される値は、必ず１つ以上の要素を持った配列となります。


function名：arrayReverse(arr)


#### 例

##### 例1

```
input: arr = ["one", "two", "three", "four"]

output: ["four", "three", "two", "one"]
```

##### 例2

```
input: arr = [1, "two", 3, "four"]

output: ["four", 3, "two", 1]
```

##### 例3

```
input: arr = [1]

output: [1]
```

### 問題2

引数``arr``をとり、``arr``の中身を2つずつシフトさせる（最初の２つの要素が最後に来る）関数`` shift2Array``を作成してください。

引数``arr``に渡される配列は、必ず2つ以上の要素を持ちます。

funciton名：shift2Array(arr)


#### 例

##### 例1

```
input: arr = ["a", "b", "c", "d", "e", "f", "g"]

output: ["c", "d", "e", "f", "g", "a", "b"]
```

##### 例2

```
input: arr = ["a", "", "", "d", "e", "f", "g"]

output: ["", "d", "e", "f", "g", "a", ""]
```

##### 例3

```
input: arr = ["a", "b"]

output: ["a", "b"]
```
