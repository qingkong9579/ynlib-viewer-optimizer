// ==UserScript==
// @name         云南古籍数字图书馆界面隐藏功能显现 - msq.ynlib.cn
// @namespace    https://github.com/qingkong9579/ynlib-viewer-optimizer
// @version      1.0.0
// @description  精确显示bottom_bt类的元素，增强云南古籍数字图书馆用户体验
// @author       微茫之心
// @match        http://msq.ynlib.cn/frontend/viewer.html*
// @match        https://msq.ynlib.cn/frontend/viewer.html*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/qingkong9579/ynlib-viewer-optimizer/main/ynlib-viewer-optimizer.user.js
// @downloadURL  https://raw.githubusercontent.com/qingkong9579/ynlib-viewer-optimizer/main/ynlib-viewer-optimizer.user.js
// @supportURL   https://github.com/qingkong9579/ynlib-viewer-optimizer/issues
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    
    const config = {
        checkInterval: 800,
        selectors: ['.bottom_bt', '.hidden-element', '[style*="display: none"]']
    };
    
    function showHiddenElements() {
        config.selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                if (computedStyle.display === 'none' || element.style.display === 'none') {
                    element.style.display = 'block';
                    // console.log('显示隐藏元素:', element);
                }
            });
        });
    }
    
    function init() {
        // 初始执行
        showHiddenElements();
        
        // 设置定时检查
        setInterval(showHiddenElements, config.checkInterval);
        
        // 监听DOM变化
        new MutationObserver(showHiddenElements).observe(document, {
            childList: true,
            subtree: true
        });
        
        // console.log('云南古籍数字图书馆界面优化脚本已加载');
    }
    
    // 页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
