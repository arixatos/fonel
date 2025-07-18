# フランス語→Fonel語 語彙生成指示書（ガイドライン）

## 目的  
- フランス語の最長形IPAを元に、Fonel語の正確な音韻対応に従って**語彙を生成**する  
- 一貫性のある正しいFonel語の語彙形（辞書形）を作成し、語彙として登録する

## 作業手順

1. **最長形IPAの取得**  
   - フランス語単語の最長形（語尾シュワーや潜在子音を含む完全な発音）をIPAで示す  
   - 例：forme → [fɔʁmə] 、 complète → [kɔ̃plɛtə]

2. **Fonel音韻対応表に基づく音韻変換**  
   - 母音・子音はFonel音韻表に厳密に対応させる  
   - 母音の鼻音、アクセントの向き、シュワーは特に注意

3. **語彙生成ルールの遵守**  
   - Fonel語の語彙は必ず「最長形発音」に基づく音声基形から構成される  
   - 「潜在子音（cõsòn latãnt）」を含めること  
   - 「女性形形容詞のfémina ŝwa」など文法的音変化を反映すること（例：語尾シュワー ë の付加）  
   - 語彙形（辞書形）は、最長形音声基形のFonel表記で一貫して定義する  

4. **辞書形（標準語彙）の定義と管理**  
   - フランス語語彙を元に最長形のFonel表記を辞書形として登録する  
   - 辞書形には音声基形（IPA）とFonel文字形の両方を記録することが望ましい  
   - 辞書形は派生語や活用形の基礎となる

5. **注意点**  
   - フランス語の綴字や印象に引きずられず、常にIPAと音韻対応表に忠実に  
   - Fonelでは /k/ 音を常に「c」で書き、「k」は使わない  
   - 鼻母音・アクセント・シュワーの扱いは常に表に基づく  
   - 文法的性別、複数形、形容詞変化など文法的側面を考慮する

## 例示

- forme → IPA [fɔʁmə] → Fonel語 **fòrmë**  
- complète → IPA [kɔ̃plɛtə] → Fonel語 **cõplètë**  

## 参考資料

- [Fonel音韻対応表](https://arixatos.github.io/fonel/phonology/)  
- [Fonel語辞書形ルール](https://arixatos.github.io/fonel/lexicon/)

## 🔧 作業支援資料

- [翻字チェックリスト](./phonology_checklist.md)
- [よくある誤りガイド](./common_mistakes.md)



---

👉 CSV登録作業については、[こちらの指示書](lexicon_csv_entry.md)を参照してください。
