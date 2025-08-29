const fields = ["name", "role", "email", "phone", "summary", "education", "experience", "skills"];

fields.forEach(field => {
  const input = document.getElementById(field + "Input");
  const preview = document.getElementById("preview" + field.charAt(0).toUpperCase() + field.slice(1));
  input.addEventListener("input", () => preview.textContent = input.value || "");
});

document.getElementById("downloadPdf").addEventListener("click", () => {
  window.print(); // User can Save as PDF
});

document.getElementById("downloadHtml").addEventListener("click", () => {
  const resume = document.getElementById("resumePreview").outerHTML;
  const blob = new Blob(
    [`<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Resume</title></head><body>${resume}</body></html>`],
    { type: "text/html" }
  );
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resume.html";
  link.click();
});
