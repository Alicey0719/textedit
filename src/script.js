document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("copyButton");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const textareaValue = document.getElementById("textInput").value;
    });

    // clipboard.js の初期化
    new ClipboardJS("#copyButton");
});
// create by chatgpt
