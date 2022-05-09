# 用Docker-Compose安装

## 依赖环境

- 系统要求

  - Linux，Windows或macOS
  - [Docker](https://docs.docker.com/engine/install/)
  > Compose file format需要为3.0及以上，Docker版本要求可以参考[官方文档](https://docs.docker.com/compose/compose-file/compose-file-v3/#compose-and-docker-compatibility-matrix)
  - [Docker-Compose 1.26](https://docs.docker.com/compose/install/) 或更高版本

- 硬件要求

    - 2核4G内存
    - 100G硬盘存储空间

- 权限要求

  - 需要开放80、8000端口的访问权限(80为TCA平台访问端口，8000为TCA Server访问端口)

## 安装步骤

### 方案一：一键部署

拉取代码进入源码根目录，执行``./quick_start.sh``命令，即可自动安装Docker、Docker-Compose和启动Server与Web服务

>- ``quick_start.sh``脚本中会自动下载[Docker安装脚本](https://get.docker.com)、启动Docker服务、下载``docker-compose``可执行文件以及执行``compose_init.sh``脚本启动Server、Web服务
>- 如果提示脚本没有执行权限，可以在源码执行命令：``chmod +x compose_init.sh quick_start.sh``


### 方案二：手动部署

1. 安装Docker，安装教程：[官方文档](https://docs.docker.com/engine/install/)
2. 安装Docker-Compose，安装教程: [官方文档](https://docs.docker.com/compose/install/)
3. 拉取代码并进入源码根目录后，执行 ``./compose_init.sh`` 命令，即可启动Server与Web服务


>- 如果提示脚本没有执行权限，可以在源码执行命令：``chmod +x compose_init.sh``
>- 首次启动会构建相关镜像，耗时会比较久

``compose_init.sh``脚本会包含各个服务的初始化操作

### 启动/停止服务

进入源码目录后，执行``docker-compose up -d``命令，即可启动Server与Web服务。执行``docker-compose stop``命令，即可停止Server与Web服务。

## 常见问题

- Q：如何查看服务启动的日志？

  A：可以先找服务名称，执行``docker-compose logs -f xxx``，xxx即服务的名称，比如``main-server``、``main-worker``等

- Q：TCA初始登录账号密码是什么？
  
  A：初始登录账号是``CodeDog``，密码是``admin``，如果想要自定义，在初始化前，可以在``server/dockerconfs/.env.local``对``TCA_DEFAULT_ADMIN``和``TCA_DEFAULT_PASSWORD``变量值进行调整。如果初始化完成后需要调整，则需要登录到平台的``用户管理``页面进行调整。

**详细Q&A文档可以查阅[TCA使用常见问题](Q&A.md)**
