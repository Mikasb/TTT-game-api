const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", (event) => {
  event.preventDefault();
  sendRequest({player: 1, move: 3, result: 'taktak'}, 'POST');
});

function sendRequest(data, method) {
  const content = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:3000/api", content);
}
