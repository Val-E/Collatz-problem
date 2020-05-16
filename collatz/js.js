function calc()
     {
			var i = document.getElementById("i").value;
			var list = [];
			
			while (i != 1)	{
					if (i % 2 === 0) {
						var i = (i)/2;	
						document.getElementById("show").innerHTML=i;
						list.push(i);
					}
					
					else { 
						var i = (i*3) + 1;
						list.push(i);	
					}
				}
     			document.getElementById("show").innerHTML=list;		
     	}
     		