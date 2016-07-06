/**
 * [scrollBottom description]
 * @param  {[type]} elem   [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export function scrollBottom(elem, action) {
	if (elem && action) {
		const docHeight = elem.scrollHeight ? elem.scrollHeight : elem.offsetHeight;
		const winHeight = elem.innerHeight ? elem.innerHeight : elem.clientHeight;
		const scrollPoint = elem.scrollY ? elem.scrollY : elem.scrollTop;

		if ((scrollPoint + winHeight) === docHeight && action) {
			action();
		}
	}
}