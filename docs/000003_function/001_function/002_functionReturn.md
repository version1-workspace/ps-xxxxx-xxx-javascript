
# 関数 - 返り値

## サンプルコード

### サンプル1

引数xを取り、xに5を掛けた値を返す関数``multiple5``を作成してください


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function multiple5(x) {
 return x * 5
}
```

#### 解説

関数を実行した際、その行が読み込まれた時点で、何かしらの値を返したい場合／関数の実行を終了させたいは、``return 返したい値``と記載します。
返された値は、そのまま変数などに代入することが可能です。

``return``のある行が読み込まれると、関数の読み込みは中断され、その関数の実行は終了します。
そのため、それ以降の行にコードを記入していても、それらが実行されることはありません。

何の値も返すことなく、関数の実行を終了したい場合は``return``のみを記載します。


</details>

## 問題

### 問題1

引数xを取り、xが``"banana"``であれば``true``、それ以外であれば全て``false``を返す、関数``ifBanana``を作成してください。

funciton名： ifBanana()

#### 例

##### 例1

```
input: "banana"

output: true
```


##### 例2

```
input: null

output: false
```

##### 例3

```
input: "apple"

output: false
```

### 問題2

整数の引数xを取り、10を足した値を返す関数``addTen``を作成してください。


funciton名： addTen(x)

#### 例

##### 例1

```
input: 5

output: 15
```


##### 例2

```
input: 0

output: 10
```