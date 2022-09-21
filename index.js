function redirect(loc) {
  if (loc == "senneca") {
    location.href = "https://hmf-dev.github.io/Style-Guide/senneca/testing/";
  } else if (loc == "hmf") {
    location.href = "https://hmf-dev.github.io/Style-Guide/hmf/testing/";
  } else {
    console.log("Selected page does not exist.");
  }
}
