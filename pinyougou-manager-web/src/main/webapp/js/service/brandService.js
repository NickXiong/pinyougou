app.service("brandService",function($http){
    this.findAll=function(){
        return $http.get('../brand/findAll.do');
    };

    this.add=function(entity){
        return $http.post("../brand/save.do",entity);
    }

    this.update=function(entity){
        return $http.post("../brand/update.do",entity);
    }

    this.findOne=function(id){
        return $http.get("../brand/findOne.do?id="+id);
    }

    this.dele=function(delIds){
        return $http.get("../brand/delete.do?ids="+delIds);
    }

    this.search=function(page,size,brand){
        return $http.post("../brand/search.do?page="+page+"&size="+size,brand)
    }
});