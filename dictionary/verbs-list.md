---
title: 動詞項構造一覧（表形式）
layout: default
nav_order: 5
parent: 語順と文型
---

# 動詞項構造一覧（表形式）

<table>
  <thead>
    <tr>
      <th>Fonel動詞</th>
      <th>発音</th>
      <th>意味(日本語)</th>
      <th>語源(フランス語)</th>
      <th>x1_前置詞</th>
      <th>x1_役割</th>
      <th>x2_前置詞</th>
      <th>x2_役割</th>
      <th>x3_前置詞</th>
      <th>x3_役割</th>
      <th>x4_前置詞</th>
      <th>x4_役割</th>
      <th>x5_前置詞</th>
      <th>x5_役割</th>
    </tr>
  </thead>
  <tbody>
    {% for verb in site.data.verbs %}
    <tr>
      <td>{{ verb.verb }}</td>
      <td>{{ verb.pronunciation }}</td>
      <td>{{ verb.japanese }}</td>
      <td>{{ verb.infinitif_fr }}</td>
      <td>{{ verb.x1_preposition }}</td>
      <td>{{ verb.x1_role }}</td>
      <td>{{ verb.x2_preposition }}</td>
      <td>{{ verb.x2_role }}</td>
      <td>{{ verb.x3_preposition }}</td>
      <td>{{ verb.x3_role }}</td>
      <td>{{ verb.x4_preposition }}</td>
      <td>{{ verb.x4_role }}</td>
      <td>{{ verb.x5_preposition }}</td>
      <td>{{ verb.x5_role }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
