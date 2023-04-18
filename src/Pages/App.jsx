import { NavBar, HeroSection } from "../Components";
import Tokens from "../Pages/Tokens";
import { ChatGpt } from "../Components";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { AllTokens } from "../Components";
function App() {
  const [provider, setProvider] = useState(undefined);
  const [ChatwithGpt, setChatWithGpt] = useState(false);
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
    <>
      {!ChatwithGpt && (
        <>
          <NavBar
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            getSigner={getSigner}
          />
          {/* <HeroSection
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            signer={signer}
            getSigner={getSigner}
          /> */}
        </>
      )}

      <Tokens />

      {/* {ChatwithGpt && (
        <>
          <NavBar
            renderGPT={setChatWithGpt}
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            getSigner={getSigner}
          />
          <ChatGpt />
        </>
      )} */}

      {/* { ChatwithGpt && (
        <div>
          <NavBar
            renderGPT={setChatWithGpt}
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            getSigner={getSigner}
          />
          <HeroSection
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            signer={signer}
            getSigner={getSigner}
          />
          <div />
          )
        } */}
    </>
  );
}

export default App;
