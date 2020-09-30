const Migrations = artifacts.require("Clover");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
