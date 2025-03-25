import React from 'react';

const HowToPlay = () => {
    return (
        <div className="w-full ">
            <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[40px]">How To Play</h4>
            <p className="font-normal text-[18px] leading-[160%] tracking-[0%]">Shine Coin is a smart contract that enables users to play a Double or Nothing game using their Polygon tokens.</p>
            <ol className="flex flex-col mt-[15px]">
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">1</span>Connect your Party Wallet</li>
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">2</span>Pick either heads or tails</li>
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">3</span>Select your desired flip amount</li>
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">4</span>Click “Double or Nothing”</li>
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">5</span>Click approve and wait coin to spin</li>
                <li className="flex mb-[10px] items-center font-semibold text-[20px] leading-[100%] tracking-[0%]"><span className="me-[10px] bg-[#009AD2] p-[5px] w-[30px] h-[30px] flex items-center justify-center rounded-full">6</span>Congrats!</li>
            </ol>
        </div>
    )
}

export default HowToPlay