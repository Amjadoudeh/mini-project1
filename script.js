
      const output = document.querySelector(".output");
      const text = document.querySelector("textarea");
      /*
    text.addEventListener("change",textCounter);
    text.addEventListener("keyup",textCounter);
    text.addEventListener("keydown",textCounter);
    */
      ["keyup", "keydown", "change"].forEach(function (e) {
        text.addEventListener(e, textCounter);
      });

      const maxLenght = 25;
      const warnLenght = 20;

      function textCounter(e) {
        console.log(e);
        let count = text.value.length;
        console.log(count);
        if (count > maxLenght) {
          text.value = text.value.substring(0, maxLenght);
        }
        if (count > warnLenght) {
          output.classList.add("red");
        } else {
          output.classList.remove("red");
        }
        output.innerHTML = maxLenght - count + " characters left";
      }
   
