
# 単一方向リスト

単一方向リストはデータ構造の一つで、順序を持ち連結されたデータリストのことを指します。

任意の位置でのデータの追加・削除を直接、O(1)で行える点が特徴です。
逆に、データの検索については、データのはじめから順に検索する必要があり、O(n)時間が必要になります。

## サンプル

```javascript
function Node(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
```

上は、単一方向リストを構成する``Node``の定義です。

また現在、独立した``Node``である``Node1``、``Node2``、``Node3``が存在しています。

```javascript
let Node1 = Node(3)
let Node2 = Node(5)
let Node3 = node(4)
```

上記の``Node``を使用し、``Node1 -> Node2 -> Node3``の順になる単一方向リストを作成してください


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
Node1.next = Node2
Node2.next = Node3
```

#### 解説

単一方向リストは、自身の要素と、次の要素へのポインタを持つ``Node``で構成された連結リストを指します。

今回は``Node1``、``Node2``、``Node3``と、それぞれ自身の値のみを持った（次の要素へのポインタは``undefined``のまま）要素が独立していました。

そのため、連結リストを作成するには、各``Node``の次の要素へのポインタを追加することで、連結リストを完成させることができます。

</details>


## 問題

### 問題1

```javascript
function Node(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
```

上は、単一方向リストを構成する``Node``の定義です。
引数 ``head``を取り、与えられた単一方向リストを逆順位にソートする関数 ``reverseLinkedList``を作成してください。

function名：  reverseLinkedList(head)

#### 例

##### 例1

```
input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL

output: 5 -> 4 -> 3-> 2 -> 1 -> NULL
```

### 問題2

```javascript
function Node(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
```

上は、単一方向リストを構成する``Node``の定義です。
引数 ``head``を取り、与えられた単一方向リストの中間地点にあるNodeを返す関数 ``middleOfLinkedList``を作成してください。

* リストに含まれる``Node``の数がが偶数の場合、中間に位置する ``Node``は２つあります。その場合は、そのうちの2つ目の``Node``を返してください。
* リストに含まれる``Node``の数は、１から100までの間とします。

function名：  middleOfLinkedList(head)

#### 例

##### 例1

```
input: 1 -> 2 -> 3 -> 4 -> 5

output: 3
```


##### 例2

```
input: 1 -> 2 -> 3 -> 4 -> 5 -> 6

output: 4
// 中間地点のNodeは3と4になるため、2つ目の4を返す
```

<!-- 
### 問題3

```javascript
function Node(val, next) {
    this.val = val
    this.next = (next === undefined ? null : next)
}
```

上は、単一方向リストを構成する``Node``の定義です。
引数 ``head``を取り、与えられた単一方向リストに循環が存在する場合は``true``、ない場合は``false``を返す``hasCycleOrNot``を作成してください。

function名：  hasCycleOrNot(head)

#### 例

##### 例1

```
input: head = [1 -> 2 -> 0 -> -3]
output: 3
```


##### 例2

```
input: 1 -> 2 -> 3 -> 4 -> 5 -> 6

output: 4
// 中間地点のNodeは3と4になるため、2つ目の4を返す
``` -->