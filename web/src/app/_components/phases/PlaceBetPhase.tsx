import { ServerIdentityProvider } from '@/components/context/identity/server-identity-provider';
import { getPendingGameSettings } from '@/server/create-arcade/get-pending-game-settings';
import { DeployButton } from '../deploy-button';

const PlaceBetPhase = () => {
    const settings = getPendingGameSettings();
    return (
        <>
            <div className=''>
                {settings.length > 0 && (
                    <ServerIdentityProvider>
                        <DeployButton />
                    </ServerIdentityProvider>
                )}
            </div>
        </>
    )
}

export default PlaceBetPhase;
