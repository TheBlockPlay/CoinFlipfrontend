import { getContractState } from '@/server/partisia.client';
import { deserializeCoinFlipState } from '@/contracts_gen/clients/flip-coin';
import HowToPlay from '../_components/HowToPlay';
import { fetchIdentity } from '@/server/user/cookie-auth';
import { BlockchainAddress } from '@partisiablockchain/abi-client';
import Achievement from '../_components/Achievement';
import Accordion from "../_components/accordion";
import Image from "next/image";
import WinnerPhase from '../_components/phases/WinnerPhase';
import RecentPlay from '../_components/RecentPlay';

export default async function WinnerGame() {
  const identity: any = (await fetchIdentity())?.address || '';
  const address = new BlockchainAddress(Buffer.from(identity, 'hex'));
  // Fetch the contract state
  const contract: any = await getContractState(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    deserializeCoinFlipState
  );
  const winners = contract?.serializedContract?.openState?.openState?.data?.winners;
  const contractState= contract?.serializedContract?.openState?.openState?.data;
  // Function to access the BlockchainAddress as a hex string
  const addressToHex = (blockchainAddress: BlockchainAddress): string => {
    // Check if toString() method exists
    const addressString = blockchainAddress.toString();
    return addressString;
  };

  const userAddressHex = addressToHex(address);
  let isWinner = false;
  if (winners) {
    for (const [winnerAddress, value] of winners.entries()) {
      const winnerHex = addressToHex(winnerAddress);
      if (winnerHex === userAddressHex) {
        isWinner = true;
        break;
      }
    }
  }
  console.log(contractState);
  return (
    <>
      <div className="flex xl:gap-12 flex-col  md:gap-6 md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full xl:w-3/4 lg:w-3/5 md:w-full">
          <div className="max-md:flex-col max-md:gap-4 flex bg-[url('../../public/assets/images/topBg.png')] rounded-[20px] bg-cover bg-center p-6  md:gap-5 border border-[#EDEEEF14]">
            <div className="md:w-3/5 lg:w-3/5 xl:w-2/3  flex justify-center items-center w-full">
              <div className="flex justify-center items-center w-full">
                <Image height={200} width={300} src="/assets/images/ringDollor.png" alt="ringDollor" className="" />
              </div>
            </div>
            <div className="md:w-2/5 lg:w-2/5 xl:w-1/3 bg-[#FCFCFC14] rounded-[30px]  border border-[1.71px] border-[#EDEEEF33] p-6">
              <h6 className='mb-6 text-sm text-center font-bold mt-5'>
                {winners ? (
                  isWinner
                    ? 'Congratulations! You won the game. Your bet amount has been paid out.'
                    : 'Better Luck Next Time'
                ) : ''}
              </h6>
              <WinnerPhase />
            </div>
          </div>
          <div className="rounded-[16px] bg-[#222834] max-md:flex-col max-md:gap-[1rem] my-[20px] flex justify-between p-[8px] flex md:gap-5 border border-[#EDEEEF14]">
            <div className="bg-[#2DBE60] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
              <div className="">
                <Image height={100} width={100} src="/assets/images/greenStarIcon.png" alt="greenStarIcon" className=" xl:w-[96px] xl:h-[96px] lg:w-[56px] lg:h-[56px] md:w-[35px] md:h-[35px]" />
              </div>
              <div className="flex flex-col">
                <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">
                  {winners.size}
                </h4>
                <p>Total Wins</p>
              </div>
            </div>
            <div className="bg-[#80B342] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
              <div className="">
                <Image height={100} width={100} src="/assets/images/trackIcon.png" alt="trackIcon" className=" xl:w-[96px] xl:h-[96px] md:w-[35px] md:h-[35px] lg:w-[56px] lg:h-[56px]" />
              </div>
              <div className="flex flex-col">
                <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">
                  {contractState.userBalances?.size}
                </h4>
                <p>Volume</p>
              </div>
            </div>
            <div className="bg-[#009CD3] w-full lg:px-[12px] py-[20px] px-[22px] flex items-center gap-3 rounded-[12px]">
              <div className="">
                <Image height={100} width={100} src="/assets/images/usersIcon.png" alt="usersIcon" className=" xl:w-[96px] xl:h-[96px] lg:w-[56px] lg:h-[56px] md:w-[35px] md:h-[35px]" />
              </div>
              <div className="flex flex-col">
                <h4 className=" font-extrabold md:text-[24px] lg:text-[32px] text-[40px] leading-[100%] tracking-[0%]">
                  {contractState.playerBets?.size}
                </h4>
                <p>Total Player</p>
              </div>
            </div>
          </div>
          <div className="mb-[20px] rounded-[16px] p-6 bg-[#222834] flex flex-col justify-between md:gap-5 border border-[#EDEEEF14]">
            <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[30px]">FAQS</h4>
            <p className="mb-[25px]">FAQ: Shine Coin – Play Double or Nothing with Your Polygon Tokens!</p>
            <Accordion />
          </div>
        </div>
        <div className="w-full xl:w-1/4 lg:w-2/5 md:w-full">
          <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
            <div className="w-full ">
              <h4 className="text-white font-semibold text-[20px] leading-[100%] tracking-[0%] mb-[40px]">Recent Plays</h4>
              <RecentPlay />
            </div>
          </div>
          <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
            <HowToPlay />
          </div>
          <div className="w-full bg-[#222831] rounded-[30px] border border-[1.71px] border-[#EDEEEF33] p-6 mb-[20px]">
            <Achievement />
          </div>
        </div>
      </div>
    </>
  );
}
