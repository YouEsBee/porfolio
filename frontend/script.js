document.addEventListener('DOMContentLoaded', function () {
    const displayText = document.getElementById('displayText');
    const changeTextButton = document.getElementById('changeTextButton');

    changeTextButton.addEventListener('click', function () {
        displayText.textContent = 'Text changed!';
    });
});