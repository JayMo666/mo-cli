import inquirer, { Answers, Questions } from 'inquirer';
import rm from 'rimraf';
const tools = {
  // 用于各模块间通信
  store: {
    packageConfig: null,
    currentPath: '',
    projectId: '',
    cookie: '',
    zipPath: '',
    templatePath: '',
    urlPrefix: '',
    proxyAddr: ''
  },
  /**
 * 删除文件
 * @param path
 * @return {Promise<any>}
 */
  remove(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      rm(path, err => {
        if (err) {
          reject({ type: 'remove', msg: err });
        } else {
          resolve(true);
        }
      });
    });
  },
  ask(config: Questions): Promise<Answers> {
    return new Promise((resolve, reject) => {
      inquirer.prompt(config).then(answers => {
        resolve(answers);
      });
    })
  }
}

export default tools;