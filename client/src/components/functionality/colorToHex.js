function colorToHex(colorName) {
    switch (colorName.toLowerCase()) {
        case 'biege':
            return '#b99a7e';
        case 'tan':
            return '#d2b48c';
        case 'brown':
            return '#964b00';
        case 'vintage black':
            return '#1c1c1c';
        case 'dark metal':
            return '#444';
        case 'storm':
            return '#778899';
        case 'sky blue':
            return '#87ceeb';
        case 'white':
            return '#E8E8E8';
        case 'olive':
            return '#556b2f';
        case 'soft cream':
            return '#fff5e0';
        case 'coral':
            return '#ff7f50';
        case 'cardinal':
            return '#c41e3a';
        case 'gold':
            return '#E8E1D1';
        case 'lilae':
            return '#c8a2c8';
        case 'ocean blue':
            return '#4f42b5';
        case 'silver':
            return '#c0c0c0';
        case 'autumn':
            return '#f79762';
        case 'black':
            return '#000000';
        default:
            return 'Invalidcolor';
    }
}

export default colorToHex