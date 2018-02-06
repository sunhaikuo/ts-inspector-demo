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
