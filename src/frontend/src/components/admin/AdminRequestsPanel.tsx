import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useGetRequests } from '@/hooks/useQueries';
import { Loader2, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AdminRequestsPanel() {
  const { data: requests, isLoading, error } = useGetRequests();

  return (
    <section className="py-12 bg-muted/50 border-t-2 border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/30 shadow-soft">
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              Admin Panel - Consultation Requests
            </CardTitle>
            <CardDescription>
              Developer-only view: All consultation requests submitted through the form
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin text-primary" size={32} />
              </div>
            ) : error ? (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                Error loading requests: {error.message}
              </div>
            ) : !requests || requests.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No consultation requests yet. Submissions will appear here.
              </div>
            ) : (
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {requests.map((request, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="text-primary" size={16} />
                              <span className="font-semibold text-foreground">{request.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              {request.contact.includes('@') ? (
                                <Mail size={14} />
                              ) : (
                                <Phone size={14} />
                              )}
                              <span>{request.contact}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            <span>Request #{index + 1}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <p className="text-sm text-foreground leading-relaxed">{request.message}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
