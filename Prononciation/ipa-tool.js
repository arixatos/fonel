<textarea id="ipaInput" rows="6" cols="40">/kɑ̃/ /kɔ̃.b‿jɛ̃/</textarea><br>
<button onclick="convert()">変換</button>
<pre id="output"></pre>

<script>
function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // 結合文字を含む複合文字を扱うため、配列化（スプレッド＋正規化）
  const chars = [...ipa.normalize('NFC')];
  let result = '';
  let i = 0;

  const rules = [
    ['t͡s', 'tz'], ['d͡z', 'dz'], ['tʃ', 'tĉ'], ['dʒ', 'dj'],
    ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],
    ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
    ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
    ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'ú'],
    ['ʁ', 'r'], ['ʃ', 'ĉ'], ['k', 'c'], ['ʒ', 'j'], ['ɲ', 'ñ'],
    ['ŋ', 'ng'], ['j', 'i'], ['w', 'ú'], ['ɡ', 'g']
  ];

  // 長い順にソート（最長一致）
  rules.sort((a, b) => b[0].length - a[0].length);

  while (i < chars.length) {
    let matched = false;

    for (const [from, to] of rules) {
      const slice = chars.slice(i, i + [...from].length).join('');
      if (slice === from) {
        result += to;
        i += [...from].length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      result += chars[i];
      i++;
    }
  }

  document.getElementById('output').innerText = `フォネル表記：\n${result}`;
}
</script>
