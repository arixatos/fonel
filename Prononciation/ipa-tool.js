// ipa-tool.js
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

  for (const [from, to] of rules) {
    ipa = ipa.split(from).join(to);
  }

  document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
}
