### 用于检查 ts 文件的规范性

#### 检查的项目如下：

* 通用
    * 参数 / 变量 要有类型
    * 参数 / 变量 / 类 / 方法 / 接口 要有注释
    * 尽量不要使用 any
    * 注释和参数的数量要匹配
* Class 校验
    * 类名要和文件名一致
    * 不能直接使用 export default class Test
    * 类名的首字母要大写
* 方法检验
    * 要显示的写返回值
    * 要显示的写修饰符 :public/private
    * 首字母要小写
* 接口
    * 要以大写字母 I 开头

#### 安装与使用

```
+ npm install
+ npm run check
```

#### ts 文件中使用

```
import { Inspector } from 'ts-inspector'
import * as path from 'path'

/**
 * ts的调用方式
 */
const insp = new Inspector({
    // 要检查源码的路径，文件/文件夹
    path: path.resolve(__dirname, 'src'),
    // 生成.d.ts文件的路径
    output: path.resolve(__dirname, 'types/mtime-util.d.ts')
})

insp.start()
```

#### js 文件中使用

```
let insp = require('ts-inspector')
let path = require('path')

/**
 * js的调用方式
 */
let i = new insp.Inspector({
    // 要检查源码的路径，文件/文件夹
    path: path.join(__dirname, 'src'),
    // 生成.d.ts文件的路径
    output: path.join(__dirname, 'types/mtime-util.d.ts')
})
i.start()
```

#### 构造函数 - 参数说明

```
{
    path: string, // 需要检查的文件或文件夹路径(必选)
    output?: string, // 输出.d.ts文件的文件路径（可选）
    whiteList?: Array<String> // 不需要检查的文件名（可选）
}
```
