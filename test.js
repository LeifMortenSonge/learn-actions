// ============================================================
//  Enkel testfil – ingen rammeverk, bare ren Node.js
//  Returnerer exit code 0 (OK) eller 1 (feil)
// ============================================================

const { add, multiply, greet } = require('./app');

let passed = 0;
let failed = 0;

function test(name, actual, expected) {
    if (actual === expected) {
        console.log(`  ✅ ${name}`);
        passed++;
    } else {
        console.log(`  ❌ ${name}`);
        console.log(`     Forventet: ${expected}`);
        console.log(`     Fikk:      ${actual}`);
        failed++;
    }
}

console.log('\n🧪 Kjører tester...\n');

// --- Tester for add() ---
console.log('📦 add()');
test('2 + 3 = 5', add(2, 3), 5);
test('0 + 0 = 0', add(0, 0), 0);
test('-1 + 1 = 0', add(-1, 1), 0);

// --- Tester for multiply() ---
console.log('\n📦 multiply()');
test('3 × 4 = 12', multiply(3, 4), 12);
test('0 × 100 = 0', multiply(0, 100), 0);
test('-2 × 3 = -6', multiply(-2, 3), -6);

// --- Tester for greet() ---
console.log('\n📦 greet()');
test('Hilser på Leif', greet('Leif'), 'Hei, Leif! Velkommen til GitHub Actions.');

// --- Resultat ---
console.log(`\n${'─'.repeat(40)}`);
console.log(`📊 Resultat: ${passed} bestått, ${failed} feilet\n`);

if (failed > 0) {
    process.exit(1);  // Exit code 1 = tester feilet → pipeline blir rød
} else {
    process.exit(0);  // Exit code 0 = alt OK → pipeline blir grønn
}
