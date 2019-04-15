/**
 * @file indexCtrl.js
 * @author zhouyinian (zhouyinian@meituan.com)
 * @description {{chineseName}}
 * @name  {{modelName}}Ctrl
 */

define([
    'app'
], function (app) {
  
    class {{modelName}}Ctrl {
        static $inject = ['$uixNotify', 'parent', '$uixModalInstance'];
        constructor($uixNotify, parent, $uixModalInstance) {

            this.$uixNotify = $uixNotify;
            this.$uixModalInstance = $uixModalInstance;
            this.parent = parent;
        }


        // 取消
        cancel() {
            this.$uixModalInstance.dismiss('cancel');
        }

        ok() {
            this.submitFlag = true;
            const params = {
               
            };
            this.parent.service.xxx(params).then(({ data: { status } }) => {
                if (status === 1) {
                    this.$uixNotify.success('lalal');
                    this.$uixModalInstance.dismiss('ok');
                    this.parent.getList();
                }
                else {
                    this.submitFlag = false;
                }
            }, () => this.submitFlag = false);
        }

        
    }

    return {
        template: __inline('./template.html'),
        controllerAs: 'vm',
        controller: {{modelName}}Ctrl
    };
});
