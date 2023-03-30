function ChatGptSumbitButton(props) {
  return (
    <button
      onClick={() => {
        if (props.input && props.output > 0) {
          props.Swap();
          console.log("Hellow");
        }
        // props.openMessage(true);
      }}
      className="font-medium text-white bg-gradient-to-r from-black to-gray-900 w-full rounded-full py-3 my-4 drop-shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all hover:text-black"
    >
      Submit
    </button>
  );
}

export default ChatGptSumbitButton;
