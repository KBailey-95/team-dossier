const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kirk', '123', 'kirk6877@gmail.com', 'KBailey95');

test('test constructor value for engineer object', () => {
	expect(engineer.name).toBe('Kirk');
	expect(engineer.id).toBe('123');
	expect(engineer.email).toBe('kirk6877@gmail.com');
	expect(engineer.github).toBe('KBailey95');
});

test('test getName() method', () => {
	expect(engineer.getName()).toBe('Kirk');
});

test('test getId() method', () => {
	expect(engineer.getID()).toBe('123');
});

test('test getEmail() method', () => {
	expect(engineer.getEmail()).toBe('kirk6877@gmail.com');
});

test('test getGithub() method', () => {
	expect(engineer.getGithub()).toBe('KBailey95');
});

test('test getRole() method', () => {
	expect(engineer.getRole()).toBe('Engineer');
});