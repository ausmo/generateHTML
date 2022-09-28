const generateAllPeople = allPeople
const html = [];
const 


html.push(allPeople
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(allPeople
    .filter(employee => employee.getRole() === "Engineer")
    .map(manager => generateEngineer(engineer))
);
html.push(allPeople
    .filter(employee => employee.getRole() === "Intern")
    .map(manager => generateIntern(intern))
);



module.exports = allPeople => {

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Austin's Team Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="mt-4 p-5 bg-primary text-white rounded" id="jumbotron">
      <h1>Austin's Team Generator</h1>
      <p>Generate your work team!</p>
    </div>
    <div class="allCards">
      <div class="card" style="width: 400px">
        <img
          class="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar5.png"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Manager</h4>
          <p class="card-text">Manager Name</p>
        </div>
      </div>
      <div class="card" style="width: 400px">
        <img
          class="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar5.png"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Engineer</h4>
          <p class="card-text">Engineer Name</p>
        </div>
      </div>
      <div class="card" style="width: 400px">
        <img
          class="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar5.png"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Intern</h4>
          <p class="card-text">Intern Name</p>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

    
    `





}
    
    
    
    
    
    )