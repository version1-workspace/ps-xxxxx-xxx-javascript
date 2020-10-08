
# アロー関数

## サンプルコード

### サンプル1

引数x, yを取り、下記条件を満たす関数``additionTwoArrow``を**アロー関数**で作成してください。

* x, yが数値のとき x と y の合計値を``console.log``で表示する
* x, yのどちらかが文字列のとき x と y を合わせた文字列を``console.log``で表示する

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
const additionTwoArrow = (x, y) => {
    console.log(x + y)
}
```

#### 解説

JavaScriptでは、関数を定義する際に、``function(){}`` だけでなく、アロー関数と呼ばれる書き方があります。

1. より短く関数の定義を書ける
3. 関数内で宣言された「this」の参照先のオブジェクトは、宣言時のスコープを持つオブジェクトになる
2. 変数定義と同様の宣言方法（``const``）を取る

3番については、元々functionを使用した関数定義の場合、異なる実行コンテキスト内からthisを呼び出す場合は、そのthisをどのオブジェクトから呼び出すか設定（bind）する必要がある・・・といった問題から来ています。

現時点ではよくわからないかと思いますが、オブジェクトなどの内容を学んだのち、あらためて(このページなど)[https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout]を確認してみてください。

</details>

## 問題

### 問題1

引数x, yを取り、下記の条件を満たす関数``added10timesArrow``をアロー関数で作成してください。

* 変数sumを宣言する
* sumにxを10回足す
* sumにyを10回分引く
* 最終的なsumの値を返す

funciton名： added10times(x, y)

#### 例

##### 例1

```
input: x = 5, y = 10

output: -50
```


##### 例2

```
input: x = 10, y = 10

output: 0
```

##### 例3

```
input: x = "Hello", y = "World"

output: NaN
```

##### 例4

```
input: x = null, y = null

output: 0
```


### 問題2

下記の3つの引数を取り、それぞれを``console.log``で表示する関数``myFavoriteFoodsArrow``を、アロー関数で作成してください。

1. food: 一番好きな食べ物 -> "My favorite food is （一番好きな食べ物）."
2. snack: 一番好きなお菓子 -> "My favorite snack is （一番好きなお菓子）."
3. drink: 一番好きな飲み物 -> "My favorite drink is （一番好きな飲み物）."

ただし、下記の２つの条件がつきます。

* それぞれが``null``、あるいは表記なし``""``で入力された場合は``"My favorite food is nothing."``が表示される
* すべてが``null``、あるいは表記なし``""``で入力された場合は、``"I don't like any food!"``が表示される

funciton名： myFavoriteFoods(food, snack, drink)

#### 例

##### 例1

```
input: food = "Pizza", snack = "Chips", drink = "Coke"

output: なし

表示：
My favorite food is Okonomiyaki.
My favorite snack is Caramel.
My favorite drink is Coke.
```


##### 例2

```
input: food = "Okonomiyaki", snack = "", drink = "Beer"

output: なし

表示：
My favorite food is Okonomiyaki.
My favorite snack is nothing.
My favorite drink is Coke.
```

##### 例3


```
input: food = "", snack = "", drink = null

output: なし

表示：
I don't like any food!
```