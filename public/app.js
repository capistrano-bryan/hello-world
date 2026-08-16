const form = document.getElementById("greet-form");
const nameInput = document.getElementById("name");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  result.textContent = "…";

  try {
    const response = await fetch("/api/greet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameInput.value }),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent = "Something went wrong. Please try again.";
    console.error(error);
  }
});
