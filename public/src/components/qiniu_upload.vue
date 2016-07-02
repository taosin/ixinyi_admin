<!-- 七牛上传组件
    Taoxin 2016-05-24
 -->
<template>
    <div>
        <div>
            <div id="container">
                <a class="btn-img-add " id="pickfiles" @click="upload">点击上传</a>
            </div>
        </div>
    </div>
</template>
<script>
  module.exports = {
    props: {
        uploadurl: {
        type: String,
        required: false,
        twoWay: true,
      }
    },
    ready(){
        const self = this;
            const uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',
                    browse_button: 'pickfiles',
                    container: 'container',
                    drop_element: 'container',
                    max_file_size: '100mb',
                    flash_swf_url: 'js/plupload/Moxie.swf',
                    dragdrop: true,
                    chunk_size: '4mb',
                    uptoken_url: 'http://localhost:8116/admin/getToken',
                    domain: 'http://7xrvyq.com1.z0.glb.clouddn.com/',
                    get_new_uptoken: false,
                    auto_start: true,
                    init: {
                        // 'FilesAdded': function (up, files) {
                        //     $('table').show();
                        //     $('#success').hide();
                        //     plupload.each(files, function (file) {
                        //     });
                        // },
                        // 'BeforeUpload': function (up, file) {

                        // },
                        // 'UploadProgress': function (up, file) {

                        // },
                        // 'UploadComplete': function () {

                        // },
                        FileUploaded(up, file, info) {
                            const domain = up.getOption('domain');
                            const res = JSON.parse(info);
                            const sourceLink = domain + res.key;
                            // const imgLink = Qiniu.watermark({
                            //     mode: 2,  // 文字水印
                            //     text: 'hello world !', // 水印文字，mode = 2 时 **必需**
                            //     dissolve: 50,          // 透明度，取值范围1-100，非必需，下同
                            //     gravity: 'SouthWest',  // 水印位置，同上
                            //     fontsize: 500,         // 字体大小，单位: 缇
                            //     font : '黑体',          // 水印文字字体
                            //     dx: 100,  // 横轴边距，单位:像素(px)
                            //     dy: 100,  // 纵轴边距，单位:像素(px)
                            //     fill: '##FFF000'        // 水印文字颜色，RGB格式，可以是颜色名称
                            //     }, res.key);
                            // 获取上传成功后的文件的Url
                            // this.img_url = sourceLink
                            self.uploadurl = sourceLink;
                        },
                        Error(up, err, errTip) {
                            // $('table').show();
                            // const progress = new FileProgress(err.file, 'fsUploadProgress');
                            // progress.setError();
                            // progress.setStatus(errTip);
                        }
                    }
            });
            
    },
    compiled(){
    },
    methods: {
        // 上传的方法
        upload(){
        }
    }
  };
</script>