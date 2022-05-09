# 用源代码安装

## 依赖环境

- 系统要求

    - Linux，Windows或macOS
    - [Python 3.7](https://docs.python.org/zh-cn/3.7/using/unix.html)


## 安装步骤

### 安装客户端

1. 安装Python环境和第三方库

    - 安装[Python3.7](https://docs.python.org/zh-cn/3.7/using/unix.html)、[pip3](https://pip.pypa.io/en/stable/installation/)
      > 通过``python3 --version``和``pip3 --version``检查是否正确配置环境。
    - 在本地源码目录下安装依赖
    ```bash
    pip3 install -r client/requirements/app_reqs.pip
    ```

2. 安装第三方工具

    - 进入到`client/requirements`目录  
    - 在命令行中执行安装脚本
    ```bash
    #Linux/macOS环境
    ./install.sh
    #Windows环境
    ./install.bat
    ```

### 配置客户端

按[客户端配置说明](../guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.md)修改配置文件client.ini和codedog.ini。

### 启动客户端

进入到`client`目录下，执行客户端脚本
```bash
python3 codepuppy.py localscan
```
> 使用`localscan`命令启动本地单次的代码分析，如需启动分布式并行分析任务，请参考[常驻节点分析](../guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.md)进行配置。