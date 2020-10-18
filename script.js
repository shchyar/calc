let journal = [];
let div = document.createElement('div');
div.classList.add('hidden');
document.body.append(div);
let hidCons = document.getElementById('console');
div.hidden = true;
hidCons.hidden = false;



const journalArr = () => {

    div.innerHTML = (journal.join('<br>'));
      if(div.hidden == true && hidCons.hidden == false){
          div.hidden = false;
          hidCons.hidden = true;
      } 
      else{
        div.hidden = true;
        hidCons.hidden = false;
      }
  
}

const insert = (num) => {

    document.form.textview.value = document.form.textview.value + num;

};

const result = () => {
  
    let res = document.form.textview.value;
        if(res) {
            document.form.textview.value = eval(res);
            journal.push(`${res} =  ${document.form.textview.value}`)
          
  };

};

const clearResult = () => {

    document.form.textview.value = "";

 }

const arrow = () => {

    let res = document.form.textview.value;
    document.form.textview.value = res.substring(0,res.length-1);
    
 }

