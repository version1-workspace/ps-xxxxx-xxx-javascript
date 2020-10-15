
# キュー

キューはデータ構造の一つで、データを１列に並べた構図です。
「FIFO（ First In First Out）」、すなわち先入先出しの順でデータを処理していきます。

「待ち行列」とも呼ばれます。一つの行列をイメージしたときに、先に並んだ人が先に行列を抜ける／後からきた人が行列の一番後ろに並ぶ。
データ構造の場合も、同様に処理の順番が定まっている１列のデータ群をキューといいます。


JavaScriptにおいて、キューのデータ構造を実装する場合は配列が使われます。

ここでは、JavaScriptのキューの概念と処理を学んでいきます。


## サンプル

キューは配列を使用しますので、[配列の作成](./002_array.md)がキューの作成にあたります。

### エンキュー／デキュー

下記の配列で表されたキュー``queueArr``が定義されています。

 ```javascript
let queueArr = ["first", "second", "third", "fourth", "fifth"] 
 ```

1. このキューに新しい要素を追加する関数``enqueue(item)``を作成してください
2. このキューで次に取り出せる要素を取り出し、返す関数``dequeue(item)``を作成してください。
3. このキューに含まれているデータを取り出し返す関数``getItem(item)``を作成してください。
    * 引数``item``は、``queueArr``に含まれている（あるいは含まれない）特定のデータとします

funciton名： enqueue(item)
funciton名： dequeue()
funciton名： getItem(item)

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let queueArr = ["first", "second", "third", "fourth", "fifth"];

function enqueue(item) {
    queueArr.push(item);
}

function dequeue() {
    return queueArr.shift();
}

function getItem(item) {
    let current;
    for(let i = 0; i < queueArr.length; i++) {
        current = queueArr.shift();
        if(current == "third"){
            return current;
        }
    }
}
```

#### 解説

キューのデータ構造では、データの削除／追加の方向が定まっています。
追加を``push``で配列の後ろからと定めた場合、データの取り出しは必ず反対の``unshift``と定義します。
（逆に、もしデータの追加を``unshift``と配列の前からと定めた場合、データの取り出しは必ず反対の``pop``によって行います。）

また、キューにおいてはデータの追加を「エンキュー」、データを取り出すことを「デキュー」といいます。

キューの列内の途中にあるデータに直接アクセスすることはできません。そのため、データを取り出したい場合は、必要なデータが出てくるまでデキューを続ける必要があります。

</details>


## 問題

### 問題1

登録したタスクを、登録した順番で消化・表示していくオブジェクト``todoList``があります。

```javascript
let todoList = {
    // ここを実装してください
}
```

``todoList``のオブジェクトについて、下記の条件を満たすよう実装してください。

1. 登録したタスクが順番に並ぶキューを含んでいる
2. ``todoList.enqueue(task)``でタスクが追加できる
3. ``todoList.dequeue()``で消化したタスクをリストから削除できる
4. ``todoList.peek()``で、現在消化するべきタスクを確認できる
