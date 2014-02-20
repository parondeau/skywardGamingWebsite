function navigateHome(){
	$(".mainBody > *").removeClass("show");
	$(".mainSection").addClass("show");
	window.location.href = '#home';
}
function navigateRules(){
	$(".mainBody > *").removeClass("show");
	$(".rulesSection").addClass("show");
	window.location.href = '#rules';
}
function navigateOdds(){
	$(".mainBody > *").removeClass("show");
	$(".oddsSection").addClass("show");
	window.location.href = '#odds';
}
function navigateHistory(){
	$(".mainBody > *").removeClass("show");
	$(".historySection").addClass("show");
	window.location.href = '#history';
}
function navigateContact(){
	$(".mainBody > *").removeClass("show");
	$(".contactSection").addClass("show");
	window.location.href = '#contact';
}
function checkURL(){
	url = window.location.hash;
	url = url.replace(/^\#/,'');
	switch (url){
		case 'rules':
			navigateRules();
			break;
		case 'odds':
			navigateOdds();
			break;
		case 'history':
			navigateHistory();
			break;
		case 'contact':
			navigateContact();
			break;
		default:
			navigateHome();
			break;
	}
}

function onLoad(){
	checkURL();
	$("#navHome").on("click", function(){
		navigateHome();
	});
	$("#navRules").on("click", function(){
		navigateRules();
	});
	$("#navOdds").on("click", function(){
		navigateOdds();
	});
	$("#navStory").on("click", function(){
		navigateHistory();
	});
	$("#navContact").on("click", function(){
		navigateContact();
	});
	$(".business-header").on("click", function(){
		navigateRules();
	});
	$("#mainRulesSection").on("click", function(){
		navigateRules();
	});
	$("#mainOddsSection").on("click", function(){
		navigateOdds();
	});
	$("#mainHistorySection").on("click", function(){
		navigateHistory();
	});
}