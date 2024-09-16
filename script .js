document.addEventListener('DOMContentLoaded', (event) => {
    const messageButton = document.getElementById('messageButton');
    const colorButton = document.getElementById('colorButton');
    const messageDiv = document.getElementById('message');

    messageButton.addEventListener('click', () => {
        if (messageDiv.classList.contains('hidden')) {
            messageDiv.classList.remove('hidden');
        } else {
            messageDiv.classList.add('hidden');
        }
    });

    colorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
