const str = document.querySelector('.text-truncate').textContent;

console.log(typeof(truncate));

// if (truncate.length > 15) {
//     truncate = truncate.substring(0, 14) + "...";
//   }


  function truncate(str, n){
    return (str.length > 15) ? str.substr(0, 15-1) + '&hellip;' : str;
  };