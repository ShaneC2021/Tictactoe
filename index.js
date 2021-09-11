/*


for(let i=0; i<3;i++){
    if(gridTop[i]===gridMid[i]===gridLow[i]){

    }

}





function win(){

  let grid=[["","",""],["","",""],["","",""]]

for(let i=0; i < 3; i++){
    let j=0;
      if((grid[i][j]=== grid[i][j+1]) && (grid[i][j+2]===grid[i][j])){
        console.log("winner");
     }
  }
 
  for(let j=0;j<3;j++){
    let i=0;
      if((grid[i][j]===grid[i+1][j]) && (grid[i+2][j]===grid[i+1][j])){
        console.log("winner");
      }
 }
  diagonal();
  }

   

function diagonal(){
  let i=0;
  let j=0;
  if((grid[i][j]===grid[i+1][j+1]) && (grid[i+2][j+2]===grid[i][j])) {
    console.log("winner");
  }
    if ((grid[i][j+2]===grid[i+1][j+1]) && (grid[i+2][j]===grid[i][j+2])){
      console.log("winner");
    
  }
}
*/

let counter = 0;
// used to display X or O when a user clicks on a particular square

function change(idName){
  
let choice = document.getElementById(idName).innerHTML; //variable gets value displayed in any particualr square


 if (choice === "O" || choice === "X"){                 //if a square displays an X or an O user is prompted to make a different selection
  alert ("choose another square");
  return 0;
 }

  if ( counter === 0 || counter % 2 === 0) {
   document.getElementById(idName).innerHTML = "X";    //counter is used to determine whether an X or an O is dsplayed
   
   counter += 1;                                       // diplays X on odd and O's on even
 }
 else if( counter % 2 !== 0){ 
    document.getElementById(idName).innerHTML = "O";
  counter += 1;
}




}


