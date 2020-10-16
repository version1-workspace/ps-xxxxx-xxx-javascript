
# オブジェクト操作

JavaScriptにおけるオブジェクトとは、プロパティは名前 (あるいはキー) と値との関連付けから成り立つデータのことを指します。
プロパティに対応する値を「関数」にすること可能です。

ブラウザにあらかじめ定義されているオブジェクトもありますが、独自のオブジェクトを定義することもできます。

ここでは、オブジェクトのデータ操作における、CRUDそれぞれの処理を学んでいきます。

 [CRUDの概念](./000_CRUD.md)

|CRUD|文字列での操作|
|-|-|
|Create|宣言|
|Read|``オブジェクト名[プロパティ名]``、``オブジェクト名.プロパティ名``など|
|Update|``オブジェクト名[プロパティ名]``、``オブジェクト名.プロパティ名``など|
|Delete|``delete オブジェクト名[プロパティ名]``、``delete オブジェクト名.プロパティ名``など|

### Create

下記のデータを作成してください。

|変数名|値|
|-|-|
|obj0|空のオブジェクト|
|obj123|プロパティが「a」「b」「c」、対応する値（value）が「1」「2」「3」のオブジェクト|


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

また、最初から値の入ったオブジェクトを作成する場合は、各プロパティ（key）と値（value）の間に``:``を挟み、それらのかたまりを``,``で区切って作成します。

 ```javascript
  //　オブジェクトの書き方
   {
       key1 : value1,
       key2 : value2,
       key3 : value3,
   }
 ```

JavaScriptのオブジェクトのプロパティには、空文字列を含む、文字列に変換できるものが使用できます。
上記のようにそのまま文字列を書くこともできますし、 ``'文字列'``というようにシングルクオーテーション（ダブルクオーテーションも可）で囲むこともできます。

</details>


### READ

``objectSample``というオブジェクトが定義されています。

 ```javascript
 let objectSample = {
       id : '001',
       name : 'Alice',
       gender: 'female',
       'the hobby': 'reading',
       greeting: function() {
           console.log('Hello, ' + this.name)
       }
   }
 ```

``objectSample``のオブジェクトを利用し、下記の内容を``console.log``で表示してください

1.  ``’Alice'``という名前
2. ``'reading'``という趣味
3. ``Hello, Alice``という挨拶
4. プロパティ（key）の一覧の配列
5. 値（value）の一覧の配列
6. プロパティと値の一覧の配列

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 回答例１
console.log(objectSample['name'])
console.log(objectSample['the hobby'])
objectSample.greeting()
console.log(Object.keys(objectSample))
console.log(Object.values(objectSample))
console.log(Object.entries(objectSample))

// 回答例2
console.log(objectSample.name)
console.log(objectSample['the hobby'])
objectSample.greeting()
console.log(Object.keys(objectSample))
console.log(Object.values(objectSample))
console.log(Object.entries(objectSample))
```

#### 解説

オブジェクトの中身は、``Object名[プロパティ名]``あるいは``Object名.プロパティ名``で対応する値を取得できます。

プロパティ名にスペースなどが入る場合は、``[]``でプロパティ名を括る方法でなければkeyが認識されず、値の取得がうまくできません。

また、オブジェクトに格納された関数を呼び出したい場合は、``Object名.プロパティ名()``という書き方で、値に定義された関数を実行することができます。

オブジェクトのプロパティ、値、あるいはそのセットを配列として一気に取得したい場合は、下記の方法で取得ができます。

```javascript
Object.keys(オブジェクト名) // プロパティ（key）一覧の取得
Object.values(オブジェクト名) // 値（value）一覧の取得
Object.entries(オブジェクト名) // プロパティ・値セットの一覧の取得
```

</details>


### UPDATE

上記の``objectSample``のオブジェクトを使って、下記リストの内容を実装してください。

* プロパティ：age、　値：24 を追加
* プロパティ：nameの値を ``'Jenny'``に変更

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 回答例1
objectSample['age'] = 24
objectSample['name'] = 'Jenny'

// 回答例2
objectSample.age = 24
objectSample.name = 'Jenny'
```

#### 解説

定義されたオブジェクトに変更を加える場合、``オブジェクト名.プロパティ名 = 値`` あるいは``オブジェクト名[プロパティ名] = 値``という書き方で、オブジェクトの中身の更新あるいは追加ができます。

変更を加えたいオブジェクトの中に、指定されたプロパティ名がすでに存在する時（今回の場合はname）は、値が変更されます。

変更を加えたいオブジェクトの中に、指定されたプロパティ名が存在しない時（今回の場合はage）は、プロパティと値のセットが追加されます。

</details>


### DELETE

上記の``objectSample``のオブジェクトを使って、下記の内容を実装してください。

* プロパティ：age の削除

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
// 回答例1
delete objectSample['age']

// 回答例2
delete objectSample.age
```

#### 解説

オブジェクトの要素を削除する場合は、先頭に``delete ``の文字を書いて、削除したいプロパティを指定します。

</details>

## 問題

### 問題1

下記のリストの要件を満たすオブジェクト``favoriteBooks``を作成してください。

1. 各「``title``」をプロパティとする、本1冊のオブジェクト（2を参照）が、合計3冊分含まれたオブジェクト
2. 本１冊分のオブジェクトは、下記要件を満たすものとする
    * ID番号（``id``）のプロパティ、対応する値は``1``から始まり、1ずつ増えていく「数値」の要素 を持つ
    * 本のタイトル（``title``）のプロパティ を持つ
    * 作者（``author``）のプロパティ を持つ
    * 最後に読んだ日（``lastDate``）のプロパティ、対応する値は文字列``'20201005'``などを持つ
    * 詳細（本のタイトル＋作者）を``console.log()``で表示する``detail``のプロパティ を持つ
3. 本のオブジェクトにおける各値の内容は、特に指定していない限りは自由

```javascript
let favoriteBooks {
    // ここを実装してください
}
```


### 問題2

上記``favoriteMovie``に、本の情報を追加／変更するための関数``updateBooks``を作成してください。

また、``updateBooks``は下記の条件があります。

* 情報の確認のため、``title``、``author``、``lastDate``（最後に読んだ日）の引数を取る（すべて``string``型）。
* 下記の要件を満たす本１冊のオブジェクトを``favoriteBooks``に追加（すでに同じタイトルの本がある場合は更新）する
    * ID番号（``id``）のプロパティ、対応する値は数値の要素 を持つ
    * 本のタイトル（``title``）のプロパティ を持つ
    * 作者（``author``）のプロパティ を持つ
    * 最後に読んだ日（``lastDate``）のプロパティ、対応する値は文字列``'20201005'``などを持つ

funciton名：updateBooks(title, author, lastDate)

#### 例

``favoriteBooks``の状態を下記のものとした場合

```javascript
let favoriteBooks = {
    "The Buried Giant" : {
        id: 1,
        title: "The Buried Giant",
        author: "Kazuo Ishiguro",
        lastDate: "20201005",

    },
        "The Giver" : {
        id: 2,
        title: "The Giver",
        author: "Lois Lowry"
        lastDate: "20150305"
    }
}
```

##### 例1

```javascript
input: title = 'Harry Potter and the Chamber of Secrets', author = 'J. K. Rowling', lastDate = '20200824'

output: なし

// favoriteBooksのオブジェクトの中身
{
    "The Buried Giant" : {
        id: 1,
        title: "The Buried Giant",
        author: "Kazuo Ishiguro",
        lastDate: "20201005"
    },
        "The Giver" : {
        id: 2,
        title: "The Giver",
        author: "Lois Lowry"
        lastDate: "20150305"
    },
        "Harry Potter and the Chamber of Secrets" : {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling"
        lastDate: "20200824"
    }
}
```

##### 例2

```javascript
input: title = 'The Buried Giant', author = 'Kazuo Ishiguro', lastDate = '20201018'

output: なし

// favoriteBooksのオブジェクトの中身
{
    "The Buried Giant" : {
        id: 1,
        title: "The Buried Giant",
        author: "Kazuo Ishiguro",
        lastDate: "20201018"
    },
        "The Giver" : {
        id: 2,
        title: "The Giver",
        author: "Lois Lowry"
        lastDate: "20150305"
    },
        "Harry Potter and the Chamber of Secrets" : {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling"
        lastDate: "20200824"
    }
}
```
