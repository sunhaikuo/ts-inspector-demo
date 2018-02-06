/**
 *字符串处理类
 */
class MString {
    /**
     * 往左补char
     * @param str 源字符串
     * @param length 总长度
     * @param char 可选,填充的字符 默认为' '
     */
    public static lPad(str: string, length: number, char?: string): string {
        length = ~~length
        const strLength = str.length
        char = char || ' '
        if (strLength < length) {
            str = (MString.repeat(char, length - strLength) + str).slice(-length)
        }
        return str
    }
    /**
     * 往右补char
     * @param str 源字符串
     * @param length 总长度
     * @param char 可选,填充的字符 默认为' '
     */
    public static rPad(str: string, length: number, char?: string): string {
        length = ~~length
        const strLength = str.length
        char = char || ' '
        if (strLength < length) {
            str = (str + MString.repeat(char, length - strLength)).slice(0, length)
        }

        return str
    }
    /**
     * 返回 n次倍输入的重复字符串
     * @param str 输入的字符串
     * @param n 次数
     */
    public static repeat(str: string, n: number): string {
        n = ~~n
        if (n < 1) return ''
        let ret = ''
        while (n > 0) {
            ret += str
            n--
        }
        return ret
    }
    /**
     * 去除字符串开始和结束的空格
     * @param str 输入字符串
     */
    public static trim(str: string): string {
        const regSpace = /^\s+|\s+$/g
        return str.replace(regSpace, '')
    }
}

export default MString
