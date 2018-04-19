var dnsAdClasses = ['1','2'];
var dnsAdIds = ['1','2'];

for (var i = 0; i < dnsAdClasses.length; i++) {
	document.getElementsByClassName(dnsAdClasses[i])[0].style.display = 'none'
}

for (var i = 0; i < dnsAdIds.length; i++) {
	document.getElementById(dnsAdIds[i]).style.display = 'none'
}