var application = require("./main");

describe ("calculator", function () {
    var app;

    beforeEach(function() {
        app = application();
        
    });

    it("adds numbers", function() {
        expect(app.add(2, 3)).toBe(5);
    });

    it("subtracts numbers", function() {
        expect(app.subtract(2, 3)).toBe(-1);
    });

    it("multiplies numbers", function() {
        expect(app.multiply(2, 3)).toBe(6);
    });

    it("divides numbers", function() {
        expect(app.divide(6, 3)).toBe(2);
    });

    it("decides which operation to do when +", function() {
        app.calculate("+", 2, 3);
        expect(app.result()).toBe(5);
    });

    it("decides which operation to do when -", function() {
        app.calculate("-", 4, 5);
        expect(app.result()).toBe(-1);
    });

    it("decides which operation to do when *", function() {
        app.calculate("*", 7, 2);
        expect(app.result()).toBe(14);
    });

    it("decides which operation to do when /", function() {
        app.calculate("/", 6, 3);
        expect(app.result()).toBe(2);
    });
});