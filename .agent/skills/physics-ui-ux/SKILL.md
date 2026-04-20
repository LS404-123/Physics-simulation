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
   - 增加背景的對比度，讓模擬重點更突出。
   - Backdrop-filter：`blur(10px)`。
   - Border：`1px solid
3. **iPad Air 優化**：
   - 嚴格限制外層容器為 `1100px * 650px`。
   - 禁止出現垂直或水平捲動條。
4. **畫布大小限制 (Canvas Size Limit)**：
   - 應根據模擬數據的範圍調整並固定畫布大小，確保模擬物體在任何輸入下都不會超出畫布範圍。
5. **顔色對比度**：
   - 在進行 UI 設計時，請嚴格遵守 WCAG 2.1 AA 級對比標準，確保文字與背景、以及不同功能組件之間有足夠的明度差（Lightness/Value difference）。
   - 請避免使用色相過於接近或飽和度過低的相鄰色來區分重要元素，應建立清晰的視覺層級，使主要按鈕、次要元素與中性背景之間具備高辨識度。
