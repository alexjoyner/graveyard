module.exports = {
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Voicir',
  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://rosco9awj:1_Password@ds157677.mlab.com:57677/voicir-landing',
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN || 'voicir.com',
    api: process.env.MAILGUN_API_KEY || 'key-7a50b04fd88fd07e220f98537da18678',
    public: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-1058b4206e6584d46cc0833b2ee45d59',
    email: process.env.MAILGUN_REPLY_EMAIL || 'noreply@voicir.com'
  },
  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-87697753-1'
};