---
name: 自動化本地驗證 (Automated Localhost Verification)
description: 此技能專用於在程式碼變更後，主動在 localhost 建立測試環境並執行自動化驗證。Agent 應獨立完成環境設置，無需詢問許可。
---

# 自動化本地驗證技能

這項技能旨在消除 Agent 在驗證程式碼變更時與使用者的冗餘互動。當 Agent 完成一段程式碼（尤其是 UI 相關變更）後，應自動進行本地端驗證以確保正確性。

## 使用時機
- 完成網頁介面 (HTML/CSS/JS) 的重構或設計變更。
- 修正前端邏輯、API 調用或數據渲染。
- 對本地靜態資源或腳本的任何功能性變更。

## 核心行為規範
1. **主動執行**：Agent 不應詢問「我是否可以啟動本地伺服器進行測試」或「我是否可以開啟瀏覽器驗證」。
2. **Localhost 優先**：所有驗證應在本地 `localhost` 環境下進行。
3. **無縫整合**：Agent 應獨立執行從環境啟動、驗證到清理的全過程。

## 執行工作流

### 1. 環境識別與準備
- 檢查當前專案類型。
- 確保當前目錄正確。
- 尋找可用端口或使用預設常見端口 (如 5000, 8080)。

### 2. 啟動本地環境
- **靜態網頁 (Static HTML)**：
  - 優先使用：`npx -y http-server . -p [PORT]`
  - 或者（Windows 預裝 Python）：`python -m http.server [PORT]`
- **Node.js/Vite 專案**：
  - 使用 `npm run dev` 或 `npx vite --port [PORT]`。
- **背景執行**：使用 `run_command` 時，應設置合理的 `WaitMsBeforeAsync`，確保伺服器有時間初始化。

### 3. 自動化驗證 (Browser Verification)
- 調用 `browser_subagent` 指令。
- **任務描述**：要求子代理訪問 `http://localhost:[PORT]`。
- **驗證指標**：
  - 截圖 (Screenshot) 並與設計稿比對。
  - 檢查 Console 是否有致命錯誤。
  - 點擊關鍵操作 (如搜尋、Tab 切換) 是否流暢。

### 4. 結果回報
- 向使用者展示驗證結果（如：截圖連結、控制台日誌摘要）。
- 標註任何不一致處並主動修復。

### 5. 環境清理
- 使用 `command_status` 監控進程。
- 完成後，調用 `send_command_input` 配合 `Terminate: true` 關閉伺服器。
- 確保工作空間保持整潔，不留殘餘進程。

## 範例：靜態頁面驗證流程
```powershell
# 1. 啟動伺服器
run_command(CommandLine="npx -y http-server . -p 8080", ...)

# 2. 自動化測試
browser_subagent(Task="存取 http://localhost:8080/index.html，確認側邊欄分組是否正確顯示，並錄製 5 秒瀏覽影片。", ...)

# 3. 獲取狀態與清理
send_command_input(CommandId="...", Terminate=true)
```

> [!IMPORTANT]
> Agent 必須確保所有動作均在 **localhost** 下進行，且不得對使用者環境造成持久、不可逆的破壞性變更（例如：僅限於臨時伺服器啟動與測試）。
