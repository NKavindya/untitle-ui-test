import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col">
        <div className="h-14 px-4 flex items-center border-b border-slate-200">
          <span className="font-semibold tracking-tight">REMS</span>
        </div>
        <nav className="flex-1 px-2 py-3 space-y-1 text-sm">
          <button className="w-full flex items-center gap-2 rounded-md px-3 py-2 bg-slate-900 text-white">
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100">
            Requests
          </button>
          <button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100">
            Settings
          </button>
        </nav>
        <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500">
          Logged in as glue stack
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 border-b border-slate-200 bg-white px-6 flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold tracking-tight">Dashboard</h1>
            <p className="text-xs text-slate-500">Overview of REMS requests and activity</p>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Search..." className="w-56" />
            <Button size="sm">New Request</Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-4 overflow-auto">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Requests</CardTitle>
                <CardDescription>All requests in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">128</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pending Approval</CardTitle>
                <CardDescription>Awaiting reviewer action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-amber-600">16</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Approved</CardTitle>
                <CardDescription>Granted access requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-emerald-600">92</div>
              </CardContent>
            </Card>
          </div>

          {/* Table + side panel */}
          <div className="grid grid-cols-[2fr,1fr] gap-4 items-start">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Requests</CardTitle>
                    <CardDescription>Last 10 REMS requests</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View all
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <table className="w-full text-xs">
                  <thead className="text-slate-500">
                    <tr className="border-b border-slate-200">
                      <th className="py-2 text-left font-medium">ID</th>
                      <th className="py-2 text-left font-medium">Requester</th>
                      <th className="py-2 text-left font-medium">Resource</th>
                      <th className="py-2 text-left font-medium">Status</th>
                      <th className="py-2 text-left font-medium text-right">Updated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { id: '#1248', requester: 'Alice', resource: 'Dataset A', status: 'Pending', updated: '2h ago' },
                      { id: '#1247', requester: 'Bob', resource: 'Dataset B', status: 'Approved', updated: '5h ago' },
                      { id: '#1246', requester: 'Carol', resource: 'Analysis Env', status: 'Rejected', updated: '1d ago' }
                    ].map((row) => (
                      <tr key={row.id}>
                        <td className="py-2">{row.id}</td>
                        <td className="py-2">{row.requester}</td>
                        <td className="py-2">{row.resource}</td>
                        <td className="py-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              row.status === 'Approved'
                                ? 'bg-emerald-50 text-emerald-700'
                                : row.status === 'Pending'
                                ? 'bg-amber-50 text-amber-700'
                                : 'bg-rose-50 text-rose-700'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2 text-right text-slate-500">{row.updated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Quickly narrow down requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-700">Status</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      All
                    </Button>
                    <Button variant="outline" size="sm">
                      Pending
                    </Button>
                    <Button variant="outline" size="sm">
                      Approved
                    </Button>
                    <Button variant="outline" size="sm">
                      Rejected
                    </Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-700">Requester</p>
                  <Input placeholder="Search by name" />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};




