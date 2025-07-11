function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // マーカーとして使用する記号を事前除去
  ipa = ipa.replace(/‹‹|››/g, '');

  // 変換ルール（長いもの優先）
  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // 正規化：結合文字を分解しないよう NFC のまま扱う
  ipa = ipa.normalize('NFC');

  // ステップ1：退避（‹‹...››で囲う）
  for (const [from, _] of rules) {
    const escaped = from.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // 正規表現エスケープ
    const pattern = new RegExp(escaped, 'gu'); // Unicodeモードで一致
    ipa = ipa.replace(pattern, `‹‹${from}››`);
  }

  // ステップ2：マーカーを変換先に
  for (const [from, to] of rules) {
    const marker = `‹‹${from}››`;
    ipa = ipa.split(marker).join(to);
  }

  // 出力
  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
