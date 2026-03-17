---
name: ipad-optimization
description: 最後將html佈局調整優化，特別針對 iPad Air (1100x650) 佈局進行優化。
---

# iPad Air Optimization Skill

本技能用於指導 Agent 開發高品質、符合實體感的物理模擬實驗。

## 核心佈局規範 (iPad Air 優化)

- **畫布比例**：基準尺寸固定為 `1100x650` px。
- **對齊方式**：頁面內容應水平置中，並視情況上移（減少捲動）。
- **響應式**：優先考慮固定比例，確保在平板螢幕上完整顯示所有 UI 元素。

## 視覺與美學標準

- **深色美學**：背景使用深灰或黑色，結合霓虹感的力向量與軌跡。
- **排版**：使用 Google Fonts (如 Inter 或 Roboto)，避免瀏覽器預設字體。
- **動態效果**：加入微縮動畫，如懸停效果、平滑的重置過渡。

## 常用程式碼範本

## 常用範例程式碼 (Examples)

詳細實作請參考 `examples/` 資料夾：
- [layout.css](file:///c:/Users/LS404/Desktop/physics_simulation/Physics-simulation/.agent/skills/draft-physics-simulation/examples/layout.css)：針對 iPad Air 優化的主畫布容器樣式。

### 重置邏輯
重置按鈕應徹底清除定時器 (Timers) 並將物理狀態回歸 `t=0`。
