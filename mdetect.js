function isUnicode() {
	var ka = document.createElement("div");
	ka.setAttribute("style", "float:left;");
	ka.innerHTML = "က";
	var patsint = document.createElement("div");
	patsint.setAttribute("style", "float:left;");
	patsint.innerHTML = "က္က";

	document.body.appendChild(ka);
	document.body.appendChild(patsint);
	kaWidth = ka.offsetWidth;
	patsintWidth = patsint.offsetWidth;
	document.body.removeChild(ka);
	document.body.removeChild(patsint);

	return (kaWidth == patsintWidth);
}

