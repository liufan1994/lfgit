/*
 * @Author: hzq
 * @Date: 2020-08-14 16:10:24
 * @Last Modified by: hzq
 * @Last Modified time: 2020-09-15 17:10:31
 * @文件说明: 验证规则
 */

<template>
    <div class="validationRules">
        <div class="rulesInput">
            <el-form :rules="rules" label-width="80px" label-position="left">
                <el-form-item label="电话号码" prop="phone">
                    <el-input v-model="formLabelAlign.phone" placeholder="请输入电话号码" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formLabelAlign.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPass">
                    <el-input type="password" v-model="formLabelAlign.confirmPass" placeholder="请输入确认密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="QQ" prop="myQQ" :hide-required-asterisk="false">
                    <el-input v-model="formLabelAlign.myQQ" placeholder="请输入QQ号" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="returnFun" type="primary">返回</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'validationRules',
        data() {
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
            const passwordFun = (rule, value, callback) => {
                if (this.formLabelAlign.password === '') {
                    callback(new Error('请输入密码'))
                } else {
                    callback()
                }
            }
            const confirmPassFun = (rule, value, callback) => {
                setTimeout(() => {
                    if (this.formLabelAlign.confirmPass === '') {
                        callback(new Error('请输入确认密码'))
                    } else if (
                        this.formLabelAlign.confirmPass !==
                        this.formLabelAlign.password
                    ) {
                        callback(new Error('确认密码和密码不一致'))
                    } else {
                        callback()
                    }
                }, 0)
            }
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
            return {
                formLabelAlign: {
                    phone: '',
                    password: '',
                    confirmPass: '',
                    myQQ: '',
                },
                rules: {
                    phone: [
                        {
                            required: true,
                            validator: phoneFun,
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            validator: passwordFun,
                            trigger: 'blur',
                        },
                    ],
                    confirmPass: [
                        {
                            required: true,
                            validator: confirmPassFun,
                            trigger: 'blur',
                        },
                    ],
                    myQQ: [
                        {
                            validator: myQQFun,
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
            width: 400px;
        }
    }
</style>
