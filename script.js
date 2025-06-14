function calculate() {
  const power = parseFloat(document.getElementById("power").value);
  const width = parseFloat(document.getElementById("width").value);
  const speed = parseFloat(document.getElementById("speed").value);
  const sigma = parseFloat(document.getElementById("material").value);
  const eta = 0.75;

  if (!power || !width || !speed || !sigma) {
    document.getElementById("result").innerText = "من فضلك أدخل كل القيم.";
    return;
  }

  const t = (power * 60000 * eta) / (width * sigma * speed);
  document.getElementById("result").innerText =
    "أقصى تخانة يمكن سحبها ≈ " + t.toFixed(2) + " مم";
}
