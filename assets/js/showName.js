//show name of the file while upload

var inputs = document.querySelectorAll(".inputfile");
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener("change", function (e) {
    let fileName = e.target.value.split("\\").pop();

    if (fileName) {
      label.querySelector("span").innerHTML = fileName;
    } else {
      label.innerHTML = labelVal;
    }
  });
});
