app.controller('brandController',function($scope,$controller,brandService){

    $controller('baseController',{$scope:$scope});//继承

    //查询所有
    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.list=response;
            }
        )
    };

    //新增品牌
    $scope.save=function(){
        var object = null;
        if($scope.entity.id!=null){
            object=brandService.update($scope.entity);
        }else{
            object=brandService.add($scope.entity);
        }
        object.success(
            function(response){
                if(response.success){
                    $scope.reloadList();
                }else{
                    alter(response.message)
                }
            }
        );
    };

    $scope.findOne=function(id){
        brandService.findOne(id).success(
            function(response){
                $scope.entity = response;
            }
        );
    };

    //删除品牌
    $scope.dele=function(){
        brandService.dele($scope.delIds).success(
            function(response){
                if(response.success){
                    $scope.reloadList();
                    $scope.delIds=[];
                }else{
                    alter(response.message)
                }
            }
        );
    };

    //初始化页面时，没有查询条件，查询bean为null
    $scope.searchBrand={};

    //分页查询 & 搜索
    $scope.search=function(page,size){
        brandService.search(page,size,$scope.searchBrand).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        )
    }
});