const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
// calculate the circumference
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.percent');

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

input.addEventListener('change', () => {
    setProgress(input.value);
})

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;

    circle.style.strokeDashoffset = offset;
}