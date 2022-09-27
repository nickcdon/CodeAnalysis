import { webpackConfig } from '@tencent/micro-frontend-webpack/src/index';
import { merge } from 'webpack-merge';

const { config } = webpackConfig({
  configWebpackOptions: {
    match: '^/t/[^/]+/p/[^/]+/(code-analysis|repos|template|profile|group)',
  },
  envConfig: {
    envs: {
      DISABLE_MICRO_LAYOUT: process.env.DISABLE_MICRO_LAYOUT,
      // route listener 发送 postmsg 的目标源
      ROUTE_LISTENER_TARGET_ORIGIN: process.env.ROUTE_LISTENER_ORIGIN || process.env.ROUTE_LISTENER_TARGET_ORIGIN,
      // route listener 接收 postmsg 的发送源
      ROUTE_LISTENER_EVENT_ORIGIN: process.env.ROUTE_LISTENER_ORIGIN || process.env.ROUTE_LISTENER_EVENT_ORIGIN,
    },
    runtimeEnvs: {
      // route listener 发送 postmsg 的目标源
      ROUTE_LISTENER_TARGET_ORIGIN: '__ROUTE_LISTENER_TARGET_ORIGIN__',
      // route listener 接收 postmsg 的发送源
      ROUTE_LISTENER_EVENT_ORIGIN: '__ROUTE_LISTENER_EVENT_ORIGIN__',
    },
  },
});

export default merge(config, {
  devServer: {

  },
});
