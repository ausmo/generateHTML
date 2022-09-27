const Employee = require("../lib/Employee");

describe("Employee", () => {

  describe("initialization", () => {

    it("should get initialized correctly", () => {

      let newEmployee = new Employee("Austin", 1, "austin1moore@gmail.com");
      expect(newEmployee.name).toEqual("Austin")
      expect(newEmployee.id).toEqual(1)
      expect(newEmployee.email).toEqual("austin1moore@gmail.com")
    });

  });

  describe("getName", () => {

    it('should return the name that I give it, upon instantiation', () => {
      let name = "Austin"
      let newEmployee = new Employee(name, 1, "austin1moore@gmail.com")
      expect(newEmployee.getName()).toBe(name)



    });

    // let newEmployee = new Employee("Austin", 1, "austin1moore@gmail.com");

    // expect(newEmployee.getName).toEqual("Austin")

  })



  
});
