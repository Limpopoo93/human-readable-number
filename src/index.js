module.exports = function toReadable(number) {
    if (number.toString().length === 1) {
        if (number.toString() === '0') {
            return "zero";
        } else {
            return searchOneToNine(number);
        }
    }
    if (number.toString().length === 2) {
        if (searchTenToNineteen(number) !== 'empty') {
            return searchTenToNineteen(number);
        } else {
            let result = '';
            result = searchDecemberNumber(number.toString()[0]) + result;
            if (number.toString()[1] !== '0') {
                result = result + " " + searchOneToNine(number.toString()[1]);
            }
            return result;
        }
    }
    if (number.toString().length === 3) {
        let result = '';
        result = result + searchOneToNine(number.toString()[0]) + " " + "hundred";
        if (number.toString()[1] !== "0") {
            if (searchDecemberNumber(number.toString()[1]) !== "empty") {
                result = result + " " + searchDecemberNumber(number.toString()[1]);
                if (number.toString()[2] !== '0') {
                    result = result + " " + searchOneToNine(number.toString()[2]);
                }
            }
            if (searchDecemberNumber(number.toString()[1]) === "empty") {
                result = result + " " + searchTenToNineteen(number.toString()[1] + number.toString()[2]);
            } else {
            }
        } else {
            if (number.toString()[2] !== '0') {
                result = result + " " + searchOneToNine(number.toString()[2]);
            }
        }
        return result;
    }
}

function searchOneToNine(number) {
    switch (number.toString()) {
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return "empty";
    }
}

function searchTenToNineteen(number) {
    switch (number.toString()) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        default:
            return "empty";
    }
}


function searchDecemberNumber(number) {
    switch (number.toString()) {
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';
        default:
            return "empty";
    }
}
