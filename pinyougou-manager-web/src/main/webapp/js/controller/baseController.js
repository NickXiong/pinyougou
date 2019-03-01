app.controller('baseController',function($scope){

    //刷新列表
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
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


    //定义存放删除元素id的数组
    $scope.selectIds=[];

    //删除元素id数组 维护
    $scope.updateSelectIds=function($event,id){
        if($event.target.checked){
            $scope.selectIds.push(id);
        }else{
            var index = $scope.delIds.indexOf(id);
            $scope.selectIds.splice(index,1);
        }
    };

})