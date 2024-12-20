import{_ as e,o as i,c as a,e as l}from"./app-23098b2b.js";const r={},h=l('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h2 id="v1-4-1-2022-7-28" tabindex="-1"><a class="header-anchor" href="#v1-4-1-2022-7-28" aria-hidden="true">#</a> V1.4.1 (2022-7-28)</h2><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><ul><li>【服务端】统一部署脚本，封装local、docker、docker-compose部署方式启动server&amp;web&amp;client</li><li>【服务端】支持源码安装Redis与Nginx</li><li>【服务端】macOS启动docker desktop</li><li>【服务端】完善github action脚本</li><li>【工具】更新工具列表</li></ul><h3 id="docs" tabindex="-1"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h3><ul><li>上传新版本白皮书</li><li>调整快速入门指引文档</li></ul><h2 id="v1-4-0-2022-7-18" tabindex="-1"><a class="header-anchor" href="#v1-4-0-2022-7-18" aria-hidden="true">#</a> V1.4.0 (2022-7-18)</h2><h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3><ul><li>【客户端】jenkins插件增加分析方案模版ID和分析方案名称参数</li><li>【服务端】增加扫描方案模板API</li><li>【服务器】优化文件服务器鉴权交互</li><li>【客户端】QuickScan支持指定分析方案模板进行扫描；支持从环境变量读取文件服务器url和token</li><li>【Web端】升级moment依赖</li></ul><h3 id="docs-1" tabindex="-1"><a class="header-anchor" href="#docs-1" aria-hidden="true">#</a> Docs</h3><ul><li>更新插件使用说明书和启动参数说明</li></ul><h2 id="v1-3-3-2022-6-29" tabindex="-1"><a class="header-anchor" href="#v1-3-3-2022-6-29" aria-hidden="true">#</a> V1.3.3 (2022-6-29)</h2><h3 id="features-2" tabindex="-1"><a class="header-anchor" href="#features-2" aria-hidden="true">#</a> Features</h3><ul><li>【服务端】支持团队、项目组禁用，支持代码库、分析项目删除</li><li>【服务端】扫描方案支持分支过滤</li><li>【Web端】支持禁用团队、项目，代码库登记支持ssh_url</li><li>【Web端】支持分支过滤配置，修复代码统计文件选中效果，支持工具、依赖凭证移除</li><li>【工具】增加tca_ql工具</li><li>【客户端】节点模式不再由客户端加载编译工具的环境变量，避免覆盖机器原有环境变量</li><li>【客户端】QuickScan模式，异常时输出task.log方便排查问题</li><li>【客户端】.code.yml支持.yaml后缀</li></ul><h3 id="bugfixes" tabindex="-1"><a class="header-anchor" href="#bugfixes" aria-hidden="true">#</a> Bugfixes</h3><ul><li>【客户端】tool_scheme和ini配置共用时，可能出现工具重复，需要对工具库去重后再拉取</li></ul><h3 id="docs-2" tabindex="-1"><a class="header-anchor" href="#docs-2" aria-hidden="true">#</a> Docs</h3><ul><li>更新TCA Action相关文档</li><li>更新Jenkins插件文档；增加环境依赖说明</li><li>更新自定义工具文档，使用工具依赖</li><li>更新CLS readme</li></ul><h2 id="v1-3-2-2022-6-16" tabindex="-1"><a class="header-anchor" href="#v1-3-2-2022-6-16" aria-hidden="true">#</a> V1.3.2 (2022-6-16)</h2><h3 id="features-3" tabindex="-1"><a class="header-anchor" href="#features-3" aria-hidden="true">#</a> Features</h3><ul><li>【客户端】QuickScan根据语言执行不同的任务</li></ul><h3 id="docs-3" tabindex="-1"><a class="header-anchor" href="#docs-3" aria-hidden="true">#</a> Docs</h3><ul><li>docker-compose部署文档中数据库注意事项</li></ul><h2 id="v1-3-1-2022-6-14" tabindex="-1"><a class="header-anchor" href="#v1-3-1-2022-6-14" aria-hidden="true">#</a> V1.3.1 (2022-6-14)</h2><h3 id="features-4" tabindex="-1"><a class="header-anchor" href="#features-4" aria-hidden="true">#</a> Features</h3><ul><li>【客户端】新增merge quest分支增量扫描</li><li>【客户端】新增Quickscan模式</li><li>【客户端】localscan支持工具并发</li><li>【工具】新增二进制文件依赖分析工具</li><li>【服务端】server调整服务监控探测脚本：celery状态判断</li><li>【服务端】增加子任务接口，完善部署脚本</li><li>【服务端】更新CLS版本v20220613.1</li><li>【服务端】基于 CentOS7.9.2009（已测）的运行环境一键安装脚本，并已安装及配置命令 gunicorn 和 celery</li><li>【Web端】调整OAuth显示</li></ul><h2 id="v1-3-0-2022-6-7" tabindex="-1"><a class="header-anchor" href="#v1-3-0-2022-6-7" aria-hidden="true">#</a> V1.3.0 (2022-6-7)</h2><h3 id="features-5" tabindex="-1"><a class="header-anchor" href="#features-5" aria-hidden="true">#</a> Features</h3><ul><li>【工具】新增独立工具Loong</li><li>【工具】新增Java、JS基础安全规则包</li><li>【工具】增加Go和Python技术安全规则包</li><li>【服务端】新增oauth授权及工具依赖管理</li><li>【服务端】docker-compose部署支持挂载本地日志目录</li><li>【客户端】支持工具依赖管理</li><li>【Web端】支持工具依赖管理设置和Git OAuth设置</li><li>【Web端】团队列表支持滚动加载</li></ul><h3 id="bugfixes-1" tabindex="-1"><a class="header-anchor" href="#bugfixes-1" aria-hidden="true">#</a> Bugfixes</h3><ul><li>【服务端】补充scmproxy缺失依赖</li><li>【服务端】修复issue入库忽略处理操作</li></ul><h3 id="docs-4" tabindex="-1"><a class="header-anchor" href="#docs-4" aria-hidden="true">#</a> Docs</h3><ul><li>更新工具目录readme</li><li>更新client README.md</li></ul><h2 id="v1-2-1-2022-5-24" tabindex="-1"><a class="header-anchor" href="#v1-2-1-2022-5-24" aria-hidden="true">#</a> V1.2.1 (2022-5-24)</h2><h3 id="features-6" tabindex="-1"><a class="header-anchor" href="#features-6" aria-hidden="true">#</a> Features</h3><ul><li>【工具】新增Collie/Compass（测试版）工具</li><li>【工具】添加tscancode系列工具</li><li>【工具】工具区分编译型和非编译型</li><li>【客户端】更新cmdscm二进制文件，调整获取ssh端口号方式</li><li>【客户端】增加腾讯工蜂作为工具拉取源，支持选用</li><li>【服务端】调整工程配置和文档，支持https克隆</li><li>【Web端】前端页面优化</li></ul><h3 id="docs-5" tabindex="-1"><a class="header-anchor" href="#docs-5" aria-hidden="true">#</a> Docs</h3><ul><li>添加集成工具说明文档</li><li>readme增加微信公众号和腾讯开源摘星计划的说明及链接</li><li>修改帮助文档的脚本名称；修改工蜂镜像仓库链接位置</li><li>调整自定义规则文档</li><li>调整doc，优化部署、使用文档</li></ul><h2 id="v1-2-0-2022-4-27" tabindex="-1"><a class="header-anchor" href="#v1-2-0-2022-4-27" aria-hidden="true">#</a> V1.2.0 (2022-4-27)</h2><h3 id="features-7" tabindex="-1"><a class="header-anchor" href="#features-7" aria-hidden="true">#</a> Features</h3><ul><li>【Web端】增加工具管理</li><li>【工具】增加logback检查的安全规则</li><li>【服务端】增加TCA server&amp;web 一键部署脚本</li><li>【服务端】删除main部分异步任务；调整server nginx启动位置</li><li>【服务端】增加server健康监测</li></ul><h3 id="docs-6" tabindex="-1"><a class="header-anchor" href="#docs-6" aria-hidden="true">#</a> Docs</h3><ul><li>完善部署和Q&amp;A文档</li><li>上传工具列表</li></ul><h2 id="v1-1-3-2022-4-18" tabindex="-1"><a class="header-anchor" href="#v1-1-3-2022-4-18" aria-hidden="true">#</a> V1.1.3 (2022-4-18)</h2><h3 id="features-8" tabindex="-1"><a class="header-anchor" href="#features-8" aria-hidden="true">#</a> Features</h3><ul><li>【工具】上传开源合规检查规则</li><li>【工具】新增PHP安全相关规则</li><li>【服务端】上线license鉴权</li><li>【客户端】支持对工具license校验</li></ul><h3 id="docs-7" tabindex="-1"><a class="header-anchor" href="#docs-7" aria-hidden="true">#</a> Docs</h3><ul><li>更新文档内的工具默认路径</li><li>增加任务分布式执行能力操作文档</li><li>增加PR操作流程</li></ul><h2 id="v1-1-2-2022-4-2" tabindex="-1"><a class="header-anchor" href="#v1-1-2-2022-4-2" aria-hidden="true">#</a> V1.1.2 (2022-4-2)</h2><h3 id="features-9" tabindex="-1"><a class="header-anchor" href="#features-9" aria-hidden="true">#</a> Features</h3><ul><li>【服务端】优化部署构建脚本</li></ul><h3 id="docs-8" tabindex="-1"><a class="header-anchor" href="#docs-8" aria-hidden="true">#</a> Docs</h3><ul><li>简化前端部署脚本&amp;文档</li><li>优化指引文档</li></ul><h2 id="v1-1-1-2022-3-31" tabindex="-1"><a class="header-anchor" href="#v1-1-1-2022-3-31" aria-hidden="true">#</a> V1.1.1 (2022-3-31)</h2><h3 id="features-10" tabindex="-1"><a class="header-anchor" href="#features-10" aria-hidden="true">#</a> Features</h3><ul><li>【工具】增加0daychecker工具</li><li>【工具】增加Log4j、LogBack漏洞检查规则包</li></ul><h3 id="docs-9" tabindex="-1"><a class="header-anchor" href="#docs-9" aria-hidden="true">#</a> Docs</h3><ul><li>完善部署文档说明，推荐使用Docker-Compose 2.3.3版本</li></ul><h2 id="v1-1-0-2022-3-29" tabindex="-1"><a class="header-anchor" href="#v1-1-0-2022-3-29" aria-hidden="true">#</a> V1.1.0 (2022-3-29)</h2><h3 id="features-11" tabindex="-1"><a class="header-anchor" href="#features-11" aria-hidden="true">#</a> Features</h3><ul><li>【客户端】client支持arm64架构执行环境</li><li>【客户端】client新增分布式节点模式</li><li>【客户端】修改参数isTotal(是否开启全量扫描)判断方式及参数startCommand（启动客户端命令）拼接方式</li><li>【服务端】支持任务分布式下发</li><li>【服务端】完善基于minio的文件存储配置</li><li>【Web端】调整文件资源引用地址</li><li>【Web端】web模块部署脚本问题修复及优化</li><li>【Web端】增加管理后台、增加在线分析</li><li>【Web端】调整前端部署脚本，支持传递nginx配置地址、前端资源部署地址</li></ul><h3 id="bugfixes-2" tabindex="-1"><a class="header-anchor" href="#bugfixes-2" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Jenkins插件命令拼装逻辑修正</li></ul><h3 id="docs-10" tabindex="-1"><a class="header-anchor" href="#docs-10" aria-hidden="true">#</a> Docs</h3><ul><li>调整pypi下载失败提示</li><li>调整前端部署文档及脚本</li><li>更新License</li></ul><h2 id="v1-0-1-2022-03-01" tabindex="-1"><a class="header-anchor" href="#v1-0-1-2022-03-01" aria-hidden="true">#</a> V1.0.1 (2022-03-01)</h2><h3 id="features-12" tabindex="-1"><a class="header-anchor" href="#features-12" aria-hidden="true">#</a> Features</h3><ul><li>feat: 【服务端】调整代码库登记ssh url链接格式适配</li><li>feat: 【工具】上线支持PHP安全工具-Rips</li><li>feat: 【工具】调整androidlint部分规则描述</li><li>feat: 【客户端】上线Jenkins插件</li><li>feat: 【客户端】增加工具拉取可选配置项</li><li>feat: 【客户端】支持在命令行参数中输入团队编号和项目名称</li><li>feat: 【客户端】限制PYTHON_VERSION环境变量可选值</li><li>feat: 【客户端】增加在docker中快速使用client的方式</li></ul><h3 id="bugfixes-3" tabindex="-1"><a class="header-anchor" href="#bugfixes-3" aria-hidden="true">#</a> Bugfixes</h3><ul><li>fix: 【服务端】补充缺失的依赖</li><li>fix: 【Web端】修复下载codedog.ini失败提示</li></ul><h3 id="docs-11" tabindex="-1"><a class="header-anchor" href="#docs-11" aria-hidden="true">#</a> Docs</h3><ul><li>doc: 上线部署文档Q&amp;A</li><li>doc: 优化部署文档、帮助文档说明</li><li>doc: 增加产品白皮书</li><li>doc: 补充redis和nginx源码安装参考文档</li></ul><h2 id="v1-0-0" tabindex="-1"><a class="header-anchor" href="#v1-0-0" aria-hidden="true">#</a> V1.0.0</h2><p>初始发布</p>',74),d=[h];function s(c,n){return i(),a("div",null,d)}const u=e(r,[["render",s],["__file","changelog.html.vue"]]);export{u as default};
