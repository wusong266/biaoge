window.onload=function(){
	let table =document.querySelector("table");
	let tab=document.querySelector("tbody");
	let but=document.querySelector(".but1");

	console.log(but);
	table.ondblclick=function(e){
		let ele=e.target;
		if(ele.nodeName=="TD"){
			let td=ele.innerText;    /*保存*/
			ele.innerText="";			/*清空*/
			let input=document.createElement("input"); /*创建*/

			ele.appendChild(input);		/*添加*/
			input.style.width=40+"px";
			input.value=td;			/*赋值*/

			input.setAttribute("autofocus","autofocus");  /*操作元素属性  自动获取光标*/
			input.focus();

			input.onblur=function(){  
				
				ele.removeChild(input);
				ele.innerText=input.value;
			}
		}else if(ele.nodeName=='BUTTON'){
			let trs = ele.parentNode.parentNode;
					tab.removeChild(trs);
		}

	}
	but.ondblclick=function(){
		let t=document.createElement("tr");
		tab.appendChild(t);
		t.innerHTML=`
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td class="but"> <button>删除</button></td>
			`
	}












}