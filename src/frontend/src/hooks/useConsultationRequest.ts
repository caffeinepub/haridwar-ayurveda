import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ConsultationRequestData {
  name: string;
  contact: string;
  message: string;
}

export function useSubmitConsultationRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ConsultationRequestData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.submitConsultationRequest(data.name, data.contact, data.message);
    },
    onSuccess: () => {
      // Invalidate requests query so admin panel refreshes
      queryClient.invalidateQueries({ queryKey: ['consultationRequests'] });
    },
  });
}
