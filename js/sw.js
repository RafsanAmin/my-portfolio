let x;
$(".start").click(() => {
  x = setInterval(() => {
    let msec = Number($(".msec").text());
    let mrslt = msec + 1;
    if (msec == 99) {
      let sec = Number($(".sec").text());
      let rslt = sec + 1;
      if (sec == 59) {
        let min = Number($(".minute").text());
        let minrslt = min + 1;
        $(".minute").text(minrslt);
        $(".sec").text("00");
        if (min == 59) {
          let hour = Number($(".hour").text());
          let hrrslt = hour + 1;
          $(".hour").text(hrrslt);
          $(".minute").text("00");
        } else {
          if (min > 8) {
            $(".minute").text(minrslt);
          } else {
            $(".minute").text("0" + minrslt);
          }
        }
      } else {
        if (sec > 8) {
          $(".sec").text(rslt);
        } else {
          $(".sec").text("0" + rslt);
        }
      }
      $(".msec").text("00");
    } else {
      if (msec > 8) {
        $(".msec").text(mrslt);
      } else {
        $(".msec").text("0" + mrslt);
      }
    }
  }, 10);
});
$(".stop").click(() => {
  clearInterval(x);
});
$(".clear").click(() => {
  clearInterval(x);
  $("p").text("00");
});
