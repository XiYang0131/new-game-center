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
    
    // 游戏数据 - 新游戏添加在数组开头，这样会显示在最上方
    const games = [
        // 最新添加的游戏放在最前面
        {
            title: 'Twisted Tangle NMT',
            image: 'assets/images/games/twisted-tangle-nmt.jpg',
            description: 'Untangle the colorful web of lines in this addictive puzzle game! Connect matching nodes without crossing paths, solve increasingly complex patterns, and challenge your spatial reasoning skills.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/twisted-tangle-nmt.html'
        },
        {
            title: 'TDP4: Team Battle',
            image: 'assets/images/games/tdp4-team-battle.jpg',
            description: 'Join the ultimate tactical shooter experience in TDP4: Team Battle! Choose your class, customize your loadout, and engage in intense team-based combat across various maps with strategic objectives.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/tdp4-team-battle.html'
        },
        {
            title: 'Thread Master - ASMR Embroidery',
            image: 'assets/images/games/thread-master-asmr-embroidery.jpg',
            description: 'Experience the calming art of virtual embroidery in this relaxing ASMR game! Create beautiful patterns, unlock new designs, and enjoy the satisfying sound of threading needle through fabric.',
            category: 'Casual',
            rating: '★★★★★',
            url: 'games/thread-master-asmr-embroidery.html'
        },
        {
            title: 'Crazy MotoX Multiplayer',
            image: 'assets/images/games/crazy-motox-multiplayer.jpg',
            description: 'Race against other players in this thrilling multiplayer motocross game! Master challenging tracks, perform spectacular stunts, and upgrade your bike to become the ultimate off-road champion.',
            category: 'Racing',
            rating: '★★★★★',
            url: 'games/crazy-motox-multiplayer.html'
        },
        {
            title: 'Hexa Block 2048 Idle',
            image: 'assets/images/games/hexa-block-2048-idle.jpg',
            description: 'Combine hexagonal blocks with the same numbers to create higher values in this addictive idle puzzle game! Strategically place blocks, unlock upgrades, and watch your score multiply exponentially.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/hexa-block-2048-idle.html'
        },
        {
            title: 'SBaloon',
            image: 'assets/images/games/sbaloon.jpg',
            description: 'Navigate colorful balloons through challenging obstacles in this addictive arcade game! Test your reflexes, avoid spikes, and collect stars as you float through increasingly difficult levels.',
            category: 'Arcade',
            rating: '★★★★★',
            url: 'games/sbaloon.html'
        },
        {
            title: 'Fun Puzzles',
            image: 'assets/images/games/fun-puzzles.jpg',
            description: 'Challenge your brain with this collection of entertaining puzzles! Solve jigsaw puzzles, match colors, complete patterns, and test your logical thinking in a variety of fun mini-games.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/fun-puzzles.html'
        },
        {
            title: 'Wizard Masters',
            image: 'assets/images/games/wizard-masters.jpg',
            description: 'Master the arcane arts in this magical strategy game! Cast powerful spells, summon mythical creatures, and duel other wizards in epic battles of wit and sorcery.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/wizard-masters.html'
        },
        {
            title: 'Parking Jam',
            image: 'assets/images/games/parking-jam.jpg',
            description: 'Solve challenging parking puzzles in this addictive brain teaser! Navigate cars through crowded lots, plan your moves carefully, and clear the path to escape the parking jam.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/parking-jam.html'
        },
        {
            title: 'Basketball Superstars',
            image: 'assets/images/games/basketball-superstars.jpg',
            description: 'Become a basketball legend in this fast-paced sports game! Perfect your shooting skills, perform spectacular dunks, and lead your team to championship glory with intuitive controls and exciting gameplay.',
            category: 'Sports',
            rating: '★★★★★',
            url: 'games/basketball-superstars.html'
        },
        {
            title: 'Scavenger Hunt - Multiplayer',
            image: 'assets/images/games/scavenger-hunt-multiplayer.jpg',
            description: 'Join the ultimate multiplayer treasure hunt! Search for hidden objects, solve puzzles, and race against other players to become the champion scavenger in this exciting online adventure.',
            category: 'Multiplayer',
            rating: '★★★★★',
            url: 'games/scavenger-hunt-multiplayer.html'
        },
        {
            title: 'Mega Makeup Seasons Best',
            image: 'assets/images/games/mega-makeup-seasons-best.jpg',
            description: 'Express your creativity in this stylish makeup simulation game! Create stunning seasonal looks, experiment with countless cosmetics, and become a virtual beauty influencer.',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/mega-makeup-seasons-best.html'
        },
        {
            title: 'Coin Picker',
            image: 'assets/images/games/coin-picker.jpg',
            description: 'Collect coins and avoid obstacles in this addictive arcade game! Navigate through challenging levels, unlock new characters, and compete for the highest score in this fast-paced adventure.',
            category: 'Arcade',
            rating: '★★★★★',
            url: 'games/coin-picker.html'
        },
        {
            title: 'Stickman Tower Defense Idle 3D',
            image: 'assets/images/games/stickman-tower-defense-idle-3d.jpg',
            description: 'Defend your base against waves of enemies in this addictive idle tower defense game! Place stickman towers strategically, upgrade your defenses, and watch your army automatically battle in stunning 3D.',
            category: 'Tower Defense',
            rating: '★★★★★',
            url: 'games/stickman-tower-defense-idle-3d.html'
        },
        {
            title: 'Neko Sliding Cat Puzzle',
            image: 'assets/images/games/neko-sliding-cat-puzzle.jpg',
            description: 'Help the adorable cat reach its goal in this charming sliding puzzle game! Solve increasingly challenging levels by moving blocks, avoiding obstacles, and finding the perfect path.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/neko-sliding-cat-puzzle.html'
        },
        {
            title: 'Damn It',
            image: 'assets/images/games/damn-it.jpg',
            description: 'Build dams to control water flow in this challenging physics-based puzzle game! Strategically place materials, manage resources, and protect villages from flooding in increasingly complex scenarios.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/damn-it.html'
        },
        {
            title: 'Clash of Ages',
            image: 'assets/images/games/clash-of-ages.jpg',
            description: 'Command armies from different historical eras in this epic strategy game! Build your civilization, research technologies, and conquer enemies across time periods from ancient to modern warfare.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/clash-of-ages.html'
        },
        {
            title: 'Zom Strike',
            image: 'assets/images/games/zom-strike.jpg',
            description: 'Fight for survival in this intense zombie shooter! Eliminate waves of undead, upgrade your weapons, and defend strategic positions in a post-apocalyptic world overrun by zombies.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/zom-strike.html'
        },
        {
            title: 'Atomic Champions',
            image: 'assets/images/games/atomic-champions.jpg',
            description: 'Battle in this action-packed arena fighter! Choose your unique champion, master special abilities, and compete against other players in fast-paced multiplayer combat.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/atomic-champions.html'
        },
        {
            title: 'Drag Master',
            image: 'assets/images/games/drag-master.jpg',
            description: 'Test your drag racing skills in this adrenaline-pumping racing game! Master the perfect launch, time your gear shifts, and upgrade your car to become the ultimate drag racing champion.',
            category: 'Racing',
            rating: '★★★★★',
            url: 'games/drag-master.html'
        },
        {
            title: 'Jetpack Joyride',
            image: 'assets/images/games/jetpack-joyride.jpg',
            description: 'Strap on a bullet-powered jetpack and embark on an action-packed adventure! Dodge obstacles, collect coins, and test your reflexes in this thrilling endless runner game.',
            category: 'Arcade',
            rating: '★★★★★',
            url: 'games/jetpack-joyride.html'
        },
        {
            title: 'War of Mine',
            image: 'assets/images/games/war-of-mine.jpg',
            description: 'Experience the harsh reality of war from a civilian perspective in this emotional survival game. Manage resources, make difficult moral choices, and try to stay alive in a besieged city.',
            category: 'Survival',
            rating: '★★★★★',
            url: 'games/war-of-mine.html'
        },
        {
            title: 'Underwater Adventures Match 3',
            image: 'assets/images/games/underwater-adventures-match-3.jpg',
            description: 'Dive into an oceanic match-3 puzzle experience! Connect colorful sea creatures, unlock power-ups, and explore the depths of the ocean through challenging and relaxing gameplay.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/underwater-adventures-match-3.html'
        },
        {
            title: 'Planet Life Idle',
            image: 'assets/images/games/planet-life-idle.jpg',
            description: 'Create and evolve your own planet in this relaxing idle game! Develop ecosystems, discover new species, and watch your world flourish with minimal interaction required.',
            category: 'Idle',
            rating: '★★★★★',
            url: 'games/planet-life-idle.html'
        },
        {
            title: 'Raid Heroes: Total War',
            image: 'assets/images/games/raid-heroes-total-war.jpg',
            description: 'Command powerful heroes and armies in this epic strategy game! Build your kingdom, recruit legendary champions, and conquer enemy territories in thrilling tactical battles.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/raid-heroes-total-war.html'
        },
        {
            title: 'Minesweeper Duel',
            image: 'assets/images/games/minesweeper-duel.jpg',
            description: 'Challenge your friends in this competitive twist on the classic Minesweeper game! Clear mines faster than your opponent and use special power-ups in exciting head-to-head matches.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/minesweeper-duel.html'
        },
        {
            title: 'Street Racer 2',
            image: 'assets/images/games/street-racer-2.jpg',
            description: 'Race through city streets in this adrenaline-pumping driving game! Drift around corners, upgrade your cars, and compete against skilled opponents in intense urban racing action.',
            category: 'Racing',
            rating: '★★★★★',
            url: 'games/street-racer-2.html'
        },
        {
            title: 'QB Legend',
            image: 'assets/images/games/qb-legend.jpg',
            description: 'Lead your football team to victory in this exciting quarterback simulation! Make strategic plays, throw perfect passes, and become a legendary QB in this immersive sports game.',
            category: 'Sports',
            rating: '★★★★★',
            url: 'games/qb-legend.html'
        },
        {
            title: 'Cat and Granny Original',
            image: 'assets/images/games/cat-and-granny-original.jpg',
            description: 'Help the mischievous cat outsmart the granny in this hilarious stealth adventure! Sneak around the house, cause chaos, and avoid getting caught in this charming cat simulator.',
            category: 'Adventure',
            rating: '★★★★★',
            url: 'games/cat-and-granny-original.html'
        },
        {
            title: 'Weapons and Ragdolls',
            image: 'assets/images/games/weapons-and-ragdolls.jpg',
            description: 'Experiment with physics in this sandbox game! Test different weapons on ragdoll characters, create chain reactions, and enjoy the hilarious physics-based mayhem.',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/weapons-and-ragdolls.html'
        },
        {
            title: 'JamJam',
            image: 'assets/images/games/jamjam.jpg',
            description: 'Create your own music in this fun and intuitive rhythm game! Mix beats, add instruments, and compose catchy tunes with simple controls in a colorful musical playground.',
            category: 'Music',
            rating: '★★★★★',
            url: 'games/jamjam.html'
        },
        {
            title: 'Robbie Game Challenges',
            image: 'assets/images/games/robbie-game-challenges.jpg',
            description: 'Help Robbie navigate through a series of exciting mini-games and challenges! Test your skills in various gameplay styles from platforming to puzzles in this charming adventure.',
            category: 'Adventure',
            rating: '★★★★★',
            url: 'games/robbie-game-challenges.html'
        },
        {
            title: 'Fruit Party',
            image: 'assets/images/games/fruit-party.jpg',
            description: 'Join the colorful fruit celebration in this delightful match-3 puzzle game! Swap juicy fruits, create powerful combos, and complete challenging levels in a vibrant fruity world.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/fruit-party.html'
        },
        {
            title: 'Chakram Master',
            image: 'assets/images/games/chakram-master.jpg',
            description: 'Master the ancient weapon in this action-packed adventure! Throw your chakram to defeat enemies, solve puzzles, and discover hidden treasures in a mystical world.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/chakram-master.html'
        },
        {
            title: 'Hot Road Infinite',
            image: 'assets/images/games/hot-road-infinite.jpg',
            description: 'Race through endless highways in this high-speed driving game! Dodge traffic, collect power-ups, and see how far you can go in this thrilling infinite runner.',
            category: 'Racing',
            rating: '★★★★★',
            url: 'games/hot-road-infinite.html'
        },
        {
            title: 'Obby Parkour Race',
            image: 'assets/images/games/obby-parkour-race.jpg',
            description: 'Test your platforming skills in this challenging obstacle course game! Jump, dodge, and race through increasingly difficult levels while competing against other players.',
            category: 'Platformer',
            rating: '★★★★★',
            url: 'games/obby-parkour-race.html'
        },
        {
            title: 'Zombie Mayhem',
            image: 'assets/images/games/zombie-mayhem.jpg',
            description: 'Survive the zombie apocalypse in this action-packed shooter! Blast through hordes of undead, upgrade your weapons, and fight to stay alive in increasingly challenging waves.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/zombie-mayhem.html'
        },
        {
            title: 'Hotfoot Baseball',
            image: 'assets/images/games/hotfoot-baseball.jpg',
            description: 'Step up to the plate in this fast-paced baseball game! Perfect your swing timing, hit home runs, and lead your team to victory with intuitive controls and exciting gameplay.',
            category: 'Sports',
            rating: '★★★★★',
            url: 'games/hotfoot-baseball.html'
        },
        {
            title: 'Syntaxia',
            image: 'assets/images/games/syntaxia.jpg',
            description: 'Master the art of coding in this educational puzzle game. Solve programming challenges, learn syntax, and build your logical thinking skills in a fun, interactive environment.',
            category: 'Puzzle',
            rating: '★★★★★',
            url: 'games/syntaxia.html'
        },
        {
            title: 'Egg Folks Multiplayer',
            image: 'assets/images/games/egg-folks-multiplayer.jpg',
            description: 'Join the egg-citing multiplayer battles where you control quirky egg characters with unique abilities. Compete in various game modes, customize your egg, and climb the leaderboards!',
            category: 'Multiplayer',
            rating: '★★★★★',
            url: 'games/egg-folks-multiplayer.html'
        },
        {
            title: 'Heroes Assemble',
            image: 'assets/images/games/heroes-assemble.jpg',
            description: 'Build your team of superheroes, upgrade their abilities, and battle against powerful villains in this action-packed strategy game with stunning comic-style graphics.',
            category: 'Strategy',
            rating: '★★★★★',
            url: 'games/heroes-assemble.html'
        },
        {
            title: 'Knife.io',
            image: 'assets/images/games/knife-io.jpg',
            description: 'Throw knives to defeat opponents in this fast-paced multiplayer arena game. Collect power-ups, upgrade your weapons, and become the ultimate knife master!',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/knife-io.html'
        },
        {
            title: 'MemeBattle: What\'s That Meme',
            image: 'assets/images/games/memebattle-whats-that-meme.jpg',
            description: 'Test your meme knowledge in this hilarious multiplayer quiz game. Identify popular memes, compete with friends, and prove you\'re the ultimate meme master!',
            category: 'Casual',
            rating: '★★★★★',
            url: 'games/memebattle-whats-that-meme.html'
        },
        {
            title: 'Command Strike FPS',
            image: 'assets/images/games/command-strike-fps.jpg',
            description: 'Experience intense first-person shooter action in this tactical combat game. Team up with allies, choose your weapons, and dominate the battlefield with strategic gameplay.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/command-strike-fps.html'
        },
        {
            title: 'Five O',
            image: 'assets/images/games/five-o.jpg',
            description: 'Take on the role of a police officer in this action-packed law enforcement simulation. Patrol the streets, respond to emergency calls, and maintain order in a bustling city.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/five-o.html'
        },
        {
            title: 'Jail Escape',
            image: 'assets/images/games/jail-escape.jpg',
            description: 'Plan your escape from a high-security prison by solving puzzles, finding hidden items, and outsmarting guards in this thrilling adventure game.',
            category: 'Adventure',
            rating: '★★★★★',
            url: 'games/jail-escape.html'
        },
        {
            title: 'Crazy Bus',
            image: 'assets/images/games/crazy-bus.jpg',
            description: 'Navigate through busy streets, pick up passengers, and complete routes on time in this challenging and addictive bus driving simulation.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/crazy-bus.html'
        },
        {
            title: 'Air Block',
            image: 'assets/images/games/air-block.jpg',
            description: 'Stack colorful blocks, create perfect towers, and test your balance and timing skills in this addictive physics-based puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/air-block.html'
        },
        {
            title: 'Limited Kaboom',
            image: 'assets/images/games/limited-kaboom.jpg',
            description: 'Strategically place bombs, clear obstacles, and solve challenging puzzles with a limited supply of explosives in this brain-teasing puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/limited-kaboom.html'
        },
        {
            title: 'Epic Mine',
            image: 'assets/images/games/epic-mine.jpg',
            description: 'Dig deep underground, discover rare minerals, upgrade your equipment, and build your mining empire in this addictive resource management game.',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/epic-mine.html'
        },
        {
            title: 'Super Squirrel Blaster',
            image: 'assets/images/games/super-squirrel-blaster.jpg',
            description: 'Defend your garden from waves of mischievous squirrels in this fast-paced, action-packed arcade shooter with wacky weapons and power-ups.',
            category: 'Arcade',
            rating: '★★★★☆',
            url: 'games/super-squirrel-blaster.html'
        },
        {
            title: 'Tavern Simulator',
            image: 'assets/images/games/tavern-simulator.jpg',
            description: 'Build and manage your medieval tavern, serve drinks, cook meals, hire staff, and keep adventurers happy in this engaging management simulation.',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/tavern-simulator.html'
        },
        {
            title: 'No Limits Drag Racing',
            image: 'assets/images/games/no-limits-drag-racing.jpg',
            description: 'Customize powerful cars, master perfect launches, and compete in high-speed drag races to become the ultimate street racing champion.',
            category: 'Sports',
            rating: '★★★★★',
            url: 'games/no-limits-drag-racing.html'
        },
        {
            title: 'Nuclear Day',
            image: 'assets/images/games/nuclear-day.jpg',
            description: 'Survive in a post-apocalyptic world, scavenge for resources, build shelters, and defend against threats in this intense survival simulation.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/nuclear-day.html'
        },
        {
            title: 'Unique Flavors',
            image: 'assets/images/games/unique-flavors.jpg',
            description: 'Run your own ice cream shop, create delicious combinations, serve customers, and build your dessert empire in this fun management simulation.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/unique-flavors.html'
        },
        {
            title: 'Mojo Match 3D',
            image: 'assets/images/games/mojo-match-3d.jpg',
            description: 'Match identical objects, clear levels, and test your memory and observation skills in this addictive 3D matching puzzle game.',
            category: 'Puzzle',
            rating: '★★★★☆',
            url: 'games/mojo-match-3d.html'
        },
        {
            title: 'Empire City',
            image: 'assets/images/games/empire-city.jpg',
            description: 'Build and manage your own thriving metropolis, balance resources, and watch your city evolve from a small town to a bustling urban center.',
            category: 'Simulation',
            rating: '★★★★★',
            url: 'games/empire-city.html'
        },
        {
            title: 'Hook Slice',
            image: 'assets/images/games/hook-slice.jpg',
            description: 'Master the perfect swing, navigate challenging courses, and compete against players worldwide in this realistic golf simulation game.',
            category: 'Sports',
            rating: '★★★★☆',
            url: 'games/hook-slice.html'
        },
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
        },
        {
            title: 'Dessert Maker',
            image: 'assets/images/games/dessert-maker.jpg',
            description: 'Create delicious virtual treats, decorate cakes, cookies, and more in this relaxing and creative culinary simulation game.',
            category: 'Simulation',
            rating: '★★★★☆',
            url: 'games/dessert-maker.html'
        },
        {
            title: 'Raven Estate',
            image: 'assets/images/games/raven-estate.jpg',
            description: 'Explore a mysterious mansion, solve intricate puzzles, and uncover dark secrets in this atmospheric horror adventure game with multiple endings.',
            category: 'Adventure',
            rating: '★★★★★',
            url: 'games/raven-estate.html'
        },
        {
            title: 'TankGank.com',
            image: 'assets/images/games/tankgank-com.jpg',
            description: 'Command powerful tanks in intense multiplayer battles, upgrade your arsenal, and dominate the battlefield in this action-packed tank warfare game.',
            category: 'Action',
            rating: '★★★★★',
            url: 'games/tankgank-com.html'
        },
        {
            title: 'Flag Arena - Capture & Dominate',
            image: 'assets/images/games/flag-arena-capture-dominate.jpg',
            description: 'Compete in fast-paced multiplayer battles, capture flags, control territories, and outmaneuver opponents in this thrilling action strategy game.',
            category: 'Action',
            rating: '★★★★☆',
            url: 'games/flag-arena-capture-dominate.html'
        },
        {
            title: 'Idle Blogger Simulator',
            image: 'assets/images/games/idle-blogger-simulator.jpg',
            description: 'Build your blogging empire, create viral content, gain followers, and upgrade your setup in this addictive idle simulation game.',
            category: 'Idle',
            rating: '★★★★☆',
            url: 'games/idle-blogger-simulator.html'
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