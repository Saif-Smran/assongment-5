function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
}

document.getElementById('theme-btn').addEventListener('click', function (e){
    e.preventDefault();
    changeBgColor();
});