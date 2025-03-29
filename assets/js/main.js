console.log('Main.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // 检查游戏卡片
    const gameCards = document.querySelectorAll('.game-card');
    console.log('Found game cards:', gameCards.length);
    
    // 检查游戏卡片中的链接
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        console.log('Play button href:', button.href);
    });
    
    // Mark JavaScript as enabled
    document.body.classList.remove('no-js');
    document.body.classList.add('js-enabled');
    
    // Highlight current page in navigation menu
    highlightCurrentPage();
    
    // Search functionality
    setupSearch();
    
    // Add animation effects
    addAnimationEffects();
    
    // Set up featured games tabs
    setupFeaturedTabs();
});

// Highlight the current page's navigation link
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        } else if (currentPath.includes('/games/') && linkPath.includes('/categories/')) {
            // If on a game page, check the game category
            const gameCategory = document.querySelector('.meta-value')?.textContent;
            if (gameCategory && linkPath.includes(gameCategory.toLowerCase())) {
                link.classList.add('active');
            }
        }
    });
}

// Set up search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

// Perform search
function performSearch(query) {
    if (query.trim() === '') return;
    
    // In a real application, this should redirect to a search results page
    // Now we just log the search query
    console.log('Search:', query);
    alert('Search functionality is under development...\nYou searched for: ' + query);
    
    // Actual implementation might be:
    // window.location.href = '/search.html?q=' + encodeURIComponent(query);
}

// Add animation effects
function addAnimationEffects() {
    // 为游戏卡片添加出现动画
    const gameCards = document.querySelectorAll('.game-card');
    
    if (gameCards.length > 0) {
        gameCards.forEach((card, index) => {
            // 先移除可能存在的内联样式
            card.removeAttribute('style');
            
            // 重新设置动画样式
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // 使用setTimeout确保动画正确触发
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
            
            // 添加点击事件处理
            const playButton = card.querySelector('.play-button');
            if (playButton) {
                // 确保整个卡片可点击
                card.style.cursor = 'pointer';
                card.addEventListener('click', function(e) {
                    // 如果点击的不是分享按钮，则导航到游戏页面
                    if (!e.target.closest('.share-button') && !e.target.closest('.share-dropdown')) {
                        window.location.href = playButton.href;
                    }
                });
            }
            
            // 优化图片加载
            const img = card.querySelector('.game-thumbnail img');
            if (img) {
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                });
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
            }
        });
    }
    
    // 添加图片懒加载
    const gameImages = document.querySelectorAll('.game-thumbnail img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        gameImages.forEach(img => {
            // 如果图片没有data-src属性，则设置它
            if (!img.hasAttribute('data-src') && img.src) {
                img.setAttribute('data-src', img.src);
                img.src = 'assets/images/placeholder.png'; // 可选：使用小占位图
                imageObserver.observe(img);
            }
        });
    }
}

// Set up featured games tabs
function setupFeaturedTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        // Default to showing the first tab content
        tabContents.forEach((content, index) => {
            if (index !== 0) {
                content.style.display = 'none';
            }
        });
        
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // Remove all active states
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Hide all content
                tabContents.forEach(content => {
                    content.style.display = 'none';
                    content.style.opacity = '0';
                });
                
                // Add active state to current button
                this.classList.add('active');
                
                // Show corresponding content
                tabContents[index].style.display = 'block';
                
                // Add fade-in effect
                setTimeout(() => {
                    tabContents[index].style.transition = 'opacity 0.5s ease';
                    tabContents[index].style.opacity = '1';
                }, 10);
            });
        });
    }
} 