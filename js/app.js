// Donation Section Code Start Here
// Secect HTML Element
const mainBalanceElement = document.getElementById("main-balance");
const historyContainer = document.getElementById("history-container");
const noakhaliHeading = document.getElementById("noakhali-heading").innerText;
const feniHeading = document.getElementById("feni-heading").innerText;
const quotaiHeading = document.getElementById("quota-heading").innerText;

// Noakhali flood Donation Section
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balanceValue = textToNumber("main-balance");
    const donatioBlcValue = textToNumber("noakhali-donation-balance");
    const inputAmountValue = inputToNumber("input-noakhali-amount");

    if (
      balanceValue < inputAmountValue ||
      inputAmountValue <= 0 ||
      isNaN(inputAmountValue)
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const newBalance = balanceValue - inputAmountValue;
      mainBalanceElement.innerText = newBalance;
      const newDonationBalance = donatioBlcValue + inputAmountValue;
      document.getElementById("noakhali-donation-balance").innerText =
        newDonationBalance;
      // History Section function
      donatioHistory(inputAmountValue, noakhaliHeading);
    }

    my_modal_5.showModal();
  });

// Feni Flood Donation Section
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balanceValue = textToNumber("main-balance");
    const donatioBlcValue = textToNumber("feni-donation-balance");
    const inputAmountValue = inputToNumber("feni-donate-amount");

    if (
      balanceValue < inputAmountValue ||
      inputAmountValue <= 0 ||
      isNaN(inputAmountValue)
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const newBalance = balanceValue - inputAmountValue;
      mainBalanceElement.innerText = newBalance;
      const newDonationBalance = donatioBlcValue + inputAmountValue;
      document.getElementById("feni-donation-balance").innerText =
        newDonationBalance;
      document.getElementById("feni-donate-amount").innerText = " ";
      // History Section function
      donatioHistory(inputAmountValue, feniHeading);
    }

    my_modal_5.showModal();
  });

// Quota Donation Section
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balanceValue = textToNumber("main-balance");
    const donatioBlcValue = textToNumber("quota-donation-balance");
    const inputAmountValue = inputToNumber("quota-donate-amount");
    if (
      balanceValue < inputAmountValue ||
      inputAmountValue <= 0 ||
      isNaN(inputAmountValue)
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const newBalance = balanceValue - inputAmountValue;
      mainBalanceElement.innerText = newBalance;
      const newDonationBalance = donatioBlcValue + inputAmountValue;
      document.getElementById("quota-donation-balance").innerText =
        newDonationBalance;
      // History Section function
      donatioHistory(inputAmountValue, quotaiHeading);
    }

    my_modal_5.showModal();
  });

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("input-noakhali-amount").value = "";
  document.getElementById("feni-donate-amount").value = "";
  document.getElementById("quota-donate-amount").value = "";
});
// Donation Section Code End Here

// Donation Button
document.getElementById("donation-btn").addEventListener("click", function () {
  donationToHistoryBtn("donation-container");
  changeToggleBtnColor("donation-btn");
});

// History Button
document.getElementById("history-btn").addEventListener("click", function () {
  donationToHistoryBtn("history-container");
  changeToggleBtnColor("history-btn");
});

// Toggle Home to Blog
document.getElementById("blog-page-btn").addEventListener("click", function () {
  window.location.href = "./blog/blog.html";
});
