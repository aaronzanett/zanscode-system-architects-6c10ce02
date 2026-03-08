import { useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePartners, useServices, useSaaSProducts, useConsultations, useTeamMembers } from '@/hooks/useAdminData';
import { SEED_PARTNERS, SEED_SERVICES, SEED_SAAS, SEED_CONSULTATIONS, SEED_TEAM } from '@/lib/seedData';
import { Users, Briefcase, Cloud, MessageSquare, UserCheck, TrendingUp, Activity, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
  const [partners, setPartners] = usePartners();
  const [services, setServices] = useServices();
  const [saas, setSaas] = useSaaSProducts();
  const [consultations, setConsultations] = useConsultations();
  const [team, setTeam] = useTeamMembers();

  useEffect(() => {
    if (partners.length === 0) setPartners(SEED_PARTNERS);
    if (services.length === 0) setServices(SEED_SERVICES);
    if (saas.length === 0) setSaas(SEED_SAAS);
    if (consultations.length === 0) setConsultations(SEED_CONSULTATIONS);
    if (team.length === 0) setTeam(SEED_TEAM);
  }, []);

  const activeTeam = team.filter(m => m.status === 'active').length;
  const newConsultations = consultations.filter(c => c.status === 'new').length;
  const activeSaas = saas.filter(s => s.status === 'active').length;

  const recentConsultations = [...consultations]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const recentTeam = [...team]
    .sort((a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime())
    .slice(0, 5);

  const statCards = [
    { title: 'Total Partners', value: partners.length, icon: Users, color: 'text-primary' },
    { title: 'Services', value: services.length, icon: Briefcase, color: 'text-secondary' },
    { title: 'Active Products', value: activeSaas, icon: Cloud, color: 'text-accent-foreground' },
    { title: 'New Consultations', value: newConsultations, icon: MessageSquare, color: 'text-destructive' },
    { title: 'Team Members', value: activeTeam, icon: UserCheck, color: 'text-primary' },
    { title: 'Total Revenue', value: '$128K', icon: TrendingUp, color: 'text-secondary' },
  ];

  const statusColor: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    archived: 'bg-muted text-muted-foreground',
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Activity className="h-5 w-5 text-primary" />
              Recent Consultations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentConsultations.map((c) => (
              <div key={c.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-foreground text-sm">{c.company}</p>
                  <p className="text-xs text-muted-foreground">{c.industry}</p>
                </div>
                <Badge variant="outline" className={statusColor[c.status]}>
                  {c.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-primary" />
              Recent Team Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTeam.map((m) => (
              <div key={m.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-foreground text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.department} · {m.role}</p>
                </div>
                <Badge variant="outline" className={
                  m.status === 'active' ? 'bg-green-100 text-green-800' :
                  m.status === 'on-leave' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-muted text-muted-foreground'
                }>
                  {m.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
