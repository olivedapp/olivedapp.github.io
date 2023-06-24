# 使用指南

## 账户设置

**OlivedPro** 订阅服务提供两种方案：

- **$9.99 每月**，赠送一周免费试用期
- **$39.99 半年**，赠送一周免费试用期，**节约 33%** 。

可以在 https://pay.olived.app/ 购买许可证，购买成功会立刻发送许可证到您的邮箱中。
在许可证激活后将会解锁所有功能。每个许可证可以激活两台电脑同时使用，若您更换新的电脑，也可以在订单页面取消激活许可证（这时旧的电脑中的许可证将会失效），再在新的电脑中重新激活。

若有任何问题，可以联系邮箱 olivedapp@outlook.com ，或在社区进行提问，我们将在第一时间为您提供帮助。

## 偏好配置

### 外观

修改主题颜色

### 语言

修改默认语言

### 代理

```python
<SCHEME>://[<USER>:<PASS>@]<HOST>:<PORT>
```

指定一个用于下载的代理，例如：

- socks5://127.0.0.1:1080
- http://192.168.1.1:8080
- http://user:password@proxy.example.com:8080

支持 HTTP、HTTPS 和 SOCKS5 代理服务器。

### 检测间隔

检测主播是否正在直播的间隔时间，单位是秒

### 文件名模版

- 日期: `{{ now | date \"2006-01-02 15-04-05\"}}`
- 主播名称: `{{ .StreamerName }}`
- 直播标题: `{{ .RoomName }}`
- 直播平台: `{{ .SiteName }}`

可以根据需要修改默认的文件名称

### Cookies

全局的 cookie 配置

```sh
aatv: cookie1
bbtv: cookie2
cctv: cookie3
```

以上例子含义是，在录制 aatv 时使用 cookie 值 cookie1，在录制 bbtv 时使用 cookie 值 cookie2，以此类推。

## 任务设置

默认情况只需要粘贴 url，就会自动解析出其他配置项，无需手动填入。url 格式可在直播平台页面进行查看。

可根据需要修改相应的配置项，现已支持以下的功能：

- 自动转码为 MP4 格式
- 在文件满足一定大小或播放时长满足一定条件时自动切割
- 部分平台需要 cookie 配置
- 自定义下载生成的文件名
- 自定义代理
- 自定义存储路径
- 自定义下载器