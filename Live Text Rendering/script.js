// Initialize the app
function init() {
    const htmlInput = document.getElementById('htmlInput');
    const htmlPreview = document.getElementById('htmlPreview');

    htmlInput.addEventListener('input', () => {
        const htmlText = htmlInput.value;
        htmlPreview.innerHTML = htmlText;
    });
}

init();
