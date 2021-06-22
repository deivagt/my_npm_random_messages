const messages = [
    "David","Ana","Nicolai", "Jessica", "Diego","Laura",
    "Carolina", "paulina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg};