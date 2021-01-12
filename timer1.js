//implement alarm clock which will beep after a specified amount of time has passed
//the user can specify an unlimited number of alarms using command line arguments
//ex node timer1.js 10 3 5 15 9
//will beep at 3 seconds 5 seconds 9 seconds 10 seconds 15 seconds

//3 edge cases
//input is not a number: ignore these as well

//need to set it up to take command line args so process.argv DONE
//we will need to sort the args from lowest to highest to beep at the right times DONE
//we will need a loop? to go through and beep at each given time DONE

let arg = process.argv.slice(2) //give us an array to we want that?
let sortedArgs = arg.sort((a, b) => a - b)

//keep as this works without edge cases
// for (const arg of sortedArgs) {
//   let timeOut = arg
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, timeOut * 1000)
//   }

//this works for negative numbers edge case, no input edge case
//only edge case missing is not taking Nan like "5" 
for (const arg of sortedArgs) {
  let timeOut = arg
  // if typeof arg === "number" //console.log typeof arg
  if (arg > 0 && sortedArgs.length > 0 && !isNaN(arg)) {
    //console.log(arg)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeOut * 1000)
  }
}


//process.stdout.write('\x07'); implement this to get a sound

// let timeOut = 100
//   for (const char of spin) {
//     setTimeout(() => {
//       process.stdout.write(char);
//     }, timeOut += 200)
//   }

//   setTimeout(() => {
//     console.log('\n');
//   }, timeOut);


