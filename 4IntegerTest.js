function IntegerTest(num) {
    var desc = "Nada";
    var divisibleBy3 = num % 3 == 0;
    var divisibleBy7 = num % 7 == 0;
    if (divisibleBy3 && divisibleBy7) {
        desc = "Yee Ha";
    } else if (divisibleBy3) {
        desc = "Yee";
    } else if (divisibleBy7) {
        desc = "Ha";
    }
    return desc;
}

export { IntegerTest }