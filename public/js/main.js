function onLoad(){
	$("#navHome").on("click", function(){
		$(".mainBody > *").removeClass("show");
		$(".mainSection").addClass("show");
	});
	$("#navGame").on("click", function(){
		$(".mainBody > *").removeClass("show");
		$(".gameSection").addClass("show");
	});
	$("#navStory").on("click", function(){
		$(".mainBody > *").removeClass("show");
		$(".historySection").addClass("show");
	});
	$("#navContact").on("click", function(){
		$(".mainBody > *").removeClass("show");
		$(".contactSection").addClass("show");
	});
	$(".business-header").on("click", function(){
		$(".mainSection").removeClass("show");
		$(".gameSection").addClass("show");
	});
	$("#mainGameSection").on("click", function(){
		$(".mainSection").removeClass("show");
		$(".gameSection").addClass("show");
	});
	$("#mainHistorySection").on("click", function(){
		$(".mainSection").removeClass("show");
		$(".historySection").addClass("show");
	});
	$("#mainContactSection").on("click", function(){
		$(".mainBody > *").removeClass("show");
		$(".contactSection").addClass("show");
	});
}