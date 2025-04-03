import Image from 'next/image'
import React from 'react';

const Achievement = () => {
    return (
        <div className="w-full ">
            <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[40px]">Achievements</h4>
            <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center w-full">
                        <Image height={40} width={40} src="/assets/images/starIcon.png" alt="starIcon" className="" />
                        <div className="flex flex-col w-full">
                            <div className="flex gap-3 items-center justify-between">
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">First Flip</p>
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">100%</p>
                            </div>
                            <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={100} max={100} />
                            <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Win your first flip</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center w-full">
                        <Image height={40} width={40} src="/assets/images/medalIcon.png" alt="medalIcon" className="" />
                        <div className="flex flex-col w-full">
                            <div className="flex gap-3 items-center justify-between">
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">High Roller</p>
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">45%</p>
                            </div>
                            <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={45} max={100} />
                            <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Bet 100 PBT in total</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center w-full">
                        <Image height={40} width={40} src="/assets/images/shineStarIcon.png" alt="shineStarIcon" className="" />
                        <div className="flex flex-col w-full">
                            <div className="flex gap-3 items-center justify-between">
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">Lucky Streak</p>
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">60%</p>
                            </div>
                            <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={60} max={100} />
                            <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Win 5 flips in a row</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#AC92ED0A] py-[12px] px-[1rem] rounded-[8px] mb-[6px]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center w-full">
                        <Image height={40} width={40} src="/assets/images/speedIcon.png" alt="speedIcon" className="" />
                        <div className="flex flex-col w-full">
                            <div className="flex gap-3 items-center justify-between">
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">Speed Demon</p>
                                <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[0%] mb-[5px]">20%</p>
                            </div>
                            <progress className="w-full my-[5px] h-2  [&::-webkit-progress-bar]:rounded-[20px] [&::-webkit-progress-value]:rounded-[20px] [&::-moz-progress-bar]:rounded-[20px] appearance-none [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-[#0BB6CE] [&::-moz-progress-bar]:bg-[#0BB6CE] rounded-full" value={20} max={100} />
                            <p className="text-white font-light text-[14px] leading-[100%] tracking-[0%]">Make 10 flips in 1 hour</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement
