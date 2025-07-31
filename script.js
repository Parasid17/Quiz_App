let arr = [
    {
        questions: "What is the use of let keyword in JavaScript?",
        options: [
            "Defines a variable globally",
            "Defines a constant variable",
            "Defines a block-scoped variable",
            "Defines a private function"
        ],
        ans: "Defines a block-scoped variable"
    },
    {
        questions: "Which method is used to convert JSON data to a JavaScript object?",
        options: [
            "JSON.toObject()",
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()"
        ],
        ans: "JSON.parse()"
    },
    {
        questions: "Which of the following is a JavaScript data type?",
        options: [
            "float",
            "number",
            "decimal",
            "character"
        ],
        ans: "number"
    },
    {
        questions: "What will typeof null return?",
        options: [
            "null",
            "undefined",
            "object",
            "boolean"
        ],
        ans: "object"
    },
    {
        questions: "Which function is used to delay code execution in JavaScript?",
        options: [
            "delay()",
            "setInterval()",
            "setTimeout()",
            "timeout()"
        ],
        ans: "setTimeout()"
    },
    {
        questions: "Which function is used to delay code execution in JavaScript?",
        options: [
            "delay()",
            "setInterval()",
            "setTimeout()",
            "timeout()"
        ],
        ans: "setTimeout()"
    }
];

let i = 0;
let n = arr.length;
let obj;
let x;
let points = 0;
let exp_req = 50;
let level = 1;

let options = document.querySelectorAll(".container");
console.log(options);
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((opt) => {
            opt.classList.remove("selected");
        });
        option.classList.add("selected");
        x = parseInt(option.dataset.value);
        // console.log(typeof x);
    });
});

let ques_num = document.getElementById("q_no");
let total_ques = document.getElementById("total_ques");
let percentage = document.getElementById("percent_js");
let progress_color = document.getElementById("progress_color");
let actual_ques = document.getElementById("act_ques");
let act_opt1 = document.getElementById("act_opt1");
let act_opt2 = document.getElementById("act_opt2");
let act_opt3 = document.getElementById("act_opt3");
let act_opt4 = document.getElementById("act_opt4");
let submit = document.getElementById("submit");
let html_points = document.getElementById("points");
let curr_level = document.getElementById("curr_level");

function handleChange() {
    ques_num.innerText = `${(i % n) + 1}`;
    total_ques.innerText = `${n}`;
    percentage.innerText = `${((((i % n) + 1) / n) * 100).toFixed(2)}`;
    progress_color.style.width = `${((((i % n) + 1) / n) * 100).toFixed(2)}%`;

    obj = arr[i % n];
    actual_ques.innerText = '';
    actual_ques.innerText = obj.questions;

    act_opt1.innerText = '';
    act_opt2.innerText = '';
    act_opt3.innerText = '';
    act_opt4.innerText = '';

    act_opt1.innerText = obj.options[0];
    act_opt2.innerText = obj.options[1];
    act_opt3.innerText = obj.options[2];
    act_opt4.innerText = obj.options[3];
}
handleChange();

submit.addEventListener("click", () => {
    if (obj.options[x] == obj.ans) {
        console.log(true);
        points += 10;
        if (points >=  exp_req) {
            level++;
            points = Math.abs(points - exp_req);
            exp_req *= 2;
            curr_level.innerText = level;
        }
        html_points.innerText = `${points}`;
    }
    else {
        console.log(false);
    }
    console.log(obj.options[x]);
    console.log(obj.ans);
    i++;
    handleChange();


    options.forEach((opt) => {
        opt.classList.remove("selected");
    });

    x = -1;
});

