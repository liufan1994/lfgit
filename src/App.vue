<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
            'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    }
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #070707;
        font-size: 16px;
    }
    #app {
        padding: 40px;
        box-sizing: border-box;
    }
    // 返回按钮
    .el-button {
        width: 140px;
        margin-top: 20px !important;
    }
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
