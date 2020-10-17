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
