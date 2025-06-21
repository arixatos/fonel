---
layout: default
title: IPA → フォネル翻字ツール
nav_order: 90
---

# IPA → フォネル翻字ツール

IPA記号を入力すると、対応するフォネル表記に自動で翻字します。

<label for="ipaInput">IPA入力：</label>
<textarea id="ipaInput" rows="3" style="width:100%; padding:0.5em; font-size:1em;" placeholder="例：avɑ̃tyʁ"></textarea>

<button onclick="convert()" style="margin-top:1em; padding:0.5em 1em;">翻字する</button>

<div id="output" style="margin-top:1em; font-weight:bold; color:#004080; white-space:pre-wrap;"></div>

<script>
  function convert() {
    let ipa = document.getElementById('ipaInput').value;

    const rules = [
      // 複合音
      ['t͡s', 'tz'],
      ['d͡z', 'dz'],
      ['tʃ', 'tĉ'],
      ['dʒ', 'dj'],

      // 鼻母音
      ['œ̃', 'ũ'], ['ɑ̃', 'ã'], ['ɛ̃', 'ẽ'], ['ɔ̃', 'õ'],

      // 単母音
      ['ø', 'ö'], ['œ', 'ê'], ['ə', 'ë'],
      ['ɥ', 'ŷ'], ['y', 'ü'], ['ɑ', 'a'], ['ɔ', 'ò'],
      ['ɛ', 'è'], ['e', 'é'], ['i', 'i'], ['o', 'ó'], ['u', 'u'],

      // 子音
      ['ʁ', 'r'], ['ʃ', 'ĉ'], ['ʒ', 'j'], ['ɲ', 'ñ'],
      ['ŋ', 'ng'], ['j', 'y'], ['ɡ', 'g']
    ];

    for (const [from, to] of rules) {
      ipa = ipa.split(from).join(to);
    }

    document.getElementById('output').innerText = `フォネル表記：\n${ipa}`;
  }
</script>
