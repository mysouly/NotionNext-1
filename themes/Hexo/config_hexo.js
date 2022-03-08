const CONFIG_HEXO = {
  HOME_BANNER_ENABLE: true,
  HOME_BANNER_GREETINGS: [ 'Hi，这是一个数据库', '在这里，感受中国经济的律动✨'], // 首页大图标语文字
  HOME_BANNER_IMAGE: './bg_image.jpg', // see /public/bg_image.jpg

  // 菜单配置
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: false, // 文章封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  NAV_TYPE: 'autoCollapse', // ['fixed','autoCollapse','normal'] 分别是固定屏幕顶部、屏幕顶部自动折叠，不固定

  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: false, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG_HEXO
