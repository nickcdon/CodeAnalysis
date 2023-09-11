import { get } from 'lodash';

/** 用户工具管理 */
export class UserManager {
  /**
   * 获取用户昵称
   * @param user 用户信息
   * @returns 用户昵称
   */
  static getNickName(user: any) {
    if (typeof user === 'string') return user;
    return (get(user, 'EngName') || get(user, 'nickname') || '') as string;
  }

  /**
   * 获取用户UID
   * @param user 用户信息
   * @returns 用户UID
   */
  static getUID(user: any) {
    const uid = get(user, 'EngName') || get(user, 'username');
    if (uid) {
      return uid as string;
    }
    throw new Error('user 解析 uid failed');
  }

  static getUserAvatarURL(user: any) {
    const uid = UserManager.getUID(user);
    return `${location.protocol}//dayu.woa.com/avatars/${uid.trim()}/profile.jpg?0`;
  }
}
