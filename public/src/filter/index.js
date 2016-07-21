export default {
	parsePubDate(time) {
		const year = time.getFullYear();
		const month = time.getMonth() + 1;
		const day = time.getDate();
		return '发布于:${year}-${month}-${day}';
	}
};