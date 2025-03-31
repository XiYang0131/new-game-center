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
        },
        {
            title: 'Park Town',
            image: 'assets/images/games/park-town.jpg',
            description: '在这款模拟游戏中建造和管理您自己的城市公园，吸引游客并创造一个繁荣的娱乐场所。',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/park-town.html'
        },
        {
            title: 'Screw Out Bolts and Nuts',
            image: 'assets/images/games/screw-out-bolts-and-nuts.jpg',
            description: 'Test your puzzle-solving skills by unscrewing bolts and nuts in this addictive physics-based game with realistic mechanics.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/screw-out-bolts-and-nuts.html'
        },
        {
            title: 'Pokey Ball',
            image: 'assets/images/games/pokey-ball.jpg',
            description: 'Guide your ball through challenging obstacles and reach the goal in this addictive arcade game with simple controls but challenging gameplay.',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/pokey-ball.html'
        },
        {
            title: 'Enemania',
            image: 'assets/images/games/enemania.jpg',
            description: 'Battle waves of enemies in this action-packed shooter game with multiple weapons, power-ups and challenging boss fights.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/enemania.html'
        },
        {
            title: 'War Groups',
            image: 'assets/images/games/war-groups.jpg',
            description: 'Command your troops in this strategic multiplayer battle game with tactical combat, resource management and multiple factions.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/war-groups.html'
        },
        {
            title: 'Aidan in Danger',
            image: 'assets/images/games/aidan-in-danger.jpg',
            description: 'Help Aidan navigate through dangerous environments, solve puzzles and escape from perilous situations in this exciting adventure game.',
            category: 'Adventure',
            rating: '★★★★☆',
            url: 'games/aidan-in-danger.html'
        },
        {
            title: 'Block Wall Destroyer',
            image: 'assets/images/games/block-wall-destroyer.jpg',
            description: 'Break through walls of colorful blocks in this addictive arcade game with simple controls, power-ups and challenging levels.',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/block-wall-destroyer.html'
        },
        {
            title: 'Stronghold Dude',
            image: 'assets/images/games/stronghold-dude.jpg',
            description: 'Defend your castle against waves of enemies in this strategic defense game with tower building, resource management and diverse enemy types.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/stronghold-dude.html'
        },
        {
            title: 'Space.io VFT',
            image: 'assets/images/games/space-io-vft.jpg',
            description: 'Battle other players in this multiplayer space shooter with upgradeable ships, resource collection and intense combat.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/space-io-vft.html'
        },
        {
            title: 'Hoop Rivals OUD',
            image: 'assets/images/games/hoop-rivals-oud.jpg',
            description: 'Compete in fast-paced basketball matches with unique characters, special moves and multiple game modes.',
            category: 'Sports',
            rating: '★★★★☆',
            url: 'games/hoop-rivals-oud.html'
        },
        {
            title: 'Pizza Car',
            image: 'assets/images/games/pizza-car.jpg',
            description: 'Deliver pizzas as fast as possible in this fun driving simulation game with challenging levels and upgradeable vehicles.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/pizza-car.html'
        },
        {
            title: 'Money Ping Pong STJ',
            image: 'assets/images/games/money-ping-pong-stj.jpg',
            description: 'Test your reflexes in this fast-paced table tennis game with unique money-themed gameplay and upgrade system.',
            category: 'Sports',
            rating: '★★★★☆',
            url: 'games/money-ping-pong-stj.html'
        },
        {
            title: 'Zombie Crusher OOZ',
            image: 'assets/images/games/zombie-crusher-ooz.jpg',
            description: 'Crush hordes of zombies with powerful vehicles in this action-packed survival game with upgrades and challenging missions.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/zombie-crusher-ooz.html'
        },
        {
            title: '100 Doors Around the World',
            image: 'assets/images/games/100-doors-around-the-world.jpg',
            description: 'Solve challenging puzzles to unlock doors and travel around the world in this brain-teasing adventure with 100 unique levels.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/100-doors-around-the-world.html'
        },
        {
            title: 'Knock Em All',
            image: 'assets/images/games/knock-em-all.jpg',
            description: 'Test your aim and timing in this addictive physics-based game where you knock down targets with balls to complete challenging levels.',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/knock-em-all.html'
        },
        {
            title: 'Tiny Auto Knight',
            image: 'assets/images/games/tiny-auto-knight.jpg',
            description: 'Battle monsters and upgrade your hero in this addictive auto-battler RPG with roguelike elements and strategic decision-making.',
            category: 'RPG',
            rating: '★★★★★',
            url: 'games/tiny-auto-knight.html'
        },
        {
            title: 'Rope Rescue',
            image: 'assets/images/games/rope-rescue.jpg',
            description: 'Draw ropes to save people in this addictive physics-based puzzle game with challenging levels and realistic rope mechanics.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/rope-rescue.html'
        },
        {
            title: 'Foot Battle Ball',
            image: 'assets/images/games/foot-battle-ball.jpg',
            description: 'Compete in exciting soccer matches with unique characters and special abilities in this fun arcade-style sports game.',
            category: 'Sports',
            rating: '★★★★☆',
            url: 'games/foot-battle-ball.html'
        },
        {
            title: 'Obby Pull a Sword',
            image: 'assets/images/games/obby-pull-a-sword.jpg',
            description: 'Navigate challenging obstacle courses and pull legendary swords that grant unique abilities in this exciting adventure game.',
            category: 'Adventure',
            rating: '★★★★☆',
            url: 'games/obby-pull-a-sword.html'
        },
        {
            title: 'Lurkers.io',
            image: 'assets/images/games/lurkers-io.jpg',
            description: 'Survive and dominate in this multiplayer survival game where you gather resources, craft weapons, and battle other players in an ever-shrinking world.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/lurkers-io.html'
        },
        {
            title: 'Monster Slayer Idle Clicker',
            image: 'assets/images/games/monster-slayer-idle-clicker.jpg',
            description: 'Defeat monsters, collect gold, and upgrade your hero in this addictive idle clicker game with deep progression systems.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/monster-slayer-idle-clicker.html'
        },
        {
            title: 'Panda Shop Simulator',
            image: 'assets/images/games/panda-shop-simulator.jpg',
            description: 'Run your own shop, serve customers, and expand your business in this cute and addictive simulation game featuring an adorable panda shopkeeper.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/panda-shop-simulator.html'
        },
        {
            title: 'Number Race',
            image: 'assets/images/games/number-race.jpg',
            description: 'Test your math skills and quick thinking in this fast-paced number puzzle game with multiple game modes and progressive difficulty.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/number-race.html'
        },
        {
            title: 'Fish.io - Be the King',
            image: 'assets/images/games/fish-io-be-the-king.jpg',
            description: 'Grow your fish, eat smaller players, and dominate the ocean in this addictive multiplayer io game with colorful graphics and strategic gameplay.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/fish-io-be-the-king.html'
        },
        {
            title: 'Madness Car Destroy',
            image: 'assets/images/games/madness-car-destroy.jpg',
            description: 'Crash, smash and destroy vehicles in this action-packed demolition derby game with realistic physics and spectacular crash effects.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/madness-car-destroy.html'
        },
        {
            title: 'Dark Stones Card Battle RPG',
            image: 'assets/images/games/dark-stones-card-battle-rpg.jpg',
            description: 'Build powerful decks, battle enemies, and embark on an epic fantasy adventure in this strategic card game with deep RPG elements.',
            category: 'RPG',
            rating: '★★★★★',
            url: 'games/dark-stones-card-battle-rpg.html'
        },
        {
            title: 'Swing Monster Decisive Battle',
            image: 'assets/images/games/swing-monster-decisive-battle.jpg',
            description: 'Swing through challenging levels, defeat enemies, and overcome obstacles in this action-packed adventure game with unique grappling mechanics.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/swing-monster-decisive-battle.html'
        },
        {
            title: 'Crazy Miners Multiplayer',
            image: 'assets/images/games/crazy-miners-multiplayer.jpg',
            description: 'Mine resources, build defenses, and battle other players in this exciting multiplayer mining game with strategic gameplay and alliance system.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/crazy-miners-multiplayer.html'
        },
        {
            title: 'AutoRPG Arena FBU',
            image: 'assets/images/games/autorpg-arena-fbu.jpg',
            description: 'Build your team, equip powerful gear, and battle through challenging encounters in this strategic auto-battler RPG with deep customization options.',
            category: 'RPG',
            rating: '★★★★★',
            url: 'games/autorpg-arena-fbu.html'
        },
        {
            title: 'Two Sides of Hell Portable Edition UNN',
            image: 'assets/images/games/two-sides-of-hell-portable-edition-unn.jpg',
            description: 'Navigate between heaven and hell in this challenging platformer with unique dual-world mechanics, precise controls, and stunning visual contrasts.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/two-sides-of-hell-portable-edition-unn.html'
        },
        {
            title: 'Craft and Battle',
            image: 'assets/images/games/craft-and-battle.jpg',
            description: 'Gather resources, craft weapons, and battle other players in this exciting multiplayer survival game with extensive crafting and base building.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/craft-and-battle.html'
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
        'Idle': 10,  // 添加新分类
        'Sports': 11  // 添加新分类
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

// 创建游戏卡片HTML
function createGameCard(game) {
    return `
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