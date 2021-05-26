(function(){
    var modules={
        "panel-main-z-drug":    			 {url:"$H/m/elig-questions-data.html",Table:"z-drug-recruitment-record",form_module:"elig-questions-form"},
        "elig-questions-form":    			 {url:"$H/m/elig-questions-form.html",Table:"z-drug-recruitment-record"},
        "panel-main-z-drug-eligible":      {url:"$H/m/elig-questions-eligible-data.html",Table:"z-drug-recruitment-record",form_module:"panel-main-z-drug-eligible-form"},
        "panel-main-z-drug-eligible-form":		    {url:"$H/m/elig-questions-eligible-form.html",Table:"z-drug-recruitment-record"},
        "panel-main-z-drug-non-eligible":  {url:"$H/m/elig-questions-non-eligible-data.html",Table:"z-drug-recruitment-record"},
        "z-drug-comments":            {url:"$H/m/comments-form.html",Table:"z-drug-recruitment-record",task_name:"Comments"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
