const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');
const intern = new Intern('Kirk', '123', 'kirk6877@gmail.com', 'UGA');

test('test constructor value for intern object', ()=>{
    expect(intern.name).toBe('Kirk');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('kirk6877@gmail.com');
    expect(intern.school).toBe('UGA');
});

test('test getName() method', ()=> {
    expect(intern.getName()).toBe('Kirk');
});

test('test getId() method', ()=> {
    expect(intern.getID()).toBe('123');
});

test('test getEmail() method', ()=> {
    expect(intern.getEmail()).toBe('kirk6877@gmail.com');
});

test('test getSchool() method', ()=> {
    expect(intern.getSchool()).toBe('UGA');
});

test('test getRole() method', ()=> {
    expect(intern.getRole()).toBe('Intern');
});