let input = document.querySelector("#take-input");
let button = document.querySelectorAll("button");
let string = "";
let array = Array.from(button);

array.forEach(button => {
    button.addEventListener("click", (element) => {
        if (element.target.innerHTML === "=") {
            string=eval(string);
            input.value = string;
        }
        else if (element.target.innerHTML === "X") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (element.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        }
        else {
            string += element.target.innerHTML;
            input.value = string;
        }

    });
});
