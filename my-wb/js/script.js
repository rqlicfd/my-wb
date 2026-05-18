// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('网站加载成功！');
    
    // 给所有 section 添加点击效果
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });
});