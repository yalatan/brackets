module.exports = function check(str, bracketsConfig) {
  let br = str;
let maxcountpara = br.length;
	let result = 0;
	
	for(let i=0; i < maxcountpara ; i++){
		
		bracketsConfig.forEach(function(bracket){
	let para = bracket[0]+bracket[1];
	let ind = br.indexOf(para);
	while(ind > -1){
	br = br.replace( para, "" );
ind = br.indexOf(para);	
	}

if(br == ""){maxcountpara = 0}
	
	});
	if(br == ""){ result = true}else{result = false};
	};
	
return result;

}
