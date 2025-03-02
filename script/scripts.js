function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("theme-btn").addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = getRandomColor();
});

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

const date = new Date();
const month = date.getMonth();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[date.getDay()];
const monthofYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = monthofYear[month];
const currentDate = date.getDate();
const currentTime = date.toLocaleTimeString();
const currentYear = date.getFullYear();
const fullYear = `${currentMonth} ${currentDate} ${currentYear}`;
document.getElementById("day").innerText = currentDayOfWeek;
document.getElementById("date").innerText = fullYear;

let decreaseCount = parseInt(document.getElementById("decrease-count").innerText);
let increaseCount = parseInt(document.getElementById("increase-btn").innerText);

const allBtn = document.querySelectorAll(".complete-btn");
for (let i = 0; i < allBtn.length; i++) {
  const btn = allBtn[i];
  btn.addEventListener("click", function () {
    alert("Board updated Sucessfully");
    decreaseCount--;
    document.getElementById("decrease-count").innerText = decreaseCount;
    increaseCount++;
    document.getElementById("increase-btn").innerText = increaseCount;
    btn.disabled = true;
    btn.style.backgroundColor = "gray";

    let allDisableBtn = [...allBtn].every((btn) => btn.disabled);
    if (allDisableBtn) {
      alert("Congrates!!! You have completed all the current Tasks");
    }

    const id = btn.getAttribute("data-id");
    const heading = document.getElementById("heading" + id);
    const headingText = heading.innerText;
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.classList.add("bg-[#f4f7ff]", "p-4", "mt-2", "rounded-lg");
    li.innerText = `You have Complete The Task ${headingText} at ${currentTime}`;
    list.appendChild(li);
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  const list = document.getElementById("list");
  list.remove();
});




