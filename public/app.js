let str = document.querySelector('.text-truncate').textContent;
let n = 15;
// console.log(typeof(truncate));

// if (truncate.length > 15) {
//     truncate = truncate.substring(0, 14) + "...";
//   }


  function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
  };