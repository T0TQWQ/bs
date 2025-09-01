// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive World Map loaded successfully!');
    
    // 获取所有交互按钮
    const interactiveButtons = document.querySelectorAll('.interactive-button');
    
    // 为每个按钮添加点击事件监听器
    interactiveButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('mouseenter', handleButtonHover);
        button.addEventListener('mouseleave', handleButtonLeave);
    });
    
    // 处理按钮点击事件
    function handleButtonClick(event) {
        const country = event.target.getAttribute('data-country');
        
        // 添加点击动画效果
        event.target.style.transform = 'scale(0.9)';
        setTimeout(() => {
            event.target.style.transform = 'scale(1.2)';
        }, 100);
        
        // 根据国家跳转到对应网站
        switch(country) {
            case 'china':
                // 显示跳转提示
                showNotification('正在跳转到 DeepSeek...', 'success');
                // 延迟跳转，让用户看到动画效果
                setTimeout(() => {
                    window.open('https://www.deepseek.com/', '_blank');
                }, 800);
                break;
                
            case 'usa':
                // 显示跳转提示
                showNotification('Redirecting to ChatGPT...', 'success');
                // 延迟跳转，让用户看到动画效果
                setTimeout(() => {
                    window.open('https://chat.openai.com/', '_blank');
                }, 800);
                break;
                
            default:
                showNotification('Unknown country selected', 'error');
        }
    }
    
    // 处理按钮悬停事件
    function handleButtonHover(event) {
        const country = event.target.getAttribute('data-country');
        let message = '';
        
        switch(country) {
            case 'china':
                message = 'Click to visit DeepSeek (点击访问DeepSeek)';
                break;
            case 'usa':
                message = 'Click to visit ChatGPT';
                break;
        }
        
        if (message) {
            showTooltip(event, message);
        }
    }
    
    // 处理按钮离开事件
    function handleButtonLeave(event) {
        hideTooltip();
    }
    
    // 显示通知消息
    function showNotification(message, type = 'info') {
        // 移除已存在的通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // 创建新通知
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // 自动隐藏
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // 显示工具提示
    function showTooltip(event, message) {
        // 移除已存在的工具提示
        hideTooltip();
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = message;
        
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
            transform: translate(-50%, -100%);
            margin-top: -10px;
        `;
        
        document.body.appendChild(tooltip);
        
        // 获取鼠标位置并定位工具提示
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2) + 'px';
        tooltip.style.top = rect.top + 'px';
    }
    
    // 隐藏工具提示
    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('interactive-button')) {
                event.preventDefault();
                focusedElement.click();
            }
        }
    });
    
    // 为交互按钮添加可聚焦属性
    interactiveButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.setAttribute('role', 'button');
        button.setAttribute('aria-label', 
            button.getAttribute('data-country') === 'china' 
                ? 'Visit DeepSeek website' 
                : 'Visit ChatGPT website'
        );
    });
    
    // 添加页面加载完成的视觉反馈
    setTimeout(() => {
        const mapContainer = document.querySelector('.map-container');
        mapContainer.style.transform = 'scale(1.02)';
        setTimeout(() => {
            mapContainer.style.transform = 'scale(1)';
        }, 200);
    }, 500);
    
    // 控制台欢迎信息
    console.log(`
    🌍 Interactive World Map
    ========================
    • Click China button → DeepSeek
    • Click USA button → ChatGPT
    • Hover for tooltips
    • Keyboard accessible
    `);
});

// 页面可见性API - 当用户切换标签页时暂停动画
document.addEventListener('visibilitychange', function() {
    const buttons = document.querySelectorAll('.interactive-button');
    
    if (document.hidden) {
        // 页面隐藏时暂停动画
        buttons.forEach(button => {
            button.style.animationPlayState = 'paused';
        });
    } else {
        // 页面显示时恢复动画
        buttons.forEach(button => {
            button.style.animationPlayState = 'running';
        });
    }
});

// 防抖函数 - 优化性能
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 窗口大小改变时的响应式处理
window.addEventListener('resize', debounce(function() {
    // 重新计算SVG尺寸
    const svg = document.getElementById('world-map');
    const container = document.querySelector('.map-container');
    
    if (svg && container) {
        const containerWidth = container.offsetWidth - 60; // 减去padding
        svg.style.maxWidth = containerWidth + 'px';
    }
}, 250));

// 错误处理
window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// 导出功能供其他脚本使用
window.WorldMap = {
    showNotification: function(message, type) {
        // 公开通知函数供外部调用
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        document.dispatchEvent(event);
    }
};
