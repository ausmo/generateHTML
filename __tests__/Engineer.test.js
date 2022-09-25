const Engineer = require("../lib/Engineer");


describe('Engineer', () => {

    describe('initialization', () => {

    });

    describe('getRole', () => {
        

       it('should return Engineer when asked what role is ', () => {
            let newEngineer = new Engineer("Johan", 1, "Johan@gmail.com", "github.com/johan")

            expect(newEngineer.getRole()).toEqual("Engineer");
       
        });
      


    });

});