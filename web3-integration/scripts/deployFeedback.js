const noteTokenAddress = "0x03F734Bd9847575fDbE9bEaDDf9C166F880B5E5f"
const feedBackAddress = "0xBFff78BB02925E4D8671D0d90B2a6330fcAedd87"
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract("FeedbackPlatform", [
    noteTokenAddress,
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
    constructorArguments: [noteTokenAddress],
  });
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
