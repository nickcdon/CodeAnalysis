import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message } from 'coding-oa-uikit';
import Loading from '@tencent/micro-frontend-shared/component/loading';

// 项目内
import Header from '@src/modules/layout/header';
import Container from '@src/component/container';
import Members from '@src/modules/team/components/members';
import Profile from '@src/modules/team/components/profile';
import Projects from '@src/modules/team/components/projects';
import Workspace from '@src/modules/team/components/workspace';
import Analysis from '@src/modules/layout/project/index';
import Tools from '@src/modules/tools';
import ToolDetail from '@src/modules/tools/detail-components';
import Toollibs from '@src/modules/tool-libs';
import Nodes from '@src/modules/nodes';
import NodeProcess from '@src/modules/nodes/process';
import { getTeamInfo } from '@src/services/team';
import { setPvOrgInfo } from '@src/utils/matomo';
import Constant from '@src/reducer/constant';
import { getTeamsRouter } from '@src/utils/getRoutePath';

// 模块内
import Sidebar from './sidebar';

const getComponent = (Component: any) => (
  <>
    <Header />
    <Sidebar />
    <Container>
      <Component />
    </Container>
  </>
);

const TeamLayout = () => {
  const [loading, setLoading] = useState(true);

  const { orgSid }: any = useParams();
  const history = useHistory();
  const storeDispatch = useDispatch();

  useEffect(() => {
    storeDispatch({
      type: Constant.SET_PROJECT_COMPLETED,
      payload: false,
    });
    setLoading(true);
    getTeamInfo(orgSid)
      .then((response: any) => {
        setPvOrgInfo(response);
        if (response.status > 1) {
          message.error('您的团队还未审核通过');
          history.replace(getTeamsRouter());
        } else {
          storeDispatch({
            type: Constant.SET_PROJECT_COMPLETED,
            payload: true,
          });
          storeDispatch({
            type: Constant.SET_ORG,
            payload: response,
          });
        }
      })
      .catch(() => {
        history.replace(getTeamsRouter());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orgSid]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route path={'/t/:orgSid'} exact render={() => getComponent(Workspace)} />
        <Route path={'/t/:orgSid/workspace'} render={() => getComponent(Workspace)} />
        <Route path={'/t/:orgSid/projects'} render={() => getComponent(Projects)} />
        <Route path={'/t/:orgSid/profile'} render={() => getComponent(Profile)} />
        <Route path={'/t/:orgSid/members'} render={() => getComponent(Members)} />
        <Route key='detail' exact path="/t/:orgSid/tools/:toolId/:tab?" render={() => getComponent(ToolDetail)} />
        <Route key='tools' exact path="/t/:orgSid/tools" render={() => getComponent(Tools)} />
        <Route key='toollibs' exact path="/t/:orgSid/toollibs" render={() => getComponent(Toollibs)} />
        <Route path="/t/:orgSid/nodes/:nodeId/process" render={() =>  getComponent(NodeProcess)} />
        <Route path="/t/:orgSid/nodes/" render={() =>  getComponent(Nodes)} />
        <Route path="/t/:orgSid/p/:name/" render={() => <Analysis />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default TeamLayout;
