
function makeFriendlyDates(arr) {
    var result = [];
    var string1 = '', string2 = '';
    var days = [
        0,'1st','2nd','3rd', '4th','5th','6th','7th','8th','9th','10th','11th', '12th',
        '13th', '14th', '15th', '16th','17th','18th','19th','20th','21st','22nd','23rd','24th',
        '25th','26th','27th','28th','29th','30th','31st'
        ];
    var months = [
        0, 'January', 'February', 'March','April','May','June','July','August','September',
        'October','November','December'
    ];
    var startArr = arr[0].split('-'), endArr = arr[1].split('-');
    var start = {
        year: startArr[0],
        month: startArr[1],
        day: startArr[2]
    };
    var end = {
        year: endArr[0],
        month: endArr[1],
        day: endArr[2]
    };
    var startMonth = months[parseInt(startArr[1])], endMonth = months[parseInt(endArr[1])];
    var startYear = parseInt(startArr[0]), endYear = parseInt(endArr[0]);
    var startDay = days[parseInt(startArr[2])], endDay = days[parseInt(endArr[2])];
    
    if (end.year == start.year && start.year == 2016){ //if years match
        if (end.month == start.month) { //if months match
            if (end.day == start.day){ // if days match
                string1 = startMonth + ' ' + startDay + ', ' + startYear;
                result.push(string1);
            } else { //if year/month matches but days are different
                string1 = startMonth + ' ' + startDay;
                string2 = endDay;
                result.push(string1);
                result.push(string2);
            }
             
        } else { //if year matches but months are different
                string1 = startMonth + ' ' + startDay;
                string2 = endMonth + ' ' + endDay;
                result.push(string1);
                result.push(string2);
        }
    //start year is 2016, but still less than 12 months total time difference    
    } else if (end.year == start.year && start.year > 2016) {
        string1 = startMonth + ' ' + startDay + ', ' + startYear;
        string2 = endMonth + ' ' + endDay;
        result.push(string1);
        result.push(string2);
    }else if ((end.year - 2016 == 1) && (end.month <= start.month)){ 
        string1 = startMonth + ' ' + startDay;
        string2 = endMonth + ' ' + endDay;
        result.push(string1);
        result.push(string2);
    //for start years greater than current year
    } else if ((end.year - start.year == 1) && (end.month <= start.month)){ 
        string1 = startMonth + ' ' + startDay + ', ' + startYear;
        string2 = endMonth + ' ' + endDay;
        result.push(string1);
        result.push(string2);
    } else {
        string1 = startMonth + ' ' + startDay + ', ' + startYear;
        string2 = endMonth + ' ' + endDay + ', ' + endYear;
        result.push(string1);
        result.push(string2);
    }
    console.log(result);
    return result;
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);


/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.split()
String.prototype.substr()
parseInt()


makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/