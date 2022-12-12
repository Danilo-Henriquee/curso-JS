function fizzbuzz(num){
    if (typeof num === 'number'){
        if (num % 3 == 0 && num % 5 == 0){
            return 'FizzBuzz';
        }
        if (num % 3 == 0){
            return 'Fizz';
        }
        if (num % 5 == 0){
            return 'Buzz';
        }
        else{
            return num;
        }
    }else{
        console.log('Digite um número.')
    }
}
for (i = 0;i <= 100; i++){
    console.log(i, fizzbuzz(i))
}