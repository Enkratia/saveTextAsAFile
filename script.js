const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector("input"),
  selectMenu = document.querySelector("select"),
  saveBtn = document.querySelector(".save-btn");


selectMenu.addEventListener("change", () => {
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})


saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  const fileURL = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileURL;
  link.click();
})