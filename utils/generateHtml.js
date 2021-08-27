// imports function to write file to the dist folder
const writeFile = require('./writeFile');

// sets the array to hold the html from the cards
const htmlArr = [];

// function that creates the manager card
function managerCard(name, id, email, officeNumber) {
    return `
            <div class="col-12 col-md-3 mx-2 my-3">
                <div class="card shadow" style="width: 18rem;">
                    <div class="card-body p-0">
                        <div class="card-title text-center bg-primary text-white p-3 rounded shadow-sm">
                            <h4>${name}</h4>
                            <h4><i class="fas fa-mug-hot mx-2"></i>Manager</h4>
                        </div>
                        <div class="card-text p-2">
                            <h5 class="col-12 border p-1 rounded shadow-sm">ID: ${id}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">Email: ${email}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">Office: ${officeNumber}</h5>
                        </div>
                    </div>
                </div>
            </div>
    `
};

// function that creates the engineer card
function engineerCard(name, id, email, github) {
    return `
            <div class="col-12 col-md-3 mx-2 my-3">
                <div class="card shadow" style="width: 18rem;">
                    <div class="card-body p-0">
                        <div class="card-title text-center bg-primary text-white p-3 rounded shadow-sm">
                            <h4>${name}</h4>
                            <h4><i class="fas fa-glasses mx-2"></i>Engineer</h4>
                        </div>
                        <div class="card-text p-2">
                            <h5 class="col-12 border p-1 rounded shadow-sm">ID: ${id}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">Email: ${email}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">Github: ${github}</h5>
                        </div>
                    </div>
                </div>
            </div>
    `
};

// function that creates the intern card
function internCard(name, id, email, school) {
    return `
            <div class="col-12 col-md-3 mx-2 my-3">
                <div class="card shadow" style="width: 18rem;">
                    <div class="card-body p-0">
                        <div class="card-title text-center bg-primary text-white p-3 rounded shadow-sm">
                            <h4>${name}</h4>
                            <h4><i class="fas fa-user-graduate mx-2"></i>Intern</h4>
                        </div>
                        <div class="card-text p-2">
                            <h5 class="col-12 border p-1 rounded shadow-sm">ID: ${id}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">Email: ${email}</h5>
                            <h5 class="col-12 border p-1 rounded shadow-sm">School: ${school}</h5>
                        </div>
                    </div>
                </div>
            </div>
    `
}

// function that holds the template and creates the final html to be written to a file
function generateHtml(employeeHtml) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Team Profiler</title>
</head>
<body>
    <header>
        <h1 class="text-center bg-secondary text-warning py-2">Team Profiler</h1>
    </header>

    <section class="container">
        <div class="row">
            <h2 class="text-center bg-dark text-white py-3 rounded">My Team</h2>
        </div>
        <div class="row justify-content-center">
            ${employeeHtml}
        </div>
    </section>

    <script src="https://kit.fontawesome.com/b355c8aa28.js" crossorigin="anonymous"></script>
</body>
</html>
    `
};

// dynamically generates the html depending on the employee array and then creates the file itself in the dist folder
function createHtmlFile(employeeArr) {
    for (let i = 0; i < employeeArr.length; i++) {
        let employee = employeeArr[i];

        // runs through the employee array and dynamically generates html cards depending on what the role of the person is
        if (employee.role === 'Manager') {
            // pushes the manager card to the html array
            htmlArr.push(managerCard(employee.name, employee.id, employee.email, employee.officeNumber));
        } else if (employee.role === 'Engineer') {
            // pushes the engineer card to the html array
            htmlArr.push(engineerCard(employee.name,employee.id, employee.email, employee.github));
        } else if (employee.role === 'Intern') {
            // pushes the intern card to the html array
            htmlArr.push(internCard(employee.name, employee.id, employee.email, employee.school));
        }
    }

    // joins the html array so that it can be inserted into the html template
    const employeeHtml = htmlArr.join('');

    // write the final html file to the dist folder
    writeFile(generateHtml(employeeHtml));

    console.log('Your team profile has been created in the dist folder!');
};

module.exports = createHtmlFile;
