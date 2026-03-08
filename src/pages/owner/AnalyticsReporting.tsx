import { useEffect, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePartners, useServices, useSaaSProducts, useConsultations, useTeamMembers, useProjects, useProjectTasks, useClients, useFinance, useProductFeatures } from '@/hooks/useAdminData';
import { SEED_PARTNERS, SEED_SERVICES, SEED_SAAS, SEED_CONSULTATIONS, SEED_TEAM, SEED_PROJECTS, SEED_TASKS, SEED_CLIENTS, SEED_FINANCE, SEED_PRODUCT_FEATURES } from '@/lib/seedData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

const CHART_COLORS = ['hsl(217, 78%, 20%)', 'hsl(214, 82%, 51%)', 'hsl(193, 100%, 68%)', 'hsl(0, 84%, 60%)', 'hsl(142, 71%, 45%)', 'hsl(280, 65%, 60%)'];

export default function AnalyticsReporting() {
  const [partners, setPartners] = usePartners();
  const [services, setServices] = useServices();
  const [saas, setSaas] = useSaaSProducts();
  const [consultations, setConsultations] = useConsultations();
  const [team, setTeam] = useTeamMembers();
  const [projects, setProjects] = useProjects();
  const [tasks, setTasks] = useProjectTasks();
  const [clients, setClients] = useClients();
  const [finance, setFinance] = useFinance();
  const [features, setFeatures] = useProductFeatures();

  useEffect(() => {
    if (partners.length === 0) setPartners(SEED_PARTNERS);
    if (services.length === 0) setServices(SEED_SERVICES);
    if (saas.length === 0) setSaas(SEED_SAAS);
    if (consultations.length === 0) setConsultations(SEED_CONSULTATIONS);
    if (team.length === 0) setTeam(SEED_TEAM);
    if (projects.length === 0) setProjects(SEED_PROJECTS);
    if (tasks.length === 0) setTasks(SEED_TASKS);
    if (clients.length === 0) setClients(SEED_CLIENTS);
    if (finance.length === 0) setFinance(SEED_FINANCE);
    if (features.length === 0) setFeatures(SEED_PRODUCT_FEATURES);
  }, []);

  const projectStatusData = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => { counts[p.status] = (counts[p.status] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [projects]);

  const clientStatusData = useMemo(() => {
    const counts: Record<string, number> = {};
    clients.forEach((c) => { counts[c.status] = (counts[c.status] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [clients]);

  const financeMonthlyData = useMemo(() => {
    const months: Record<string, { income: number; expense: number }> = {};
    finance.forEach((r) => {
      const month = r.date.substring(0, 7);
      if (!months[month]) months[month] = { income: 0, expense: 0 };
      months[month][r.type] += r.amount;
    });
    return Object.entries(months).sort().map(([month, data]) => ({ month, ...data }));
  }, [finance]);

  const featureTypeData = useMemo(() => {
    const counts: Record<string, number> = {};
    features.forEach((f) => { counts[f.type] = (counts[f.type] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [features]);

  const taskCompletionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((tasks.filter(t => t.status === 'done').length / tasks.length) * 100);
  }, [tasks]);

  return (
    <AdminLayout title="Analytics & Reporting">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Total Projects</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{projects.length}</p></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Task Completion</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{taskCompletionRate}%</p></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Active Clients</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{clients.filter(c => c.status === 'active').length}</p></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Team Size</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{team.filter(t => t.status === 'active').length}</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader><CardTitle className="text-lg">Monthly Revenue vs Expenses</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={financeMonthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="hsl(142, 71%, 45%)" name="Income" />
                <Bar dataKey="expense" fill="hsl(0, 84%, 60%)" name="Expense" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">Project Status Distribution</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={projectStatusData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {projectStatusData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-lg">Client Pipeline</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={clientStatusData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {clientStatusData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">Product Backlog by Type</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={featureTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(214, 82%, 51%)" name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
