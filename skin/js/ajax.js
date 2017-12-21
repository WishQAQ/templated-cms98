$(document).ready(function(){
	$("#t_id").change(function(){
		var t_id=$(this).val();
		$("#getPid").load("proname.php?tid="+t_id);
	});
})

function ckvaild (inp) {
	$.ajax({type:"GET", url:"ajax.php?r="+Math.random()+'&vaild='+inp.value, dataType:"text",async:false,error:function(err){alert(err);},success:function (msg){
		r = msg;
	}}); 

	if (r==0) {
		return false;
	} else {
		return true;
	}
}