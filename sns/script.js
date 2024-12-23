function likePost() {
  alert("仮");
}

function test() {
  document.getElementById("redirectButton").addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    window.location.href = "https://youtube.com"; // 遷移先のURLを指定
  });
}
