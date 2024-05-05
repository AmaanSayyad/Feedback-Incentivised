const FITokenAddress = "0xDD0570Edb234A1753e5aD3f8Be8fa7515cdA1C12"
const feedBackAddress = "0xe6d602De78a7a46F072B117A99b7e45640aB5E7C"
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract("FeedbackPlatform", [
    FITokenAddress,
  ]);
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.target;
  console.log("FeedbackPlatform Contract Address:", address);
  await sleep(30 * 1000);
  console.log("Verifying FeedbackPlatform on Given Network ...");
  //   Verify the Liquidity Locking Contract
  await hre.run("verify:verify", {
    contract: "contracts/Feedback.sol:FeedbackPlatform",
    address: address,
    constructorArguments: [FITokenAddress],
  });
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
