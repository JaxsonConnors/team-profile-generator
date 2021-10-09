const generateHTML = function (teamString) {
    return `<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<style>
</style>
</head>

<body>
    <div>
   <h1 class="text-center">Team Portfolio</h1>
    </div>
    <div class="container-body container-fluid">
       <div class="justify-content-center row">
            ${teamString} 
        </div>
    </div>
</body>
</html>
`
};

const generateEmpCard = function (arr) {

    let roleInfo;
    
    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }
    
    return `      
        <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
            <div class="card rounded">
                <div class="card-header">
                    <h4 class="text-center">${arr.name}</h4>
                    <h4 class="text-center">${arr.title}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li>Employee ID: ${arr.id}</li>
                        <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                        <li>${roleInfo}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

exports.generateHTML = generateHTML;
exports.generateEmpCard = generateEmpCard;