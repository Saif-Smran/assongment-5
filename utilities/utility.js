function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
}

document.getElementById('theme-btn').addEventListener('click', function (e) {
    e.preventDefault();
    changeBgColor();
});

function cleardiv(id) {
    document.getElementById(id).innerHTML = '';
}

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${amPm}`;
}

function creatActivity(title) {

    let activity = `<p class="bg-[#F4F7FF] text-sm p-2 rounded-lg">You have Complete The Task ${title} at ${getCurrentTime()}</p>`

    return activity
}

function getFormattedDateParts() {
    const date = new Date();

    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }); // "Wed"
    const datePart = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(',', ''); // "Jul 28 2025"

    return { weekday, datePart };
}

let { weekday, datePart } = getFormattedDateParts();

let currDate = `<div class="flex flex-col ">
                            <p class="text-gray-500 text-sm">
                                ${weekday},
                            </p>
                            <p class="text-xl font-bold text-gray-800">
                                ${datePart}
                            </p>
                        </div>`

document.getElementById('date').innerHTML += currDate;






