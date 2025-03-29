// 搜索功能实现
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search script loaded');
    
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (!searchInput || !searchButton) {
        console.error('Search elements not found');
        return;
    }
    
    console.log('Search elements found');
    
    // 设置搜索按钮点击事件
    searchButton.addEventListener('click', function() {
        console.log('Search button clicked');
        performSearch(searchInput.value);
    });
    
    // 设置输入框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            console.log('Enter key pressed in search input');
            performSearch(searchInput.value);
        }
    });
    
    // 保持搜索栏为英文
    searchInput.setAttribute('lang', 'en');
    searchInput.setAttribute('placeholder', 'Search games...');
});

// 执行搜索
function performSearch(query) {
    console.log('Performing search for:', query);
    
    if (!query || query.trim() === '') {
        alert('Please enter a search term');
        return;
    }
    
    query = query.trim().toLowerCase();
    
    // 获取所有游戏数据
    const games = window.gameData || [];
    console.log('Available game data:', games);
    
    if (games.length === 0) {
        console.error('No game data available for search');
        alert('Game data is not available. Please try again later.');
        return;
    }
    
    // 搜索匹配的游戏
    const results = games.filter(game => {
        return game.title.toLowerCase().includes(query) || 
               game.description.toLowerCase().includes(query) ||
               game.category.toLowerCase().includes(query);
    });
    
    console.log('Search results:', results);
    
    // 显示搜索结果
    displaySearchResults(results, query);
}

// 显示搜索结果
function displaySearchResults(results, query) {
    console.log('Displaying search results');
    
    // 创建搜索结果容器
    let resultsContainer = document.getElementById('search-results');
    
    // 如果容器不存在，创建一个新的
    if (!resultsContainer) {
        console.log('Creating new results container');
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.className = 'search-results-container';
        
        // 将容器添加到主内容区域的顶部
        const mainContent = document.querySelector('main');
        if (mainContent && mainContent.firstChild) {
            mainContent.insertBefore(resultsContainer, mainContent.firstChild.nextSibling);
        } else {
            document.body.appendChild(resultsContainer);
        }
    }
    
    // 清空现有结果
    resultsContainer.innerHTML = '';
    
    // 创建结果标题
    const resultsTitle = document.createElement('h2');
    resultsTitle.className = 'section-title';
    resultsTitle.textContent = `Search Results for "${query}" (${results.length} found)`;
    resultsContainer.appendChild(resultsTitle);
    
    // 如果没有结果
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.className = 'no-results';
        noResults.textContent = 'No games found matching your search. Try different keywords.';
        resultsContainer.appendChild(noResults);
        return;
    }
    
    // 创建游戏网格
    const gameGrid = document.createElement('div');
    gameGrid.className = 'game-grid';
    resultsContainer.appendChild(gameGrid);
    
    // 添加游戏卡片
    results.forEach(game => {
        const cardHTML = `
        <div class="game-card">
            <div class="game-thumbnail">
                <img src="${game.image}" alt="${game.title}">
                <div class="share-button">
                    <i class="fas fa-share-alt"></i>
                    <div class="share-dropdown">
                        <a href="https://twitter.com/intent/tweet?url=https://neoarcade.com/${game.url}&text=Check out this awesome ${game.title} game!" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://neoarcade.com/${game.url}" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://neoarcade.com/${game.url}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://pinterest.com/pin/create/button/?url=https://neoarcade.com/${game.url}&media=https://neoarcade.com/${game.image}&description=${game.title}" target="_blank"><i class="fab fa-pinterest"></i> Pinterest</a>
                        <a href="https://api.whatsapp.com/send?text=Check out this awesome ${game.title} game! https://neoarcade.com/${game.url}" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        <a href="#" class="copy-link" data-url="https://neoarcade.com/${game.url}"><i class="fas fa-link"></i> Copy Link</a>
                    </div>
                </div>
            </div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="game-meta">
                    <span class="category">${game.category}</span>
                    <span class="rating">${game.rating}</span>
                </div>
                <a href="${game.url}" class="play-button">Play Now</a>
            </div>
        </div>
        `;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML;
        const gameCard = tempDiv.firstChild;
        
        // 添加点击事件
        const playButton = gameCard.querySelector('.play-button');
        if (playButton) {
            gameCard.style.cursor = 'pointer';
            gameCard.addEventListener('click', function(e) {
                if (!e.target.closest('.share-button') && !e.target.closest('.share-dropdown')) {
                    window.location.href = playButton.href;
                }
            });
        }
        
        gameGrid.appendChild(gameCard);
    });
    
    // 滚动到结果区域
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
    
    // 添加分享功能到搜索结果中的分享按钮
    setupShareButtons();
}

// 设置分享按钮功能
function setupShareButtons() {
    document.querySelectorAll('.copy-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('data-url');
            navigator.clipboard.writeText(url).then(() => {
                showToast('Link copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });
    });
}

// 显示提示消息
function showToast(message) {
    let toast = document.querySelector('.share-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'share-toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
} 