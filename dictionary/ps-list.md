---
title: 動詞項構造一覧（全出力）
layout: default
nav_order: 5
parent: 動詞項構造
---
# 動詞項構造一覧（全出力）

<table>
  <thead>
    <tr>
      <th>動詞</th>
      <th>x1_役割</th>
      <th>x1_前置詞</th>
      <th>x1_格</th>
      <th>x2_役割</th>
      <th>x2_前置詞</th>
      <th>x2_格</th>
      <th>x3_役割</th>
      <th>x3_前置詞</th>
      <th>x3_格</th>
    </tr>
  </thead>
  <tbody>
    {% for verb in site.data.ps %}
    <tr>
      <td>{{ verb["動詞"] }}</td>
      <td>{{ verb["x1_役割"] }}</td>
      <td>{{ verb["x1_前置詞"] }}</td>
      <td>{{ verb["x1_格"] }}</td>
      <td>{{ verb["x2_役割"] }}</td>
      <td>{{ verb["x2_前置詞"] }}</td>
      <td>{{ verb["x2_格"] }}</td>
      <td>{{ verb["x3_役割"] }}</td>
      <td>{{ verb["x3_前置詞"] }}</td>
      <td>{{ verb["x3_格"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
