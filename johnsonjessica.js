/* =========================
   OPTION A: Button Interaction
   ========================= */
function showAlert() {
  alert("✅ Option A: Button clicked! JavaScript is working.");
}

/* =========================
   OPTION B: User Input Logic (if / else)
   ========================= */
function askQuestion() {
  let answer = prompt("What is 2 + 2?");

  if (answer === "4") {
    alert("🎉 Correct! Great job.");
  } else {
    alert("❌ Not quite. Try again!");
  }
}

/* =========================
   OPTION C: Personalized Content
   ========================= */
function personalizeSite() {
  let name = prompt("What is your name?");
  let favoriteColor = prompt("What is your favorite color?");

  let message =
    "Welcome, " +
    name +
    "! It's awesome that your favorite color is " +
    favoriteColor +
    ".";

  alert(message);
}
