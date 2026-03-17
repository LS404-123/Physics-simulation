---
name: physics-viz-graphs
description: 物理模擬數據線圖繪製的標準。
---

# Physics Visualization: Graphs

## 繪圖規範
- **座標軸**：
  - X / Y 軸應使用絕對的數值，不應該隨模擬時間而變化。
  - 必須標註單位與刻度。
  - 最大值應根據模擬數據在模擬開始前動態調整。
- **即時更新**：
  - 模擬過程中線條應平滑繪製。
- **佈局**：
  - 圖表應位於 Bento Box 的獨立 Card 中。
- **數據**：
  - 按需求支援全螢幕放大檢視或數據導出 (JSON/CSV)。

## UI 組件範本
使用 Canvas 或 SVG 繪製，避免依賴外部龐大庫，除非用戶要求（如 Chart.js）。
