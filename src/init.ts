import tools from './utils/tools'
import fetchTemplate from './utils/fetchTemplate'
/**
 * 
 * @param config 
 */
export async function init(config: Config) {
  console.log('init22')
  try {
    // 先选择想要拉取的模板
    const wantTemplate = await tools.ask([{
      name: 'templateType',
      type: 'list',
      message: '模板类型',
      choices: [{
        name: '使用 dsv-cli 配套模板',
        value: 0
      }, {
        name: 'webpack 配置模板',
        value: 1
      }],
      default: 0
    }])
    // console.log('wantTemplate', config, wantTemplate)
    // 拉取代码模板
    await fetchTemplate(config, wantTemplate.templateType)
  } catch (error) {

  }

}