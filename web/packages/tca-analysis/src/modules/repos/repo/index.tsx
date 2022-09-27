import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import cn from 'classnames';
import { Skeleton, Descriptions, Tooltip, message, Popover, Button, Input, Space } from 'coding-oa-uikit';
import StarIcon from 'coding-oa-uikit/lib/icon/Star';
import CancelStarIcon from 'coding-oa-uikit/lib/icon/CancelStar';
import PencilIcon from 'coding-oa-uikit/lib/icon/Pencil';
import ScanIcon from 'coding-oa-uikit/lib/icon/Scan';
import ShieldIcon from 'coding-oa-uikit/lib/icon/Shield';
import ClockIcon from 'coding-oa-uikit/lib/icon/Clock';
import AlignLeftIcon from 'coding-oa-uikit/lib/icon/AlignLeft';
import MemberSettingsIcon from 'coding-oa-uikit/lib/icon/MemberSettings';
import LogIcon from 'coding-oa-uikit/lib/icon/Log';

import { getRepoDetail } from '@src/services/common';
import { subscribedRepo, updateRepo } from '@src/services/repos';
import { getProjectRouter } from '@plat/util/getRoutePath';
import { formatDateTime, getRepoName } from '@src/utils';

import MemberConfig from '../member-config';
import AuthorityConfig from '../authority-config';
import OperationModal from '../operation-modal';
import style from '../style.module.scss';

const Repo = () => {
  const [repoDetailData, setRepoDetailData] = useState({
    loading: false,
    repoInfo: null,
  });
  const [authVisible, setAuthVisible] = useState(false);
  const [memberVisible, setMemberVisible] = useState(false);
  const [aliasVisible, setAliasVisible] = useState(false);
  const [opVisible, setOpVisible] = useState(false);
  const [name, setName] = useState('');
  const { repoId }: any = useParams();
  const history = useHistory();

  const { loading, repoInfo } = repoDetailData;
  const { recent_active: recentActive = null } = repoInfo || {};

  const init = useCallback(async (showLoading = false) => {
    if (showLoading) {
      setRepoDetailData(pre => ({ ...pre, loading: true }));
    }
    const repoInfo = await getRepoDetail(repoId);
    setRepoDetailData({
      loading: false,
      repoInfo,
    });
    setName(repoInfo.name || getRepoName(repoInfo.scm_url));
  }, [repoId]);

  useEffect(() => {
    if (repoId) {
      init(true);
    }
  }, [repoId, init]);

  const subscribedHandle = useCallback((repoId: number, subscribed: boolean) => {
    subscribedRepo(repoId, subscribed).then(() => {
      message.success(`已${subscribed ? '关注' : '取消关注'}该项目`);
      init();
    });
  }, [init]);

  const updataName = useCallback((repoInfo: any, name: string) => {
    if (name && name !== repoInfo.name) {
      updateRepo(repoInfo.id, {
        ...repoInfo,
        name,
      }).then(() => {
        message.success('别名修改成功');
        setAliasVisible(false);
        init();
      });
    } else {
      setAliasVisible(false);
    }
  }, [init]);

  return <>
    <Skeleton className={style.repo} loading={loading}>
      {repoInfo
        && <Descriptions className={style.repo} title={<>
          <Space>
            <Link to={getProjectRouter(repoInfo.id)} >{repoInfo.name}</Link>
            <div>
              <Tooltip title={`点击${repoInfo.subscribed ? '取消' : ''}关注`}>
                <Button style={{ color: '#edb807' }}
                  type='text'
                  icon={repoInfo.subscribed ? <CancelStarIcon /> : <StarIcon />}
                  onClick={() => subscribedHandle(repoInfo.id, !repoInfo.subscribed)} />
              </Tooltip>
              <Tooltip title='点击修改别名'>
                <Popover
                  title="修改别名"
                  trigger="click"
                  visible={aliasVisible}
                  onVisibleChange={setAliasVisible}
                  content={(
                    <div>
                      <Input
                        size='small'
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      <div style={{
                        marginTop: '16px',
                      }}>
                        <Button
                          size='small'
                          type='primary'
                          onClick={() => updataName(repoInfo, name)}
                          style={{ marginRight: '10px' }}
                        >修改</Button>
                        <Button size='small' onClick={() => setAliasVisible(false)}>取消</Button>
                      </div>
                    </div>
                  )}
                >
                  <Button type='text' icon={<PencilIcon />} />
                </Popover>
              </Tooltip>
            </div>
          </Space>
        </>} layout="vertical" bordered>
          <Descriptions.Item label="代码库地址">{repoInfo.scm_url}</Descriptions.Item>
          <Descriptions.Item label="接入时间">{formatDateTime(repoInfo.created_time)}</Descriptions.Item>
          <Descriptions.Item label="创建渠道">{repoInfo.created_from}</Descriptions.Item>
          <Descriptions.Item label="最近活跃分支">
            {recentActive && <>
              <Link to={`${getProjectRouter(repoInfo.id, recentActive.id)}/overview`}>
                {recentActive.branch_name}
              </Link>
              {
                recentActive.active_time && (
                  <div className={cn(style.desc, 'nowrap')}>
                    <span><ClockIcon /> {formatDateTime(recentActive.active_time)} &nbsp;</span>
                    {recentActive.total_line_num && <span><AlignLeftIcon /> {recentActive.total_line_num} 行 </span>}
                  </div>
                )
              }
            </>}
          </Descriptions.Item>
          <Descriptions.Item label="操作" span={2}>
            <Space className='nowrap'>
              <Button type='primary' icon={<ScanIcon />} onClick={() => {
                history.push(getProjectRouter(repoInfo.id));
              }} >进入代码分析</Button>
              <Button type='secondary'
                icon={<ShieldIcon />}
                onClick={() => setAuthVisible(true)}>切换凭证</Button>
              <Button type='secondary' icon={<MemberSettingsIcon />}
                onClick={() => setMemberVisible(true)}
              >成员配置</Button>
              <Button type='secondary'
                icon={<LogIcon />}
                onClick={() => setOpVisible(true)}>操作日志</Button>
            </Space>
          </Descriptions.Item>
        </Descriptions>
      }
    </Skeleton>
    <MemberConfig
      visible={memberVisible}
      repoId={repoInfo?.id}
      onCancel={() => setMemberVisible(false)}
    />
    <AuthorityConfig
      visible={authVisible}
      repoInfo={repoInfo}
      onCancel={() => setAuthVisible(false)}
    />
    <OperationModal visible={opVisible} repoId={repoInfo?.id} onCancel={() => setOpVisible(false)} />
  </>;
};

export default Repo;
