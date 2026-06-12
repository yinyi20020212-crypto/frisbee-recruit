# 飞盘社招新网页发布说明

这个项目是纯静态网页，只需要发布下面 3 个文件即可：

- `index.html`
- `styles.css`
- `script.js`

## 为什么别人打不开 localhost

`http://localhost:8080/index.html` 只代表“当前这台电脑”。你电脑上的 `localhost` 是你的电脑，别人电脑上的 `localhost` 是别人的电脑，所以别人无法通过这个地址访问你的页面。

如果要让不同电脑、不同 IP 的人都能打开，需要把网页放到一个公网静态网站托管平台上，然后分享公网网址。

## 推荐方式：GitHub Pages

1. 新建一个 GitHub 仓库，例如 `frisbee-recruit`。
2. 上传 `index.html`、`styles.css`、`script.js`。
3. 打开仓库的 `Settings`。
4. 找到 `Pages`。
5. `Source` 选择 `Deploy from a branch`。
6. `Branch` 选择 `main`，目录选择 `/root`。
7. 保存后等待 1 到 3 分钟。
8. GitHub 会生成一个类似这样的公网地址：

```text
https://你的用户名.github.io/frisbee-recruit/
```

把这个地址发给别人，别人就可以在自己的电脑、手机上打开。

## 其他可选方式

也可以使用 Netlify、Vercel、Cloudflare Pages 等静态网站平台。上传这 3 个文件后，它们都会给你一个公网链接。

## 临时局域网方式

如果只是让同一个 Wi-Fi 下的人访问，可以在你的电脑运行：

```powershell
python -m http.server 8080 --bind 0.0.0.0
```

然后让别人访问：

```text
http://你的局域网IP:8080/index.html
```

这种方式要求大家在同一个局域网里，而且你的电脑不能关机。更稳定的做法还是发布到公网静态网站。
