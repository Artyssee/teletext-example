// Global debounce function
const debounce = (func: () => {}, wait: number) => {
	let timeout: number;

	return function executedFunction(...args: []) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export default debounce;
