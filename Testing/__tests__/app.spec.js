const sortingByAge = require("../app")

test("Testing the sorting feature", () => {
    const sortedData = sortingByAge()
    expect(sortedData[0].name).toBe("Shubham")
})