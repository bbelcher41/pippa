
const facts = [
    "Pippa loves rolling around on soft carpets.",
    "Pippa has the softest fur and the cutest paws.",
    "Pippa enjoys sunbathing by the window.",
    "Pippa is always curious and loves exploring.",
    "Pippa's purrs can melt anyone's heart."
];

function showFunFact() {
    const factElement = document.getElementById('funFact');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
}
