// palindrome check function

const isPalindrome = require("./tdd");

test("abc" ,() => {
    const result = isPalindrome("abc")
    expect(result).toBe(false)
});

test("aba" ,() => {
    const result = isPalindrome("aba")
    expect(result).toBe(true)
});

test("no input" ,() => {
    const result = isPalindrome()
    expect(result).toBe(null)
});