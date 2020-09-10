
# 変数

## サンプルコード

### サンプル1

JavaScriptで、下記の買い物リストを変数で宣言してください（変数名は自由）。

* りんご: 1個
* みかん: 1個
* バナナ: 1個

また、その後変更があり、下記のようになりました。

* りんご: 0個
* みかん: 2個
* バナナ: 1個

元の変数を使って、変更分の数値を再代入してください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 1.変数の宣言
let apple = 1;
let orange = 1;
let banana = 1;

// 2.変数の変更
apple = 0;
orange = 2;
```

#### 解説

JavaScriptで変数を宣言する場合、それを表すためのキーワードが3種類あります。

|種類|例|
|-|-|
|var|変数を宣言し、異なる値として宣言し直すことも可能|
|let|ローカル変数を宣言し、異なる値として宣言し直すことも可能|
|const|読み取り専用の定数を宣言する|

今回は一度宣言した内容を修正、再代入するため、varあるいはletを使い、数値の際代入を行います。

基本的には、「変更をあとから加えたい変数は``let``」で宣言しましょう。

</details>





### サンプル2

1. 変数a, bを宣言してください。
2. aに数字の5を、bにaを代入してください。
3. aに数字の8を代入した時、bに入っている値（数字）が何になるか答えてください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 1.変数の宣言
let a;
let b;

// 2.変数の代入
a = 5
b = a

// 3.変数の再代入
a = 8

console.log(b);  // -> b = 8

```

#### 解説

#### 1.変数の宣言
サンプル2では、「a」「b」という変数を宣言しました。
何もデータを入れていない変数を宣言すると、そのデータ型は「undefined」になります。

#### 2.変数の代入

その後「a」に「5」という数字のデータを再代入しました。
また、「b」には「a」を代入しました。

このとき、「b」に入っているデータは、「a」。つまり「a」の値を参照しています。
「a」は現在「5」なので、「b = 5」になります。

#### 3.変数の再代入

最後に「a」に「8」を再代入しました。
さて、この時「b」の値は何になるでしょうか？
この時点では、「b = a」で、あくまで「b」は「a」の値を参照しています。つまり、aの値が変わった時点で、bも「b = 8」に変わりました。

</details>


## 問題

### 問題1

``ifInterestedOrNot(answer)``は、true, false, nullを引数``answer``として取る関数です。

関数内で、``let``を使って、変数``isInterested``を宣言してください。
また、その後に変数のデータを``answer``に変更しreturnで値を返してください。

funciton名: **ifInterestedOrNot(answer)**

#### 例

##### 例1

input: answer = true

output: true

##### 例2

input: answer = false

outoput: false

##### 例3

input: answer = null

output: null

### 問題2

引数``order``を取る``serveDrink()``は、入ったオーダーのドリンクか、元々用意してある水をお客様に出す関数です。

* ``order``が``null``の場合・・・``water``
* ``order``が``null``以外の場合・・・``water``を``order``に取り替える

関数内で``let``での変数宣言を使って、上記条件を満たす``serveDrink(order)``関数を完成させてください。

funciton名: **serveDrink(order)**

#### 例

##### 例1

input: order = "beer"

output: "beer"

##### 例2

input: order = "orange juice"

output: "orange juice"

##### 例3

input: order = null

output: "water"
