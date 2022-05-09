# 可执行文件

## 依赖环境

- 系统要求

    - Linux，Windows或macOS


## 安装步骤

### 下载客户端

1. 从[发布页面](https://github.com/Tencent/CodeAnalysis/releases)下载与系统相对应的客户端压缩包到本地。

2. 解压缩。

### 配置客户端

按[客户端配置说明](../guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.md)修改配置文件client.ini和codedog.ini。

### 启动客户端

进入到`client`目录下，执行客户端
```bash
./codepuppy localscan
```
> 使用`localscan`命令启动本地单次的代码分析，如需启动分布式并行分析任务，请参考[常驻节点分析](../guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.md)进行配置。