

//////////////oppageve 6
let liEl = document.getElementById("list");
//etchLi = [], liInx;

const btnRemoveLi = document.getElementById("remove-li");
/*
//const callbtn = () => {
    for(let i = 0; liEl.length > i; i++){
        etchLi.push(liEl[i].innerHTML);
        console.log("fungerer denne ")
    }
    //console.log(etchLi);
//};
*/


///////////denne fungerer 
/*
btnRemoveLi.addEventListener("click", () => {
    const elementOfLi = liEl.firstChild;
    if (elementOfLi){
        liEl.removeChild(elementOfLi);
    }
}); 
*/
 
 const liRemevEvent = () => {
    //for(let i = 0; li = liEl[i]; i++){
        //liEl.btnRemoveLi = function(){
           // liInx = etchLi.indexOf(this.innerHTML)
            //console.log(this.innerHTML + " INDEX = " + liInx);
            const remLi = liEl;
            if (remLi) {
                //liEl.removeChild();
                liEl.removeChild(remLi.firstChild);
            }
            
            
       // }; 
    }
   // console.log(this.innerHTML + " INDEX = " + liEl);
   // console.log(liEl[0]);
    
    
btnRemoveLi.addEventListener("click", liRemevEvent);

//btnRemoveLi.addEventListener("click", () => {
    
    
    /*const inLLi = liEl.firstChild;
    if (inLLi){
        liEl.removeChild(inLLi);
    }
    */
    //console.log(liEl[0]);
//}) 




//callbtn(); 


/*
btnRemoveLi.addEventListener = ("click", () => {
    liEl[etchLi].parentNode.removeChild(liEl[liInx]);
    console.log("her")
})*/
