<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>IPA変換テスト</title>
</head>
<body>

<h3>IPA入力：</h3>
<textarea id="ipaInput" rows="5" cols="50">/kɑ̃/ /kɔ̃.b‿jɛ̃/ /dʒi/</textarea><br>
<button onclick="convert()">変換</button>

<h3>フォネル表記：</h3>
<pre id="output"></pre>

<script>
function convert() {
  let ipa = document.getElementById('ipaInput').value;

  // NFC正規化して、スプレッド構文で結合文字も個別処理できるようにする
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
</script>

</body>
</html>
