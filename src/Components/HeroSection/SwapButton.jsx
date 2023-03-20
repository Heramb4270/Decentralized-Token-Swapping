import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export function SwapButton(props) {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <>
      {props.connected ? (
        <button
          onClick={() => {
            fire();
          }}
          className="font-medium text-white bg-gradient-to-r from-black to-gray-900 w-full rounded-full py-3 my-4 drop-shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all hover:text-black"
        >
          Swap
        </button>
      ) : (
        <button
          onClick={() => {
            fire(), props.getSigner();
          }}
          className="font-medium text-white bg-gradient-to-r from-black to-gray-900 w-full rounded-full py-3 my-4 drop-shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all hover:text-black"
        >
          Connect Wallet
        </button>
      )}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
