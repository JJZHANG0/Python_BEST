# 🎮 Python 冒险课堂

一个互动式 Python 学习网站，包含 15 节完整课程（从基础到 Django + DRF）。学生可以学习课程内容，完成代码测验，并生成可分享的成绩图。

## ✨ 特性

- **15 节完整课程**：从 Python 基础到 Django REST Framework 高级应用
- **中文学习笔记**：详细的中文教学内容和代码示例
- **代码测验系统**：每节课 5 道算法导向的编程题
- **浏览器内 Python 执行**：使用 Pyodide 在浏览器中直接运行 Python 代码
- **隐藏测试用例**：自动判题系统，提供即时反馈
- **成绩图生成**：完成测验后生成可下载的成绩卡片（PNG 图片）
- **像素风格设计**：有趣的 8-bit 风格界面，纯白背景
- **响应式设计**：桌面和移动设备均可使用

## 📚 课程大纲

### 基础篇（1-4 课）
1. **Python 语法速通** - 变量、类型、控制流、列表字典与字符串
2. **函数、模块、文件与异常** - 函数定义、模块导入、文件操作
3. **OOP + 进阶语法** - 类、继承、装饰器、生成器、类型提示
4. **HTTP/REST + requests** - HTTP 协议、RESTful API、requests 库

### Django 篇（5-6 课）
5. **Django 核心** - 项目结构、URL 路由、视图和模板
6. **Django 模型与 Admin** - ORM、模型定义、查询 API、管理后台

### DRF 篇（7-10 课）
7. **DRF 入门** - Serializer、APIView 基础
8. **ViewSet, Router, 认证与权限** - ViewSet、自动路由、认证系统
9. **DRF 进阶** - 过滤、分页、搜索、嵌套序列化器
10. **测试与接口规范** - pytest、API 测试、错误约定、OpenAPI 文档

### 挑战篇（11-15 课）
11-12. **挑战一「待揭秘」** - 实战项目（基础架构 + API 设计）
13-14. **挑战二「待揭秘」** - 进阶项目（复杂业务 + 性能优化）
15. **挑战三「待揭秘」+ 总结** - 终极项目 + 课程回顾

## 🚀 快速开始

### 前置要求

- Node.js 18+ 和 npm

### 安装步骤

1. **克隆仓库**
```bash
git clone <repository-url>
cd Python_BEST
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **打开浏览器访问**
```
http://localhost:5173
```

## 🎯 使用方法

1. **浏览课程**：首页显示所有 15 节课程
2. **学习内容**：点击课程卡片进入详情页，阅读学习笔记
3. **开始测验**：点击"开始 Quiz"按钮开始答题
4. **编写代码**：在 Monaco 编辑器中编写 Python 代码
5. **运行测试**：点击"▶ 运行代码"查看输出，点击"✓ 提交答案"运行测试
6. **查看成绩**：完成所有题目后查看分数和详细结果
7. **下载成绩图**：点击"📥 下载成绩图"保存成绩卡片

## 🛠️ 技术栈

- **前端框架**：React 18
- **构建工具**：Vite 5
- **路由**：React Router 6
- **代码编辑器**：Monaco Editor（VS Code 同款编辑器）
- **Python 执行**：Pyodide（浏览器内 Python 解释器）
- **Markdown 渲染**：react-markdown + remark-gfm
- **代码高亮**：rehype-highlight
- **样式**：纯 CSS（像素风格设计）

## 📁 项目结构

```
Python_BEST/
├── index.html                # HTML 入口
├── package.json              # 项目配置
├── vite.config.js            # Vite 配置
├── src/
│   ├── main.jsx             # 应用入口
│   ├── App.jsx              # 主应用组件
│   ├── index.css            # 全局样式
│   ├── pages/               # 页面组件
│   │   ├── HomePage.jsx     # 课程列表页
│   │   └── LessonPage.jsx   # 课程详情页
│   ├── components/          # 功能组件
│   │   ├── LessonContent.jsx  # 课程内容展示
│   │   ├── Quiz.jsx           # 测验界面
│   │   ├── CodeEditor.jsx     # 代码编辑器
│   │   └── ScoreCard.jsx      # 成绩卡片
│   └── data/
│       └── lessons.js       # 课程数据（15 节课的内容和测验）
└── README.md                # 本文件
```

## 🎨 设计特点

- **像素风格**：8-bit 游戏风格的标题和装饰
- **纯白背景**：干净简洁的白色背景
- **彩色强调**：使用粉、紫、蓝、绿、黄、橙等明亮颜色
- **粗边框**：4px 黑色边框和阴影效果
- **响应式布局**：自适应桌面和移动设备

## 📝 测验说明

- 每节课包含 **5 道编程题**
- 题目注重**算法和逻辑**，而非简单的知识回忆
- 学生需要**编写 Python 代码**作为答案
- **隐藏测试用例**用于自动判题
- 实时反馈代码运行结果
- 通过所有测试用例才算正确

## 🏆 成绩卡片

完成测验后，系统会生成精美的成绩卡片，包含：
- 课程名称和编号
- 分数百分比（大字号显示）
- 正确题数统计
- 鼓励消息
- 像素风格徽章图标
- 完成日期

图片可下载保存，方便学生分享到学习群。

## 🚢 部署

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录，可以部署到任何静态文件托管服务：

- **Vercel**：`vercel --prod`
- **Netlify**：拖拽 `dist` 文件夹到 Netlify
- **GitHub Pages**：推送 `dist` 到 `gh-pages` 分支
- **nginx/Apache**：将 `dist` 内容复制到 web 根目录

## 📄 开源协议

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系。

---

**Happy Learning! 🎉**
