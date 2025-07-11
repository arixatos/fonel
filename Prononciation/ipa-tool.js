function convert() {
  let ipa = document.getElementById('ipaInput').value;
  ipa = ipa.normalize('NFC');
  const chars = [...ipa];
  let result = '';
  let i = 0;

  // ルール（長い順にソート済み）
  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // 長いfromから優先的にチェック
  rules.sort((a, b) => [...b[0]].length - [...a[0]].length);

  while (i < chars.length) {
    let matched = false;

    for (const [from, to] of rules) {
      const fromChars = [...from];
      const slice = chars.slice(i, i + fromChars.length).join('');
      if (slice === from) {
        result += to;
        i += fromChars.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      result += chars[i];
      i++;
    }
  }

  document.getElementById('output').innerText = result;
}
