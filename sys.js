;(function(){
	var lis=document.querySelectorAll('.title-list li');
	var showContent=document.getElementById('show');
	var leftArea=document.querySelector('.left-area');
	var leftUl=document.createElement('ul');
	var showOneContent=document.getElementById('show-first');
	var spanTitle=document.querySelector('.forward-title span');
	var forwardTitle=document.querySelector('.forward-title');
	var rightContents=document.querySelectorAll('.right-area');		
	
	var lisArr=[];
	var n=0;
	for(var i=1;i<lis.length;i++){		
		if(i<lis.length-1){
			lisArr.push(lis[i])
		}
	}
	lis[0].onclick=function(){
		this.className='active';
		for(let i=0;i<lisArr.length;i++){
			lisArr[i].className='';
		}
		leftArea.innerHTML='';
		showContent.innerHTML='System notification';
		forwardTitle.innerHTML='';
	}
	var contentArr=['Parenting assistant','Child rearing',
	'user management','community','Operating tools','Feedback Management','activity',
	'adviertisement','Mother group','Parent-child tabloid','Listen to the baby'];
	
	for(let i=0;i<lisArr.length;i++){
		lisArr[i].index=i;
		lisArr[i].onclick=function(){
			for(let j=0;j<lisArr.length;j++){				
				lisArr[j].className='';
			}
			var That=this;
			lis[0].className='';
			this.className='active';
			forwardTitle.style.display='none';
			showContent.style.display='block';	
			showContent.innerHTML=contentArr[i];
			forwardTitle.innerHTML='';			
			leftUl.innerHTML='';
			
			for(let j=1;j<5;j++){
				var li=document.createElement('li');			
				li.innerHTML=this.innerHTML+j;
				leftUl.appendChild(li)
			}			
			leftArea.innerHTML='<h3>'+this.innerHTML+'</h3>';
			leftArea.appendChild(leftUl);
			var leftLis=leftUl.getElementsByTagName('li');
			
			var arr1=[];
			var arr2=[];
			//var arr3=[];

			for(let i=0;i<leftLis.length;i++){
				leftLis[i].index=i;
				leftLis[i].mark=false;
				leftLis[i].onclick=function(){
					for(let j=0;j<leftLis.length;j++){				
						leftLis[j].className='';
						rightContents[j].style.display='none';
					}
					this.className='active';					
					var This=this;
					if(!this.mark){
						this.mark=true;
						
						forwardTitle.style.display='block';
						showContent.style.display='none';
						
						arr1.push(this);
						
						rightContents[this.index].style.display='block';
						var oli=document.createElement('li');
						oli.innerHTML='<span>'+this.innerHTML+'</span>';
						var a=document.createElement('a');
						oli.appendChild(a);
						arr2.push(oli);
						for(let j=0;j<arr2.length;j++){							
							arr2[j].className='';						
						}
						oli.className='active';
						forwardTitle.appendChild(oli);	
						//var olis=forwardTitle.getElementsByTagName('li');
						
						deleteContent();						
						function deleteContent(){
							var as=forwardTitle.getElementsByTagName('a');																											
							for(let j=0;j<as.length;j++){
								as[j].index=j;																							
								if(as.length==1){
									as[j].onclick=function(){
										forwardTitle.removeChild(this.parentNode);
										arr1[this.index].className='';
										arr1[this.index].mark=false;
										showContent.style.display='block';	
										showContent.innerHTML=contentArr[That.index];
										console.log(9);
										
										deleteContent();
										arr1.splice(this.index,1);
										arr2.splice(this.index,1);
									}
							    }else if(as[j]==as[as.length-1]){
							    	as[j].onclick=function(){
										forwardTitle.removeChild(this.parentNode);
										arr1[this.index].className='';
										arr1[this.index].mark=false;
										arr2[this.index-1].className='active';
										arr1[this.index-1].className='active';
										console.log(10);
										for(let j=0;j<rightContents.length;j++){															
											rightContents[j].style.display='none';
										}
										for(let j=0;j<arr1.length;j++){
											if(arr1[j].className=='active'){
												rightContents[arr1[j].index].style.display='block';
											}
										}
										deleteContent()
										arr1.splice(this.index,1);
										arr2.splice(this.index,1);
		
									}
							    }else{
							    	as[j].onclick=function(){
										forwardTitle.removeChild(this.parentNode);
										arr1[this.index].className='';
										arr1[this.index].mark=false;
										if(this.parentNode.className=='active'){
											rightContents[this.index].style.display='none';											
											arr2[this.index+1].className='active';
											arr1[this.index+1].className='active';

										}
										for(let j=0;j<rightContents.length;j++){															
											rightContents[j].style.display='none';
										}
										for(let j=0;j<arr1.length;j++){
											if(arr1[j].className=='active'){
												rightContents[arr1[j].index].style.display='block';
											}
										}
										
										console.log(11)
										deleteContent();
										arr1.splice(this.index,1);	
										arr2.splice(this.index,1);
									}
							    }
							}
						}
						
					}else{
						showContent.style.display='none';
						rightContents[this.index].style.display='block';
						for(let j=0;j<arr2.length;j++){
							arr2[j].className='';						
						}
						
						for(let j=0;j<arr1.length;j++){
							if(this==arr1[j]){
								arr2[j].className='active';
							}
						}												
					};
					
					/*for(let j=0;j<arr2.length;j++){
						if(arr2[j].className==''){
							arr3.push(arr2[j])
						}
					};
					for(let j=0;j<arr3.length;j++){
						arr3[j].onclick=function(){
							for(let i=0;i<arr2.length;i++){
								arr2[i].className='';						
							};
							this.className='active';
						}
					};*/
					
				}
			}
		}
	}
			
})()

;(function(){
	var hideContents=document.querySelectorAll('.details .hideContent');
	var spansList=document.querySelectorAll('.details .spans');
	
	for(let i=0;i<spansList.length;i++){
		spansList[i].index=i;
		spansList[i].onclick=function(){
			
			if(this.className=='spans'){
				for(let j=0;j<spansList.length;j++){
					hideContents[j].style.display='none'
					spansList[j].className='spans';
				}
				this.className='spans clicked';
				hideContents[this.index].style.display='block';
				
			}else{				
				this.className='spans';
				hideContents[this.index].style.display='none';
			}
			console.log(this)
		}
	}
	console.log(liList)
})()
