function echo() {
  const inputTxt = document.getElementById("InputTxt") 
  const val = inputTxt.value

  const helloText = document.getElementById("helloText")
  helloText.innerHTML = val
}