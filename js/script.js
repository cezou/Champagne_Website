window.onload = function () {
	var lang = window.location.search.split('=')[1];
	if (!lang) {
		lang = window.navigator.language.startsWith('fr') ? 'fr' : 'en';
	} if (lang === 'fr') {
		document.querySelector('.header-lang a[href="?lang=fr"]').classList.add('bold');
	} else if (lang === 'en') {
		document.querySelector('.header-lang a[href="?lang=en"]').classList.add('bold');
	}
	var translations = {
		fr: {
			"home.champagne": "NOS CHAMPAGNES",
			"home.domaine": "NOTRE DOMAINE",
			"home.approche": "NOTRE APPROCHE",
			"home.actu": "ACTUALITÉS",
			"home.contact": "NOUS CONTACTER"
		},
		en: {
			"home.champagne": "OUR CHAMPAGNES",
			"home.domaine": "OUR DOMAIN",
			"home.approche": "OUR APPROACH",
			"home.actu": "NEWS",
			"home.contact": "CONTACT US"
		}
	};

	for (var key in translations[lang]) {
		document.querySelector('.header-menu a[href="#' + key + '"]').textContent = translations[lang][key];
	}
};

window.addEventListener('DOMContentLoaded', (event) => {
	fetch('html/header.html')
		.then(response => response.text())
		.then(data => {
			document.querySelector('#header-container').innerHTML = data;
		});
	fetch('html/footer.html')
		.then(response => response.text())
		.then(data => {
			document.querySelector('#footer-container').innerHTML = data;
		});
});