/**
 * @file service.js
 * @author zhouyinian (zhouyinian@meituan.com)
 * @description {{chineseName}}
 * @ngdoc service
 * @name {{detailName}}Services
 */

define(['app'], function (app) {

    app.factory('{{detailName}}Service', service);

    service.$inject = ['$http'];

    // 获取详情
    const getDetail = params => service.$http({
        method: 'get',
        url: basePath + '',
        params
    });
    
    function service($http) {
        service.$http = $http;
        return {
            getDetail
        };
    }
});
