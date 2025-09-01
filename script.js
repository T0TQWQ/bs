// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive World Map loaded successfully!');
    
    // 获取所有交互按钮
    const interactiveButtons = document.querySelectorAll('.interactive-button');
    
    // 获取所有国家路径
    const countryPaths = document.querySelectorAll('.country-path');
    
    // 为每个按钮添加点击事件监听器
    interactiveButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('mouseenter', handleButtonHover);
        button.addEventListener('mouseleave', handleButtonLeave);
    });
    
    // 为国家路径添加悬停事件
    countryPaths.forEach(path => {
        path.addEventListener('mouseenter', handleCountryHover);
        path.addEventListener('mouseleave', handleCountryLeave);
        path.addEventListener('click', handleCountryClick);
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
    
    // 处理国家悬停事件
    function handleCountryHover(event) {
        const country = event.target.getAttribute('data-country');
        const countryNames = {
            'usa': 'United States',
            'china': 'China',
            'canada': 'Canada',
            'mexico': 'Mexico',
            'brazil': 'Brazil',
            'argentina': 'Argentina',
            'chile': 'Chile',
            'western-europe': 'Western Europe',
            'eastern-europe': 'Eastern Europe',
            'northern-europe': 'Northern Europe',
            'north-africa': 'North Africa',
            'west-africa': 'West Africa',
            'central-africa': 'Central Africa',
            'east-africa': 'East Africa',
            'south-africa': 'South Africa',
            'russia': 'Russia',
            'india': 'India',
            'japan': 'Japan',
            'southeast-asia': 'Southeast Asia',
            'australia': 'Australia',
            'new-zealand': 'New Zealand'
        };
        
        const countryName = countryNames[country] || country;
        showTooltip(event, `Country: ${countryName}`);
        
        // 高亮相关连接线
        highlightConnections(country);
    }
    
    // 处理国家离开事件
    function handleCountryLeave(event) {
        hideTooltip();
        // 移除连接线高亮
        removeConnectionHighlights();
    }
    
    // 处理国家点击事件
    function handleCountryClick(event) {
        const country = event.target.getAttribute('data-country');
        
        // 如果是可交互的国家，触发按钮点击
        if (country === 'usa' || country === 'china') {
            const button = document.querySelector(`[data-country="${country}"]`);
            if (button) {
                button.click();
            }
        } else {
            // 显示国家信息
            const countryNames = {
                'canada': 'Canada - 加拿大',
                'mexico': 'Mexico - 墨西哥',
                'brazil': 'Brazil - 巴西',
                'argentina': 'Argentina - 阿根廷',
                'chile': 'Chile - 智利',
                'western-europe': 'Western Europe - 西欧',
                'eastern-europe': 'Eastern Europe - 东欧',
                'northern-europe': 'Northern Europe - 北欧',
                'north-africa': 'North Africa - 北非',
                'west-africa': 'West Africa - 西非',
                'central-africa': 'Central Africa - 中非',
                'east-africa': 'East Africa - 东非',
                'south-africa': 'South Africa - 南非',
                'russia': 'Russia - 俄罗斯',
                'india': 'India - 印度',
                'japan': 'Japan - 日本',
                'southeast-asia': 'Southeast Asia - 东南亚',
                'australia': 'Australia - 澳大利亚',
                'new-zealand': 'New Zealand - 新西兰'
            };
            
            const countryName = countryNames[country] || country;
            showNotification(`Selected: ${countryName}`, 'info');
        }
    }
    
    // 高亮相关连接线
    function highlightConnections(country) {
        const connections = document.querySelectorAll('#connection-lines line');
        
        connections.forEach(line => {
            // 根据国家位置判断是否高亮连接线
            const lineX1 = parseFloat(line.getAttribute('x1'));
            const lineY1 = parseFloat(line.getAttribute('y1'));
            const lineX2 = parseFloat(line.getAttribute('x2'));
            const lineY2 = parseFloat(line.getAttribute('y2'));
            
            let shouldHighlight = false;
            
            switch(country) {
                case 'usa':
                    shouldHighlight = (lineX1 === 235 && lineY1 === 250) || (lineX2 === 235 && lineY2 === 250);
                    break;
                case 'china':
                    shouldHighlight = (lineX1 === 750 && lineY1 === 235) || (lineX2 === 750 && lineY2 === 235);
                    break;
                case 'western-europe':
                case 'eastern-europe':
                case 'northern-europe':
                    shouldHighlight = (lineX1 === 530 && lineY1 === 200) || (lineX2 === 530 && lineY2 === 200);
                    break;
            }
            
            if (shouldHighlight) {
                line.style.stroke = '#e74c3c';
                line.style.strokeWidth = '4';
                line.style.opacity = '0.9';
            }
        });
    }
    
    // 移除连接线高亮
    function removeConnectionHighlights() {
        const connections = document.querySelectorAll('#connection-lines line');
        connections.forEach(line => {
            line.style.stroke = '#4a90e2';
            line.style.strokeWidth = '2';
            line.style.opacity = '0.6';
        });
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
    
    // 添加地图加载动画
    const continents = document.querySelectorAll('.continent');
    continents.forEach((continent, index) => {
        continent.style.opacity = '0';
        continent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            continent.style.transition = 'all 0.5s ease';
            continent.style.opacity = '1';
            continent.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 控制台欢迎信息
    console.log(`
    🌍 Interactive World Map v2.0
    =============================
    • Click China button → DeepSeek
    • Click USA button → ChatGPT
    • Hover countries for info
    • Interactive connections
    • Responsive design
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
