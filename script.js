let journal = [];
let hidCons = document.getElementById('console');
hidCons.insertAdjacentHTML("afterend",`<div id = "hidden"></div>`);
let hidJournal = document.getElementById('hidden');
hidCons.hidden = false;
hidJournal.hidden = true;


const journalArr = () => {

    hidJournal.innerHTML = (journal.join('<br>'));
    journal.length = 9;
    if(hidJournal.hidden == true && hidCons.hidden == false){
        hidJournal.hidden = false;
        hidCons.hidden = true;
      } 
      else{
        hidJournal.hidden = true;
        hidCons.hidden = false;
      }
  
}

const insert = (num) => {

    document.form.textview.value = document.form.textview.value + num;

};

const result = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let res = document.form.textview.value;
        if(res) {
            document.form.textview.value = eval(res);
            journal.unshift(`(${hours} : ${minutes} : ${seconds}) ${res} =  ${document.form.textview.value}`)
          
  };

};

const clearResult = () => {

    document.form.textview.value = "";

 }

const arrow = () => {

    let res = document.form.textview.value;
    document.form.textview.value = res.substring(0,res.length-1);
    
 }

