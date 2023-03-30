import { NavBar, HeroSection } from "../Components";
import Tokens from "../Pages/Tokens";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
function App() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  useEffect(() => {
    const onLoad = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    };
    onLoad();
  }, []);

  const getSigner = async () => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer);
  };

  const isConnected = () => signer !== undefined;

  const getWalletAddress = () => {
    signer.getAddress().then((address) => {
      setSignerAddress(address);
    });
  };

  if (signer !== undefined) getWalletAddress();
  return (
    <div>
      <NavBar
        provider={provider}
        isConnected={isConnected}
        signerAddress={signerAddress}
        getSigner={getSigner}
      />{/*
      <HeroSection
        provider={provider}
        isConnected={isConnected}
        signerAddress={signerAddress}
        signer={signer}
        getSigner={getSigner}
      />*/}
      <Tokens />
    </div>
  );
}

export default App;
