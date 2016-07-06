export function scrollBottom(elem, action) {
	if (elem && action) {
		const documentHeight = elem.scrollHeight ? elem.scrollHeight : elem.offsetHeight;
		const windowHeight = elem.innerHeight ? elem.innerHeight : elem.clientHeight;
		const scrollPosition = elem.scrollY ? elem.scrollY : elem.scrollTop;

		if ((scrollPosition + windowHeight) === documentHeight) {
			action();
		}
	}
	else {
		return new Error('Missing params');
	}
}