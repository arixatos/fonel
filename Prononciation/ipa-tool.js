function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // マーカーに使う文字を事前削除
  ipa = ipa.replace(/‹‹|››/g, '');

  // 音素置換ルール（長い音素から順に）
  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // ステップ1：すべての from を ‹‹...›› に退避（正規表現で）
  for (const [from, _] of rules) {
    const re = new RegExp(from.normalize('NFC'), 'g');
    ipa = ipa.replace(re, `‹‹${from}››`);
  }

  // ステップ2：‹‹...›› を to に変換
  for (const [from, to] of rules) {
    const marker = `‹‹${from}››`;
    ipa = ipa.split(marker).join(to);
  }

  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
