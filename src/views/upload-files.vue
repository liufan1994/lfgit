/*
 * @Author: hzq
 * @Date: 2020-08-14 16:10:06
 * @Last Modified by: hzq
 * @Last Modified time: 2020-09-16 17:12:51
 * @文件说明: 上传文件
 */
<template>
    <div class="uploadFiles">
        <!-- 上传图片 -->
        <div>上传图片</div>
        <div class="updatefile">
            <div class="fileCon">
                <div class="list">
                    <div v-for="(item,index) in list" :key="index">
                        <img class="close" src="../assets/delete.png" @click="close(index)">
                        <img :src="item" />
                    </div>
                    <div class="add" v-if="maxStatus" @click="chooseType">
                        <img class="add-image" src="../assets/add.png">
                    </div>
                </div>
            </div>
            <input id="upload_file" type="file" class="file-input" accept="image/png,image/jpeg,image/jpg" :multiple="multiple" @change="inputChange" style="display: none" />
        </div>
        <div class="updatefileText">控制最大上传数、图片可压缩、支持多选</div>
        <el-button @click="returnFun" type="primary">返回</el-button>
    </div>
</template>
<script>
    import { Loading } from 'element-ui'
    import ImageCompressor from 'image-compressor.js'
    import checkImgFileSize from '@/utils/checkImgFileSize.js'

    export default {
        name: 'uploadFiles',
        props: {
            //是否支持多选
            multiple: {
                type: Boolean,
                default: true,
            },
            //最多上传几张
            max: {
                type: Number,
                default: 5,
            },
        },
        data() {
            return {
                maxStatus: true,
                // 添加照片
                list: [],
            }
        },
        created() {
            this.maxStatus = this.list.length !== this.max
        },
        methods: {
            chooseType() {
                document.getElementById('upload_file').click()
            },
            close(index) {
                this.list.splice(index, 1)
                this.maxStatus = this.list.length !== this.max
            },
            inputChange(e) {
                let files = e.target.files
                let len = this.list.length + files.length
                if (len > this.max) {
                    document.getElementById('upload_file').value = ''
                    this.$message(`最多允许上传${this.max}张`)
                    // Toast(`最多允许上传${this.max}张`)
                    return
                }
                let uploadAll = [].slice.call(files, 0).map(this.upload)
                // 使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)
                let loadingInstance = Loading.service({
                    // 上传中效果，可自行替换。
                    text: '上传中...',
                    spinnerType: 'fading-circle',
                })

                let result = Promise.all(uploadAll)
                console.log('result:' + result)
                document.getElementById('upload_file').value = ''

                loadingInstance.close()
            },

            upload(file) {
                console.log('file: ', file)
                return new Promise(resolve => {
                    console.log('resolve: ', resolve)
                    if (checkImgFileSize(file)) {
                        const that = this
                        const imageCompressor = new ImageCompressor(file, {
                            // 图片压缩的质量，可改
                            quality: 0.2,
                            success(fileRes) {
                                console.log('fileRes: ', fileRes)
                                that.list.push(fileRes.name)
                                console.log('this.list: ', that.list)
                                if (that.list.length === that.max) {
                                    that.maxStatus = false
                                }
                                // that.uploadFile(fileRes, resolve)
                            },
                        })
                        console.log(imageCompressor)
                    } else {
                        this.list.push(file.name)
                        console.log('this.list: ', this.list)
                        if (this.list.length === this.max) {
                            this.maxStatus = false
                        }
                        // this.uploadFile(file)
                    }
                })
            },

            // 调用接口上传图片
            // uploadFile(file, resolve) {
            //     let form = new FormData()
            //     form.append('uploadFileName', file)
            //     // form.append('***') //根据上传入参添加参数
            //     this.$instance.post('v1/admin/upload/file', form).then(result => {
            //         if (result.data.data !== undefined) {
            //             if (result.data.code !== 0) {
            //                 // 失败处理
            //                 this.$message(`图片上传失败`)
            //                 // Toast(`图片上传失败`)
            //                 resolve(result)
            //                 // return
            //             } else {
            //                 this.list.push(result.data.data)
            //                 console.log('this.list: ', this.list)
            //                 if (this.list.length === this.max) {
            //                     this.maxStatus = false
            //                 }
            //                 resolve(result)
            //             }
            //         } else {
            //             // 失败处理
            //             this.$message(`图片上传失败`)
            //             // Toast(`图片上传失败`)
            //         }
            //     })
            // },
            // 点击返回
            returnFun() {
                this.$router.push('/')
            },
        },
    }
</script>
<style lang="scss" scoped>
    .uploadFiles {
        width: 100%;
        height: 100%;
        .updatefile {
            .fileCon {
                width: 100%;
                min-height: 76px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .list {
                    width: 100%;
                    min-height: 76px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    & > div {
                        width: 80px;
                        height: 80px;
                        margin: 10px 10px 10px 0;
                        position: relative;
                        background: #f0f0f0;
                        border-radius: 6px;
                        & > img {
                            width: 100%;
                            height: 100%;
                        }
                        .close {
                            width: 15px;
                            height: 15px;
                            background-color: #fff;
                            border-radius: 50%;
                            background-image: url(../assets/delete.png);
                            background-size: 100%;
                            position: absolute;
                            top: -4px;
                            right: -4px;
                        }
                    }
                }
            }
            .add {
                // width: 80px;
                // height: 80px;
                // background-color: #f0f0f0;
                // border-radius: 6px;
                .add-image {
                    width: 20px !important;
                    height: 20px !important;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
        .updatefileText {
            font-size: 14px;
            color: #999;
        }
    }
</style>
