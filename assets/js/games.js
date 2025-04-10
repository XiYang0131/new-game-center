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
            title: 'Space Waves',
            image: 'assets/images/games/space-waves.jpg',
            description: 'Navigate through cosmic waves, dodge obstacles, and collect power-ups in this fast-paced arcade game with vibrant visuals and music-synchronized gameplay.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/space-waves.html'
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
        },
        {
            title: 'Aces of the Sky Epic Dogfights',
            image: 'assets/images/games/aces-of-the-sky-epic-dogfights.jpg',
            description: 'Experience thrilling aerial combat in this action-packed flight simulator with stunning visuals, multiple aircraft to unlock, and intense dogfights against intelligent opponents.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/aces-of-the-sky-epic-dogfights.html'
        },
        {
            title: 'Idle Craft Drill',
            image: 'assets/images/games/idle-craft-drill.jpg',
            description: 'Mine resources, upgrade your equipment, and build an underground mining empire in this addictive idle game with strategic resource management and offline progression.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/idle-craft-drill.html'
        },
        {
            title: 'Murder Mafia',
            image: 'assets/images/games/murder-mafia.jpg',
            description: 'Step into the shoes of a detective to solve complex murder cases, collect evidence, interrogate suspects, and unmask the mafia in this engaging mystery game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/murder-mafia.html'
        },
        {
            title: 'Real Fishing Simulator',
            image: 'assets/images/games/real-fishing-simulator.jpg',
            description: 'Experience the thrill of fishing in various beautiful locations with realistic mechanics, diverse fish species, and upgradeable equipment in this immersive simulation game.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/real-fishing-simulator.html'
        },
        {
            title: 'Machine Room Escape',
            image: 'assets/images/games/machine-room-escape.jpg',
            description: 'Solve challenging puzzles and find hidden clues to escape from a mysterious machine room in this immersive point-and-click escape game that tests your observation and logical thinking.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/machine-room-escape.html'
        },
        {
            title: 'Playground',
            image: 'assets/images/games/playground.jpg',
            description: 'Explore this creative virtual playground, experience various fun interactive elements and mini-games, and enjoy a relaxing gaming experience without pressure or complicated rules.',
            category: 'Casual',
            rating: '★★★★☆',
            url: 'games/playground.html'
        },
        {
            title: 'Miniblox',
            image: 'assets/images/games/miniblox.jpg',
            description: 'Build and create in this colorful block-based sandbox game with simple controls, various block types, and endless creative possibilities for players of all ages.',
            category: 'Casual',
            rating: '★★★★☆',
            url: 'games/miniblox.html'
        },
        {
            title: 'Puzzles on the Go',
            image: 'assets/images/games/puzzlesonthego.jpg',
            description: 'Challenge your brain with a variety of engaging puzzles including word searches, crosswords, sudoku, and more. Perfect for quick mental exercise sessions anywhere, anytime.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/puzzlesonthego.html'
        },
        {
            title: 'Treasure Champion - Chest Capture',
            image: 'assets/images/games/treasure-champion-chest-capture.jpg',
            description: 'Compete against other players to collect treasures and become the ultimate champion in this exciting multiplayer action game with various maps and power-ups.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/treasure-champion-chest-capture.html'
        },
        {
            title: 'Blitzkrieg Assault War Zone',
            image: 'assets/images/games/blitzkrieg-assault-war-zone.jpg',
            description: 'Command your troops in intense tactical battles across various war zones in this strategic military combat game with realistic mechanics and deep gameplay.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/blitzkrieg-assault-war-zone.html'
        },
        {
            title: 'Rise of the Blobs EHK',
            image: 'assets/images/games/rise-of-the-blobs-ehk.jpg',
            description: 'Match colorful blobs and prevent them from rising too high in this addictive puzzle game with vibrant visuals, special power-ups, and challenging gameplay.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/rise-of-the-blobs-ehk.html'
        },
        {
            title: 'Super Utilizer',
            image: 'assets/images/games/super-utilizer.jpg',
            description: 'Manage resources, build defensive structures, and fend off waves of enemies in this strategic tower defense game with multiple upgrade paths and challenging gameplay.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/super-utilizer.html'
        },
        {
            title: 'Sneaker Art RVF',
            image: 'assets/images/games/sneaker-art-rvf.jpg',
            description: 'Design and customize your own sneakers in this creative and relaxing art game with multiple models, extensive color options, and various materials to create unique footwear designs.',
            category: 'Casual',
            rating: '★★★★☆',
            url: 'games/sneaker-art-rvf.html'
        },
        {
            title: 'Cubecraft Merge Battle UXW',
            image: 'assets/images/games/cubecraft-merge-battle-uxw.jpg',
            description: 'Merge identical cubes to create stronger units, build your army, and battle opponents in this strategic merge game with colorful voxel graphics and addictive gameplay.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/cubecraft-merge-battle-uxw.html'
        },
        {
            title: 'Goblin Punk Tower Defense',
            image: 'assets/images/games/goblin-punk-tower-defense.jpg',
            description: 'Defend your territory against waves of rebellious goblins in this punk-themed tower defense game with unique towers, upgrade systems, and strategic gameplay.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/goblin-punk-tower-defense.html'
        },
        {
            title: 'Dogs vs Aliens',
            image: 'assets/images/games/dogs-vs-aliens.jpg',
            description: 'Command a team of heroic dogs with unique abilities to defend Earth against waves of alien invaders in this charming and strategic tower defense game.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/dogs-vs-aliens.html'
        },
        {
            title: 'Lime Playground Sandbox',
            image: 'assets/images/games/lime-playground-sandbox.jpg',
            description: 'Explore, create, and experiment in this open-world sandbox game with realistic physics, various building materials, and endless possibilities for creativity.',
            category: 'Casual',
            rating: '★★★★☆',
            url: 'games/lime-playground-sandbox.html'
        },
        {
            title: 'Robox',
            image: 'assets/images/games/robox.jpg',
            description: 'Guide your robot through challenging mechanical puzzles, unlock new abilities, and overcome obstacles in this engaging puzzle platformer with charming minimalist visuals.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/robox.html'
        },
        {
            title: 'War Sea',
            image: 'assets/images/games/war-sea.jpg',
            description: 'Command a fleet of warships in intense naval battles, deploy strategic weapons, and dominate the seas in this action-packed warfare game with realistic combat mechanics.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/war-sea.html'
        },
        {
            title: 'Knight Hero Adventure Idle RPG',
            image: 'assets/images/games/knight-hero-adventure-idle-rpg.jpg',
            description: 'Embark on an epic journey as a brave knight, upgrade equipment, learn skills, and battle monsters in this engaging idle RPG with continuous progression.',
            category: 'RPG',
            rating: '★★★★☆',
            url: 'games/knight-hero-adventure-idle-rpg.html'
        },
        {
            title: 'Favorite Puzzles',
            image: 'assets/images/games/favorite-puzzles.jpg',
            description: 'Enjoy a diverse collection of classic and modern puzzles including jigsaw, sliding, matching, and logic challenges with multiple difficulty levels and beautiful visuals.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/favorite-puzzles.html'
        },
        {
            title: 'Bullet Force Multiplayer',
            image: 'assets/images/games/bullet-force-multiplayer.jpg',
            description: 'Engage in intense first-person shooter battles with players worldwide, customize your loadout with various weapons and attachments, and dominate multiple game modes.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/bullet-force-multiplayer.html'
        },
        {
            title: 'Shell Shockers.io',
            image: 'assets/images/games/shellshockersio.jpg',
            description: 'Battle as egg characters in this hilarious yet intense first-person shooter with unique egg classes, various game modes, and fast-paced multiplayer action.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/shellshockersio.html'
        },
        {
            title: 'Heroes of the Wasteland',
            image: 'assets/images/games/heroes-of-the-wasteland.jpg',
            description: 'Survive in a post-apocalyptic world by scavenging resources, battling mutants, crafting equipment, and building your base in this immersive action survival game.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/heroes-of-the-wasteland.html'
        },
        {
            title: 'Cursed Treasure 11-2',
            image: 'assets/images/games/cursed-treasure-11-2.jpg',
            description: 'Defend your precious gems from waves of heroic adventurers in this strategic tower defense game with three unique tower types, upgradeable abilities, and challenging levels.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/cursed-treasure-11-2.html'
        },
        {
            title: 'Cursed Treasure Level Pack',
            image: 'assets/images/games/cursed-treasure-level-pack.jpg',
            description: 'Experience new challenging levels in this tower defense expansion where you continue to protect your gems from heroic adventurers with three unique tower types and special abilities.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/cursed-treasure-level-pack.html'
        },
        {
            title: 'Super Oliver World',
            image: 'assets/images/games/super-oliver-world.jpg',
            description: 'Join Oliver on a colorful platforming adventure as he jumps, collects coins, and defeats enemies across multiple vibrant worlds in this classic-style platformer game.',
            category: 'Adventure',
            rating: '★★★★☆',
            url: 'games/super-oliver-world.html'
        },
        {
            title: 'Country Life Meadows',
            image: 'assets/images/games/country-life-meadows.jpg',
            description: 'Build and manage your own farm, grow crops, raise animals, and create a thriving rural paradise in this relaxing simulation game with seasonal changes and customization options.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/country-life-meadows.html'
        },
        {
            title: 'Tower vs Goblins',
            image: 'assets/images/games/tower-vs-goblins.jpg',
            description: 'Defend your kingdom against waves of goblin invaders by strategically placing and upgrading various towers in this challenging tower defense game with diverse enemies and tactics.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/tower-vs-goblins.html'
        },
        {
            title: 'Evowars.io',
            image: 'assets/images/games/evowarsio.jpg',
            description: 'Battle other players in this fast-paced multiplayer arena game where you evolve your character by collecting orbs and defeating opponents to dominate the battlefield.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/evowarsio.html'
        },
        {
            title: 'Supermarket Simulator Cashier Game',
            image: 'assets/images/games/supermarket-simulator-cashier-game.jpg',
            description: 'Experience the life of a supermarket cashier as you scan items, handle different payment methods, and serve various customers in this realistic retail simulation game.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/supermarket-simulator-cashier-game.html'
        },
        {
            title: 'Match Ventures',
            image: 'assets/images/games/matchventures.jpg',
            description: 'Embark on an adventure-filled match-3 puzzle game where you solve increasingly challenging puzzles, collect treasures, and explore beautiful themed locations.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/matchventures.html'
        },
        {
            title: 'Squid Game Online',
            image: 'assets/images/games/squid-game-online.jpg',
            description: 'Compete in a series of deadly challenges inspired by the popular series, testing your reflexes, precision, and strategy as you try to survive and win the ultimate prize.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/squid-game-online.html'
        },
        {
            title: 'Kirka.io',
            image: 'assets/images/games/kirka-io.jpg',
            description: 'Engage in fast-paced multiplayer first-person shooter battles with customizable weapons, various game modes, and competitive ranking in this action-packed browser FPS.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/kirka-io.html'
        },
        {
            title: 'Law of the Cat God',
            image: 'assets/images/games/law-of-the-cat-god.jpg',
            description: 'Play as a feline deity with godly powers to manipulate the environment, solve clever puzzles, and help your cat followers in this charming puzzle adventure game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/law-of-the-cat-god.html'
        },
        {
            title: 'Color Match AMG',
            image: 'assets/images/games/color-match-amg.jpg',
            description: 'Test your reflexes and color recognition skills in this fast-paced matching game with increasing difficulty, minimalist design, and addictive gameplay.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/color-match-amg.html'
        },
        {
            title: 'Leek Factory Tycoon',
            image: 'assets/images/games/leek-factory-tycoon.jpg',
            description: 'Build and manage your own leek production empire, optimize workflows, hire workers, and expand your business in this addictive idle simulation game.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/leek-factory-tycoon.html'
        },
        {
            title: 'Skillwarz',
            image: 'assets/images/games/skillwarz.jpg',
            description: 'Engage in intense multiplayer battles, customize your loadout with various weapons and attachments, and prove your combat skills in this action-packed first-person shooter.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/skillwarz.html'
        },
        {
            title: 'Jungle Deer Hunting',
            image: 'assets/images/games/jungle-deer-hunting.jpg',
            description: 'Track and hunt deer in lush jungle environments with realistic animal behavior, various weapons, and challenging missions in this immersive hunting simulation.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/jungle-deer-hunting.html'
        },
        {
            title: 'Gridle',
            image: 'assets/images/games/gridle.jpg',
            description: 'Challenge your word-guessing skills in this addictive grid-based word puzzle game inspired by Wordle with unique gameplay twists and daily challenges.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/gridle.html'
        },
        {
            title: 'Room Escape: Strange Case',
            image: 'assets/images/games/room-escape-strange-case.jpg',
            description: 'Solve intricate puzzles and uncover mysterious clues to escape from a bizarre room with a dark secret in this atmospheric point-and-click adventure.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/room-escape-strange-case.html'
        },
        {
            title: 'Elemental Merge',
            image: 'assets/images/games/elemental-merge.jpg',
            description: 'Combine different elements to create new items, unlock hidden combinations, and complete your collection in this addictive puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/elemental-merge.html'
        },
        {
            title: 'Archers Battle',
            image: 'assets/images/games/archers-battle.jpg',
            description: 'Engage in intense archery combat, test your aim and strategic thinking, and compete against other players in various arenas.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/archers-battle.html'
        },
        {
            title: 'Doors Castle',
            image: 'assets/images/games/doors-castle.jpg',
            description: 'Solve challenging puzzles, unlock mysterious doors, and explore a magical castle filled with secrets and surprises.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/doors-castle.html'
        },
        {
            title: 'Mystery Forest - Match 3',
            image: 'assets/images/games/mystery-forest-match-3.jpg',
            description: 'Explore an enchanted forest while solving colorful match-3 puzzles, unlocking magical powers and discovering hidden treasures.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/mystery-forest-match-3.html'
        },
        {
            title: 'Trash Cafe',
            image: 'assets/images/games/trash-cafe.jpg',
            description: 'Manage a unique recycling cafe, sort waste materials, create eco-friendly products, and build a sustainable business in this engaging simulation game.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/trash-cafe.html'
        },
        {
            title: 'Block Tour KFZ',
            image: 'assets/images/games/block-tour-kfz.jpg',
            description: 'Navigate through challenging 3D mazes, solve spatial puzzles, and test your perception skills in this addictive block-based puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/block-tour-kfz.html'
        },
        {
            title: 'Puzzle Survivor',
            image: 'assets/images/games/puzzle-survivor.jpg',
            description: 'Combine match-3 puzzle mechanics with survival strategy as you match tiles to gather resources, craft weapons, and defend against waves of enemies.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/puzzle-survivor.html'
        },
        {
            title: 'Idle Medieval Tower Defense',
            image: 'assets/images/games/idle-medieval-tower-defense.jpg',
            description: 'Build and upgrade defensive towers, earn resources even while away, and defend your kingdom against endless waves of medieval enemies.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/idle-medieval-tower-defense.html'
        },
        {
            title: 'Dig Tycoon - Idle Game 3D',
            image: 'assets/images/games/dig-tycoon-idle-game-3d.jpg',
            description: 'Build your mining empire, upgrade equipment, hire workers, and discover rare minerals in this addictive 3D idle mining simulation.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/dig-tycoon-idle-game-3d.html'
        },
        {
            title: 'Raid Heroes: Dragon Age',
            image: 'assets/images/games/raid-heroes-dragon-age.jpg',
            description: 'Assemble a team of legendary heroes, battle fierce dragons, and embark on epic quests in this strategic turn-based RPG adventure.',
            category: 'RPG',
            rating: '★★★★★',
            url: 'games/raid-heroes-dragon-age.html'
        },
        {
            title: '3D Sandbox: Battle of the Kingdoms',
            image: 'assets/images/games/3d-sandbox-battle-of-the-kingdoms.jpg',
            description: 'Build your own kingdom, gather resources, recruit armies, and engage in epic battles in this immersive 3D sandbox strategy game.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/3d-sandbox-battle-of-the-kingdoms.html'
        },
        {
            title: 'Right Jump',
            image: 'assets/images/games/right-jump.jpg',
            description: 'Test your reflexes and timing in this addictive arcade game where you must jump at precisely the right moment to reach new platforms and achieve high scores.',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/right-jump.html'
        },
        {
            title: 'Super Slime MQF',
            image: 'assets/images/games/super-slime-mqf.jpg',
            description: 'Control a bouncy slime character through colorful platforming levels, collect gems, avoid obstacles, and discover hidden secrets in this charming adventure.',
            category: 'Adventure',
            rating: '★★★★☆',
            url: 'games/super-slime-mqf.html'
        },
        {
            title: 'ClashBall.io',
            image: 'assets/images/games/clashball-io.jpg',
            description: 'Compete against players worldwide in this fast-paced multiplayer arena game where you control a ball, collect power-ups, and knock opponents off the platform.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/clashball-io.html'
        },
        {
            title: 'Mad Royale Tactics',
            image: 'assets/images/games/mad-royale-tactics.jpg',
            description: 'Build your team of unique heroes, deploy strategic formations, and battle opponents in this fast-paced auto-battler strategy game.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/mad-royale-tactics.html'
        },
        {
            title: 'Merge Siege Ship JQX',
            image: 'assets/images/games/merge-siege-ship-jqx.jpg',
            description: 'Combine ships to create more powerful vessels, build your fleet, and engage in strategic naval battles in this addictive merge-style strategy game.',
            category: 'Strategy',
            rating: '★★★★☆',
            url: 'games/merge-siege-ship-jqx.html'
        },
        {
            title: 'Hyperspace - Quantum Fracture FEZ',
            image: 'assets/images/games/hyperspace-quantum-fracture-fez.jpg',
            description: 'Navigate through mind-bending dimensional rifts, solve physics-based puzzles, and explore a visually stunning universe in this innovative sci-fi adventure.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/hyperspace-quantum-fracture-fez.html'
        },
        {
            title: 'Tenkyu Ball',
            image: 'assets/images/games/tenkyu-ball.jpg',
            description: 'Tilt and rotate intricate 3D mazes to guide a ball through challenging obstacles and reach the goal in this addictive physics-based puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/tenkyu-ball.html'
        },
        {
            title: 'Poxel.io',
            image: 'assets/images/games/poxel-io.jpg',
            description: 'Build, fight, and survive in this multiplayer voxel-based battle royale where you gather resources, craft weapons, and compete to be the last player standing.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/poxel-io.html'
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