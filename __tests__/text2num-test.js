jest.dontMock('../src/text2num');

describe('text2num', function() {
	'use strict';
	var text2num = require('../src/text2num').text2num;
	
	var throwError = function() {
		text2num('lkajsdfas');
	};
	
	it('invalid input', function() {
		expect(throwError).toThrow();
	});
	
	it('convert 25', function() {
		expect(text2num('twenty five')).toBe(25);
	});
	
	it('convert 300', function() {
		expect(text2num('three hundred')).toBe(300);
	});

	it('convert 674', function() {
		expect(text2num('six hundred and seventy four')).toBe(674);
	});

	it('convert 4500', function() {
		expect(text2num('four thousand five hundred')).toBe(4500);
	});
	
	it('convert with dashses', function() {
		expect(text2num('four-thousand-five-hundred')).toBe(4500);
	});
});
