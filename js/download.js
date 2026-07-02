document.getElementById("downloadButton").addEventListener("click", () => {
  const password = prompt("パスワードを入力してください");

  if (password === "Happybirthday_Nyaruru") {
    window.location.href = "birthday.zip";
  } else if (password !== null) {
    alert("パスワードが違います。");
  }
});
