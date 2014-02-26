$(function() {
	var urlHash;
	window.onpopstate = function() {
		checkNav();
		checkURL();
	}
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
	function navigatePlay(){
		navExtras();
		$("#playSection").addClass("show");
		window.location.href = '#play';
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
		if (url !== urlHash){
			urlHash = url;
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
				case 'play':
					navigatePlay();
					break;
				case 'contact':
					navigateContact();
					break;
				default:
					navigateHome();
					break;
			}
		}
	}
	function checkNav(){
		if ($(".navbar-toggle").hasClass("collapsed") != true ){
			$(".navbar-toggle").trigger("click");
		}
	}
	function setupClick(){
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
		$("#navPlay").on("click", function(){
			navigatePlay();
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
	setupClick();
	checkURL();
});