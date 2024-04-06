// ボタンがクリックされたら文字色を赤に変える
$(function() {
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  // ボタンをクリックされたらテキストを変化させる
  $('#change-text').on('click', function() {
    $('#target').text('文字が変化しました！');
  });

  // ボタンをクリックしたらfadeOut,fadeInさせる
  // fadeOut
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  // fadeIn
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});

