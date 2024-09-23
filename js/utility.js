// Convert String to Number
function textToNumber(id) {
  const value = document.getElementById(id).innerText;
  return (convertNumber = parseFloat(value));
}
function inputToNumber(id) {
  const value = document.getElementById(id).value;
  return (convertNumber = parseFloat(value));
}

// History Section Function
function donatioHistory(inputId, ElemnetId) {
  historyContainer.innerHTML += `
        <div class="border border-grayColor rounded-xl p-8 shadow-sm mb-6">
          <h4 class="text-black text-xl font-semibold mb-4">
            ${inputId} Taka is Donated for ${ElemnetId}
          </h4>
          <p class="text-textColor text-base font-light">
            Date : ${new Date()}
          </p>
        </div>
`;
}
