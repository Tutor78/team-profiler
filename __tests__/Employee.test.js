const Employee = require('../lib/Employee');

test('create a new employee', () => {
    const employee = new Employee('Dave', '1423', 'dave@work.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1423');
    expect(employee.email).toBe('dave@work.com');
})

test('return the employees name', () => {
    const employee = new Employee('Dave', '1423', 'dave@work.com');

    expect(employee.getName()).toBe('Dave');
});

test('return employee id', () => {
    const employee = new Employee('Dave', '1423', 'dave@work.com');

    expect(employee.getId()).toBe('1423');
});

test('return employee email', () => {
    const employee = new Employee('Dave', '1423', 'dave@work.com');

    expect(employee.getEmail()).toBe('dave@work.com');
});

test('return employee role', () => {
    const employee = new Employee('Dave', '1423', 'dave@work.com');

    expect(employee.getRole()).toBe('Employee');
})
