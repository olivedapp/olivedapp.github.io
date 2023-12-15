# 更新日志

此项目的所有重要变更都将记录在此文件中。

格式基于 [维护更新日志](https://keepachangelog.com/en/1.0.0/)，并且该项目遵循 [语义化版本](https://semver.org/spec/v2.0.0.html)。

- `Added` 新添加的功能。
- `Changed` 对现有功能的变更。
- `Deprecated` 已经不建议使用，即将移除的功能。
- `Removed` 已经移除的功能。
- `Fixed` 对 bug 的修复。
- `Security` 对安全性的改进。

## v0.11.0 - 2023-12-05

- 配置文件支持导入与导出

## v0.10.5 - 2023-11-24

- Youtube 支持 streams 和定制 vid
- 修复部分情况内存泄露的 bug

## v0.10.2 - 2023-11-04

- 任务详情增加快照信息
- 新增 linux 版本 

## v0.10.0 - 2023-10-30

- 哔哩哔哩支持最高画质录制
- 后置命令功能

## v0.9.19 - 2023-09-22

- 新增平台 lang live
- pandatv api 更新
- twitcastingtv 支持会员限定直播
- 新增软件内部的代理选项

## v0.9.7 - 2023-09-06

- 抖音 api 更新
- 抖音支持自动填充 cookie 无需手动填写

## v0.9.5 - 2023-09-05

- 增加获取快照的功能
- 增加是否使用全局 cookies 的开关
- 优化 tiktok 减少发送请求的数量
- 修复部分情况跳过转码的 bug

## v0.9.3 - 2023-08-18

- 支持 173.com
- flextv 修复部分直播间无法录制
- tiktok 默认改用 rtmp 协议
- douyu 更新 api 获取原画直播流
- 修复小概率闪退的 bug

## v0.9.0 - 2023-08-12

- youtube 支持选择直播间
- 增加删除小文件配置项
- 任务详情显示 parser 选项
- 接入 ytdlp 支持的 1000+ 直播平台
- 优化 twitch native
- 录播结束后增加直播状态校验
- 修复部分情况下转码失败的问题
- 客户端内置代理服务器，优化中国大陆部分地区网络
- 支持录制单场微博直播

## v0.8.8 - 2023-08-01

- 修复部分 youtube 直播间无法跳转
- 修复 twitch api 的更新
- 增加 parser 选项
- 抖音增加默认 cookie
- 修复 http 客户端请求可能超时的问题

## v0.8.5 - 2023-07-23

- 支持 https://www.huajiao.com/
- 支持 https://www.inke.cn/
- 支持 pandalive 19+
- 支持 flextv 19+
- 优化操作系统时间检测
- 自建下载网盘
- 服务器从腾讯云迁至亚马逊云
- 修复 hls 流小文件未正确删除

## v0.8.3 - 2023-07-17

- 支持 https://twitcasting.tv/
- 支持 https://www.pandalive.co.kr/
- 支持 https://www.flextv.co.kr/
- 文件名模板支持 RoomID
- 优化下载速度显示
- 移除 proxy 设置
- 移除 leakless 程序

## v0.8.2 - 2023-07-13

- 支持 kick.com（使用无头浏览器）
- 修复不准确的下载速度
- 更新下载源
- 优化默认配置项

## v0.8.0 - 2023-07-08

- mp4 自动转码优化
- 前端组件库更新
- AfreecaTV 兼容房间号变化
- 修复 AfreecaTV 并发冲突导致的闪退问题
- 增加崩溃自动重启功能
- 文件名模板支持路径配置
- 增加搜索框功能

## v0.7.6 - 2023-07-02

- 支持 AfreecaTV
- 支持 SC
- 支持 bilibili hls 流，如 apex 英雄分区

## v0.7.4 - 2023-07-01

- 斗鱼轮播时不开启录制
- tiktok 新增 hls 流
- 修复长时间录制失败的 bug

## v0.6.7 - 2023-06-08

- 增加防闪退模块，所有崩溃日志都会有记录
- 优化 pixiv tv
- 修复 twitch tv
- 修复 douyu tv

## v0.6.6 - 2023-04-20

- 修复 proxy 未生效的 bug
- 支持 cc native
- 支持 yy native
- 支持 missevan native

## v0.6.5 - 2023-04-13

- 修复录制结束后的闪退

## v0.6.4 - 2023-04-12

- 更新 close button 的逻辑
- pixiv 支持 cookie

## v0.6.3 - 2023-04-11

- 修复 bigo 和 pixiv 的代理问题

## v0.6.2 - 2023-04-10

- 支持 bigo native
- 支持 pixiv native
- windows 下点击 close 按钮时执行逻辑从关闭应用改为隐藏应用

## v0.6.1 - 2023-04-07

- 修复 http timeout
- 支持 twitch native

## v0.6.0 - 2023-04-01

- 为 olive 支持桌面端程序
