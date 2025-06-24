---
layout: default
title: IPA → フォネル翻字ツール
nav_order: 90
parent: 音韻と文字
---

# IPA → フォネル翻字ツール

IPA記号を入力すると、対応するフォネル表記に自動で翻字します。

<label for="ipaInput">IPA入力：</label>
<textarea id="ipaInput" rows="3" style="width:100%; padding:0.5em; font-size:1em;" placeholder="例：avɑ̃tyʁ"></textarea>

<button onclick="convert()" style="margin-top:1em; padding:0.5em 1em;">翻字する</button>

<div id="output" style="margin-top:1em; font-weight:bold; color:#004080; white-space:pre-wrap;"></div>

<script src="./ipa-tool.js"></script>

