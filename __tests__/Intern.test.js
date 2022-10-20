const Employee = require("../lib/Employee");
describe('Employee',()=>{
    describe("initialization", () => {
        
        it("should get initialized correctly", () => {
           
            let newEmployee = new Employee("Austin", 1, "austin1moore@gmail.com");
            expect(newEmployee.name).toEqual("Austin");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("austin1moore@gmail.com");
        });
        
        
    });
    
    describe("getName", () =>{
        
        it('should return the name I give it on initiation', () => {
            let name = "Austin"
            let newEmployee = new Employee("Austin", 1, "austin1moore@gmail.com");

            expect(newEmployee.getName()).toEqual(name);
          });


        })
        describe("getId", () =>{
            
            it('should be the ID number I assign it', () => {
                let id = 10000
                let newEmployee = new Employee("Austin", 10000, "austin1moore@gmail.com");
                
                expect(newEmployee.getId()).toEqual(id);
            });
            
           
        })
        
        describe("getRole", () =>{
            it('should return their role in the company', () => {
                let role = "Employee"
                let newEmployee = new Employee("Austin", 10000, "austin1moore@gmail.com");
                
                expect(newEmployee.getRole()).toEqual(role);
            });
        })
        });