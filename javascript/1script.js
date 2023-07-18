                function addclass(obj,cn){
					if(!hasclass(obj,cn)){
						obj.className+=" "+cn;
					}
				};
				// 判断是否有指定class
				function hasclass(obj,cn){
					var reg=new RegExp("\\b"+cn+"\\b");
					 return reg.test(obj.className);
				}
				// 删除指定class
				function removeclass(obj,cn){
					var reg=new RegExp("\\b"+cn+"\\b");
					obj.className=obj.className.replace(reg,"");
				}
				// 切换一个类 如果有则删除，如果没有则添加
				function toggleClass(obj,cn){
					if(hasclass(obj,cn)){
						removeclass(obj,cn);
					}else{
						addclass(obj,cn);
					}
				}
				function move(obj,target,speed,attr,callback){
					clearInterval(obj.timer);
					var lt=parseInt(getComputedStyle(obj,null)[attr])+speed+"px"; 
					if(parseInt(lt)>target){
						speed=-speed;
					}
					obj.timer=setInterval(function(){
						lt=parseInt(getComputedStyle(obj,null)[attr])+speed+"px"; 
						if(parseInt(lt)>target&&speed>0||speed<0&&parseInt(lt)<target){
							lt=target+"px";
						}
						obj.style[attr]=lt;
						if(parseInt(lt)==target){
							clearInterval(obj.timer);
							callback && callback();
						}
					},30);
				};