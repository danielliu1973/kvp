var app = angular.module('app', []);

app.controller('HeaderCtrl', ['$scope', 'model', function($scope, model){
	$scope.kv_input = '';
	$scope.message = '';
	$scope.kv_enter = function(e){
		e.keyCode === 13 ? $scope.add() : '';
	};
	$scope.add = function(){
		var kv = $scope.kv_input;
		var patt0 = /\w+\s*=\s*\w+/g;
		var patt1 = /(^[a-zA-Z0-9\s*]*$)/g;
		if(patt0.test(kv) && patt1.test(kv.replace('=', ''))){
			kv = kv.split('=');
			kv[0] = kv[0].trim();
			kv[1] = kv[1].trim();
			model.add(kv[0], kv[1]);
			$scope.kv_input = '';
		}else{
			$scope.message = 'Invalid key/value pair';
		}
	};
}]);

app.controller('BodyCtrl', ['$scope', 'model', function($scope, model){
	$scope.$watchCollection(model.getdata, function(new_value,old_value){
		$scope.kv_array = new_value;
	});
}]);

app.factory('model', [function(){
	var kv_array = [], selected = -1;
	return{
		add : function(key, value){
			kv_array.push({key : key,value : value});
		},
		set_selected : function(index){
			selected = index;
		},
		remove : function(){
		    selected !== -1 ? kv_array.splice(selected, 1) : '';
		    selected = -1;
		},
		sort_key : function(){
			kv_array.sort(function(a, b){
			    var aa = a.key, bb = b.key;
			    return aa < bb ? -1 : (aa > bb ? 1 : 0);
			});
			return kv_array;
		},
		sort_value : function(){
			kv_array.sort(function(a, b){
			    var aa = a.value, bb = b.value;
			    return aa < bb ? -1 : (aa > bb ? 1 : 0);
			});
			return kv_array;
		},
		xml : function(){
			var kv_xml = "<!DOCTYPE html>\n";
			kv_xml += "<html>\n<body>\n";

			kv_xml += "<select id='kv-list' size='10'>\n";
			kv_array.map(function(c, i){
				kv_xml += "<option value='" + c.key + "'" ;
		    	kv_xml += selected === i ? " selected" : "" ;
		        kv_xml += ">" + c.key + '=' + c.value + "</option>\n";
			});
		    kv_xml += "</select>";
		    kv_xml += "\n</body>\n</html>\n";
		    return kv_xml;
		},
		getdata : function(){
			return kv_array;
		}
	};
}]);

app.directive('headerPanel', function(){
	return {
		templateUrl: 'header.html'
    };
});

app.directive('bodyPanel', function(){
	return {
		templateUrl: 'body.html'
    };
});
