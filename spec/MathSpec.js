describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });
  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });
  it("should subtract two integers", function() {
    expect(multiply(7, 5)).toBe(35);
  });
  it("should have a multiply function", function() {
    expect(divide).toBeDefined();
  });
  it("should subtract two integers", function() {
    expect(divide(10, 5)).toBe(2);
  });
  it("should have a multiply function", function() {
    expect(square).toBeDefined();
  });
  it("should subtract two integers", function() {
    expect(square(7)).toBe(49);
  });
  it("should have a multiply function", function() {
    expect(Math.sqrt).toBeDefined();
  });
  it("should sqrt two integers", function() {
    expect(Math.sqrt(49)).toBe(7);
  });

});