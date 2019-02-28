app.controller('brandController',function($scope,$http,brandService){
    //查询所有
    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.list=response;
            }
        )
    };

    //分页组件相关属性配置
    $scope.paginationConf={
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };

    //刷新列表
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
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

    //定义存放删除元素id的数组
    $scope.delIds=[];

    //删除元素id数组 维护
    $scope.updateSelectIds=function($event,id){
        if($event.target.checked){
            $scope.delIds.push(id);
        }else{
            var index = $scope.delIds.indexOf(id);
            $scope.delIds.splice(index,1);
        }
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