function trickTinder() {
	var className = 'recsGamepad__button End(15px)';
	document.getElementsByClassName(className)[0].click();
	if (document.getElementsByClassName('productButton__subscriptionButton').length > 0) {
		var hms = document.getElementsByClassName('Fz($ml)')[0].textContent;
		var a = hms.split(':');
		var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
		
		return seconds * 1000;
	}
}

function getRandomPeriod() {
	return Math.round(Math.random() * (2000 - 500)) + 500;
}

(function looping() {
	var randomPeriod = getRandomPeriod();
	setTimeout(function() {
		randomPeriod = undefined;
        var delay	= trickTinder();
        if (delay) {
            console.log('Too many likes for now, have to wait: ' + delay + ' ms');
            randomPeriod = delay;
        }
		if (!randomPeriod) {
			looping();
		} else {
			setTimeout(looping, randomPeriod);
		}
	}, randomPeriod);
}());
