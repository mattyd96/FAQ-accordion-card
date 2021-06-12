function dropdown(answer, question) {
    document.getElementById(answer).classList.toggle("hidden");
    var elements = document.getElementById(question).getElementsByTagName('img');
    elements[0].classList.toggle("up");
  }