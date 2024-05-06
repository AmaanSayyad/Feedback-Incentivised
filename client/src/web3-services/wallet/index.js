import { liskSepolia ,polygonMumbai } from "viem/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
const { chains, publicClient } = configureChains(
  [liskSepolia,polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        
        if (chainId.id == 80001) {
          return {
            http: "https://rpc-mumbai.maticvigil.com",
            webSocket:
              "wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
          };
        }if(chainId.id == 51){
          return {
            http: "https://erpc.apothem.network",
         
          }
        }if(chainId.id == 84532){
          return {
            http: "https://sepolia.base.org",
          };
        }
        if(chainId.id == 7700){
          return {
            http: "https://canto-testnet.plexnode.wtf",
          };
        } if(chainId.id == 4202){
          return {
            http: "https://rpc.sepolia-api.lisk.com",
          };
        }
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Feedback Incentivized",
  projectId: "87106bd465234d097b8a51ba585bf799",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };
