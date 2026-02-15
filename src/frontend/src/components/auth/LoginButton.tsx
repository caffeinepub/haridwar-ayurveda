import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, Loader2 } from 'lucide-react';

export function LoginButton() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const isLoading = loginStatus === 'logging-in' || loginStatus === 'initializing';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <Button
      onClick={handleAuth}
      disabled={isLoading}
      variant={isAuthenticated ? 'outline' : 'ghost'}
      size="sm"
      className="gap-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={16} />
          <span className="hidden sm:inline">Loading...</span>
        </>
      ) : isAuthenticated ? (
        <>
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </>
      ) : (
        <>
          <LogIn size={16} />
          <span className="hidden sm:inline">Admin Login</span>
        </>
      )}
    </Button>
  );
}
