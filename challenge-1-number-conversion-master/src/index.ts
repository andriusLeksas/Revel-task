export function convertNumberToEnglishText(n: number): string {

    const under20_digit_numbers = new Map([['0', ' zero'], ['1', ' one'], ['2', ' two'], ['3', ' three'], ['4', ' four'],['5', ' five'], 
        ['6', ' six'], ['7', ' seven'], ['8', ' eight'], ['9', ' nine'],['10', ' ten'], ['11', ' eleven'], ['12', ' twelve'],
         ['13', ' thirteen'],['14', ' fourteen'], ['15', ' fifteen'], ['16', ' sixteen'],['17', ' seventeen'],['18', ' eighteen'],['19', ' nineteen']]);

    const double_digit_numbers = new Map([['1', ' ten'], ['2', ' twenty'], ['3', ' thirty'], ['4', ' forty'],['5', ' fifty'], ['6', ' sixty']
    , ['7', ' seventy'], ['8', ' eighty'], ['9', ' ninety']]); 

    let convertedNumber : string = '';
    let first2digits : string;
    let firstDigit : string;
    let secondDigit : string;

    if(n < 0){
        convertedNumber += 'negative';
        n*= -1;
    }

    if(n === 0){
        return 'zero';
    }

    while(n > 0.5){   

        switch(n.toString().length){

            case 1:   

                convertedNumber += under20_digit_numbers.get(n.toString())   
                return convertedNumber.trim();


            case 2:

                first2digits = String(n).slice(0, 2);
                if(under20_digit_numbers.has(first2digits)){

                    convertedNumber += under20_digit_numbers.get(first2digits);
                    return convertedNumber.trim();

                }else{

                    firstDigit = String(n).slice(0, 1);
                    convertedNumber += double_digit_numbers.get((firstDigit));
                    n = n % 10;
                }

                break;

            case 3:

                firstDigit = String(n).slice(0, 1);
                convertedNumber += under20_digit_numbers.get((firstDigit)) + ' hundred';
                n = n % 100;

                break;

            case 4:  

                firstDigit = String(n).slice(0, 1);
                convertedNumber += under20_digit_numbers.get((firstDigit)) + ' thousand';
                n = n % 1000;

                break;

            case 5:  
            
                first2digits = String(n).slice(0, 2);

                if(under20_digit_numbers.has((first2digits))){

                    convertedNumber += under20_digit_numbers.get((first2digits)) + ' thousand'
                    n = n % 1000;

                }else{

                    firstDigit = String(n).slice(0, 1);
                    secondDigit = String(n).slice(1, 2);
                    convertedNumber += double_digit_numbers.get((firstDigit));

                    if(Number(secondDigit) !== 0){
                        convertedNumber += under20_digit_numbers.get((secondDigit));
                    }

                    convertedNumber += ' thousand';                   
                    n = n % 1000;
                }

                break;

            default: convertedNumber = 'Something is wrong with the number'
                break;
        }
    }

    return convertedNumber.trim();

}
