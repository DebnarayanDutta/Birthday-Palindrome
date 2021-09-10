const inputDate = document.querySelector("#inputDate")
const check = document.querySelector("#check")
const display = document.querySelector("#display")


check.addEventListener("click", function checkPalindrome(){
    let inputValue = inputDate.value;

    let dateArray = inputValue.split("-")

    let dateObj = {
        year : dateArray[0],
        month : dateArray[1],
        day : dateArray[2]
    }

    const allDateFormatArray = getAllDateFormats(dateObj)
    console.log(allDateFormatArray)

    let flag = false;
    for(let i=0;i<allDateFormatArray.length;i++){
        if(isPalindrome(allDateFormatArray[i])){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }

    if(flag === true){
        display.innerText = "Yes it is palindrome"

    }else{
        display.innerText = "No it is not a palindrome"
    }
    
})


function reverseStr(str){
    var listofCars = str.split('');
    var reverselistofcars = listofCars.reverse();
    var reversedStr = reverselistofcars.join('');
    return reversedStr
}

function isPalindrome(str){
    var reverse = reverseStr(str);

    if(str === reverse){
        return true;
    }
    return false;
}


function getAllDateFormats(dateObj) {

    var ddmmyyyy = dateObj.day + dateObj.month + dateObj.year;
    var mmddyyyy = dateObj.month + dateObj.day + dateObj.year;
    var yyyymmdd = dateObj.year + dateObj.month + dateObj.day;
    var ddmmyy = dateObj.day + dateObj.month + dateObj.year.slice(-2);
    var mmddyy = dateObj.month + dateObj.day + dateObj.year.slice(-2);
    var yymmdd = dateObj.year.slice(-2) + dateObj.month + dateObj.day;
    return [ddmmyy,mmddyyyy,yyyymmdd,ddmmyyyy,mmddyy,yymmdd]
}





