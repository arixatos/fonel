---
title: 動詞項構造一覧
layout: default
nav_order: 5
parent: 語順と文型
---

# 動詞項構造一覧

<ul>
  {% for verb in site.data.ps %}
    {% assign verb_name = verb.verb %}
    <li>
      <a href="./{{ verb_name }}.html">{{ verb_name }}</a>
    </li>
  {% endfor %}
</ul>
