const { defineMikroOrmCliConfig, Modules } = require('@medusajs/framework/utils');
const entities = require('./src/models');

module.exports = defineMikroOrmCliConfig(Modules.PRODUCT, {
  entities: Object.values(entities),
});
