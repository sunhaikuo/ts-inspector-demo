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
