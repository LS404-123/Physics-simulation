---
name: physics-ui-ux
description: 專門用於設計高品質物理模擬介面，包含 Bento Box 與 Glassmorphism 風格。
---

# Physics UI/UX Skill
   
## 視覺風格規範
1. **Bento Box 佈局**：
   - 介面應由數個功能明確的圓角矩形區塊（箱子）組成。
   - 區塊間距（Gap）固定為 `15px` - `20px`。
2. **Glassmorphism (毛玻璃)**：
   - 背景：`rgba(255, 255, 255, 0.1)`。
   - Backdrop-filter：`blur(10px)`。
   - Border：`1px solid rgba(255, 255, 255, 0.2)`。
3. **iPad Air 優化**：
   - 嚴格限制外層容器為 `1100px * 650px`。
   - 禁止出現垂直或水平捲動條。
4. **畫布大小限制 (Canvas Size Limit)**：
   - 應根據模擬數據的範圍調整並固定畫布大小，確保模擬物體在任何輸入下都不會超出畫布範圍。

## 常用範例程式碼 (Examples)

詳細實作請參考 `examples/` 資料夾：
- [styles.css](file:///c:/Users/LS404/Desktop/physics_simulation/Physics-simulation/.agent/skills/physics-ui-ux/examples/styles.css)：Bento Box 與 Glassmorphism 的核心 CSS 樣式。