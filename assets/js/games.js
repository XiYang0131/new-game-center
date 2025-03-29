// 确保在DOM完全加载后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('Initializing app');
    
    // 首先加载游戏数据
    loadGameData();
    
    // 然后设置分类标签
    setupCategoryTabs();
    
    // 添加动画效果
    addAnimationEffects();
}

// 加载游戏数据
function loadGameData() {
    console.log('Loading game data');
    
    // 游戏数据
    const games = [
        {
            title: 'Kingdom Solitaire',
            image: 'assets/images/games/kingdom-solitaire.jpg',
            description: 'A beautiful fantasy-themed solitaire card game with stunning visuals and addictive gameplay.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/kingdom-solitaire.html'
        },
        {
            title: 'Checkers/Draughts Multiplayer',
            image: 'assets/images/games/checkers-draughts.jpg',
            description: 'Experience the classic board game of checkers with online multiplayer features. Challenge players worldwide!',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/checkers-draughts.html'
        },
        {
            title: 'Apocalypse Reborn',
            image: 'assets/images/games/apocalypse-reborn.jpg',
            description: 'Survive in a post-apocalyptic world, fight zombies, collect resources, and build shelters to stay alive.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/apocalypse-reborn.html'
        },
        {
            title: 'Draw Climber',
            image: 'assets/images/games/draw-climber.jpg',
            description: 'Draw different leg shapes to help your character climb various obstacles and reach the finish line.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/draw-climber.html'
        },
        {
            title: 'Cut in Half Please',
            image: 'assets/images/games/cut-in-half.jpg',
            description: 'A fun cutting game where you need to precisely cut objects in half. Test your precision skills!',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/cut-in-half.html'
        },
        {
            title: 'Girls Nail Salon',
            image: 'assets/images/games/girls-nail-salon.jpg',
            description: 'Design and decorate beautiful nails, showcase your creativity and fashion sense in this fun salon game.',
            category: 'Casual',
            rating: '★★★★☆',
            url: 'games/girls-nail-salon.html'
        },
        {
            title: 'Find the Vampire',
            image: 'assets/images/games/find-the-vampire.jpg',
            description: 'Test your observation skills in this challenging hidden object game. Can you spot the vampire hiding among the crowd?',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/find-the-vampire.html'
        },
        {
            title: 'Crusher Block',
            image: 'assets/images/games/crusher-block.jpg',
            description: 'A fast-paced block-breaking game where you need to destroy all blocks before they reach the bottom. Test your reflexes!',
            category: 'Arcade',
            rating: '★★★★★',
            url: 'games/crusher-block.html'
        },
        {
            title: 'Penguin Restaurant',
            image: 'assets/images/games/penguin-restaurant.jpg',
            description: 'Manage your own penguin-themed restaurant! Serve customers, upgrade your restaurant, and become the best penguin chef in town.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/penguin-restaurant.html'
        },
        {
            title: 'Fashion Week 2025',
            image: 'assets/images/games/fashion-week-2025.jpg',
            description: 'Experience the future of fashion! Design futuristic outfits, dress up models, and showcase your creations on the runway of 2025.',
            category: 'Casual',
            rating: '★★★★★',
            url: 'games/fashion-week-2025.html'
        },
        {
            title: 'Knock and Run',
            image: 'assets/images/games/knock-and-run.jpg',
            description: 'Test your speed and reflexes in this exciting game where you knock on doors and run away before getting caught!',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/knock-and-run.html'
        },
        {
            title: 'Dig Craft',
            image: 'assets/images/games/dig-craft.jpg',
            description: 'Mine resources, craft tools, and build structures in this exciting sandbox adventure game inspired by Minecraft.',
            category: 'Adventure',
            rating: '★★★★★',
            url: 'games/dig-craft.html'
        },
        {
            title: 'Knight Clicker',
            image: 'assets/images/games/knight-clicker.jpg',
            description: 'Embark on an epic clicking adventure! Upgrade your knight, defeat monsters, and become the most powerful hero in the realm.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/knight-clicker.html'
        },
        {
            title: 'Spotti - Find the Differences',
            image: 'assets/images/games/spotti-find-the-differences.jpg',
            description: 'Test your observation skills in this challenging spot-the-difference game. Find all the differences between two similar images!',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/spotti-find-the-differences.html'
        },
        {
            title: 'Ragdoll Break',
            image: 'assets/images/games/ragdoll-break.jpg',
            description: 'Launch ragdolls into obstacles and watch the physics-based chaos unfold. Break as many objects as possible to earn points!',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/ragdoll-break.html'
        },
        {
            title: 'Limited Defense',
            image: 'assets/images/games/limited-defense.jpg',
            description: 'Strategically place your limited defenses to stop waves of enemies. Every tower counts in this challenging tower defense game!',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/limited-defense.html'
        },
        {
            title: 'Idle Saga',
            image: 'assets/images/games/idle-saga.jpg',
            description: 'Embark on an epic idle adventure! Recruit heroes, defeat monsters, and collect treasures while your party grows stronger even when you\'re away.',
            category: 'Idle',
            rating: '★★★★★',
            url: 'games/idle-saga.html'
        },
        {
            title: 'Iron Towers Alliance',
            image: 'assets/images/games/iron-towers-alliance.jpg',
            description: 'Form alliances, build powerful towers, and defend your territory in this strategic multiplayer tower defense game.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/iron-towers-alliance.html'
        },
        {
            title: 'Time Walker Survive',
            image: 'assets/images/games/time-walker-survive.jpg',
            description: 'Navigate through time as you dodge obstacles, collect power-ups, and survive as long as possible in this fast-paced endless runner.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/time-walker-survive.html'
        }
    ];
    
    // 将游戏数据设为全局变量，供搜索功能使用
    window.gameData = games;
    console.log('Game data set to global variable:', window.gameData);
    
    // 清空所有标签内容区域
    const tabContents = document.querySelectorAll('.featured-games .tab-content');
    tabContents.forEach(content => {
        const gameGrid = content.querySelector('.game-grid');
        if (gameGrid) {
            gameGrid.innerHTML = '';
        } else {
            // 如果没有游戏网格，创建一个
            const newGrid = document.createElement('div');
            newGrid.className = 'game-grid';
            content.appendChild(newGrid);
        }
    });
    
    // 创建一个映射，将类别名称映射到标签索引
    const categoryMap = {
        'All': 0,
        'Action': 1,
        'Puzzle': 2,
        'Strategy': 3,
        'RPG': 4,
        'Racing': 5,
        'Arcade': 6,
        'Simulation': 7,
        'Casual': 8,
        'Adventure': 9,
        'Idle': 10  // 添加新分类
    };
    
    // 将游戏添加到"All"标签
    const allGamesGrid = tabContents[0].querySelector('.game-grid');
    if (allGamesGrid) {
        games.forEach(game => {
            const cardHTML = createGameCard(game);
            allGamesGrid.innerHTML += cardHTML;
        });
    }
    
    // 将游戏分类到不同的标签页中
    games.forEach(game => {
        const category = game.category;
        const categoryIndex = categoryMap[category] || 0;
        
        if (categoryIndex > 0 && categoryIndex < tabContents.length) {
            const categoryTab = tabContents[categoryIndex];
            if (categoryTab) {
                const categoryGrid = categoryTab.querySelector('.game-grid');
                if (categoryGrid) {
                    const cardHTML = createGameCard(game);
                    categoryGrid.innerHTML += cardHTML;
                }
            }
        }
    });
    
    // 为所有游戏卡片添加点击事件
    document.querySelectorAll('.game-card').forEach(card => {
        const playButton = card.querySelector('.play-button');
        if (playButton) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.share-button') && !e.target.closest('.share-dropdown')) {
                    window.location.href = playButton.href;
                }
            });
        }
    });
}

// 创建游戏卡片HTML，使用懒加载
function createGameCard(game) {
    return `
    <div class="game-card">
        <div class="game-thumbnail">
            <img src="assets/images/placeholder.jpg" data-src="${game.image}" alt="${game.title}" class="lazy-image">
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
}

// 设置分类标签功能
function setupCategoryTabs() {
    console.log('Setting up category tabs');
    
    // 获取所有标签按钮和内容区域
    const tabButtons = document.querySelectorAll('.featured-tabs .tab-button');
    const tabContents = document.querySelectorAll('.featured-games .tab-content');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found tab contents:', tabContents.length);
    
    if (tabButtons.length === 0 || tabContents.length === 0) {
        console.error('Tab buttons or contents not found');
        return;
    }
    
    // 设置标签切换功能
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            console.log('Tab button clicked:', index);
            
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');
            
            // 添加活动状态到当前按钮
            this.classList.add('active');
            
            // 显示对应的内容区域
            if (index < tabContents.length) {
                tabContents[index].style.display = 'block';
            } else {
                console.error('Tab content not found for index:', index);
            }
        });
    });
    
    // 确保第一个标签按钮处于活动状态，第一个内容区域显示
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].style.display = 'block';
        
        // 隐藏其他内容区域
        for (let i = 1; i < tabContents.length; i++) {
            tabContents[i].style.display = 'none';
        }
    }
    
    console.log('Category tabs setup complete');
}

// 添加动画效果
function addAnimationEffects() {
    console.log('Adding animation effects');
    
    // 实现动画效果的逻辑
} 