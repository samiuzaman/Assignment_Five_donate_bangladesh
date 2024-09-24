// Convert String to Number
function textToNumber(id) {
  const value = document.getElementById(id).innerText;
  return (convertNumber = parseFloat(value));
}
function inputToNumber(id) {
  const value = document.getElementById(id).value;
  return (convertNumber = Number(value));
}

// History Section Function
function donatioHistory(inputId, ElemnetId) {
  historyContainer.innerHTML += `
        <div class="border border-grayColor rounded-xl p-8 shadow-sm mb-6">
          <h4 class="text-black text-xl font-semibold mb-4">
            ${inputId} Taka is Donated for ${ElemnetId}
          </h4>
          <p class="text-textColor text-base font-light bg-grayColor py-2 pl-2 rounded-md">
            Date : ${new Date()}
          </p>
        </div>
`;
  document.getElementById("default-text").innerText = " ";
}

// Feature Toggle Button
function donationToHistoryBtn(id) {
  document.getElementById("donation-container").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// Change Feature Toggle Button Color
function changeToggleBtnColor(id) {
  document.getElementById("history-btn").classList.remove("bg-buttonBg");
  document.getElementById("donation-btn").classList.remove("bg-buttonBg");

  document.getElementById(id).classList.add("bg-buttonBg");
}
