const Intern = require('../lib/Intern');

test('create new intern obect', () => {
    const intern = new Intern('Kevin', '0021', 'kevin@work.com', 'UCF');

    expect(intern.name).toBe('Kevin');
    expect(intern.id).toBe('0021');
    expect(intern.email).toBe('kevin@work.com');
    expect(intern.school).toBe('UCF');
});

test("return intern's school", () => {
    const intern = new Intern('Kevin', '0021', 'kevin@work.com', 'UCF');

    expect(intern.getSchool()).toBe('UCF');
});

test("return intern's role", () => {
    const intern = new Intern('Kevin', '0021', 'kevin@work.com', 'UCF');

    expect(intern.getRole()).toBe('Intern');
});