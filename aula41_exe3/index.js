function isDivisible (n) {
    const isNumber = Number.isInteger(n);

    if (isNumber && n >= 0 && n <= 100) {
        const numString = n.toFixed();
        let somaNum = 0;

        for (let num of numString) {
            somaNum += Number(num);
        }

        const isDivisibleForThree = somaNum % 3 === 0 ? true : false;
        const isDivisibleForFive = Number(numString[numString.length - 1]) === 5 || Number(numString[numString.length - 1]) === 0 ? true : false;
        const isDivisibleForThreeAndFive = isDivisibleForThree && isDivisibleForFive;

        if (isDivisibleForThreeAndFive) return 'FizzBuzz';
        if (isDivisibleForFive) return 'Buzz';
        if (isDivisibleForThree){
            return 'Fizz';
        } else {return n;}

    } else {
        return n;
    }
}

console.log(isDivisible(0));