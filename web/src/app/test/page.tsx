import { useEffect, useState } from "react";
import "./style.css";
import Accordion from "../_components/accordion";
export default async function Page() {

    return (
        <>
        <div className="flex xl:gap-12 flex-col  md:gap-6 md:flex-col lg:flex-row xl:flex-row">
            <div className="w-full xl:w-3/4 lg:w-3/5 md:w-full">
                <div className="max-md:flex-col max-md:gap-4 flex bg-[url('../../public/assets/images/topBg.png')] rounded-[20px] bg-cover bg-center p-6  md:gap-5 border border-[#EDEEEF14]">
                    <div className="md:w-3/5 lg:w-3/5 xl:w-2/3  flex justify-center items-center w-full"> 
                        <div className="flex justify-center items-center w-full">
                            <img src="/assets/images/ringDollor.png" alt="ringDollor" className="" />
                        </div>
                    </div>
                    <div className="md:w-2/5 lg:w-2/5 xl:w-1/3 bg-[#FCFCFC14] rounded-[30px]  border border-[1.71px] border-[#EDEEEF33] p-6">
                        <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">Choose Side</h4>
                        <div className="flex justify-center items-center w-full gap-3  my-[20px]">
                            <button className="bg-[#F4C542] border border-[#F4C542] hover:text-[#F4C542] hover:bg-transparent p-[14px] w-full rounded-[8px] text-white font-semibold text-[16px] leading-[100%] tracking-[0%] text-center transition duration-300">Heads</button>
                            <button className="rounded-[8px] p-[14px] text-[#00A9FF] border border-[#00A9FF] w-full font-semibold text-[16px] leading-[100%] tracking-[0%] text-center hover:text-white hover:bg-[#00A9FF] transition duration-300">Tails</button>
                        </div>
                        <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">Bet Amount</h4>
                            <div className="flex justify-between items-center w-full gap-3 my-[20px] border border-[1.71px] border-[#EDEEEF33] p-[14px] rounded-[8px]">
                                <label>0.1</label>
                                <label>Matic</label>
                            </div>
                        <input type="range" min="0" max="100" className="w-full" />
                        <button className="flex justify-center mt-[30px] gap-3 items-center bg-[#F4C542] border border-[#F4C542] hover:text-[#F4C542] hover:bg-transparent p-[14px] w-full rounded-[8px] text-white font-semibold text-[16px] leading-[100%] tracking-[0%] text-center transition duration-300">Flip Coin 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="rounded-[16px] bg-[#222834] max-md:flex-col max-md:gap-[1rem] my-[20px] flex justify-between p-[8px] flex md:gap-5 border border-[#EDEEEF14]">
                    <div className="bg-[#2DBE60] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
                        <div className="">
                            <img src="/assets/images/greenStarIcon.png" alt="greenStarIcon" className=" xl:w-[96px] xl:h-[96px] lg:w-[56px] lg:h-[56px] md:w-[35px] md:h-[35px]" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">1,234</h4>
                            <p>Total Wins</p>
                        </div>
                    </div>
                    <div className="bg-[#80B342] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
                        <div className="">
                            <img src="/assets/images/trackIcon.png" alt="trackIcon" className=" xl:w-[96px] xl:h-[96px] md:w-[35px] md:h-[35px] lg:w-[56px] lg:h-[56px]" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">45.3K</h4>
                            <p>Volume</p>
                        </div>
                    </div>
                    <div className="bg-[#009CD3] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
                        <div className="">
                            <img src="/assets/images/usersIcon.png" alt="usersIcon" className=" xl:w-[96px] xl:h-[96px] lg:w-[56px] lg:h-[56px] md:w-[35px] md:h-[35px]" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">892</h4>
                            <p>Total Player</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[16px] p-6 bg-[#222834] flex flex-col justify-between md:gap-5 border border-[#EDEEEF14]">
                    <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[30px]">FAQS</h4>
                    <p className="mb-[25px]">FAQ: Shine Coin – Play Double or Nothing with Your Polygon Tokens!</p>
                    <Accordion/>
                </div>
            </div>
            <div className="w-full xl:w-1/4 lg:w-2/5 md:w-full">
                <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
                    <div className="w-full ">
                        <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[40px]">Recent Plays</h4>
                        <div className="flex justify-between items-center w-full gap-3 my-[5px] border-b border-b-[#FFFFFF14] py-[12px]">
                            <div className="flex gap-3 items-center">
                                <img src="/assets/images/greenArrow.png" alt="greenArrow" className="" />
                                <div className="flex flex-col">
                                    <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">0x1234...5678</p>
                                    <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">heads</p>
                                </div>    
                            </div>
                            <div className="text-[#27A251] text-[16px] leading-[100%] tracking-[0%]">+0.5 MATIC</div>
                        </div>
                        <div className="flex justify-between items-center w-full gap-3 my-[5px] border-b border-b-[#FFFFFF14] py-[12px]">
                            <div className="flex gap-3 items-center">
                                <img src="/assets/images/redArrow.png" alt="redArrow" className="" />
                                <div className="flex flex-col">
                                    <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">0x1234...5678</p>
                                    <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">heads</p>
                                </div>    
                            </div>
                            <div className="text-[#D72638] text-[16px] leading-[100%] tracking-[0%]">+0.5 MATIC</div>
                        </div>
                        <div className="flex justify-between items-center w-full gap-3 my-[5px] border-b border-b-[#FFFFFF14] py-[12px]">
                            <div className="flex gap-3 items-center">
                                <img src="/assets/images/greenArrow.png" alt="greenArrow" className="" />
                                <div className="flex flex-col">
                                    <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">0x1234...5678</p>
                                    <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">heads</p>
                                </div>    
                            </div>
                            <div className="text-[#27A251] text-[16px] leading-[100%] tracking-[0%]">+0.5 MATIC</div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
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
                </div>
                <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
                    <div className="w-full ">
                        <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[40px]">Achievements</h4>
                        <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-3 items-center w-full">
                                    <img src="/assets/images/starIcon.png" alt="starIcon" className="" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex gap-3 items-center justify-between">
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">First Flip</p>
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">100%</p>
                                        </div>    
                                        <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={100}  max={100} />
                                        <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Win your first flip</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-3 items-center w-full">
                                    <img src="/assets/images/medalIcon.png" alt="medalIcon" className="" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex gap-3 items-center justify-between">
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">High Roller</p>
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">45%</p>
                                        </div>    
                                        <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={45}  max={100} />
                                        <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Bet 100 Matic in total</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-3 items-center w-full">
                                    <img src="/assets/images/shineStarIcon.png" alt="shineStarIcon" className="" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex gap-3 items-center justify-between">
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">Lucky Streak</p>
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">60%</p>
                                        </div>    
                                        <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={60}  max={100} />
                                        <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Win 5 flips in a row</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-3 items-center w-full">
                                    <img src="/assets/images/speedIcon.png" alt="speedIcon" className="" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex gap-3 items-center justify-between">
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">Speed Demon</p>
                                            <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">20%</p>
                                        </div>    
                                        <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={20}  max={100} />
                                        <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Make 10 flips in 1 hour</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        
        </>
    )
}