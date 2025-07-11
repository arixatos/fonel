function convert() {
  let ipa = document.getElementById('ipaInput').value;

  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // ステップ1：すべての変換対象を一時マーカーに退避
  for (const [from, _] of rules) {
    const marker = `__${from.replace(/[^a-z0-9]/gi, '_')}__`;
    ipa = ipa.split(from).join(marker);
  }

  // ステップ2：マーカーを使って変換（衝突を避ける）
  for (const [from, to] of rules) {
    const marker = `__${from.replace(/[^a-z0-9]/gi, '_')}__`;
    ipa = ipa.split(marker).join(to);
  }

  // ステップ3：結果表示
  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
