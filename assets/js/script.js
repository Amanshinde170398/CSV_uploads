$("#search-btn").on("click", function (e) {
  const input = $("#input-search").val().toLowerCase();
  console.log(input);
  let rows = $(".rowas");
  for (let row of rows) {
    let text = row.textContent;
    console.log(text.includes(input));
  }
});
