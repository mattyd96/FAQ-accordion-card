function dropdown(answer, question) {
    document.getElementById(answer).classList.toggle("hidden");
    var element = document.getElementById(question);
    element.classList.toggle("focus");
    var elements = element.getElementsByTagName('img');
    elements[0].classList.toggle("up");
  }