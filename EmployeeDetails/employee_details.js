const employees = [
    { id: 1, name: "John Doe", age: 30, department: "IT", salary : 50000, specialization: "JavaScript" },
    { id: 2, name: "Alice Smith", age: 28, department: "HR", salary : 45000, specialization: "Java" },
    { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary : 60000, specialization: "Python" }
];

displayEmployees();

function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => 
        `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}



function calculateTotalSalaries() {
    const total_salaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total salaries: $${total_salaries}`);
}

function displayHREmployees() {
    const hremployees = employees.filter((employee) => employee.department === "HR");
    const hremployeesDisplay = hremployees.map((employee, index) => 
        `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById("employeesDetails").innerHTML = hremployeesDisplay;
}

function findEmployeeById(id){
    const employee = employees.find((employee) => employee.id === id);
    if(employee) {
        document.getElementById("employeesDetails").innerHTML =  `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`;
    } else {
        document.getElementById("employeesDetails").innerHTML = "Employee wasn't found";
    }
}

function findBySpecialization(specialization){
    const employee = employees.filter((emp) => emp.specialization === specialization);
    const specEmployees = employee.map((item) => `<p>${item.id} : ${item.name} - ${item.specialization}</p>`)
    document.getElementById("employeesDetails").innerHTML = specEmployees;
}