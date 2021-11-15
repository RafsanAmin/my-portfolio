let isPs = false;
let path = window.location.pathname;
let page = path.split('/').pop();
console.log(page);
$('.ch div div a').hover(() => {
  $('.gtch').stop().animate(
    {
      opacity: '100%',
    },
    300
  );
});
function gotoPage(x) {
  window.location.href = x;
}
function copy(text) {
  if (typeof text === 'object') {
    let $temp = $('<input>');
    $('body').append($temp);
    $($temp).val(text.text()).select();
    document.execCommand('copy');
    $temp.remove();
    alert('Copied!');
  } else {
    let $temp = $('<input>');
    $('body').append($temp);
    $($temp).val(text).select();
    document.execCommand('copy');
    $temp.remove();
    alert('Copied!');
  }
}
function gotoProj(elem) {
  if (page == 'index.html' || page == '') {
    $('html, body').animate(
      {
        scrollTop: $(elem).offset().top,
      },
      200
    );
  } else {
    gotoPage('index.html' + elem);
  }
}
