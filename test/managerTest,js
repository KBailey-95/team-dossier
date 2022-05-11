const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
const manager = new Manager('Kirk', '123', 'kirk6877@gmail.com', '404');

test('test constructor value for manager object', ()=>{
    expect(manager.name).toBe('Kirk');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('kirk6877@gmail.com');
    expect(manager.officeNumber).toBe('404');
});

test('test getName() method', ()=> {
    expect(manager.getName()).toBe('Kirk');
});

test('test getId() method', ()=> {
    expect(manager.getID()).toBe('123');
});

test('test getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('kirk6877@gmail.com');
});

test('test getOfficeNumber() method', ()=> {
    expect(manager.getOfficeNumber()).toBe('404');
});

test('test getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});