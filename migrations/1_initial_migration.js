const Migrations = artifacts.require("CloverMigrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
