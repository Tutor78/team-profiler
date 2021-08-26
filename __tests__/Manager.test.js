const Manager = require('../lib/Manager');

test('create a new manager object', () => {
    const manager = new Manager('Steve', '2243', 'steve@work.com', '2');

    expect(manager.name).toBe('Steve');
    expect(manager.id).toBe('2243');
    expect(manager.email).toBe('steve@work.com');
    expect(manager.officeNumber).toBe('2');
});

test("gets the manager's role", () => {
    const manager = new Manager('Steve', '2243', 'steve@work.com', '2');

    expect(manager.getRole()).toBe('Manager');
});