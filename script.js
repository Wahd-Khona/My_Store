// Optional: Discord button glowing pulse
const discordBtn = document.getElementById('discord-btn');
setInterval(() => {
    discordBtn.style.boxShadow = `0 0 20px rgba(114,137,218,${Math.random()})`;
}, 500);
