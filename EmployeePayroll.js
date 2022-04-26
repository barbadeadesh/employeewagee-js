// create class for employee payroll system
class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() { return this._name; }
    set name(name) { this._name = name; }

    toString() {
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Rohit", 100, );
console.log(employeePayrollData.toString());
let employeePayrollData2 = new EmployeePayrollData(2, "virat", 1000, );
console.log(employeePayrollData2.toString());