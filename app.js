// ============================================================
//  En enkel "app" med funksjoner vi kan teste
// ============================================================

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function greet(name) {
    return `Hei, ${name}! Velkommen til GitHub Actions.`;
}

// Eksporter funksjonene så testfilen kan bruke dem
module.exports = { add, multiply, greet };
