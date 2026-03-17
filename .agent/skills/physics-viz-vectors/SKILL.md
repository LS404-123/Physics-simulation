---
name: physics-viz-vectors
description: 專門負責將物理向量（力、速度、加速度）可視化，支持箭頭繪製與數值標註。
---

# Physics Visualization: Vectors

## 視覺規範
- **配色標準**：
  - 速度 (v)：藍色 / 青色箭頭。
  - 力 (F)：紅色 / 橘色箭頭。
  - 加速度 (a)：綠色箭頭。
- **箭頭繪製**：
  - 箭頭長度應與物理量的大小成正比 (Scaling)。
  - 箭頭應有標籤，標籤位置應根據向量方向自動調整。


## 常用範例程式碼 (Examples)

詳細實作請參考 `examples/` 資料夾：
- [drawArrow.js](file:///c:/Users/LS404/Desktop/physics_simulation/Physics-simulation/.agent/skills/physics-viz-vectors/examples/drawArrow.js)：高品質、帶有標籤的物理向量繪製函式。
