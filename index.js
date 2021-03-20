const names=['Lisa','Kaitlin','Jan'];
const occasion=['suprise'];

function writeCards(names,occasion){
    const notes=[]
    for (let i=0;i<names.length;i++){
        const note =`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
        notes.push(note);
        debugger;
    }
    return notes;
}

function countDown(number) {
   for(let i=number; i>=0; i--){
       console.log(i);
   }
}
