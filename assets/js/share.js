document.addEventListener('DOMContentLoaded', function() {
    // 初始化分享功能
    initShareButtons();
});

// 初始化分享按钮功能
function initShareButtons() {
    // 为所有游戏卡片添加分享按钮
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach((card, index) => {
        // 获取游戏信息
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        const thumbnail = card.querySelector('.game-thumbnail img').src;
        const gameUrl = card.querySelector('.play-button').href;
        
        // 创建分享按钮
        const shareButton = document.createElement('div');
        shareButton.className = 'share-button';
        shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
        
        // 创建分享下拉菜单
        const shareDropdown = document.createElement('div');
        shareDropdown.className = 'share-dropdown';
        
        // 编码分享URL和文本
        const encodedUrl = encodeURIComponent(gameUrl);
        const encodedTitle = encodeURIComponent(title);
        const encodedDesc = encodeURIComponent(description);
        const encodedImage = encodeURIComponent(thumbnail);
        
        // 添加社交媒体分享链接
        shareDropdown.innerHTML = `
            <a href="https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDesc}" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedDesc}" target="_blank"><i class="fab fa-pinterest"></i> Pinterest</a>
            <a href="https://api.whatsapp.com/send?text=${encodedDesc} ${encodedUrl}" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            <a href="#" class="copy-link" data-url="${gameUrl}"><i class="fas fa-link"></i> Copy Link</a>
        `;
        
        // 添加分享按钮到游戏缩略图
        shareButton.appendChild(shareDropdown);
        card.querySelector('.game-thumbnail').appendChild(shareButton);
    });
    
    // 添加复制链接功能
    document.addEventListener('click', function(e) {
        if (e.target.closest('.copy-link')) {
            e.preventDefault();
            const url = e.target.closest('.copy-link').getAttribute('data-url');
            copyToClipboard(url);
            showToast('Link copied to clipboard!');
        }
    });
}

// 复制文本到剪贴板
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// 显示提示消息
function showToast(message) {
    // 检查是否已存在toast
    let toast = document.querySelector('.share-toast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'share-toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    // 3秒后隐藏
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
} 