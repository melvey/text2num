jest.dontMock('../text2num');

describe('text2num', function() {
	it('convert 25', function() {
		var text2num = require('../text2num').text2num;
		expect(text2num('twenty five')).toBe(25);
	});
	
	if('convert 30', function() {
		var text2num = require('../text2num').text2num;
		expect(text2num('three hundred')).toBe(300);
	})
	
	it('convert 4500', function() {
		var text2num = require('../text2num').text2num;
		expect(text2num('four thousand five hundred')).toBe(4500);
	});
});