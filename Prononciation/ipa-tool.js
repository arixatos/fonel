function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // ステップ0：マーカー文字削除 + 正規化（NFC）
  ipa = ipa.replace(/‹‹|››/g, '').normalize('NFC');

  // 変換ルール（順序：長い音素 → 短い音素）
  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // ステップ1：マーカー退避
  for (const [from, _] of rules) {
    const pattern = from.normalize('NFC');
    const marker = `‹‹${pattern}››`;
    ipa = ipa.split(pattern).join(marker);
  }

  // ステップ2：to に置換
  for (const [from, to] of rules) {
    const pattern = from.normalize('NFC');
    const marker = `‹‹${pattern}››`;
    ipa = ipa.split(marker).join(to);
  }

  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
