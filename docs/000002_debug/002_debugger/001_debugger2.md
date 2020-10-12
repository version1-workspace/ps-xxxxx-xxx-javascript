
# debuggerステートメント

## サンプルコード

### サンプル1

1から5までの数字をループ関数を使って順に ``console.log`` で表示する関数``oneToFive``を作成しなさい。
また、処理を繰り返すたびに、ブレークポイントで止まるようコードを追加してください。

<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
for (let i = 1; i < 6; i++) {
    console.log(i)
    debugger;
} 
```

#### 解説

JavaScriptでは、``debugger``ステートメントをコード中に挿入することで、Google Chromeのデベロッパーツールなどのデバッガを起動している場合、任意の場所にブレークポイントを追加することができます。

</details>

## 問題

### 問題1

引数``food``を取る``appleLover()``という関数があります。

この関数は、引数に``apple``という文字列が取られた時、``true``を返し、それ以外の場合はすべて``false``を返します。

上記判定の前に、引数の内容を``debugger``で確認できるようにしてください。

funciton名： appleLover(food)

#### 例

##### 例1

```
input: 'apple'

output: true
```


##### 例2

```
input: 1

output: false
```

##### 例3

```
input: 'banana'

output: false
```



### 問題2

引数xを取り、下記の3パターンのうちtrueになる個数を返す関数``consoleHowManyTrue``があります。

1. xが10未満
2. xそのものがtrueかどうか
3. xが文字列かどうか

これから上記関数がうまく動くかテストするために、xに対しどの条件処理が実行されたか確認したいと考えています。

上記関数を実行し、各判定の結果を、``debugger``を使って確認できるようにしてください。

funciton名： consoleHowManyTrue()

#### 例

##### 例1

```
input: 5

output: なし
```


##### 例2

```
input: "hello"

output: なし
```

##### 例3

```
input: null

output: なし
```

##### 例4

```
input: undefined

output: なし
```


