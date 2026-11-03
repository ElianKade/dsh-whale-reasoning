# 鲸鲸推理 / Whale Reasoning

一个给 [DeepSeek Harness](https://github.com/deepseek-ai) 输入框使用的模型与推理等级选择器。

它保留 DSH 原本的模型栏位置，把「模型」和「推理等级」拆成两级菜单：点开模型栏先看到两项入口，只有进入「推理等级」才会展开蓝色动态拖动条。

## 功能

- **模型栏留在输入框右侧**：模型名、`1017` 发布徽标、当前推理等级、下拉箭头
- **两级菜单**：`模型` / `推理等级`
- **模型列表**：保留原有模型切换；当前项有勾选状态
- **四档推理强度**：`Off` / `Low` / `High` / `Max`，从模型目录动态读取
- **拖动与键盘操作**：拖动、点击、`←` `→`、`Home` / `End`
- **蓝色动态卡片**：流光、星点、极光、扫光；`Max` 时切换为「鲸神」标题并加速光流
- **不跳动、不变暗**：打开时定位一次；拖动、重置、忙碌态不重新布局，也不改变亮度
- **深色 / 浅色主题**：沿用 DSH 主题 token；支持 `prefers-reduced-motion`
- **鲸鱼图标**：使用官方 DeepSeek 鲸鱼轮廓

## 环境要求

- DeepSeek Harness Desktop 2.0.x（或兼容的 `@deepseek-ai/dsh` 0.2.x）
- 客户端 UI 使用 DSH 的 `conversation.input.model` 插槽

插件没有硬编码模型或档位；模型名、推理档位数量都来自当前模型目录。

## 安装

> 推荐先使用 DSH Desktop 的插件管理界面安装本地文件夹；如果界面没有该入口，再使用下面的 CLI。

### 方式一：DSH 插件管理界面

1. 下载或克隆本仓库到本地文件夹。
2. 打开 **DSH Desktop → 设置 → 插件**，选择从本地文件夹安装 / 安装本地插件。
3. 选择本仓库根目录（包含 `package.json` 的目录）。
4. **完全退出 DSH Desktop**（包括托盘和后台进程），再重新打开。

### 方式二：CLI

在仓库根目录执行：

```powershell
dsh plugin --profile desktop add "file:D:/path/to/dsh-whale-reasoning"
```

这条命令会把包装进 profile 的 `node_modules`，并把 `dsh-whale-reasoning` 加入 `dsh.profile.bundles`。如果 CLI 只安装了依赖、没有自动加入 bundle，再手动补上：

```json
{
  "dsh": {
    "profile": {
      "bundles": ["dsh-whale-reasoning"]
    }
  }
}
```

文件位置：`C:\Users\<你>\.dsh\profiles\desktop\package.json`。

最后完全退出并重新打开 DSH Desktop。

### 为什么不需要改绝对路径

`cordis.patch.yml` 中的 Host 入口使用 **包内相对路径**：

```yaml
name: './index.js'
```

Bundle 的 patch 文件位于包根目录，DSH 会相对于安装后的包根目录解析，最终指向 `.../node_modules/dsh-whale-reasoning/index.js`。因此无论用户把插件安装到哪个盘符、哪个用户名下，都不需要改路径。仓库中不包含 `D:/...`、用户目录或本机路径。

> 安装时必须保留完整的包目录结构（`index.js`、`client.js`、`cordis.patch.yml` 等）。DSH 插件管理器和上述 CLI 都会这样做。

## 使用

1. 输入框右侧显示模型栏：`DeepSeek-V4.1-Flash  1017  Max  ⌄`
2. 点击模型栏，出现「模型 / 推理等级」两项。
3. 点击「模型」切换模型；返回后可继续进入推理等级。
4. 点击「推理等级」展开「鲸鲸」卡片。
5. 拖动滑块或点击档位；停在 `Max` 时标题变为「鲸神」，使用与轨道相同的蓝紫渐变并加速流动。
6. 点击卡片右上角重置按钮回到模型默认档位。

## 文件说明

```text
.
├─ client.js          # 浏览器端：菜单、模型列表、拖动卡片、样式
├─ index.js           # Host 端：空实现，仅用于挂载 bundle
├─ cordis.patch.yml   # Bundle 插入项（包内相对路径）
├─ package.json       # 包清单与 dsh.bundle / dsh.client 声明
├─ LICENSE            # MIT
├─ .gitignore
├─ icon.svg           # 鲸鱼图标
├─ locale/
│  ├─ zh.json
│  └─ en.json
└─ preview/
   └─ index.html      # 独立网页预览（不参与安装）
```

`preview/index.html` 是本地交互演示，使用 Mock 模型数据，不需要启动服务；它不会连接 DSH，也不会安装插件。

## 1017 徽标

DSH 内置模型选择项已经声明了 `conversation.input.model.label` 子插槽，独立的 1017 插件会向其中注册发布徽标。

本插件通过 `priority: -1` 影子替换父槽。SlotCore 不允许两个 entry 声明同一个子插槽，所以本插件不重复声明该子插槽，而是在官方 `DeepSeek-V4.1-Flash` 条目上本地渲染 `1017` 发布徽标。

其他注册到该子插槽的标签装饰不会出现在这里。这是影子替换单槽时的取舍。

## 开发与验证

```powershell
node --check client.js
node --check index.js
node -e "for (const f of ['package.json','locale/zh.json','locale/en.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('json ok')"
```

当前仓库已完成：

- `client.js` / `index.js` 语法检查
- `package.json` 与语言包 JSON 解析
- 预览页内联脚本语法检查
- 预览 CSS 与 `client.js` 中 CSS 的同步检查
- 无绝对本机路径、无诊断日志、无截图等临时文件

受开发环境限制，尚未在**全新机器**上完成一次“下载 → 安装 → 重启”的端到端安装验证；实际界面以安装后的 DSH Desktop 为准。如果启动后仍显示内置模型栏，请附上 DSH 日志和你的 DSH 版本提 issue。

## 已知取舍

- 只替换 `conversation.input.model`，不接管其他输入框按钮。
- `1017` 是本地视觉徽标，不是从 1017 子插件动态读取；原因见上。
- 模型目录不可用时，卡片会显示空状态而不是伪造模型。
- 不修改 DSH 的权限、附件、发送按钮或会话数据。

## 卸载

从 profile 的 `dsh.profile.bundles` 中移除 `dsh-whale-reasoning`，并删除依赖：

```powershell
dsh plugin --profile desktop remove dsh-whale-reasoning
```

然后重启 DSH Desktop。

## License

代码以 MIT 方式提供。DeepSeek 名称、鲸鱼标志及相关品牌资产归 DeepSeek 所有，本项目的图标仅用于界面识别。
