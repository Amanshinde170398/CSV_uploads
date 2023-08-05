$("#search-btn").on("click", function (e) {
  const input = $("#input-search").val().toLowerCase();
  let rows = $(".row-data");
  for (let row of rows) {
    let text = row.textContent;
    console.log(text.includes(input));
    if (text.includes(input)) {
      row.classList.add("highlight");
    } else {
      row.classList.remove("highlight");
    }
  }
  $("#input-search").val("");
});
