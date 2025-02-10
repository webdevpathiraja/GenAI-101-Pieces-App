const facts = [
    "Mastered the art of procrastination, especially when it comes to coursework submission deadlines",
    "Has a passport but prefers virtual trips through her screen.",
    "Can predict Turkish series plot twists better than her own life choices.",
    "Knows more about Turkish love triangles than her own dating life.",
    "Hikes to “connect with nature,” but really is just dodging her responsibilities.",
    "Wants to travel the world, but can’t leave her home.",
    "Sketches dream destinations while procrastinating on actual travel plans.",
];

document.getElementById('generate').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
