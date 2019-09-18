/**
 * @file indexCtrl.js
 * @author zhouyinian (zhouyinian@meituan.com)
 * @description {{chineseName}}controller
 * @ngdoc controller
 * @name  {{detailName}}Ctrl
 */

define([
    'app',
    './service'
], function (app) {
    class Ctrl {
        static $inject = [
            'Page',
            '{{detailName}}Service',
            '$stateParams',
            '$uixModal',
            '$state',
            '$uixNotify'
        ];
        constructor(...args) {
            let [Page,{{detailName}}Service,$stateParams,$uixModal,$state,$uixNotify] = args;
            this.Page = Page;
            this.service = {{detailName}}Service;
            this.$stateParams = $stateParams;
            this.$uixModal = $uixModal;
            this.$uixNotify = $uixNotify;
            this.$state = $state;
            
            this.detail = {};
            Page.setTitle('{{chineseName}}');
            this.getDetail();
        }


        // 获取详情
        getDetail() {
            const params = {
                id: this.$stateParams.id
            };
            this.service.getDetail(params).then(({ data: { data, code } }) => {
                if (code === 200) {
                    this.detail = data;
                }
            });
        }

        save() {
            if (this.submitFlag) {
                return;
            }
            this.submitFlag = true;
            const params = {};
            this.service.save(params).then(({ data: { data, code, message } })=>{
                if(code === 200){
                    this.$state.go('^');
                    this.$uixNotify.success(message);
                } else {
                    this.submitFlag = false;
                }
            }, () => { this.submitFlag = false; });
        }

        // 取消
        cancel() {
            this.$state.go('^');
        }
    }

    app.controller('{{detailName}}Ctrl', Ctrl);

    return {
        _tpl: __inline('./template.html')
    };
});
