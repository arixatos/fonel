function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // ステップ0：マーカー文字をあらかじめ削除しておく
  ipa = ipa.replace(/‹‹|››/g, '');

  // 変換ルール
  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // ステップ1：変換元をマーカーに退避
  for (const [from, _] of rules) {
    ipa = ipa.split(from).join(`‹‹${from}››`);
  }

  // ステップ2：マーカーを変換先に置換
  for (const [from, to] of rules) {
    ipa = ipa.split(`‹‹${from}››`).join(to);
  }

  // 出力
  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
