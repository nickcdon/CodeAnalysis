import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '快速入门',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/快速入门/快速启动一次代码分析.md',
      ],
    },
    {
      text: '团队管理相关',
      children: [
        '/zh/guide/团队管理/团队管理.md',
        '/zh/guide/团队管理/成员权限.md',
      ]
    },
    {
      text: '代码检查',
      children: [
        '/zh/guide/代码检查/分析结果查看.md',
      ]
    },
    {
      text: '分析方案 & 模板',
      children: [
        '/zh/guide/分析方案/基础属性配置.md',
        '/zh/guide/分析方案/代码检查配置.md',
        '/zh/guide/分析方案/代码检查规则配置.md',
        '/zh/guide/分析方案/代码检查编译配置.md',
        '/zh/guide/分析方案/代码度量配置.md',
        '/zh/guide/分析方案/过滤配置.md',
        '/zh/guide/分析方案/分析方案模板说明.md',
      ]
    },
    {
      text: '工具管理',
      children: [
        '/zh/guide/工具管理/工具管理说明.md',
        '/zh/guide/工具管理/自定义规则.md',
        '/zh/guide/工具管理/自定义工具.md',
      ]
    },
    {
      text: '后台管理',
      children: [
        '/zh/guide/后台管理/后台管理说明.md',
      ]
    },
    {
      text: 'CLIENT 客户端',
      children: [
        '/zh/guide/客户端/配置说明.md',
        '/zh/guide/客户端/本地分析.md',
        '/zh/guide/客户端/常驻节点分析.md',
      ]
    },

  ],
  '/zh/api/': [
    {
      text: '开放 API',
      children: [
        '/zh/api/README.md',
        '/zh/api/对象主要字段说明.md',
        '/zh/api/项目管理模块接口.md',
        '/zh/api/任务管理模块接口.md',
        '/zh/api/结果概览模块接口.md',
        '/zh/api/代码扫描数据模块接口.md',
        '/zh/api/代码度量数据模块接口.md',
      ]
    },
  ],
  '/zh/deploy/': [
    {
      text: '概述',
      children: [
        '/zh/deploy/README.md',
      ]
    },
    {
      text: '安装服务端',
      children: [
        '/zh/deploy/deploy.md',
        '/zh/deploy/deploy_dc.md'
      ]
    },
    {
      text: '安装客户端',
      children: [
        '/zh/deploy/client.md',
        '/zh/deploy/client_binary.md',
      ]
    },
    {
      text: '常见问题',
      children: [
        '/zh/deploy/Q&A.md',
      ]
    },
    {
      text: '参考文档',
      children: [
        '/zh/deploy/references/tca_server.md',
      ]
    },
  ]
}