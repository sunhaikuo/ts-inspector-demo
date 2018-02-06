### 用于检查 ts 文件的规范性

#### 适用场景

* 对外提供服务的公共库，像`Util`，并不适用具体业务代码
* 检查工具是基于完整的`class`文件，并不适用`export default function(){...}`
* 保证单一原则，不适用于一个文件声明多个 class 的情景

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

#### 关于 git 提交检查

如果想增加在 git 提交之前检查代码，在`package.json`文件中增加`"pre-commit": ["check"]`，其中`check`为`script`中的命令，具体详见我的博文

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

#### 使用效果：

* 检查失败的情况

![avatar](https://sfault-image.b0.upaiyun.com/153/684/1536843627-5a7975937ff58_articlex)

* 检查成功的情况

![avatar](https://sfault-image.b0.upaiyun.com/275/312/2753127133-5a79759d798b9_articlex)

#### 详细的技术细节，请参见：[使用 Typescript 检查你的代码规范][1]

[1]: https://segmentfault.com/a/1190000013173370
