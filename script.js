//setting the current time display on wesbite
$(function () {

    let timePlaceHolder = $("#current-time");
    let datePlaceHolder = $("#current-date");
    let dateNow = dayjs().format("D MMM YYYY")
    datePlaceHolder.text(dateNow + " at ");
    
    setInterval(function () {
        let timeNow = dayjs().format("HH:mm:ss a");
        timePlaceHolder.text(timeNow);
        
    }, 1000)

})
