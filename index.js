// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => drivers.slice (0,2);
const returnLastTwoDrivers = () => drivers.slice(-2);
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier (num){
    const multiplier = (num) => num*num;
    return multiplier;
}
const fareDoubler = (multiplier) => multiplier*2;
const fareTripler = (multiplier) => multiplier*3;
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers ();