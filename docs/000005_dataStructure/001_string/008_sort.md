
# ソート

ソートとは、配列などの一列に並んだリストを、ある一定の基準に沿って並び替えることを言います。

バブルソート、挿入ソート、マージソート、クイックソートなど、ソートのアルゴリズムには多くの種類があります。

今回は、そうしたアルゴリズムではなく、実務などでも一般的に使用される、JavaScriptの身近なソートを学びます。

## サンプル

### 配列のソート

数値、文字列の入った２つの配列、``numList``と``lettersList``が定義されています。

```javascript
let numList = [1, 5, 2, 7, 4, 8, 10, 3]
let lettersList = ["a", "u", "t", "j", "i", "o"]
```

それぞれのリストを、下記の2種類の順に並び替えてください。

1. 昇順（例：[1, 2, 3, 4, 5]、["a", "b", "c", "d", "e"]など）
2. 降順（例：[5, 4, 3, 2, 1]、["e", "d", "c", "b", "a"]など）

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 1. 昇順
lettersList.sort()
numList.sort(function(a, b){
    return a - b;
})

// 2. 降順
lettersList.sort().reverse()
numList.sort(function(a, b){
    return b - a;
})
```

#### 解説

配列のソートを行う場合は、``sort()``を使用します。
この場合、文字列はaからzへの昇順にソートされます。
また、そこに``reverse()``を加えることで、一度ソートした配列を逆順に並び替えることができます。

また、数値の配列の場合、含まれる数値がすべて一桁の場合も``sort()``を使用することで昇順ソートできます。
しかし、２桁以上の数字が入る場合は、回答例のように比較関数を用います。

配列の中で、並んだ要素を二つ（aとbとする）を取得し、返り値に１つ目の要素から２つ目の要素を引いた値が入ります。
a > b ならプラス値が返り、第一引数（a）を第二引数（b）より後ろに、 a < b ならマイナス値が返り、第一引数（a）を第二引数（b）より前にソートします。

数値の配列を降順で並び替えたい場合は、比較関数のプラス値、マイナス値を逆にすればソートできます。

</details>

### オブジェクトのソート

下記の、商品と値段の情報が含まれる``productsList``のオブジェクトがあります。

```javascript
let productsList = {
    pencil: 'Pencil', 
    notebook: 'Notebook',
    pen: 'Pen', 
    staple: 'Staple'
}
```

``productsList``を、下記の条件に合わせ並べ替え、``console.log``で表示してください。

1. プロパティ名の昇順

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let keys = Object.keys(productsList);
keys.sort()
for (key of keys) {
    console.log(productsList[key])
}
```

#### 解説

JavaScriptのオブジェクトには、順番という概念がありません。

そのため、プロパティ名や値などを用いてソートを行いたい場合は、何かしらの形で配列を作成し、それをソートすることで順番を付与します。

今回はプロパティ名でのソートが目的だったため、プロパティの一覧を配列として取得後、それをソートし、オブジェクトから呼び出すことで擬似的にオブジェクトをソートしました。

</details>


## 問題

### 問題1

下記の数値の配列``numbersList``があります。

```javascript
let numbersList = [19, 3, 6, 20, 64, 22, 36, 4, 104, 2]
```

正の整数の数値が格納された配列を引数``list``として取り、``list``に含まれる要素のうち、値の小さい方の数値を昇順、大きい数字を降順に、配列を並び替えて返す関数``upAndDown``を作成してください。

* ``list``に格納される要素の数は必ず偶数になります


function名：  upAndDown(list)

#### 例

##### 例1

```
input: [1, 2, 3, 4, 5, 6]

output: [1, 2, 3, 6, 5, 4]
```

##### 例2

```
input: [19, 3, 6, 20, 64, 22, 36, 4, 104, 2]

output: [2, 3, 4, 6, 19, 104, 64, 36, 22, 20]
```

##### 例3

```
input: []

output: []
```

##### 例3

```
input: [3, 4]

output: [3, 4]
```

### 問題2

```javascript
let list = [
    {name: "apple", price: 100, sold: "20191113"},
    {name: "orange", price: 80, sold: "20200126"},
    {name: "banana", price: 120, sold: "20190804"}
]
```

上記は、製品の名前と価格、販売日の情報の入ったオブジェクトが格納されたリストです。

``name``、``price``、``sold``のプロパティ名のいずれかが入る引数``sortKey``を取り、対象のプロパティ名の値の昇順にソートされた配列を返す関数``sortObjectList``を作成してください。

function名：  sortObjectList(sortKey)

#### 例

##### 例1

```
input: sortKey = "name"
output: [
    {name: "apple", price: 100, sold: "20191113"},
    {name: "banana", price: 120, sold: "20190804"},
    {name: "orange", price: 80, sold: "20200126"}
]
```

##### 例2

```
input: sortKey = "price"
output: [
    {name: "orange", price: 80, sold: "20200126"},
    {name: "apple", price: 100, sold: "20191113"},
    {name: "banana", price: 120, sold: "20190804"}
]
```

##### 例3

```
input: sortKey = "sold"
output: [
    {name: "banana", price: 120, sold: "20190804"},
    {name: "apple", price: 100, sold: "20191113"},
    {name: "orange", price: 80, sold: "20200126"}
]
```
