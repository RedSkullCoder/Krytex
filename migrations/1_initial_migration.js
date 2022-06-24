const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0xaF59749f07FF5699459224d49d88d90366d18b0F',
    '1000000000000000000000'
  )
};
