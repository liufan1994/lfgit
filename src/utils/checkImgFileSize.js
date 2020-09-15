export default (file, maxSize = 1) => {
    // 转为 M
    const size = file.size
    return size >= maxSize * 1024 * 1024
}
