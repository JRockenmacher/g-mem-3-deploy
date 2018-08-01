// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection:'postgres:///g-mem-3'
  },  

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres:///g-mem-3'
  }

}

