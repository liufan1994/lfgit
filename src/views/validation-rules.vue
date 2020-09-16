/*
 * @Author: hzq
 * @Date: 2020-08-14 16:10:24
 * @Last Modified by: hzq
 * @Last Modified time: 2020-09-16 16:53:02
 * @文件说明: 验证规则
 */

<template>
    <div class="validationRules">
        <div class="rulesInput">
            <el-form :rules="rules" label-width="78px" label-position="right">
                <el-form-item label="电话号码" prop="phone">
                    <el-input v-model="formLabelAlign.phone" placeholder="请输入电话号码" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formLabelAlign.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="QQ" prop="myQQ">
                    <el-input v-model="formLabelAlign.myQQ" placeholder="请输入QQ号" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="链接地址" prop="link">
                    <el-input v-model="formLabelAlign.link" placeholder="请输入链接地址"></el-input>
                </el-form-item>
                <el-form-item label="整数" prop="integer">
                    <el-input v-model="formLabelAlign.integer" placeholder="请输入整数"></el-input>
                </el-form-item>
                <el-form-item label="小数" prop="decimal">
                    <el-input v-model="formLabelAlign.decimal" placeholder="请输入小数"></el-input>
                </el-form-item>
                <el-form-item label="英文数字" prop="englishNum">
                    <el-input v-model="formLabelAlign.englishNum" placeholder="请输入英文或数字"></el-input>
                </el-form-item>
                <el-form-item label="中文" prop="chinese">
                    <el-input v-model="formLabelAlign.chinese" placeholder="请输入中文" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址" prop="email">
                    <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱地址"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="idCard">
                    <el-input v-model="formLabelAlign.idCard" placeholder="请输入身份证号"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="returnFun " type="primary ">返回</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'validationRules',
        data() {
            // 电话
            const phoneFun = (rule, value, callback) => {
                setTimeout(() => {
                    if (this.formLabelAlign.phone === '') {
                        callback(new Error('请输入电话号码'))
                    } else if (
                        !/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(
                            this.formLabelAlign.phone
                        )
                    ) {
                        callback(new Error('请输入正确的电话号码'))
                    } else {
                        callback()
                    }
                }, 0)
            }
            // 密码
            const passwordFun = (rule, value, callback) => {
                if (
                    !/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%\^&*?]{6,20}$/.test(
                        this.formLabelAlign.password
                    ) &&
                    this.formLabelAlign.password !== ''
                ) {
                    callback(
                        new Error(
                            '字母、数字、特殊字符任意2种或2种以上的组合(长度6-20)'
                        )
                    )
                } else {
                    callback()
                }
            }
            // QQ
            const myQQFun = (rule, value, callback) => {
                if (
                    !/^[1-9][0-9]{4,10}$/.test(this.formLabelAlign.myQQ) &&
                    this.formLabelAlign.myQQ !== ''
                ) {
                    callback(new Error('请输入正确的QQ号（纯数字，5-11位）'))
                } else {
                    callback()
                }
            }
            // 链接地址
            const linkFun = (rule, value, callback) => {
                if (
                    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(
                        this.formLabelAlign.link
                    ) &&
                    this.formLabelAlign.link !== ''
                ) {
                    callback(new Error('请输入正确的链接地址'))
                } else {
                    callback()
                }
            }
            // 整数
            const integerFun = (rule, value, callback) => {
                if (
                    !/^[0-9]+$/.test(this.formLabelAlign.integer) &&
                    this.formLabelAlign.integer !== ''
                ) {
                    callback(new Error('请输入整数'))
                } else {
                    callback()
                }
            }
            // 小数
            const decimalFun = (rule, value, callback) => {
                if (
                    !/^(\d+|\d+\.\d{1,6})$/.test(this.formLabelAlign.decimal) &&
                    this.formLabelAlign.decimal !== ''
                ) {
                    callback(new Error('请保留至少一位小数'))
                } else {
                    callback()
                }
            }
            // 英文或数字
            const englishNumFun = (rule, value, callback) => {
                if (
                    !/^[A-Za-z0-9]+$/.test(this.formLabelAlign.englishNum) &&
                    this.formLabelAlign.englishNum !== ''
                ) {
                    callback(new Error('请输入英文或数字'))
                } else {
                    callback()
                }
            }
            // 邮箱地址
            const emailFun = (rule, value, callback) => {
                if (
                    !/^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$/.test(
                        this.formLabelAlign.email
                    ) &&
                    this.formLabelAlign.email !== ''
                ) {
                    callback(new Error('请输入有效合法的E-mail地址'))
                } else {
                    callback()
                }
            }
            // 身份证号
            const idCardFun = (rule, value, callback) => {
                if (
                    !/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(
                        this.formLabelAlign.idCard
                    ) &&
                    this.formLabelAlign.idCard !== ''
                ) {
                    callback(new Error('请输入正确的身份证号'))
                } else {
                    callback()
                }
            }
            return {
                formLabelAlign: {
                    phone: '',
                    password: '',
                    myQQ: '',
                    link: '',
                    integer: '',
                    decimal: '',
                    englishNum: '',
                    chinese: '',
                    email: '',
                    idCard: '',
                },
                rules: {
                    phone: [
                        {
                            validator: phoneFun,
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            validator: passwordFun,
                            trigger: 'blur',
                        },
                    ],
                    myQQ: [
                        {
                            validator: myQQFun,
                            trigger: 'blur',
                        },
                    ],
                    link: [
                        {
                            validator: linkFun,
                            trigger: 'blur',
                        },
                    ],
                    integer: [
                        {
                            validator: integerFun,
                            trigger: 'blur',
                        },
                    ],
                    decimal: [
                        {
                            validator: decimalFun,
                            trigger: 'blur',
                        },
                    ],
                    englishNum: [
                        {
                            validator: englishNumFun,
                            trigger: 'blur',
                        },
                    ],
                    email: [
                        {
                            validator: emailFun,
                            trigger: 'blur',
                        },
                    ],
                    idCard: [
                        {
                            validator: idCardFun,
                            trigger: 'blur',
                        },
                    ],
                },
            }
        },
        methods: {
            // 点击返回
            returnFun() {
                this.$router.push('/')
            },
        },
    }
</script>
<style lang="scss" scoped>
    .validationRules {
        width: 100%;
        height: 100%;
        .rulesInput {
            width: 1000px;
            & ::v-deep .el-form {
                display: flex;
                flex-wrap: wrap;
                .el-form-item {
                    margin-right: 100px;
                    .el-form-item__label {
                        padding-right: 20px;
                    }
                    .el-form-item__content {
                        width: 320px;
                    }
                }
            }
        }
    }
</style>
