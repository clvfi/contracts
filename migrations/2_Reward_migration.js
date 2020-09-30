const Migrations = artifacts.require("CloverRewards");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
