const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const config = parse(process.env.DATABASE_URL);
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
          ssl: false,
        },
      },
    },
  }
};