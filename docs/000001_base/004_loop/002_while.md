
# console.log

## サンプルコード

### サンプル1

下記の条件を満たす、関数``log1``を作成してください。

* ``console.log``を使って、1から5までの数字が表示される
* ``for``ループを使わず、``while``を使う

```javascript
1
2
3
4
5
```


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function while1() {
    let i = 1;
    while( i < 6){
        console.log(i)
        i++
    }
}
```

#### 解説

JavaScriptでの繰り返し処理は、while文でも作成することができます。

```javascript
while (繰り返し処理終了条件) {
    繰り返し時の処理
}
```


##### 繰り返し処理終了条件
事前に宣言した変数に対して、条件文を記入します。
ここでの条件が``true``である限り、ブロック内に記載された繰り返し処理が実行されます。

</details>

### サンプル2

下記の条件を満たす、関数``while2``を作成してください。

* ``console.log``を使って、1から6までの数字のどれかがランダムで表示される
* もし1が出た場合は、処理を終了する
* ``for``ループを使わず、``while``を使う

表示例
```javascript
5
2
3
6
4
3
1
```


<details><summary><b>回答と解説</b></summary>

#### 回答

```javascript
function while2() {
    let i;
    do {
        i = Math.floor(Math.random() * 6) + 1
        console.log(i)
    } while( i != 1)
```

#### 解説

do...while文を使うと、必ず最初の１回は処理を行い、その後は条件を満たすまで繰り返すプログラムを書くことができます。

```javascript
do {
    繰り返し時の処理
}
while (繰り返し処理終了条件)
```

</details>

## 問題

### 問題1

下記の条件を満たす、関数``whileSubtract1by1``を作成してください。

* ``console.log``を使って、10から1までの数字が表示される
* ``while``を用いてコードを書く

```
10
9
8
7
6
5
4
3
2
1
```

funciton名： whileSubtract1by1()

#### 例

##### 例1

```
input: なし

output: なし

表示：
10
9
8
7
6
5
4
3
2
1
```

### 問題2

下記の条件を満たす、関数``whileSubtractBy2``を作成してください。

* 引数``x``を取る
* ``console.log``を使って、xから-2ずつした数字を表示する
* 上記の数字が負の数になった場合は、表示を止める
* ``while``を用いてコードを書く

funciton名： whileSubtractBy2(x)

#### 例

##### 例1

```
input: x = 10

output: なし

表示：
10
8
6
4
2
0
```

##### 例2
```
input: x = 0

output: なし

表示：
0
```

##### 例3

```
input: x = -1

output: なし

表示：

```

##### 例4

```
input: x = null

output: なし

表示：
null
```


### 問題3

下記の条件を満たす関数``whileFizzBuzz``を作ってください。

* 1から100までの数字を表示する
* ただし、上記の数字が3の倍数の場合は、その数字の代わりに文字列``Fizz``が表示される
* ただし、上記の数字が3の倍数かつ5の倍数の場合は、その数字の代わりに文字列``Bizz``が表示される
* ``while``を用いてコードを書く

funciton名： whileFizzBuzz()

#### 例

##### 例1

```
input: なし

output: なし

表示：
1
2
Fizz
4
5
Fizz
7
8
Fizz
10
11
Fizz
13
14
Buzz
16
17
Fizz
19
20
Fizz
22
23
Fizz
25
26
Fizz
28
29
Buzz
（以下中略）
97
98
Fizz
100
```


### 問題4

下記の条件を満たす関数``whileDice10``を作ってください。

* 1から10までのいずれかの数がランダムで表示される（``console.log``を使用）
* ただし、5が表示された場合は終了する
* ``while``を用いてコードを書く

funciton名： whileDice10()

#### 例

##### 例1

```
input: なし

output: なし

表示：
8
2
1
3
8
10
1
6
7
5
```


##### 例2

```
input: なし

output: なし

表示：
5
```

##### 例3

```
input: なし

output: なし

表示：
1
10
2
4
8
8
2
5
```