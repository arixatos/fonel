---
title: 動詞項構造一覧
layout: default
nav_order: 5
parent: 動詞項構造
---
# 動詞項構造一覧

<ul>
  {% for verb in site.data.ps %}
    <li>
      <a href="/動詞/{{ verb.動詞 }}.html">{{ verb.動詞 }}</a>
    </li>
  {% endfor %}
</ul>

