import { ServerIdentityProvider } from '@/components/context/identity/server-identity-provider';
import { getPendingGameSettings } from '@/server/create-arcade/get-pending-game-settings';
import { ApprovePayButton } from '../approve-pay-button';
import BetAmount from '../BetAmount';

const ApprovePhase = () => {
    const settings = getPendingGameSettings();
    return (
        <>
            <BetAmount />
            <div className='flex justify-center'>
                {settings.length > 0 && (
                    <ServerIdentityProvider>
                        <ApprovePayButton />
                    </ServerIdentityProvider>
                )}
            </div>
        </>
    )
}

export default ApprovePhase;
