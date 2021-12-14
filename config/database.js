const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const config = process.env.DATABASE_URL != undefined ? { ...parse(process.env.DATABASE_URL), ssl: true } : {}
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host || '127.0.0.1',
          port: config.port || 5432,
          database: config.database || 'good-bridging-blog',
          username: config.user || 'postgres',
          password: config.password || '27137766@Pg',
          ssl: {
            rejectUnauthorized: false
          }
        },
        options: {
          ssl: config.ssl || false,
        },
      },
    },
  }
};