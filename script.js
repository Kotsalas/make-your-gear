const diameter = document.getElementById("diameter");
const numOfTeeth = document.getElementById("num-of-teeth");
const sizeOfTeeth = document.getElementById("size-of-teeth");
const circumference = document.getElementById("circumference");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const findResult = (diameterLocal, numOfTeethLocal, sizeOfTeethLocal, circumferenceLocal) => {
  if(!diameterLocal && !circumferenceLocal){
    if(( ( ( ( (numOfTeethLocal * sizeOfTeethLocal) / 3.14) / 2) * (2 * 3.14) ).toFixed(2) - (numOfTeethLocal * sizeOfTeethLocal).toFixed(2) ) / numOfTeethLocal >= 0){
    result.textContent = `Η περίμετρος χρειάζεται να είναι μεγαλύτερη από ${numOfTeethLocal * sizeOfTeethLocal}εκ (περίμετρος >= ${numOfTeethLocal * sizeOfTeethLocal}εκ) 
    ή η διάμετρος να είναι μεγαλύτερη από ${((numOfTeethLocal * sizeOfTeethLocal) / 3.14).toFixed(2)}εκ (διάμετρος >= ${((numOfTeethLocal * sizeOfTeethLocal) / 3.14).toFixed(2)}εκ), 
    με ελάχιστο διάστημα ανάμεσα από τα δόντια ${( ( ( ( (numOfTeethLocal * sizeOfTeethLocal) / 3.14) / 2) * (2 * 3.14) ).toFixed(2) - (numOfTeethLocal * sizeOfTeethLocal).toFixed(2) ) / numOfTeethLocal}`
    }
    else{
      alert("Κάτι πήγε λάθος.")
      return
    }
  }
  else if(!diameterLocal){
    if(circumferenceLocal >= numOfTeethLocal * sizeOfTeethLocal){
      result.textContent = `Η διάμετρος είναι ${(circumferenceLocal / 3.14).toFixed(2)}εκ, 
      η ακτίνα ${((circumferenceLocal / 3.14) / 2).toFixed(2)}εκ
      και το διάστημα ανάμεσα από τα δόντια ${((circumferenceLocal - (numOfTeethLocal * sizeOfTeethLocal)) / numOfTeethLocal).toFixed(2)}εκ.`;
    }
    else{
      alert("Η διάμετρος είναι αρκετά μικρή ή ο αριθμός των γραναζιών είναι αρκετά μεγάλος ή το μέγεθος των δοντιών είναι αρκετά μεγάλος.");
      return
    }
  }
  else if(!circumferenceLocal){
    const initialCircumference = (diameterLocal / 2) * (2 * 3.14);
    if(initialCircumference >= numOfTeethLocal * sizeOfTeethLocal){
      result.textContent = `Η περίμετρος ειναι ${(initialCircumference).toFixed(2)}εκ και 
       το διάστημα ανάμεσα από τα δόντια ${((initialCircumference - (numOfTeethLocal * sizeOfTeethLocal)) / numOfTeethLocal).toFixed(2)}.`;
    }
    else{
      alert("Η διάμετρος ειναι πολύ μικρή.")
      return
    }
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  result.textContent = "";
  if(!numOfTeeth.value || !sizeOfTeeth.value){
    return
  }
  else{findResult(diameter.value, numOfTeeth.value, sizeOfTeeth.value, circumference.value)}
})