import React from 'react';

import { getToolsRouter } from '@src/utils/getRoutePath';

export interface ToolInfoLinkProps {
  orgSid: string;
  checktool: any;
  disableLink?: boolean;
}

/** 工具详情Link组件，提供点击跳转 */
export const ToolInfoLink = ({ orgSid, checktool, disableLink = false }: ToolInfoLinkProps) => {
  if (disableLink) {
    return <>{checktool?.display_name}</>;
  }
  return <a
    target="_blank"
    href={`${getToolsRouter(orgSid, checktool?.id, 'baseinfo')}`} rel="noreferrer"
  >
    {checktool?.display_name}
  </a>;
};
