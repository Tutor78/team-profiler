const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Carla', '1132', 'carla@work.com', 'Carla123');

    expect(engineer.name).toBe('Carla');
    expect(engineer.id).toBe('1132');
    expect(engineer.email).toBe('carla@work.com');
    expect(engineer.github).toBe('Carla123');
});

test("returns engineer's github", () => {
    const engineer = new Engineer('Carla', '1132', 'carla@work.com', 'Carla123');

    expect(engineer.getGithub()).toBe('Carla123');
});

test('return engineer role', () => {
    const engineer = new Engineer('Carla', '1132', 'carla@work.com', 'Carla123');

    expect(engineer.getRole()).toBe('Engineer');
});