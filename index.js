/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(array) {
    const record = {};
    record.firstName = array[0]
    record.familyName = array[1]
    record.title = array[2]
    record.payPerHour = array[3]
    record.timeInEvents = []
    record.timeOutEvents = []


    record.createTimeInEvent = createTimeInEvent;
    record.createTimeOutEvent = createTimeOutEvent;
    record.hoursWorkedOnDate = hoursWorkedOnDate;
    record.wagesEarnedOnDate = wagesEarnedOnDate;
    record.allWagesFor = allWagesFor;

    
    return record
 }

 function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(record => createEmployeeRecord(record))
 } 


function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    const timeObj = {
        type: "TimeIn", 
        hour: Number(hour),
        date: date
    }
    this.timeInEvents.push(timeObj)
    return this
}
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    const timeObj = {
        type: "TimeOut", 
        hour: Number(hour),
        date: date
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate(date) {
     const timeInhour  = this.timeInEvents.find(obj => obj.date === date).hour
     const timeOuthour  = this.timeOutEvents.find(obj => obj.date === date).hour

     return (timeOuthour - timeInhour)/100
}
function wagesEarnedOnDate(date) {
   return hoursWorkedOnDate.call(this, date) * this.payPerHour 
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        // return memo + wagesEarnedOnDate.call(this, d)
        return memo + wagesEarnedOnDate.call(this, d)

    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce((total, employee) => {
    return total + employee.allWagesFor();
  }, 0);
}






function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName) 
} 