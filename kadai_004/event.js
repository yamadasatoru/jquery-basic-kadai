
  $(window).on({
    // ロードした時
    'load': () => {
    console.log('loadイベントが発生しました');
  },
  // 画面をスクロールした時
    'scroll': () => {
    console.log('scrollイベントが発生しました');
  },
  });