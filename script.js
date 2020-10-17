const insert = (num) => {

    document.form.textview.value = document.form.textview.value + num;

};

const result = () => {

    let res = document.form.textview.value;
      if(res) {
        document.form.textview.value = eval(res);
  };

};

const clearResult = () => {

    document.form.textview.value = "";

 }

const arrow = () => {

    let res = document.form.textview.value;
    document.form.textview.value = res.substring(0,res.length-1);
    
 }
