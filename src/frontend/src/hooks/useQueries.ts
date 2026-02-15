import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ConsultationRequest, UserRole } from '../backend';

export function useGetCallerUserRole() {
  const { actor, isFetching } = useActor();

  return useQuery<UserRole>({
    queryKey: ['callerUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<ConsultationRequest[]>({
    queryKey: ['consultationRequests'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getRequests();
    },
    enabled: !!actor && !isFetching,
  });
}
