function getSizeString(sizeChar) {
    switch (sizeChar.toUpperCase()) {
        case 'XS':
            return 'Extra Small';
        case 'S':
            return 'Small';
        case 'M':
            return 'Medium';
        case 'L':
            return 'Large';
        case 'XL':
            return 'Extra Large';
        case 'XXL':
            return 'Double Extra Large';
        case 'XXXL':
            return 'Triple Extra Large';
        default:
            return 'Invalid size';
    }
}

export default getSizeString