document.addEventListener('DOMContentLoaded', function() {
    // 分类页面特定功能
    setupFilters();
    setupPagination();
});

// 设置筛选功能
function setupFilters() {
    const sortSelect = document.querySelector('.filter-group select:first-of-type');
    const categorySelect = document.querySelector('.filter-group select:last-of-type');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applyFilters();
        });
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            applyFilters();
        });
    }
}

// 应用筛选
function applyFilters() {
    const sortSelect = document.querySelector('.filter-group select:first-of-type');
    const categorySelect = document.querySelector('.filter-group select:last-of-type');
    
    if (!sortSelect || !categorySelect) return;
    
    const sortValue = sortSelect.value;
    const categoryValue = categorySelect.value;
    
    console.log(`应用筛选: 排序=${sortValue}, 子分类=${categoryValue}`);
    
    // 在实际应用中，这里应该根据筛选条件重新加载游戏列表
    // 现在我们只是显示一个提示
    alert(`筛选功能正在开发中...\n排序方式: ${sortValue}\n子分类: ${categoryValue}`);
}

// 设置分页功能
function setupPagination() {
    const paginationLinks = document.querySelectorAll('.pagination a');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            paginationLinks.forEach(l => l.classList.remove('active'));
            
            // 添加活动状态到当前链接
            this.classList.add('active');
            
            // 获取页码
            const page = this.textContent;
            
            console.log(`切换到页面: ${page}`);
            
            // 在实际应用中，这里应该加载对应页码的游戏
            if (!this.textContent.includes('下一页')) {
                alert(`分页功能正在开发中...\n您点击了第 ${page} 页`);
            } else {
                alert('分页功能正在开发中...\n您点击了下一页');
            }
        });
    });
} 