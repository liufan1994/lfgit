// 所有菜单数据
const menuList = [
    {
        path: '/content/home',
        name: '数据看版',
        // 属于
        belong: ['1'],
    },
]

export default (user = '1') => {
    // 1超管；2场所管理员；3区域管理员；4代理商

    // 当前权限对应的菜单数据
    const currMenuList = []
    // 循环菜单数据
    menuList.map((item) => {
        // 如果菜单数据中的belong有长度
        if (item.belong.length) {
            // 判断简单数组中是否有某个值（返回Boolean值）
            if (item.belong.includes(user)) {
                // 向新的菜单数组添加一个数据
                currMenuList.push(item)
                // console.log('currMenuList: ', currMenuList)
            }
        } else {
            // 如果菜单数据中的belong没有长度，那么直接向新的菜单数组添加一个数据
            currMenuList.push(item)
        }
    })

    return { menuList, currMenuList }
}
// 原菜单数据/筛选后菜单数据
