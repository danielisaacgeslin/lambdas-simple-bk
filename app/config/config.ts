let env = process.env.NODE_ENV || 'development';

if (env === 'production') {
  settings.env = 'prod';
  // other production settings
}