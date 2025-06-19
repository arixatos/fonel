---
title: 動詞項構造一覧
layout: default
nav_order: 5
parent: 動詞項構造
---
# 動詞項構造一覧

<ul>
  {% for verb in site.data.ps %}
    {% assign verb_name = verb["動詞"] %}
    <li>
      <a href="./{{ verb_name }}.html">{{ verb_name }}</a>
    </li>
  {% endfor %}
</ul>
