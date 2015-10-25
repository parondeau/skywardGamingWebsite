$(function() {
	var urlHash;
	window.onpopstate = function() {
		checkNav();
		checkURL();
	};

	function navigateHome() {
		navExtras();
		$("#mainSection").addClass("show");
		window.location.href = '#home';
	}

	function navigateStory() {
		navExtras();
		$("#storySection").addClass("show");
		window.location.href = '#story';
	}

	function navigateGames() {
		navExtras();
		$("#gamesSection").addClass("show");
		window.location.href = '#games';
	}

	function navigateContact() {
		navExtras();
		$("#contactSection").addClass("show");
		window.location.href = '#contact';
	}

	function navExtras() {
		document.body.scrollTop = 0;
		$(".mainBody > *").removeClass("show");
	}

	function checkURL() {
		url = window.location.hash;
		url = url.replace(/^\#/,'');
		if (url !== urlHash){
			urlHash = url;
			switch (url){
				case 'story':
					navigateStory();
					break;
				case 'games':
					navigateGames();
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

	function checkNav() {
		if ($(".navbar-toggle").hasClass("collapsed") !== true ) {
			$(".navbar-toggle").trigger("click");
		}
	}

	function setupClick() {
		$("nav a, #descriptions > div").on("click", nav);
		$(".gamesBox > div").on("click", function(e) {
			window.location.href = $(e.target).closest(".game")[0].id + ".html";
		});
	}

	function nav(e) {
		var target = $(e.target).closest(".nav_item")[0].classList;
		if (target.contains("nav_story")) {
			navigateStory();
		} else if (target.contains("nav_games")) {
			navigateGames();
		} else if (target.contains("nav_contact")) {
			navigateContact();
		} else {
			navigateHome();
		}
	}

	setupClick();
	checkURL();
});
