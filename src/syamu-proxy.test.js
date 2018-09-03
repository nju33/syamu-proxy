const syamuProxy = require('./syamu-proxy');

describe('proxy', () => {
	test('', () => {
		const obj = syamuProxy({
			num: 28,
			get num2() {
				return this.num;
			},
			str: 'a',
			get str2() {
				return this.str;
			},
			arr: ['foo', 'bar'],
			obj: {
				foo: 'foo',
				bar: 'bar'
			},
			null: null,
			undefined
		});

		expect(obj.num).toBe(0);
		expect(obj.num2).toBe(0);
		expect(obj.str).toBe('');
		expect(obj.str2).toBe('');
		expect(obj.arr).toMatchObject([]);
		expect(obj.obj).toMatchObject({});
		expect(obj.null).toBe(null);
		expect(obj.undefined).toBe(undefined);
	});
});
