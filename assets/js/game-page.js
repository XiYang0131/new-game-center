document.addEventListener('DOMContentLoaded', function() {
    console.log('Game page script loaded');
    
    // 获取游戏控制按钮
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const restartBtn = document.querySelector('.restart-btn');
    const likeBtn = document.querySelector('.like-btn');
    
    // 获取游戏iframe - 使用一个变量名
    const gameFrame = document.querySelector('.game-frame-container iframe');
    
    if (fullscreenBtn && gameFrame) {
        fullscreenBtn.addEventListener('click', function() {
            if (gameFrame.requestFullscreen) {
                gameFrame.requestFullscreen();
            } else if (gameFrame.webkitRequestFullscreen) { /* Safari */
                gameFrame.webkitRequestFullscreen();
            } else if (gameFrame.msRequestFullscreen) { /* IE11 */
                gameFrame.msRequestFullscreen();
            }
        });
    }
    
    if (restartBtn && gameFrame) {
        restartBtn.addEventListener('click', function() {
            // 重新加载iframe内容
            gameFrame.src = gameFrame.src;
        });
    }
    
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            const likeCount = this.querySelector('.like-count');
            if (likeCount) {
                let count = parseInt(likeCount.textContent);
                count++;
                likeCount.textContent = count;
                
                // 添加点赞动画
                this.classList.add('liked');
                setTimeout(() => {
                    this.classList.remove('liked');
                }, 1000);
                
                // 这里可以添加将点赞数据发送到服务器的代码
            }
        });
    }
    
    // 优化iframe加载
    // 使用getElementById而不是重新声明变量
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<div class="spinner"></div><p>Loading Game...</p>';
    
    if (gameFrame) {
        // 设置加载指示器
        const gameContainer = document.querySelector('.game-frame-container');
        if (gameContainer) {
            gameContainer.appendChild(loadingIndicator);
            
            // 当iframe加载完成时隐藏加载指示器
            gameFrame.addEventListener('load', function() {
                loadingIndicator.style.display = 'none';
            });
        }
    }

    // 游戏页面移动端优化
    const gameContainer = document.querySelector('.game-container');
    const gameIframe = document.querySelector('.game-container iframe') || document.querySelector('.game-frame-container iframe');
    
    if (gameContainer && gameIframe) {
        // 设置iframe高度为容器高度
        function adjustIframeHeight() {
            const containerHeight = gameContainer.clientHeight;
            gameIframe.style.height = `${containerHeight}px`;
        }
        
        // 初始调整和窗口大小变化时调整
        adjustIframeHeight();
        window.addEventListener('resize', adjustIframeHeight);
        
        // 在移动设备上，添加全屏切换功能
        if (window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            const fullscreenButton = document.createElement('button');
            fullscreenButton.className = 'fullscreen-button';
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenButton.title = 'Toggle Fullscreen';
            
            gameContainer.appendChild(fullscreenButton);
            
            fullscreenButton.addEventListener('click', function() {
                // 检测是否支持屏幕方向锁定API
                if (screen.orientation && screen.orientation.lock) {
                    try {
                        // 尝试锁定为横屏
                        screen.orientation.lock('landscape').then(() => {
                            console.log('Screen locked to landscape');
                        }).catch(err => {
                            console.error('Screen orientation lock error:', err);
                        });
                    } catch (err) {
                        console.error('Screen orientation API error:', err);
                    }
                }
                
                // 尝试使用不同的全屏API
                if (!document.fullscreenElement && 
                    !document.mozFullScreenElement && 
                    !document.webkitFullscreenElement && 
                    !document.msFullscreenElement) {
                    
                    // 优先使用iframe的全屏
                    if (gameIframe.requestFullscreen) {
                        gameIframe.requestFullscreen();
                    } else if (gameIframe.mozRequestFullScreen) {
                        gameIframe.mozRequestFullScreen();
                    } else if (gameIframe.webkitRequestFullscreen) {
                        gameIframe.webkitRequestFullscreen();
                    } else if (gameIframe.msRequestFullscreen) {
                        gameIframe.msRequestFullscreen();
                    } 
                    // 如果iframe全屏失败，尝试容器全屏
                    else if (gameContainer.requestFullscreen) {
                        gameContainer.requestFullscreen();
                    } else if (gameContainer.mozRequestFullScreen) {
                        gameContainer.mozRequestFullScreen();
                    } else if (gameContainer.webkitRequestFullscreen) {
                        gameContainer.webkitRequestFullscreen();
                    } else if (gameContainer.msRequestFullscreen) {
                        gameContainer.msRequestFullscreen();
                    } else {
                        // 如果所有方法都失败，显示提示
                        alert('您的浏览器不支持全屏功能，请尝试使用其他浏览器。');
                    }
                    
                    // 更改按钮图标
                    this.innerHTML = '<i class="fas fa-compress"></i>';
                } else {
                    // 退出全屏
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    
                    // 更改按钮图标
                    this.innerHTML = '<i class="fas fa-expand"></i>';
                }
            });
            
            // 监听全屏变化事件
            document.addEventListener('fullscreenchange', updateFullscreenButton);
            document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
            document.addEventListener('mozfullscreenchange', updateFullscreenButton);
            document.addEventListener('MSFullscreenChange', updateFullscreenButton);
            
            function updateFullscreenButton() {
                if (!document.fullscreenElement && 
                    !document.mozFullScreenElement && 
                    !document.webkitFullscreenElement && 
                    !document.msFullscreenElement) {
                    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
                } else {
                    fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
                }
            }
        }
    }
});

// Load related games
function loadRelatedGames() {
    const relatedGamesGrid = document.querySelector('.related-games .game-grid');
    
    if (relatedGamesGrid) {
        // Mock related games data
        const relatedGames = [
            {
                title: 'Neon Chase',
                image: '../assets/images/games/game2.jpg',
                description: 'Drive high-speed vehicles in a neon-lit future city, participating in thrilling races.',
                category: 'Racing',
                rating: '★★★★★',
                url: 'neon-chase.html'
            },
            {
                title: 'Data Maze',
                image: '../assets/images/games/game3.jpg',
                description: 'Explore complex digital labyrinths, decode hidden passwords, and reveal forgotten tech secrets.',
                category: 'Puzzle',
                rating: '★★★☆☆',
                url: 'games/data-maze.html'
            },
            {
                title: 'Mech Warrior',
                image: '../assets/images/games/game4.jpg',
                description: 'Control high-tech mech suits, engage in intense battles against enemy forces, and defend your city.',
                category: 'Action',
                rating: '★★★★☆',
                url: 'mech-warrior.html'
            },
            {
                title: 'Virtual Hacker',
                image: '../assets/images/games/game5.jpg',
                description: 'Enter the virtual network world, use your hacking skills to breach firewalls and obtain classified information.',
                category: 'Strategy',
                rating: '★★★★★',
                url: 'virtual-hacker.html'
            },
            {
                title: 'Synthetic Dreams',
                image: '../assets/images/games/game6.jpg',
                description: 'In a world where dreams and reality intertwine, explore your subconscious and discover hidden truths.',
                category: 'Adventure',
                rating: '★★★★☆',
                url: 'games/synthetic-dreams.html'
            }
        ];
        
        // Add related game cards
        relatedGames.forEach(game => {
            const cardHTML = `
            <div class="game-card">
                <div class="game-thumbnail">
                    <img src="${game.image}" alt="${game.title}">
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
            relatedGamesGrid.innerHTML += cardHTML;
        });
    }
}

// Set up comment system
function setupCommentSystem() {
    const commentForm = document.querySelector('.comment-form');
    const commentsList = document.querySelector('.comments-list');
    
    if (commentForm && commentsList) {
        const textarea = commentForm.querySelector('textarea');
        const submitBtn = commentForm.querySelector('button');
        
        submitBtn.addEventListener('click', function() {
            const commentText = textarea.value.trim();
            
            if (commentText !== '') {
                // Create new comment
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                
                // Get current date
                const now = new Date();
                const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
                
                newComment.innerHTML = `
                <div class="comment-avatar">
                    <img src="../assets/images/avatars/user-default.jpg" alt="Your Avatar">
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author">Guest</span>
                        <span class="comment-date">${dateStr}</span>
                    </div>
                    <p>${commentText}</p>
                </div>
                `;
                
                // Add to the top of the comments list
                commentsList.insertBefore(newComment, commentsList.firstChild);
                
                // Clear text box
                textarea.value = '';
                
                // Add comment animation
                newComment.style.opacity = '0';
                newComment.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    newComment.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    newComment.style.opacity = '1';
                    newComment.style.transform = 'translateY(0)';
                }, 10);
                
                // In a real application, this should send a request to the server to save the comment data
            }
        });
    }
} 