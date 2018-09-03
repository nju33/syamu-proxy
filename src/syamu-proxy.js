module.exports = object => {
	return new Proxy(object, {
		get(target, propName) {
			const value = target[propName];

			if (value === null) {
				return null;
			}

			if (typeof value === 'undefined') {
				return undefined;
			}

			if (typeof value === 'number') {
				return 0;
			}

			if (typeof value === 'string') {
				return '';
			}

			if (Array.isArray(value)) {
				return [];
			}

			if (typeof value === 'object') {
				return {};
			}

			// eslint-disable-next-line prefer-rest-params
			return Reflect.get(...arguments);
		}
	});
};
