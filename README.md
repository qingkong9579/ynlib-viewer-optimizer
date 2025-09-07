# 云南古籍数字图书馆界面优化脚本

该用户脚本用于优化云南古籍数字图书馆（msq.ynlib.cn）的阅读器界面，自动显示被隐藏的功能元素。

## 功能特性

- 🔍 **自动显示隐藏元素**：检测并显示所有被隐藏的 `.bottom_bt` 类元素
- ⏱️ **实时监控**：通过Mutation Observer实时监控DOM变化
- 🔄 **定时检查**：每800毫秒检查一次隐藏元素
- 📱 **多域名支持**：支持HTTP和HTTPS协议
- 🚀 **自动更新**：通过GitHub实现自动版本更新

## 安装方法

### 方式一：直接安装（需要Tampermonkey或Scriptcat）
1. 确保已安装[Tampermonkey](https://www.tampermonkey.net/)或[Scriptcat](https://docs.scriptcat.org/)浏览器扩展
2. 点击[此处安装脚本](https://raw.githubusercontent.com/qingkong9579/ynlib-viewer-optimizer/main/ynlib-viewer-optimizer.user.js)

### 方式二：手动安装
1. 复制脚本代码
2. 在Tampermonkey中点击"添加新脚本"
3. 粘贴代码并保存

## 使用方法

1. 访问云南古籍数字图书馆：http://msq.ynlib.cn
2. 打开任意古籍的阅读器界面（viewer.html）
3. 脚本会自动运行，显示被隐藏的界面元素

## 技术支持

### 支持的选择器
脚本目前支持以下选择器的元素显示：
- `.bottom_bt` - 底部按钮元素
- `.hidden-element` - 隐藏元素（预留）
- `[style*="display: none"]` - 内联样式隐藏的元素

## 更新日志

### v1.0.0 (2025-09-07)
- 🎉 初始版本发布
- ✅ 基础隐藏元素显示功能
- ✅ 自动更新机制

## 常见问题

### Q: 脚本没有生效怎么办？
A: 
1. 检查Tampermonkey扩展是否启用
2. 确认访问的网址匹配 `http://msq.ynlib.cn/frontend/viewer.html*`
3. 查看浏览器控制台是否有错误信息

### Q: 如何手动检查更新？
A: 在Tampermonkey仪表板中找到该脚本，点击"检查更新"按钮

### Q: 脚本会影响网站其他功能吗？
A: 不会。脚本只修改元素的display样式，不会影响网站的核心功能

## 开发贡献

欢迎提交Issue和Pull Request来改进这个脚本！

### 开发环境设置
1. Fork本仓库
2. 克隆到本地：`git clone https://github.com/qingkong9579/ynlib-viewer-optimize.git`
3. 修改脚本代码
4. 测试功能正常
5. 提交Pull Request

### 代码规范
- 使用ES6+语法
- 添加必要的注释
- 更新版本号遵循语义化版本
- 修改时更新README文档


## 支持与反馈

如果您遇到任何问题或有改进建议，请：
1. 在[GitHub Issues](https://github.com/你的用户名/你的仓库名/issues)中提交问题
2. 提供详细的描述和重现步骤
3. 附上浏览器版本和操作系统信息

## 免责声明

本脚本仅用于学习和研究目的，旨在改善用户体验。使用者应遵守相关网站的使用条款和条件。作者不对因使用此脚本而产生的任何问题负责。

---

**注意**：使用前请确保您有权访问云南古籍数字图书馆的相关资源，并遵守该网站的使用规定。
