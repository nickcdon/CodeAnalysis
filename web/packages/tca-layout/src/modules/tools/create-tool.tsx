import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Modal, Form, Input, Checkbox, Select, message } from 'coding-oa-uikit';

// 项目内
import { createTool } from '@src/services/tools';
import { getToolsRouter } from '@src/utils/getRoutePath';
import { RepoTypeEnum, REPO_TYPE_OPTIONS, AuthTypeEnum, SCM_MAP } from '@src/constant';
import Authority from '@tencent/micro-frontend-shared/component/authority';
import { UserAPI } from '@plat/api';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

interface CreateToolModalProps {
  orgId: string;
  visible: boolean;
  onClose: () => void;
}

const CreateToolModal = ({ orgId, visible, onClose }: CreateToolModalProps) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { t } = useTranslation();

  /** 创建工具 */
  const onFinish = (data: any) => {
    const newFormData = data;
    const [authType, id] = data?.scm_auth_id?.split('#') ?? [];
    delete newFormData.scm_auth_id;

    newFormData.scm_auth = { auth_type: authType };

    if (SCM_MAP[authType as AuthTypeEnum]) {
      newFormData.scm_auth[SCM_MAP[authType as AuthTypeEnum]] = id;
    }

    createTool(orgId, newFormData).then(({ id }: any) => {
      message.success(t('创建成功'));
      history.push(`${getToolsRouter(orgId)}/${id}/rules`);
    });
  };

  return (
    <Modal
      title={t('创建工具')}
      width={600}
      visible={visible}
      // okButtonProps={{ loading }}
      afterClose={form.resetFields}
      onCancel={onClose}
      onOk={() => {
        form.validateFields().then(onFinish);
      }}
    >
      <Form {...layout} form={form} initialValues={{ scm_type: RepoTypeEnum.GIT }}>
        <Form.Item
          label={t('工具名称')}
          name='name'
          rules={[{
            required: true,
            message: t('请输入工具名称!'),
          }, {
            pattern: /^[A-Za-z0-9_-]+$/,
            message: t('仅支持英文、数字、中划线或下划线'),
          }]}
        >
          <Input placeholder={t('仅支持英文、数字、中划线或下划线')} />
        </Form.Item>
        <Form.Item
          label={t('工具展示名称')}
          name='display_name'
          rules={[{ required: true, message: t('请输入前端展示名称!') }]}
        >
          <Input placeholder={t('请使用大驼峰命名，如PyLint。')} />
        </Form.Item>
        <Form.Item
          label={t('工具描述')}
          name='description'
          rules={[{ required: true, message: '请输入工具描述!' }]}
        >
          <TextArea placeholder={t('长度限制256个字符。')} rows={3} />
        </Form.Item>
        <Form.Item
          label={t('工具仓库地址')}
          name='scm_url'
          required
        >
          <Input.Group compact>
            <Form.Item name='scm_type' noStyle>
              <Select style={{ width: 70 }} options={REPO_TYPE_OPTIONS} />
            </Form.Item>
            <Form.Item
              name='scm_url'
              noStyle
              rules={[
                { required: true, message: t('请输入工具仓库地址') },
              ]}
            >
              <Input style={{ width: 357 }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Authority
          form={form}
          name='scm_auth_id'
          label={t('凭证')}
          getAuthList={[
            UserAPI.authSSH().get({ limit: 200 })
              .then(({ results }: RestfulListAPIParams) => results || []),
            UserAPI.authAccount().get({ limit: 200 })
              .then(({ results }: RestfulListAPIParams) => results || []),
            UserAPI.getOAuthInfos()
              .then(({ results }: RestfulListAPIParams) => results || []),
            UserAPI.getPlatformStatus().then(r => r || {}),
          ]}
          selectStyle={{ width: 360 }}
          required
        />
        <Form.Item
          label={t('执行命令')}
          name='run_cmd'
          rules={[{ required: true, message: t('请输入执行命令') }]}
        >
          <Input placeholder={t('该命令的工作目录为工具库根目录。')} />
        </Form.Item>
        <Form.Item label={t('环境变量')} name='envs'>
          <TextArea
            rows={3}
            placeholder={t('示例：PYTHON_HOME = $PYTHON#&_HOMEPATH = $PYTHON_HOME/bin:$PATH')}
          />
        </Form.Item>
        <Form.Item label='License' name='license'>
          <Input placeholder={t('许可证')} />
        </Form.Item>
        <Form.Item label='' name='build_flag' valuePropName='checked'>
          <Checkbox>{t('是否为编译型工具')}</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateToolModal;
