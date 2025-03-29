// 图片懒加载实现
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lazy load script initialized');
    
    // 获取所有需要懒加载的图片
    const lazyImages = document.querySelectorAll('img[data-src]');
    console.log('Found', lazyImages.length, 'images to lazy load');
    
    // 如果没有找到懒加载图片，尝试直接加载所有图片
    if (lazyImages.length === 0) {
        console.log('No lazy-load images found, checking for regular images');
        const allImages = document.querySelectorAll('.game-thumbnail img');
        console.log('Found', allImages.length, 'regular images');
        return;
    }
    
    // 立即加载视口中的图片
    const loadImagesImmediately = function(images) {
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.onload = () => {
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    console.log('Immediately loaded image:', img.src);
                };
            }
        });
    };
    
    // 检查浏览器是否支持IntersectionObserver
    if ('IntersectionObserver' in window) {
        console.log('Using IntersectionObserver for lazy loading');
        
        // 创建Intersection Observer
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // 当图片进入视口时
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        console.log('Loading image:', img.dataset.src);
                        // 设置src属性为data-src的值
                        img.src = img.dataset.src;
                        // 图片加载完成后移除data-src属性
                        img.onload = () => {
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                            console.log('Image loaded successfully');
                        };
                        img.onerror = () => {
                            console.error('Failed to load image:', img.dataset.src);
                            // 尝试使用备用图片
                            img.src = 'assets/images/placeholder.jpg';
                        };
                        // 停止观察已处理的图片
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // 观察所有懒加载图片
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 对于不支持Intersection Observer的浏览器，使用备用方法
        console.log('IntersectionObserver not supported, loading all images immediately');
        loadImagesImmediately(lazyImages);
    }
    
    // 添加滚动事件作为备用
    let lazyLoadThrottleTimeout;
    function lazyLoadImages() {
        if (lazyLoadThrottleTimeout) {
            clearTimeout(lazyLoadThrottleTimeout);
        }
        
        lazyLoadThrottleTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset;
            lazyImages.forEach(function(img) {
                if (img.dataset.src && img.getBoundingClientRect().top < window.innerHeight + scrollTop + 100) {
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    };
                }
            });
            if (lazyImages.length == 0) { 
                document.removeEventListener("scroll", lazyLoadImages);
                window.removeEventListener("resize", lazyLoadImages);
                window.removeEventListener("orientationChange", lazyLoadImages);
            }
        }, 20);
    }
    
    document.addEventListener("scroll", lazyLoadImages);
    window.addEventListener("resize", lazyLoadImages);
    window.addEventListener("orientationChange", lazyLoadImages);
    
    // 初始加载
    lazyLoadImages();
}); 