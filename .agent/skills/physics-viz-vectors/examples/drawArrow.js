/**
 * 繪製帶有標籤的物理向量箭頭
 */
function drawArrow(ctx, x1, y1, x2, y2, color, label, width, labelPos = 'auto', isDashed = false) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);

    // 防呆：如果長度極短則不繪製
    if (length < 1) return;

    // 如果向量很短，動態縮小箭頭大小 (最大比例為全長 40%)
    const headlen = Math.min(10, length * 0.4);
    const angle = Math.atan2(dy, dx);

    ctx.save();
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.lineWidth = width;
    if (isDashed) ctx.setLineDash([4, 2]);

    // 繪製箭身
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    // 減去箭頭長度，避免箭頭被粗線身體遮蔽
    ctx.lineTo(x2 - headlen * Math.cos(angle) * 0.8, y2 - headlen * Math.sin(angle) * 0.8);
    ctx.stroke();

    // 繪製箭頭 (實心三角形)
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    // 繪製標籤 (LaTeX 風格)
    if (label && labelPos !== 'none') {
        ctx.font = 'italic bold 18px "Times New Roman", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const offset = 22;
        let [tx, ty] = [x2, y2];

        // 計算標籤位置
        if (labelPos === 'auto') {
            tx += offset * Math.cos(angle);
            ty += offset * Math.sin(angle);
        } else {
            const posMap = { top: [0, -offset], bottom: [0, offset], left: [-offset, 0], right: [offset, 0] };
            const delta = posMap[labelPos] || [0, 0];
            tx += delta[0];
            ty += delta[1];
        }

        // 文字描邊確保清晰度
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.strokeText(label, tx, ty);
        ctx.fillText(label, tx, ty);
    }
    ctx.restore();
}
