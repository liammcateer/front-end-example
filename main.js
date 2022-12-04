import { formatDate } from "./dateFormatting";

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  const dateInput = document.getElementById("date");
  const outputElement = document.getElementById("output");

  const formattedDate = formatDate(new Date(dateInput.value));

  outputElement.innerHTML = formattedDate;
});
