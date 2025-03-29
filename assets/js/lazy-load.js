// 图片懒加载实现
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要懒加载的图片
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    // 创建Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 当图片进入视口时
            if (entry.isIntersecting) {
                const img = entry.target;
                // 设置src属性为data-src的值
                img.src = img.dataset.src;
                // 图片加载完成后移除data-src属性
                img.onload = () => {
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                };
                // 停止观察已处理的图片
                observer.unobserve(img);
            }
        });
    });
    
    // 观察所有懒加载图片
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // 对于不支持Intersection Observer的浏览器，使用备用方法
    if (!('IntersectionObserver' in window)) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}); 