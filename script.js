
  function nextDayDate() {

        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);

        var month = nextDay.getMonth() + 1;
        var day = nextDay.getDate();
        var year = nextDay.getFullYear();
        var hours = nextDay.getHours();
        var minutes = nextDay.getMinutes();
        var seconds = nextDay.getSeconds();
        if (month < 10) { month = "0" + month }
        if (day < 10) { day = "0" + day }

        var jutro ="Date " + day + " - " + month + " - " + year + " Time " + hours + ":" + minutes + ":" + seconds;

        document.write(jutro);
  }

nextDayDate()



Date.prototype.addDay = function () {
  return new Date(this.setDate(this.getDate() + 1));
};

var now = new Date();

now.addDay();
