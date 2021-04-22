import downloadRepo from 'download-git-repo';
import ora from 'ora';
import path from 'path';
import tools from './tools';


export default async function (config: Config, templateType: number) {
  const templatePath = path.join(config.root, config.cacheDir, 'template');
  tools.store.templatePath = templatePath;
  console.log('templatePath', templatePath)
  // 先把旧模板删除，重新拉取最新的模板，否则 git clone 会报错
  await tools.remove(templatePath);
  return new Promise((resolve, reject) => {
    const spinner = ora();

    spinner.start('正在下载模板...');
    let gitRepoPath = `direct:${config.templateUrl}#`;
    switch (templateType) {
      case 0: // 默认模板
        gitRepoPath += 'master';
        break;
      case 1: // webpack 模板
        gitRepoPath += 'webpack';
        break;
      default:
        gitRepoPath += 'master';
    }

    downloadRepo(gitRepoPath, templatePath, { clone: true, }, (err) => {
      if (err) {
        spinner.fail();
        reject(err);
      } else {
        spinner.succeed();
        resolve(true);
      }
    });
  });
}