import { ServerIdentityProvider } from '@/components/context/identity/server-identity-provider';
import { getPendingGameSettings } from '@/server/create-arcade/get-pending-game-settings';
import { DeployButton } from '../_components/deploy-button';
import HowToPlay from '../_components/HowToPlay';

export default async function StartGame() {
  const settings = getPendingGameSettings();
  return (
    <>
    <div className='flex justify-center gap-4'>
      <div className='w-1/3 text-center'>
        <h1 className='mb-6 text-2xl text-center font-bold mt-5'>Start Game</h1>
        <div className=''>
        {settings.length > 0 && (
          <ServerIdentityProvider>
            <DeployButton />
          </ServerIdentityProvider>
        )}
        </div>
      </div>
      </div>
      <HowToPlay />
    </>
  );
}
