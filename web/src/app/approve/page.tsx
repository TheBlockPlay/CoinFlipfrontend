import { ServerIdentityProvider } from '@/components/context/identity/server-identity-provider';
import { getPendingGameSettings } from '@/server/create-arcade/get-pending-game-settings';
import HowToPlay from '../_components/HowToPlay';
import { ApprovePayButton } from '../_components/approve-pay-button';

export default async function StartGame() {
  const settings = getPendingGameSettings();
  return (
    <>
    <div className='flex justify-center gap-4'>
      <div className='w-1/3 text-center'>
        <h1 className='mb-6 text-2xl text-center font-bold mt-5'>Approve Game</h1>
        <div className=''>
        {settings.length > 0 && (
          <ServerIdentityProvider>
            <ApprovePayButton />
          </ServerIdentityProvider>
        )}
        </div>
      </div>
      </div>
      <HowToPlay />
    </>
  );
}
