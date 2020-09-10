
## 解説

JavaScriptの中では、二つのデータ型を比べることで、それが「同じものか」どうかをboolean（``true``または``false``）で判定することができます。

### 比較する際に使う記号

#### a == b 

「==」は、つなげた二つのデータがイコールかどうかを判定します。
「a == b」と書いた場合、aとbがイコールであればtrue、異なる場合はfalseを返します。

```javascript
let result1 = 1 == 1  // result1 = true
let result2 = 1 == 2  // result2 = false
```

また、異なるデータ型（たとえば数値Intと文字列String）で比べた場合、自動的に片方のデータ型に変換した上で、内容が同じかどうかを判定します。

```javascript
let result3 = 1 == '1' // result3 = true
let result4 = '3' == 3 // result3 = true
```

#### a === b 

「===」は、つなげた二つのデータが、データ型含めてイコールかどうかを判定します。
「a === b」と書いた場合、aとbがイコールであればtrue、異なる場合はfalseを返します。

```javascript
let result1 = 1 === 1  // result1 = true
let result2 = 1 === 2  // result2 = false
```

また、異なるデータ型（たとえば数値Intと文字列String）で比べた場合、自動的に片方のデータ型に変換した上で、内容が同じかどうかを判定します。

```javascript
let result3 = 1 === '1' // result3 = false
let result4 = '3' === 3 // result3 = false
```

##### データ型を確認したい時

データ型は、``typeof''を使って確認することができます。

```javascript
let result1 = typeof 1   // result1 = 'number'
let result2 = typeof '3' // result2 = 'string'
```

#### a != b 

「!=」は、つなげた二つのデータが、 **異なっているかどうか** を判定します。
「a != b」と書いた場合、aとbが異なっていればtrue、イコールの場合はfalseを返します。

```javascript
let result1 = 1 != 1  // result1 = false
let result2 = 1 != 2  // result2 = true
```

また、異なるデータ型（たとえば数値Intと文字列String）で比べた場合、自動的に片方のデータ型に変換した上で、内容を比較します。

```javascript
let result3 = 1 != '1' // result3 = false
let result4 = '3' != 3 // result3 = false
```

#### a !== b 

「!==」は、つなげた二つのデータが、 **異なっているかどうか** を判定します。
「a !== b」と書いた場合、aとbが異なっていればtrue、イコールの場合はfalseを返します。データ型が異なっている場合、データ型の変換は行いません。

```javascript
let result1 = 1 !== 1  // result1 = false
let result2 = 1 !== 2  // result2 = true
let result3 = 1 !== '1'  // result2 = true
```

#### データ型のtrue、false

JavaScriptでは「0」「null」「undefined」「空文字""」「NaN」単体をfalseと評価します。
それ以外のデータ型は単体で「true」と評価されます。

そのため、データ型そのものが「true」「false」かの比較すると、下記のようになります。

```javascript
let result1 = "Hello" == true   // result1 = true
let result2 = "" == true        // result2 = false
let result3 = null != true      // result3 = true
let result4 = 1 != true         // result4 = false 
let result5 = 0 != true         // result5 = true
```

result5を見ると、1はそれ単体はtrueなので、「1は「true」ではない」という比較に対しては「false」が返ります。
逆に0は単体ではfalseなので、「0は「true」ではない」すなわち「0はfalseだ」という比較に対しては「true」が返ります。

#### 以上、以下、未満

#### a > b、 a < b

数字の大小を比較する場合、「<」「>」を使います。

``a > b``　と書いた場合、aがbの数字よりも大きい（bと同じ値は含まれない）場合にtrueを返します。
つまり、bがa未満の場合はtrue、a以上の場合はfalseを返します。

``a < b`` と書いた場合は、aがbの未満かどうかを判定します。

データ型が異なっている場合は、自動的に変換され比較されます。

```javascript
let result1 = 10 > 9    // result1 = true
let result2 = 10 > 15   // result2 = false
let result3 = 10 > 10   // result3 = false

let result4 = 1 < 3     // result4 = true
let result5 = 1 < 0     // result5 = false 
let result6 = 1 < 1     // result6 = false

let result7 = 1 < '7'   // result7 =  true
```

#### a >= b、 a <= b

数字の大小を比較するもう一つのパターンが、「<=」「>=」を使った方法です。

``a >= b``　と書いた場合、aがbの数字と同じか、それよりも大きい場合にtrueを返します。
つまり、bがa以下の場合はtrue、a+1以上の場合はfalseを返します。

``a < b`` と書いた場合は、aがb以上かどうかを判定します。


データ型が異なっている場合は、自動的に変換され比較されます。

```javascript
let result1 = 10 >= 9    // result1 = true
let result2 = 10 >= 15   // result2 = false
let result3 = 10 >= 10   // result3 = true

let result4 = 1 <= 3     // result4 = true
let result5 = 1 <= 0     // result5 = false 
let result6 = 1 <= 1     // result6 = true

let result7 = 1 <= '1'   // result7 =  true
```


## 問題


1.引数x（Int）を取り、それが10以上の場合はtrue、未満の場合はfalseを返す関数comparison1()を作成してください。

funciton名：comparison1()

input: x: Int

output: boolean

2.引数xを取り、xが文字列かどうかを判定し返す関数comparison2()を作成してください。

funciton名：comparison2() {}

input: x

output: boolean

