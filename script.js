let journal = [];
let hidCons = document.getElementById('console');
hidCons.insertAdjacentHTML("afterend", `<div id = "hidden"></div>`);
let hidJournal = document.getElementById('hidden');
hidCons.hidden = false;
hidJournal.hidden = true;
let controlCount = 0;
let functionIndication = false;
let res;

let sesStor = sessionStorage.getItem('memory');


if (journal == 0 && sesStor !== null) {
    journal = sesStor.split(' ,');
    console.log(journal);
    hidJournal.innerHTML = (journal.join('<br>'));
}

document.addEventListener("keydown", function(event) {
    function light() {
        let id = (event.key);
        let but = document.getElementById(id);
        but.style.backgroundColor = "silver";
        setTimeout(() => but.style = "", 100);
    };

    if (event.key == "Enter") {
        light();
        Enter.focus();
        result();

    } else if ((event.key >= 0 && event.key <= 9) || event.key == 'Backspace' || event.key == '+' || event.key == '-' ||
        event.key == '*' || event.key == '/' || event.key == '.') {
        lcd.focus();
        light();
    } else if (event.key == 'Delete') {
        clearResult();
        light();
    } else if (event.key == 'Control') {
        controlCount += 1;
        if (controlCount == 1) {
            let timer = setTimeout(clearTimer, 750)
        } else if (controlCount == 2) {
            journalArr();
            controlCount = 0;
        };
    } else if (event.key == "P" || event.key == "p") {
        combine('pow');
        light();
    } else if (event.key == "S" || event.key == "s") {
        combine('sqrt');
        light();
    } else {
        document.focus;
    }
});

const journalArr = () => {

    if (hidJournal.hidden == true && hidCons.hidden == false) {
        hidJournal.hidden = false;
        hidCons.hidden = true;
    } else {

        hidJournal.hidden = true;
        hidCons.hidden = false;
    };
};

const insert = (num) => {

    let input = document.querySelector("input");
    input.setRangeText(num, input.selectionEnd, input.selectionStart, 'end');
    input.focus();
};

const combine = (value) => {

    let res = document.form.textview.value;
    try {
        let rEval = eval(res);
    } catch (e) {
        document.form.textview.value = ('ERROR');
        setTimeout(() => document.form.textview.value = "", 500);
    }
    if (value == 'pow') {
        document.form.textview.value = (value + '(' + eval(res) + ',' + '' + ')');
    } else if (value == 'sqrt') {
        document.form.textview.value = (value + '(' + eval(res) + ')');
    }
    let input = document.querySelector("input");
    input.focus();
    input.selectionStart = [input.value.length - 1];
    input.selectionEnd = [input.value.length - 1];
    functionIndication = true;

};

const result = () => {

    if (functionIndication == true) {
        res = document.form.textview.value;
        let powResult = 'Math.' + res;
        document.form.textview.value = (eval(powResult));
        functionIndication = false;
    } else {
        res = document.form.textview.value;
        if (res) {
            try {
                document.form.textview.value = eval(res);
            } catch (e) {

                document.form.textview.value = ('ERROR');
                setTimeout(() => document.form.textview.value = "", 500);
            };
        };

    };
    writeJournal();
};

const writeJournal = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    journal.unshift(`(${hours} : ${minutes} : ${seconds}) ${res} = ${document.form.textview.value}  `);
    hidJournal.innerHTML = (journal.join('<br>'));
    sessionStorage.setItem('memory', journal);

    if (journal.length > 9) {
        journal.pop();
    };

}

const clearResult = () => {
    document.form.textview.value = "";
};

const arrow = () => {
    let res = document.form.textview.value;
    document.form.textview.value = res.substring(0, res.length - 1);
};

const checkBtn = (key) => {
    return (key >= 0 && key <= 9) || key == '+' || key == '-' || key == '*' ||
        key == '/' || key == '.' || key == 'Backspace' ||
        key == 'ArrowLeft' || key == 'ArrowRight';

};

const clearTimer = () => {
    controlCount = 0;
};