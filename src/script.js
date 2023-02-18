  document.getElementById('0').addEventListener('click', input);
  document.getElementById('1').addEventListener('click', input);
  document.getElementById('2').addEventListener('click', input);
  document.getElementById('3').addEventListener('click', input);
  document.getElementById('4').addEventListener('click', input);
  document.getElementById('5').addEventListener('click', input);
  document.getElementById('6').addEventListener('click', input);
  document.getElementById('7').addEventListener('click', input);
  document.getElementById('8').addEventListener('click', input);
  document.getElementById('9').addEventListener('click', input);
  document.getElementById('+').addEventListener('click', input);
  document.getElementById('-').addEventListener('click', input);
  document.getElementById('*').addEventListener('click', input);
  document.getElementById('/').addEventListener('click', input);
  document.getElementById('.').addEventListener('click', input);

  document.addEventListener('keydown', (e) => {
      if (e.code == "Enter") { calculate() } else if (e.code == "Backspace") { del() } else if (e.code == "Delete") { reset() } else { input(e) }
  })

  document.getElementById('=').addEventListener('click', calculate);
  document.getElementById('AC').addEventListener('click', reset);
  document.getElementById('DEL').addEventListener('click', del);
  document.getElementById('%').addEventListener('click', proc);


  const display = document.getElementById('display-text');
  let displayCurrent = "";

  function input(e) {
      let inputValue = "";

      if (e.type == "click") {
          inputValue = e.target.innerText;
      } else {
          if (e.key == "0") { inputValue = "0" } else if (e.key == "1") { inputValue = "1" } else if (e.key == "2") { inputValue = "2" } else if (e.key == "3") { inputValue = "3" } else if (e.key == "4") { inputValue = "4" } else if (e.key == "5") { inputValue = "5" } else if (e.key == "6") { inputValue = "6" } else if (e.key == "7") { inputValue = "7" } else if (e.key == "8") { inputValue = "8" } else if (e.key == "9") { inputValue = "9" } else if (e.key == "+") { inputValue = "+" } else if (e.key == "-") { inputValue = "-" } else if (e.key == "*") { inputValue = "*" } else if (e.key == "/") { inputValue = "/" }
      }

      if ((displayCurrent.substring(-1) == "*" ||
              displayCurrent.substring(-1) == "/" ||
              displayCurrent.substring(-1) == "-" ||
              displayCurrent.substring(-1) == "+") &&
          (inputValue == "*" ||
              inputValue == "/" ||
              inputValue == "-" ||
              inputValue == "+")
      ) {
          displayCurrent = displayCurrent.slice(0, -1) + inputValue;
      } else {
          displayCurrent += inputValue;
      }
      display.innerText = numberWithCommas(displayCurrent);
  }

  function calculate() {
      display.innerText = numberWithCommas(eval(displayCurrent));
      displayCurrent = eval(displayCurrent).toString();
  }

  function reset() {
      displayCurrent = "";
      display.innerText = numberWithCommas(displayCurrent);
  }

  function del() {
      displayCurrent = displayCurrent.substring(0, displayCurrent.length - 1);
      display.innerText = numberWithCommas(displayCurrent);
  }

  function proc() {
      //   console.log(displayCurrent)
      displayCurrent = displayCurrent / 100;
      display.innerText = numberWithCommas(displayCurrent);
  }

  function numberWithCommas(d) {
      return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }