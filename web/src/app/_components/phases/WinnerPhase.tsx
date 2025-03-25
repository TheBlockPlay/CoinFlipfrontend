import { ServerIdentityProvider } from '@/components/context/identity/server-identity-provider';
import { getPendingGameSettings } from '@/server/create-arcade/get-pending-game-settings';
import BetAmount from '../BetAmount';
import { PayoutWinnerButton } from '../payout-winner-button';

const WinnerPhase = () => {
    const settings = getPendingGameSettings();
    return (
        <>
            <h4 className="relative mt-4 text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">Bet Amount</h4>
            <BetAmount />
            <div className='flex justify-center'>
                {settings.length > 0 && (
                    <ServerIdentityProvider>
                        <PayoutWinnerButton />
                    </ServerIdentityProvider>
                )}
            </div>
        </>
    )
}

export default WinnerPhase;
