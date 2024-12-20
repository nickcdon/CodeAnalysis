import{_ as o}from"./personalToken-2ae175b9.js";import{_ as t,r as c,o as r,c as h,a as e,b as n,d as i,w as l,e as a}from"./app-23098b2b.js";const u={},p=a('<h1 id="部署与配置客户端" tabindex="-1"><a class="header-anchor" href="#部署与配置客户端" aria-hidden="true">#</a> 部署与配置客户端</h1><h2 id="通过源代码" tabindex="-1"><a class="header-anchor" href="#通过源代码" aria-hidden="true">#</a> 通过源代码</h2><h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h3>',3),m=e("li",null,[e("p",null,"系统环境"),e("ul",null,[e("li",null,"Linux，Windows或macOS")])],-1),v=e("p",null,"环境准备",-1),_=e("strong",null,"Python 3.7",-1),b=a(`<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3><h4 id="安装第三方库" tabindex="-1"><a class="header-anchor" href="#安装第三方库" aria-hidden="true">#</a> 安装第三方库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 源码根目录下执行
pip3 install -r client/requirements/app_reqs.pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装第三方工具" tabindex="-1"><a class="header-anchor" href="#安装第三方工具" aria-hidden="true">#</a> 安装第三方工具</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 源码根目录
cd client/requirements

# 执行安装脚本
# Linux/macOS环境
./install.sh
# Windows环境
./install.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置客户端" tabindex="-1"><a class="header-anchor" href="#配置客户端" aria-hidden="true">#</a> 配置客户端</h4><ul><li><p>配置 <code>client/config.ini</code> 文件</p><p>将 <code>&lt;Server IP地址&gt;</code> 替换成实际的serve ip（可包含端口号）。</p><p><img src="https://tencent.github.io/CodeAnalysis/media/clientConfigIni.png" alt="客户端执行环境配置"></p></li><li><p>配置 <code>client/codedog.ini</code> 文件</p><p>必填项：<code>token</code>、<code>org_sid</code>、<code>team_name</code>、<code>source_dir</code></p><ul><li><p><strong>个人令牌</strong> - <code>token</code>：从 TCA 页面获取，前往[个人中心]-[个人令牌]-复制Token</p><p><img src="`+o+`" alt="personalToken"></p></li><li><p><strong>团队编号</strong> - <code>org_sid</code>：进入 TCA 项目概览页，从 URL 中获取</p></li><li><p><strong>项目名称</strong> - <code>team_name</code>：：进入 TCA 项目概览页，从 URL 中获取</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>项目概览URL格式：<code>http://{域名}/t/{org_sid}/p/{team_name}/profile</code></p></div></li><li><p><strong>分析路径</strong> - <code>source_dir</code>: 本地代码目录路径</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><p>如果项目代码为编译型语言（比如：C/C++，C#，Go，Java，Kotlin，Objective-C等），且使用的分析方案中配置了编译型工具（如图，使用了OC推荐规则包），需要填写<code>build_cmd</code>编译命令。</p></li><li><p>其他可选项按需填写，不填写时按默认配置执行</p></li></ul></div></li></ul><h4 id="启动客户端" tabindex="-1"><a class="header-anchor" href="#启动客户端" aria-hidden="true">#</a> 启动客户端</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 源码根目录
cd client

# 执行客户端脚本
python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Client 的实现及启动脚本均依赖 Python3 版本为 3.7，可执行 <code>python3 --version</code> 查看版本。若版本有误，可安装版本为3.7的python并软链接到python3命令。</p></div>`,10),g={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"提示",-1),x=e("li",null,[e("p",null,[e("code",null,"codedog.ini"),n(" 各项参数可由命令行传入，获取详细参数说明可运行 "),e("code",null,"python3 codepuppy.py localscan -h")])],-1),k=e("code",null,"localscan",-1),E=a('<h2 id="通过docker-compose" tabindex="-1"><a class="header-anchor" href="#通过docker-compose" aria-hidden="true">#</a> 通过Docker-Compose</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>适用于快速上手体验。使用docker运行，可以免去客户端环境依赖的安装，避免环境兼容性问题。</p><p>但是由于环境受限于docker，会无法复用本地的编译环境，部分需要编译的工具无法使用。</p></div><h3 id="使用步骤-1" tabindex="-1"><a class="header-anchor" href="#使用步骤-1" aria-hidden="true">#</a> 使用步骤</h3><h4 id="配置客户端-1" tabindex="-1"><a class="header-anchor" href="#配置客户端-1" aria-hidden="true">#</a> 配置客户端</h4><ul><li><p>配置 <code>client/config.ini</code> 文件</p></li><li><p>配置 <code>client/codedog.ini</code> 文件</p></li></ul>',5),C={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"提示",-1),y=e("h4",{id:"构建镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建镜像","aria-hidden":"true"},"#"),n(" 构建镜像")],-1),B={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,[e("p",null,[n("进入"),e("code",null,"client"),n("目录，构建docker镜像")])],-1),S=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker build -t tca-client .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动客户端-1" tabindex="-1"><a class="header-anchor" href="#启动客户端-1" aria-hidden="true">#</a> 启动客户端</h4><h5 id="方案一-直接使用docker运行" tabindex="-1"><a class="header-anchor" href="#方案一-直接使用docker运行" aria-hidden="true">#</a> 方案一：直接使用docker运行</h5><p>进入<code>client</code>目录，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 按照实际情况填写\`SOURCE_DIR\`环境变量值
export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方案二-使用docker内bash终端运行" tabindex="-1"><a class="header-anchor" href="#方案二-使用docker内bash终端运行" aria-hidden="true">#</a> 方案二：使用docker内bash终端运行</h5><ol><li><p>进入docker容器内的bash终端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 按照实际情况填写\`SOURCE_DIR\`环境变量值
export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src --name tca-client tca-client bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过命令行启动client代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="通过可执行文件" tabindex="-1"><a class="header-anchor" href="#通过可执行文件" aria-hidden="true">#</a> 通过可执行文件</h2><h3 id="依赖环境-1" tabindex="-1"><a class="header-anchor" href="#依赖环境-1" aria-hidden="true">#</a> 依赖环境</h3><ul><li><p>系统环境</p><ul><li>Linux，Windows或macOS</li></ul></li></ul><h3 id="使用步骤-2" tabindex="-1"><a class="header-anchor" href="#使用步骤-2" aria-hidden="true">#</a> 使用步骤</h3><h4 id="下载客户端" tabindex="-1"><a class="header-anchor" href="#下载客户端" aria-hidden="true">#</a> 下载客户端</h4>`,12),O={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[e("p",null,"解压缩。")],-1),I=e("h4",{id:"配置客户端-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置客户端-2","aria-hidden":"true"},"#"),n(" 配置客户端")],-1),L=e("ul",null,[e("li",null,[e("p",null,[n("配置 "),e("code",null,"client/config.ini"),n(" 文件")])]),e("li",null,[e("p",null,[n("配置 "),e("code",null,"client/codedog.ini"),n(" 文件")])])],-1),U={class:"custom-container tip"},T=e("p",{class:"custom-container-title"},"提示",-1),q=a(`<h4 id="启动客户端-2" tabindex="-1"><a class="header-anchor" href="#启动客户端-2" aria-hidden="true">#</a> 启动客户端</h4><p>进入到<code>client</code>目录下，执行客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./codepuppy localscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function F(P,W){const d=c("RouterLink"),s=c("ExternalLinkIcon");return r(),h("div",null,[p,e("ul",null,[m,e("li",null,[v,e("ul",null,[e("li",null,[_,n("，"),i(d,{to:"/zh/quickStarted/references/install_python37_on_centos.html"},{default:l(()=>[n("安装指引")]),_:1})])])])]),b,e("div",g,[f,e("ul",null,[x,e("li",null,[e("p",null,[n("使用"),k,n("命令启动本地单次的代码分析，如需启动分布式并行分析任务，请参考"),i(d,{to:"/zh/client/#%E4%BA%94%E4%BD%BF%E7%94%A8%E5%88%86%E5%B8%83%E5%BC%8F%E8%8A%82%E7%82%B9%E6%A8%A1%E5%BC%8F%E6%89%A7%E8%A1%8C%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[n("使用分布式节点模式")]),_:1}),n("进行配置。")])])])]),E,e("div",C,[A,e("p",null,[n("同通过源代码使用-"),i(d,{to:"/zh/quickStarted/deployClient.html#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[n("配置客户端")]),_:1})])]),y,e("ol",null,[e("li",null,[e("p",null,[n("安装Docker，安装教程："),e("a",B,[n("官方文档"),i(s)])])]),e("li",null,[e("p",null,[n("安装Docker-Compose，安装教程："),e("a",R,[n("官方文档"),i(s)])])]),D]),S,e("ol",null,[e("li",null,[e("p",null,[n("从"),e("a",O,[n("发布页面"),i(s)]),n("下载与系统相对应的客户端压缩包到本地。")])]),w]),I,L,e("div",U,[T,e("p",null,[n("同通过源代码使用-"),i(d,{to:"/zh/quickStarted/deployClient.html#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[n("配置客户端")]),_:1})])]),q])}const V=t(u,[["render",F],["__file","deployClient.html.vue"]]);export{V as default};
