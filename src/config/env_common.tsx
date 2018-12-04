const envKey = process.env.NODE_ENV || 'development';

export default {
  ENV: envKey,
  JS: '/app',
  CSS: '/content/css',
  IMG: '/content/img',
  FONTS: '/content/fonts',
  WIDGET: '/content/widget',
  MGP: '/mgp/bos',
  TRACKING: 'qa',
};
