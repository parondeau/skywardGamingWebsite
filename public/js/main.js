function navigateHome(){
	navExtras();
	$("#mainSection").addClass("show");
	window.location.href = '#home';
}
function navigateRules(){
	navExtras();
	$("#rulesSection").addClass("show");
	window.location.href = '#rules';
}
function navigateOdds(){
	navExtras();
	$("#oddsSection").addClass("show");
	window.location.href = '#odds';
}
function navigateHistory(){
	navExtras();
	$("#historySection").addClass("show");
	window.location.href = '#history';
}
function navigateContact(){
	navExtras();
	$("#contactSection").addClass("show");
	window.location.href = '#contact';
}
function navExtras(){
	document.body.scrollTop = 0;
	$(".mainBody > *").removeClass("show");
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