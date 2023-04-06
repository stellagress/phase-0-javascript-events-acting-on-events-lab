// Your code here


// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

const dodger = document.getElementById('dodger')


function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px" , "")
    console.log(leftNumbers)

    const left = parseInt(leftNumbers, 10)
    console.log(left)


    if(left > 0){
        dodger.style.left = `${left -1}px`
    }
}

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {

      moveDodgerLeft()
    }
  });






  function moveDodgerRight(){

    const rightNumbers = dodger.style.left.replace("px" , "")
    console.log(rightNumbers)

    

    const right = parseInt(rightNumbers, 10)
    console.log(right)


    //if(right > 0){
      if(right < 360){  
        dodger.style.left = `${right + 1}px`
    }
}



  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {

      moveDodgerRight()
    }
  });











