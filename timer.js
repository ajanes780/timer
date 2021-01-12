

let timeOut = 0
dataTimeDelay = process.argv.slice(2) // creates an array with user data 
dataTimeDelay =  dataTimeDelay.sort((a,b) => a-b)

for (const number of dataTimeDelay) {
  if(number === "" || number <= 0 ){ // logic to block 
    process.stdout.write (` ⚠  Bad User Input ${number} ⚠ ` ); // dummy check 
      console.log('\n');
  } else {
    setTimeout(() => {  process.stdout.write('\x07'+  "  ⏰ This is a Warning ⏰  "); }, number * 1000) ///delay in ms
  }  
};
  
  
  



