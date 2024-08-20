function Quick() {
  return (
    <div id="container" className=" flex w-1/4">
      <div id="girl" className="">
        <img
          className="w-96 absolute  left-0 -top-0.5"
          src="/girl.png"
          alt=""
        />
      </div>
      <div id="content" className="flex-col w-full">
        <h1 className="text-2xl text-center font-bold ">Quick Withdrawal</h1>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Choose Payment Method:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-gradient-to-r from-[#601414] to-[#9A0000] appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/icbit.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
              <span className="mr-5 mt-1">
                <img className="w-7" src="/down.png" alt="khong" />
              </span>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Amount in USD:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex  bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Receiving Wallet Address:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white text-lg py-2 px-8 rounded-xl text-center flex items-center justify-center">
            <img
              src="/deposit-icon.png"
              alt="Deposit Icon"
              className="w-6 h-6 mr-2"
            />
            Deposit
          </button>
        </div>
        <p className="my-5">You will receive the Dollar amount in the crypto</p>
        <p className="my-5">
          Need assistance? Contact us via Live Chat for instant
        </p>
      </div>
      <div id="money">
        <img className="w-96 absolute  right-0 -top-0.5" src="/money.png" />
      </div>
    </div>
  );
}

export default Quick;
