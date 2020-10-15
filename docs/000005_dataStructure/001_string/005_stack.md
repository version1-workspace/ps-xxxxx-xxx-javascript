
# スタック

スタックはデータ構造の一つで、データを１列に並べた構図です。
スタックとの違いは、後に追加したものから先に取り出す、「LIFO（ Last In First Out）」の順でデータを処理していく点です。

A4サイズがぴったりの箱に、書類を上から入れていった図をイメージします。
この時、書類を取り出そうとすると、一番最後に（新しく）積み重ねた書類しか手に取ることはできません。

一番最初に入れた書類を取り出すためには、それ以降に重ねた全ての書類を一つ一つ取り出していく必要があります。

JavaScriptにおいて、スタックのデータ構造を実装する場合は配列が使われます。

ここでは、JavaScriptのスタックの概念と処理を学んでいきます。


## サンプル

スタックは配列を使用しますので、[配列の作成](./002_array.md)がスタックの作成にあたります。

### プッシュ／ポップ

下記の配列で表されたスタック``stackArr``が定義されています。

 ```javascript
let stackArr = ["first", "second", "third", "fourth", "fifth"] 
 ```

1. このスタックに新しい要素を追加する関数``stackPush(item)``を作成してください
2. このスタックから、次に取り出せるデータを取り出し返す関数``stackPop()``を作成してください
3. このスタックに含まれているデータを取り出し返す関数``stackGetItem(item)``を作成してください。
    * 引数``item``は、``stackArr``に含まれている（あるいは含まれない）特定のデータとします

funciton名： stackPush(item)
funciton名： stackPop()
funciton名： stackGetItem(item)

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
let stackArr = ["first", "second", "third", "fourth", "fifth"];

function stackPush(item) {
    stackArr.push(item);
}

function stackPop() {
    stackArr.pop();
}

function stackGetItem(item) {
    let current;
    for(let i = 0; i < stackArr.length; i++) {
        current = stackArr.shift();
        if(current == "third"){
            return current;
        }
    }
}
```

#### 解説

スタックのデータ構造では、データの削除／追加は同じ方向から行います。
追加を``push``で配列の後ろからと定めた場合、データの取り出しは必ず後ろから``pop``と定義します。
（逆に、もしデータの追加を``unshift``と配列の前からと定めた場合、データの取り出しは必ず``shift``によって行います。）

また、スタックにおいてはデータの追加を「プッシュ」、データを取り出すことを「ポップ」といいます。

スタックの列内の途中にあるデータに直接アクセスすることはできません。そのため、データを取り出したい場合は、必要なデータが出てくるまでポップを続ける必要があります。

</details>


## 問題

### 問題1

ブラウザソフトウェアの開発中、あなたはWebページの訪問履歴の記録を取り、「戻る」ボタンを押したら一つ前の履歴に戻る機能をつけたいと考えています。

これらの機能を実装するため、下記のオブジェクト``webHistory``を作成してください。

```javascript
let webHistory = {
    // ここを実装してください
}
```

``webHistory``のオブジェクトについて、下記の条件を満たすよう実装してください。

1. 訪問したWebページの履歴リストを持つ
2. ``webHistory.push(WebPage)``で履歴リストへのWebページの追加ができる
3. ``webHistory.pop()``で、直前に訪問していたWebページの情報が返される
4. Webページの情報は、「URL」「ページタイトル」の２つの情報で構成されるオブジェクトデータで保管される



### 問題2

引数``word``を取る関数``checkPalindrome``があります。

1. この関数は、引数に渡された文字列が回文かどうかをチェックし、回文の場合は``true``、異なる場合は``false``を返します。
2. 引数`word`には、必ず１文字以上の文字列が入ります。

上記の条件を踏まえ、関数``checkPalindrome``を作成してください。

function名：checkPalindrome(word)


#### 例

##### 例1

```
input: word = "apple"

output: false
```

##### 例2

```
input: word = "ANA"

output: true
```

##### 例3

```
input: word = "abccba"

output: true
```


##### 例4

```
input: word = "a"

output: true
```

##### 例5

```
input: word = "bb"

output: true
```

##### 例6

```
input: word = "ab"

output: false
```