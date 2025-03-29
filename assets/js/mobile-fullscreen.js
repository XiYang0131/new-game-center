// 移动端全屏处理
document.addEventListener('DOMContentLoaded', function() {
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // 获取游戏容器和iframe
        const gameContainer = document.querySelector('.game-container') || document.querySelector('.game-frame-container');
        const gameIframe = document.querySelector('.game-container iframe') || document.querySelector('.game-frame-container iframe');
        
        if (gameContainer && gameIframe) {
            // 创建全屏按钮（如果还没有）
            let fullscreenButton = document.querySelector('.fullscreen-button');
            
            if (!fullscreenButton) {
                fullscreenButton = document.createElement('button');
                fullscreenButton.className = 'fullscreen-button';
                fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
                fullscreenButton.title = '全屏模式';
                
                gameContainer.appendChild(fullscreenButton);
            }
            
            // 创建横屏提示（如果还没有）
            let rotateDevice = document.querySelector('.rotate-device');
            
            if (!rotateDevice) {
                rotateDevice = document.createElement('div');
                rotateDevice.className = 'rotate-device';
                rotateDevice.innerHTML = `
                    <i class="fas fa-mobile-alt"></i>
                    <p>为了获得最佳游戏体验，请将设备旋转至横屏模式</p>
                `;
                
                document.body.appendChild(rotateDevice);
            }
            
            // 处理全屏按钮点击
            fullscreenButton.addEventListener('click', function() {
                toggleFullscreen();
            });
            
            // 全屏切换函数
            function toggleFullscreen() {
                // 检查当前是否为全屏
                const isFullscreen = !!(document.fullscreenElement || 
                                      document.mozFullScreenElement || 
                                      document.webkitFullscreenElement || 
                                      document.msFullscreenElement);
                
                if (!isFullscreen) {
                    // 进入全屏
                    gameContainer.classList.add('fullscreen-active');
                    
                    // 尝试锁定屏幕方向为横屏
                    if (screen.orientation && screen.orientation.lock) {
                        screen.orientation.lock('landscape').catch(err => {
                            console.log('无法锁定屏幕方向:', err);
                            // 如果无法锁定，显示横屏提示
                            checkOrientation();
                        });
                    } else {
                        // 如果不支持方向锁定，显示横屏提示
                        checkOrientation();
                    }
                    
                    // 尝试请求全屏
                    if (gameIframe.requestFullscreen) {
                        gameIframe.requestFullscreen();
                    } else if (gameIframe.mozRequestFullScreen) {
                        gameIframe.mozRequestFullScreen();
                    } else if (gameIframe.webkitRequestFullscreen) {
                        gameIframe.webkitRequestFullscreen();
                    } else if (gameIframe.msRequestFullscreen) {
                        gameIframe.msRequestFullscreen();
                    } else if (gameContainer.requestFullscreen) {
                        gameContainer.requestFullscreen();
                    } else if (gameContainer.mozRequestFullScreen) {
                        gameContainer.mozRequestFullScreen();
                    } else if (gameContainer.webkitRequestFullscreen) {
                        gameContainer.webkitRequestFullscreen();
                    } else if (gameContainer.msRequestFullscreen) {
                        gameContainer.msRequestFullscreen();
                    }
                    
                    fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
                } else {
                    // 退出全屏
                    gameContainer.classList.remove('fullscreen-active');
                    
                    // 解锁屏幕方向
                    if (screen.orientation && screen.orientation.unlock) {
                        screen.orientation.unlock();
                    }
                    
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
                    
                    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
                }
            }
            
            // 检查设备方向
            function checkOrientation() {
                if (window.innerHeight > window.innerWidth) {
                    rotateDevice.style.display = 'flex';
                } else {
                    rotateDevice.style.display = 'none';
                }
            }
            
            // 监听方向变化
            window.addEventListener('orientationchange', function() {
                if (gameContainer.classList.contains('fullscreen-active')) {
                    checkOrientation();
                }
            });
            
            // 监听全屏变化
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.addEventListener('mozfullscreenchange', handleFullscreenChange);
            document.addEventListener('MSFullscreenChange', handleFullscreenChange);
            
            function handleFullscreenChange() {
                const isFullscreen = !!(document.fullscreenElement || 
                                      document.mozFullScreenElement || 
                                      document.webkitFullscreenElement || 
                                      document.msFullscreenElement);
                
                if (!isFullscreen) {
                    // 退出全屏时
                    gameContainer.classList.remove('fullscreen-active');
                    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
                    
                    // 解锁屏幕方向
                    if (screen.orientation && screen.orientation.unlock) {
                        screen.orientation.unlock();
                    }
                    
                    rotateDevice.style.display = 'none';
                }
            }
        }
    }
}); 