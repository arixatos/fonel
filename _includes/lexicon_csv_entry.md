# Fonel語 語彙生成＆CSV登録指示書（データ入力ガイド）

## 目的  
- Fonel語の語彙生成指示書に従った語彙を、GitHubリポジトリのCSVファイルに正確かつ一貫して登録する  
- 各CSVファイルの構造とカラムの意味を理解し、適切にデータを入力する

---

## 1. 対象CSVファイル  
- `_data/verbs.csv`  
- `_data/nouns.csv`  
- `_data/adjectives.csv`  
- `_data/adverbs.csv`  
- `_data/function_words.csv`  

---

## 2. CSVカラム共通ルール  
- **文字コードはUTF-8**を使用  
- カラムヘッダーは変更しない  
- 空欄はなるべく避ける（不明な場合は`null`や`-`を使用）  
- IPA表記とFonel表記は対応を必ず確認する

---

## 3. 主要カラム説明（例：verbs.csv）

| カラム名    | 内容                                      | 備考                             |
|-------------|------------------------------------------|----------------------------------|
| `id`        | 動詞の一意識別子                         | 重複禁止                        |
| `fr`        | フランス語原形                           | フランス語の不定詞など           |
| `ipa`       | フランス語最長形IPA                      | 語尾シュワーや潜在子音を含む形   |
| `fonel_ipa` | Fonel語でのIPA（基準発音形）             | 音韻対応ルールに従った形         |
| `fonel`     | Fonel語の綴字形（辞書形）                | 音韻対応表に基づく正式な表記     |
| `meaning`   | 意味・訳語                                | 日本語など                       |
| `ps`        | 項構造（place structure）情報             | 動詞の場合は特に重要             |
| `notes`     | 備考                                    | 用法や注意点など                  |

---

## 4. 各品詞別の特徴

### 動詞（verbs.csv）  
- 不定詞形を登録  
- 項構造情報は必須で、仏語の役割ラベルに近い形式で記述  
- 活用形は別ファイルまたは生成ルールに従う

### 名詞（nouns.csv）  
- 単数形の辞書形を登録  
- 性・数の情報が必要（男性・女性、単数・複数）  
- 複数形派生は規則的なら生成規則に任せる

### 形容詞（adjectives.csv）  
- 男性単数形辞書形登録  
- 女性形語尾のfémina ŝwa反映済みの形を明示的に管理できると良い

### 副詞（adverbs.csv）  
- 形容詞由来の副詞など、対応する形を示す

### 機能語（function_words.csv）  
- 前置詞、接続詞、代名詞など  
- 文法的機能に合わせて分類

---

## 5. 登録時の注意点

- Fonel表記のスペルミスは大きな誤解を招くため、必ず対応表を確認  
- IPAとFonel表記は一対一対応を原則とし、不一致があれば修正を優先  
- 新規語彙追加時はID重複を避け、関連ファイルと整合性を保つ  
- 備考欄には特筆すべき語法や音変化の説明を書く

---

## 6. 参考資料

- [verbs.csv](https://github.com/arixatos/fonel/blob/main/_data/verbs.csv)  
- [nouns.csv](https://github.com/arixatos/fonel/blob/main/_data/nouns.csv)  
- [adjectives.csv](https://github.com/arixatos/fonel/blob/main/_data/adjectives.csv)  
- [adverbs.csv](https://github.com/arixatos/fonel/blob/main/_data/adverbs.csv)  
- [function_words.csv](https://github.com/arixatos/fonel/blob/main/_data/function_words.csv)  

---

👉 語彙変換ルールについては、[語彙生成指示書](lexicon_generation.md)を参照してください。
