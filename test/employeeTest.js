const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');
const employee = new Employee('Kirk', '123', 'kirk6877@gmail.com');

test('test constructor value for employee object', ()=>{
    expect(employee.name).toBe('Kirk');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('kirk6877@gmail.com');
});

test('test getName() method', ()=> {
    expect(employee.getName()).toBe('Kirk');
});

test('test getId() method', ()=> {
    expect(employee.getID()).toBe('123');
});

test('test getEmail() method', ()=> {
    expect(employee.getEmail()).toBe('kirk6877@gmail.com');
});

test('test getRole() method', ()=> {
    expect(employee.getRole()).toBe('Employee');
});