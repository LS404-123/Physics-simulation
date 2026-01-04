如何新增模擬實驗到網站首頁這份指南將教你如何修改 index.html，將新上傳的模擬實驗加入到首頁的列表中。1. 準備工作在開始之前，請確認你已經將新的 HTML 模擬檔案（例如 pendulum.html）上傳到你的 GitHub 儲存庫中。2. 新增單一模擬實驗 (卡片)步驟 A: 找到位置開啟 index.html 進行編輯，找到你想要新增實驗的「書籍區塊」。你會看到類似這樣的程式碼結構：<div class="simulation-grid">
    <!-- 既有的卡片在這裡 -->
    <div class="sim-card">...</div>

    <!-- 你的新卡片要貼在這裡 -->
</div>
步驟 B: 複製與貼上程式碼在 index.html 中，我已經預留了一段註解模板 (搜尋 【新增檔案模板】)。你可以直接複製以下這段程式碼，並貼到 </div> (simulation-grid 的結束標籤) 之前：<!-- 新的模擬卡片 -->
<div class="sim-card">
    <div class="card-content">
        <h3>新模擬標題</h3> <!-- 修改這裡 -->
        <p>這裡填寫模擬的簡短說明。</p> <!-- 修改這裡 -->
    </div>
    <div class="card-action">
        <!-- 修改 href 為你的檔案名稱 -->
        <a href="你的新檔案名稱.html" class="btn">進入模擬</a>
    </div>
</div>
步驟 C: 修改內容貼上後，請修改以下三個地方：<h3> 標籤：填入實驗名稱 (例如：單擺運動)。<p> 標籤：填入簡短描述。href="..."：這是最重要的！填入你上傳的 HTML 檔案名稱 (例如：pendulum.html 或 chapter2/wave.html)。3. 新增整本「新書」分類如果你需要開啟一個全新的章節 (例如：第二冊 電磁學)，你需要複製整個 book-section 區塊。步驟：找到 <!-- BOOK SECTION 1: MECHANICS --> 結束的地方。複製以下整段程式碼並貼上：<div class="book-section">
    <!-- 修改書名 -->
    <h2 class="book-title">第二冊：電磁學</h2>
    
    <div class="simulation-grid">
        
        <!-- 第一個模擬卡片 -->
        <div class="sim-card">
            <div class="card-content">
                <h3>庫侖定律</h3>
                <p>電荷之間的相互作用力模擬。</p>
            </div>
            <div class="card-action">
                <a href="coulomb.html" class="btn">進入模擬</a>
            </div>
        </div>

        <!-- 你可以在這裡繼續貼上更多卡片 -->

    </div>
</div>
4. 常見問題為什麼更新後網頁沒變？GitHub Pages 通常需要 1-2 分鐘才會更新。請稍等一下，然後按 Ctrl + F5 強制重新整理網頁。按鈕點了出現 404 錯誤？請檢查 href 裡面的檔名是否正確。大小寫必須完全一致 (例如 Game.html 和 game.html 是不同的)。
