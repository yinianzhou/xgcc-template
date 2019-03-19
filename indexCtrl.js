/**
 * @file indexCtrl.js
 * @author zhouyinian (zhouyinian@meituan.com)
 * @description {{chineseName}}controller
 * @ngdoc controller
 * @name  SpuManageCtrl
 */

define([
    'app',
    './service'
], function (app) {
    const DEFAULT_VAL = { name: '全部' };
    class Ctrl {
        static $inject = [
            'Page',
            '{{componentName}}Service',
            '$stateParams',
            'dateFilter',
            'cacheParams',
            '$uixModal',
            '$state'
        ];
        constructor(...args) {
            let [Page,{{componentName}}Service,$stateParams,dateFilter,cacheParams,$uixModal,$state] = args;
            this.Page = Page;
            this.service = {{componentName}}Service;
            this.$stateParams = $stateParams;
            this.dateFilter = dateFilter;
            this.cacheParams = cacheParams;
            this.$uixModal = $uixModal;
            this.$state = $state;
            this.dateFormat = 'yyyy-MM-dd';
            this.pages = {
                pageNo: 1,
                pageSize: 20,
                totalCount: 0,
                totalPageCount: 1
            };
            
            this.list = [];
            Page.setTitle('{{chineseName}}');
            this.initParams();
            this.getList();
        }


        // 初始化显示和查询参数
        initParams() {
            this._initParams = {
                
            };
            this.showParams = this.cacheParams.getParams() || angular.copy(this._initParams);
            this.params = this.cacheParams.getParams() || angular.copy(this.showParams);

            // 获取包装物类目
            this.changeSkuType();
        }

        // 封装查询参数
        getListParams() {
            let listParams = {};
            const { pageNo, pageSize } = this.pages;

            return { pageNo, pageSize, ...listParams };
        }

        //获取列表
        getList() {
            this.tableLoader = 1;
            this.service.getList(this.getListParams()).then(({ data: { data, code } }) => {
                if (code === 200) {
                    this.list = data.pageContent;
                    this.tableLoader = this.list.length ? 0 : 2;
                    this.pages.totalCount = data.page.totalCount;
                } else {
                    this.tableLoader = -1;
                }
            }, () => {
                this.tableLoader = -1;
            });
        }

        // 搜索
        search() {
            this.pages.pageNo = 1;
            this.pages.totalCount = 0;
            this.params = angular.copy(this.showParams);
            this.getList();
        }

        // 重置
        reset() {
            this.showParams = angular.copy(this._initParams);
        }

    }

    app.controller(componentName, Ctrl);

    return {
        _tpl: __inline('./template.html')
    };
});
