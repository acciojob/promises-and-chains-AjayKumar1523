const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const age = Number(ageInput.value);
  const name = nameInput.value.trim();

  // ✅ Validation (FIXED: removed ".")
  if (!age || !name) {
    alert("Please enter valid details");
    return;
  }

  // ✅ Promise logic
  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // ✅ Handle result
  votingPromise
    .then((msg) => {
      alert(msg);
    })
    .catch((err) => {
      alert(err);
    });
});