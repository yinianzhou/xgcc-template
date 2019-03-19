/**
 * @file service.js
 * @author zhouyinian (zhouyinian@meituan.com)
 * @description {{chineseName}}
 * @ngdoc service
 * @name {{componentName}}Services
 */

define(['app'], function (app) {

    app.factory('{{componentName}}Services', service);

    service.$inject = ['$http'];

    // 获取列表
    const getList = params => service.$http({
        method: 'get',
        url: basePath + '',
        params
    });
    
    function service($http) {
        service.$http = $http;
        return {
            getList
        };
    }
});
