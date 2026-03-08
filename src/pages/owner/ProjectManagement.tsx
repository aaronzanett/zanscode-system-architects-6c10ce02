import { useState, useEffect, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TablePagination } from '@/components/admin/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { useProjects, useProjectTasks, generateId } from '@/hooks/useAdminData';
import { SEED_PROJECTS, SEED_TASKS } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search, ListTodo } from 'lucide-react';
import type { Project, ProjectTask } from '@/types/admin';

const PROJECT_STATUSES: Project['status'][] = ['backlog', 'in-progress', 'review', 'completed'];
const PRIORITIES: Project['priority'][] = ['low', 'medium', 'high', 'urgent'];
const TASK_STATUSES: ProjectTask['status'][] = ['todo', 'in-progress', 'done'];

const priorityColor: Record<string, string> = {
  low: 'bg-muted text-muted-foreground',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800',
  critical: 'bg-red-100 text-red-800',
};

const statusColor: Record<string, string> = {
  backlog: 'bg-muted text-muted-foreground',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  review: 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
  todo: 'bg-muted text-muted-foreground',
  done: 'bg-green-100 text-green-800',
};

const emptyProject = { title: '', description: '', assignee: '', status: 'backlog' as Project['status'], priority: 'medium' as Project['priority'], deadline: '' };
const emptyTask = { projectId: '', title: '', assignee: '', status: 'todo' as ProjectTask['status'], priority: 'medium' as ProjectTask['priority'] };

export default function ProjectManagement() {
  const [projects, setProjects] = useProjects();
  const [tasks, setTasks] = useProjectTasks();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [projectDialog, setProjectDialog] = useState(false);
  const [taskDialog, setTaskDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [taskForm, setTaskForm] = useState(emptyTask);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (projects.length === 0) setProjects(SEED_PROJECTS);
    if (tasks.length === 0) setTasks(SEED_TASKS);
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.assignee.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'all' || p.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [projects, search, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filtered, { pageSize: 6 });

  const projectTasks = useMemo(() => {
    if (!selectedProject) return [];
    return tasks.filter((t) => t.projectId === selectedProject);
  }, [tasks, selectedProject]);

  const openAddProject = () => { setProjectForm(emptyProject); setEditingId(null); setProjectDialog(true); };
  const openEditProject = (p: Project) => {
    setProjectForm({ title: p.title, description: p.description, assignee: p.assignee, status: p.status, priority: p.priority, deadline: p.deadline });
    setEditingId(p.id); setProjectDialog(true);
  };
  const saveProject = () => {
    if (!projectForm.title.trim()) return;
    if (editingId) {
      setProjects((prev) => prev.map((p) => p.id === editingId ? { ...p, ...projectForm } : p));
    } else {
      setProjects((prev) => [...prev, { id: generateId(), ...projectForm, createdAt: new Date().toISOString() }]);
    }
    setProjectDialog(false);
  };
  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setTasks((prev) => prev.filter((t) => t.projectId !== id));
    if (selectedProject === id) setSelectedProject(null);
  };

  const openAddTask = (projectId: string) => { setTaskForm({ ...emptyTask, projectId }); setEditingId(null); setTaskDialog(true); };
  const openEditTask = (t: ProjectTask) => {
    setTaskForm({ projectId: t.projectId, title: t.title, assignee: t.assignee, status: t.status, priority: t.priority });
    setEditingId(t.id); setTaskDialog(true);
  };
  const saveTask = () => {
    if (!taskForm.title.trim()) return;
    if (editingId) {
      setTasks((prev) => prev.map((t) => t.id === editingId ? { ...t, ...taskForm } : t));
    } else {
      setTasks((prev) => [...prev, { id: generateId(), ...taskForm, createdAt: new Date().toISOString() }]);
    }
    setTaskDialog(false);
  };
  const deleteTask = (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <AdminLayout title="Project & Task Management">
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks" disabled={!selectedProject}>Tasks {selectedProject && `(${projects.find(p => p.id === selectedProject)?.title})`}</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle>Projects</CardTitle>
                <Dialog open={projectDialog} onOpenChange={setProjectDialog}>
                  <DialogTrigger asChild><Button onClick={openAddProject} size="sm"><Plus className="h-4 w-4 mr-1" /> New Project</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'New'} Project</DialogTitle></DialogHeader>
                    <div className="space-y-4 pt-2">
                      <div><Label>Title</Label><Input value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} /></div>
                      <div><Label>Description</Label><Textarea value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} /></div>
                      <div><Label>Assignee</Label><Input value={projectForm.assignee} onChange={(e) => setProjectForm({ ...projectForm, assignee: e.target.value })} /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Status</Label>
                          <Select value={projectForm.status} onValueChange={(v) => setProjectForm({ ...projectForm, status: v as Project['status'] })}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>{PROJECT_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Priority</Label>
                          <Select value={projectForm.priority} onValueChange={(v) => setProjectForm({ ...projectForm, priority: v as Project['priority'] })}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>{PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div><Label>Deadline</Label><Input type="date" value={projectForm.deadline} onChange={(e) => setProjectForm({ ...projectForm, deadline: e.target.value })} /></div>
                      <Button onClick={saveProject} className="w-full">{editingId ? 'Update' : 'Create'} Project</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." value={search} onChange={(e) => { setSearch(e.target.value); goToPage(1); }} className="pl-9" />
                </div>
                <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); goToPage(1); }}>
                  <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {PROJECT_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedItems.length === 0 ? (
                    <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No projects found.</TableCell></TableRow>
                  ) : paginatedItems.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.title}</TableCell>
                      <TableCell>{p.assignee}</TableCell>
                      <TableCell><Badge variant="outline" className={statusColor[p.status]}>{p.status}</Badge></TableCell>
                      <TableCell><Badge variant="outline" className={priorityColor[p.priority]}>{p.priority}</Badge></TableCell>
                      <TableCell>{p.deadline}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedProject(p.id)} title="View Tasks"><ListTodo className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => openEditProject(p)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteProject(p.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={filtered.length} onPageChange={goToPage} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          {selectedProject && (
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Tasks — {projects.find(p => p.id === selectedProject)?.title}</CardTitle>
                    <Button variant="link" className="p-0 h-auto text-sm" onClick={() => setSelectedProject(null)}>← Back to Projects</Button>
                  </div>
                  <Dialog open={taskDialog} onOpenChange={setTaskDialog}>
                    <DialogTrigger asChild><Button onClick={() => openAddTask(selectedProject)} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Task</Button></DialogTrigger>
                    <DialogContent>
                      <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'New'} Task</DialogTitle></DialogHeader>
                      <div className="space-y-4 pt-2">
                        <div><Label>Title</Label><Input value={taskForm.title} onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })} /></div>
                        <div><Label>Assignee</Label><Input value={taskForm.assignee} onChange={(e) => setTaskForm({ ...taskForm, assignee: e.target.value })} /></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Status</Label>
                            <Select value={taskForm.status} onValueChange={(v) => setTaskForm({ ...taskForm, status: v as ProjectTask['status'] })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>{TASK_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Priority</Label>
                            <Select value={taskForm.priority} onValueChange={(v) => setTaskForm({ ...taskForm, priority: v as ProjectTask['priority'] })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>{(['low', 'medium', 'high'] as const).map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={saveTask} className="w-full">{editingId ? 'Update' : 'Add'} Task</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectTasks.length === 0 ? (
                      <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No tasks yet.</TableCell></TableRow>
                    ) : projectTasks.map((t) => (
                      <TableRow key={t.id}>
                        <TableCell className="font-medium">{t.title}</TableCell>
                        <TableCell>{t.assignee}</TableCell>
                        <TableCell><Badge variant="outline" className={statusColor[t.status]}>{t.status}</Badge></TableCell>
                        <TableCell><Badge variant="outline" className={priorityColor[t.priority]}>{t.priority}</Badge></TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => openEditTask(t)}><Pencil className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" onClick={() => deleteTask(t.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
