function task1() {
    const data = prompt("Введіть будь-що:");
    alert("Ви увели: " + data);
}

function task2() {
    const name = prompt("Як вас звати?");
    alert(`Привіт, ${name}!`);
}

function task3() {
    const CURRENT_YEAR = 2026;
    const birthYear = parseInt(prompt("Введіть рік вашого народження:"));
    const age = CURRENT_YEAR - birthYear;
    alert(`Вам ${age} років (або виповниться цього року).`);
}

function task4() {
    const side = parseFloat(prompt("Введіть довжину сторони квадрата:"));
    const perimeter = side * 4;
    alert(`Периметр квадрата: ${perimeter}`);
}

function task5() {
    const radius = parseFloat(prompt("Введіть радіус кола:"));
    const area = Math.PI * Math.pow(radius, 2); 
    alert(`Площа кола: ${area.toFixed(2)}`);
}

function task6() {
    const distance = parseFloat(prompt("Введіть відстань між містами (км):"));
    const time = parseFloat(prompt("За скільки годин хочете дістатися?"));
    const speed = distance / time;
    alert(`Вам потрібно рухатися зі швидкістю: ${speed.toFixed(1)} км/год`);
}

function task7() {
    const USD_TO_EUR_RATE = 0.92;
    const usd = parseFloat(prompt("Введіть суму в USD ($):"));
    const eur = usd * USD_TO_EUR_RATE;
    alert(`${usd} USD = ${eur.toFixed(2)} EUR`);
}

function task8() {
    const FILE_SIZE_MB = 820;
    const flashGb = parseFloat(prompt("Вкажіть обсяг флешки у ГБ:"));
    const flashMb = flashGb * 1024;
    const filesCount = Math.floor(flashMb / FILE_SIZE_MB);
    alert(`На флешку ємністю ${flashGb} ГБ вміститься ${filesCount} файлів.`);
}

function task9() {
    const wallet = parseFloat(prompt("Скільки грошей у гаманці?"));
    const price = parseFloat(prompt("Яка вартість однієї шоколадки?"));
    const count = Math.floor(wallet / price);
    const change = wallet % price;
    alert(`Шоколадок: ${count} шт. Здача: ${change.toFixed(2)} грн.`);
}

function task10() {
    const number = parseInt(prompt("Введіть тризначне число:"));
    const digit3 = number % 10;
    const digit2 = Math.floor((number % 100) / 10);
    const digit1 = Math.floor(number / 100);
    const reversed = digit3 * 100 + digit2 * 10 + digit1;
    alert(`Перевернуте число: ${reversed}`);
}

function task11() {
    const num = parseInt(prompt("Введіть ціле число:"));
    const answers = ["Парне", "Непарне"];
    const result = answers[Math.abs(num) % 2];
    alert(`Число ${num} є: ${result}`);
}

task11();