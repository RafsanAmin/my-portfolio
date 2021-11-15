let opC = 0;
let x = $('.display').val();
let fstNum = 0;
let scndNum = 0;
let some = true;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const ops = ['+', '-', '*', '/', '^'];

$('body').keypress(function (e) {
  let char = String.fromCharCode(e.which);
  let nBool = numbers.find((x) => {
    return x === parseFloat(char);
  });
  let oBool = ops.find((x) => {
    return x === char;
  });
  if (nBool !== undefined) {
    instNum(parseFloat(char));
  } else if (oBool !== undefined) {
    opclick(char);
  } else if (e.which == 13) {
    event.preventDefault();
    eq();
  } else if (e.which == 8) {
    back();
  } else if (char == 'C' || char == 'c') {
    clr();
  } else if (char == '.') {
    instNum('.');
  }
});
$('body').keydown(function (e) {
  if (e.which == 8) {
    back();
  }
});

function instNum(num) {
  let x = $('.display').val();
  $('.display').val(x + num);
  if (x === '0') {
    $('.display').val(num);
  }
}
function pos_to_neg(num) {
  let aNum = Number(num);
  let rNum = -aNum;
  return rNum.toString();
}
$('.pls-mns').click(() => {
  let x = $('.display').val();
  let cNum = pos_to_neg(x);
  $('.display').val(cNum);
});

function back() {
  let x = $('.display').val();
  if (x === '0') {
    return 0;
  } else {
    x = x.slice(0, -1);
    $('.display').val(x);
  }
}
$('.back').click(function () {
  back();
});
function clr() {
  $('.display').val(0);
  $('.mem_display').val(0);
  opC = 0;
  fstNum = 0;
  scndNum = 0;
}
$('.clr').click(() => {
  clr();
});

$('.clr_e').click(() => {
  $('.display').val(0);
});

function opclick(op) {
  let x = $('.display').val();
  opC = op;
  fstNum = parseFloat(x);
  $('.display').val(0);
  $('.mem_display').val(fstNum + op);
}

function eq() {
  let x = $('.display').val();
  scndNum = parseFloat(x);
  console.log(fstNum + ' ' + scndNum);
  if (opC == '+') {
    $('.display').val(fstNum + scndNum);
  } else if (opC == '-') {
    $('.display').val(fstNum - scndNum);
  } else if (opC == '*') {
    $('.display').val(fstNum * scndNum);
  } else if (opC == '/') {
    $('.display').val(fstNum / scndNum);
  } else if (opC === '^') {
    $('.display').val(fstNum ** scndNum);
  }
  $('.mem_display').val(0);
}
$('#eq').click(() => {
  eq();
});
$('.root').click(() => {
  let x = $('.display').val();
  let ProcNum = parseFloat(x);
  $('.display').val(Math.sqrt(ProcNum));
});
$('.cb_root').click(() => {
  let x = $('.display').val();
  let ProcNum = parseFloat(x);
  $('.display').val(Math.cbrt(ProcNum));
});
$('.x_sqr').click(() => {
  let x = $('.display').val();
  let ProcNum = parseFloat(x);
  $('.display').val(ProcNum ** 2);
});
$('.x_cube').click(() => {
  let x = $('.display').val();
  let ProcNum = parseFloat(x);
  $('.display').val(ProcNum ** 3);
});
$('.invrt').click(() => {
  let x = $('.display').val();
  let ProcNum = parseFloat(x);
  $('.display').val(1 / ProcNum);
});
$('.perc').click(() => {
  let x = $('.display').val();
  scndNum = parseFloat(x);
  if (opC == '+') {
    $('.display').val(fstNum + fstNum * (scndNum / 100));
  } else if (opC == '-') {
    $('.display').val(fstNum - fstNum * (scndNum / 100));
  } else if (opC == '*') {
    $('.display').val(fstNum * (scndNum / 100));
  } else if (opC == '/') {
    $('.display').val(fstNum / (scndNum / 100));
  }
  $('.mem_display').val(0);
});
