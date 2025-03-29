// 移动端全屏功能增强
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log('移动设备检测到，启用增强全屏功能');
        
        // 获取游戏容器和iframe
        const gameContainer = document.querySelector('.game-container') || document.querySelector('.game-frame-container');
        const gameIframe = gameContainer ? (gameContainer.querySelector('iframe') || null) : null;
        
        if (gameContainer && gameIframe) {
            // 创建全屏按钮
            const fullscreenButton = document.createElement('button');
            fullscreenButton.className = 'mobile-fullscreen-button';
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenButton.title = '全屏模式';
            
            // 创建旋转提示
            const rotateHint = document.createElement('div');
            rotateHint.className = 'rotate-device-hint';
            rotateHint.innerHTML = '<i class="fas fa-sync-alt"></i><span>旋转设备获得更好体验</span>';
            rotateHint.style.display = 'none';
            
            // 添加到DOM
            gameContainer.appendChild(fullscreenButton);
            gameContainer.appendChild(rotateHint);
            
            // 全屏按钮点击事件
            fullscreenButton.addEventListener('click', function() {
                toggleFullScreen(gameContainer, gameIframe);
            });
            
            // 监听屏幕方向变化
            window.addEventListener('orientationchange', function() {
                updateFullscreenState(gameContainer, gameIframe);
            });
            
            // 监听全屏变化
            document.addEventListener('fullscreenchange', function() {
                if (!document.fullscreenElement) {
                    // 退出全屏时恢复原始样式
                    resetStyles(gameContainer, gameIframe);
                    rotateHint.style.display = 'none';
                }
            });
            
            // 初始检查屏幕方向
            checkOrientation(rotateHint);
            window.addEventListener('resize', function() {
                checkOrientation(rotateHint);
            });
        }
    }
});

// 切换全屏状态
function toggleFullScreen(container, iframe) {
    if (!document.fullscreenElement) {
        // 进入全屏
        if (container.requestFullscreen) {
            container.requestFullscreen().then(() => {
                applyFullscreenStyles(container, iframe);
            }).catch(err => {
                console.error('全屏请求被拒绝:', err);
                // 尝试替代方法
                applyPseudoFullscreen(container, iframe);
            });
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen().then(() => {
                applyFullscreenStyles(container, iframe);
            }).catch(err => {
                console.error('WebKit全屏请求被拒绝:', err);
                applyPseudoFullscreen(container, iframe);
            });
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen().then(() => {
                applyFullscreenStyles(container, iframe);
            }).catch(err => {
                console.error('MS全屏请求被拒绝:', err);
                applyPseudoFullscreen(container, iframe);
            });
        } else {
            // 浏览器不支持全屏API，使用替代方法
            applyPseudoFullscreen(container, iframe);
        }
    } else {
        // 退出全屏
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        resetStyles(container, iframe);
    }
}

// 应用全屏样式
function applyFullscreenStyles(container, iframe) {
    // 保存原始样式以便恢复
    container.dataset.originalStyle = container.getAttribute('style') || '';
    iframe.dataset.originalStyle = iframe.getAttribute('style') || '';
    
    // 应用全屏样式
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '9999';
    container.style.margin = '0';
    container.style.padding = '0';
    container.style.border = 'none';
    container.style.background = '#000';
    
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    
    // 强制横屏模式
    if (window.innerHeight > window.innerWidth) {
        // 如果是竖屏，应用旋转
        container.style.transform = 'rotate(90deg)';
        container.style.transformOrigin = 'center center';
        container.style.width = '100vh';
        container.style.height = '100vw';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.marginTop = '-50vw';
        container.style.marginLeft = '-50vh';
    }
    
    // 隐藏滚动条
    document.body.style.overflow = 'hidden';
}

// 应用伪全屏（当原生全屏API失败时）
function applyPseudoFullscreen(container, iframe) {
    // 保存原始样式
    container.dataset.originalStyle = container.getAttribute('style') || '';
    iframe.dataset.originalStyle = iframe.getAttribute('style') || '';
    
    // 应用伪全屏样式
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '9999';
    container.style.margin = '0';
    container.style.padding = '0';
    container.style.background = '#000';
    
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    // 强制横屏模式
    if (window.innerHeight > window.innerWidth) {
        container.style.transform = 'rotate(90deg)';
        container.style.transformOrigin = 'center center';
        container.style.width = '100vh';
        container.style.height = '100vw';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.marginTop = '-50vw';
        container.style.marginLeft = '-50vh';
    }
    
    // 隐藏滚动条
    document.body.style.overflow = 'hidden';
    
    // 添加退出伪全屏的按钮
    const exitButton = document.createElement('button');
    exitButton.className = 'exit-fullscreen-button';
    exitButton.innerHTML = '<i class="fas fa-compress"></i>';
    container.appendChild(exitButton);
    
    exitButton.addEventListener('click', function() {
        resetStyles(container, iframe);
        document.body.style.overflow = '';
        if (exitButton.parentNode) {
            exitButton.parentNode.removeChild(exitButton);
        }
    });
}

// 重置样式
function resetStyles(container, iframe) {
    // 恢复原始样式
    if (container.dataset.originalStyle) {
        container.setAttribute('style', container.dataset.originalStyle);
    } else {
        container.removeAttribute('style');
    }
    
    if (iframe.dataset.originalStyle) {
        iframe.setAttribute('style', iframe.dataset.originalStyle);
    } else {
        iframe.removeAttribute('style');
    }
    
    // 恢复滚动条
    document.body.style.overflow = '';
    
    // 移除可能存在的退出按钮
    const exitButton = container.querySelector('.exit-fullscreen-button');
    if (exitButton) {
        exitButton.parentNode.removeChild(exitButton);
    }
}

// 根据屏幕方向更新全屏状态
function updateFullscreenState(container, iframe) {
    if (document.fullscreenElement) {
        applyFullscreenStyles(container, iframe);
    }
}

// 检查屏幕方向并显示提示
function checkOrientation(hintElement) {
    if (window.innerHeight > window.innerWidth && document.fullscreenElement) {
        // 竖屏状态下显示旋转提示
        hintElement.style.display = 'flex';
    } else {
        hintElement.style.display = 'none';
    }
} 