/**
 * Stylized browser-frame mockups, one per project type.
 * Pure JSX/CSS — no real screenshots needed (and honest about that).
 */
export default function ProjectMock({ kind, slug }) {
  return (
    <div className="rounded-lg border border-bg-line bg-bg-surface overflow-hidden font-mono">
      {/* fake browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 border-b border-bg-line">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-[10px] text-ink-mute">{slug}.local/admin</span>
      </div>

      {kind === 'rfid'     && <RfidMock />}
      {kind === 'calendar' && <CalendarMock />}
      {kind === 'student'  && <StudentMock />}
    </div>
  );
}

function RfidMock() {
  const rows = [
    ['07:42', '2024-0114', 'R. Cruz',       'IN'],
    ['07:43', '2024-0027', 'M. Reyes',      'IN'],
    ['07:44', '2024-0188', 'J. Dela Peña',  'IN'],
    ['07:45', '2024-0042', 'A. Santos',     'IN'],
    ['11:58', '2024-0027', 'M. Reyes',      'OUT'],
  ];
  return (
    <div className="grid grid-cols-[80px,1fr] min-h-[220px]">
      <aside className="bg-black/30 border-r border-bg-line p-2 flex flex-col gap-1">
        {['dashboard','students','logs','cards','users'].map((s, i) => (
          <span
            key={s}
            className={`text-[10px] px-1.5 py-1 rounded ${
              i === 0 ? 'bg-accent/15 text-accent' : 'text-ink-mute'
            }`}
          >
            {s}
          </span>
        ))}
      </aside>
      <div className="p-3">
        <div className="text-[11px] text-ink-dim mb-1">RFID logs · today</div>
        <table className="w-full text-[10px]">
          <thead className="text-ink-mute">
            <tr className="border-b border-bg-line">
              {['time','id','name','in/out'].map(h => (
                <th key={h} className="text-left font-medium py-1 pr-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-dashed border-bg-line/60">
                <td className="py-1 pr-2 text-ink-dim">{r[0]}</td>
                <td className="py-1 pr-2 text-ink-dim">{r[1]}</td>
                <td className="py-1 pr-2 text-ink-dim">{r[2]}</td>
                <td className={`py-1 pr-2 ${r[3] === 'IN' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {r[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CalendarMock() {
  // 4 rows of 7 days, with a few "booked" days highlighted
  const dows  = ['M','T','W','T','F','S','S'];
  const cells = [
    null,null,null,null,'1','2','3',
    '4','5','6','7','8','9','10',
    '11','12','13','14','15','16','17',
    '18','19','20','21','22','23','24',
  ];
  const booked = { '1':'b1', '7':'b1', '15':'b1', '21':'b1', '5':'b2', '13':'b2', '24':'b2', '9':'b3', '18':'b3' };
  const colorMap = {
    b1: 'bg-accent/20 text-accent border-accent/30',
    b2: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    b3: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  };
  return (
    <div className="grid grid-cols-[80px,1fr] min-h-[220px]">
      <aside className="bg-black/30 border-r border-bg-line p-2 flex flex-col gap-1">
        {['dashboard','calendar','products','services','reports'].map((s, i) => (
          <span
            key={s}
            className={`text-[10px] px-1.5 py-1 rounded ${
              i === 1 ? 'bg-accent/15 text-accent' : 'text-ink-mute'
            }`}
          >
            {s}
          </span>
        ))}
      </aside>
      <div className="p-3">
        <div className="text-[11px] text-ink-dim mb-2">Bookings · May 2026</div>
        <div className="grid grid-cols-7 gap-1">
          {dows.map((d, i) => (
            <div key={`d${i}`} className="text-[9px] uppercase text-ink-mute text-center">{d}</div>
          ))}
          {cells.map((c, i) => (
            <div
              key={`c${i}`}
              className={`h-5 grid place-items-center text-[9px] rounded border ${
                c && booked[c]
                  ? colorMap[booked[c]]
                  : 'bg-bg/40 border-bg-line text-ink-mute'
              }`}
            >
              {c ?? ''}
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-3 text-[10px] text-emerald-400">
          <span>+38 this week</span>
          <span className="text-ink-mute">12 pending</span>
        </div>
      </div>
    </div>
  );
}

function StudentMock() {
  const students = [
    ['2024-001', 'Maria Santos', '3.8', '95%'],
    ['2024-002', 'Juan Cruz', '3.5', '88%'],
    ['2024-003', 'Ana Reyes', '3.9', '92%'],
    ['2024-004', 'Carlos Mendoza', '3.2', '85%'],
  ];
  return (
    <div className="grid grid-cols-[80px,1fr] min-h-[220px]">
      <aside className="bg-black/30 border-r border-bg-line p-2 flex flex-col gap-1">
        {['dashboard','students','attendance','grades','reports'].map((s, i) => (
          <span
            key={s}
            className={`text-[10px] px-1.5 py-1 rounded ${
              i === 0 ? 'bg-accent/15 text-accent' : 'text-ink-mute'
            }`}
          >
            {s}
          </span>
        ))}
      </aside>
      <div className="p-3">
        <div className="text-[11px] text-ink-dim mb-1">Student Records · Active</div>
        <table className="w-full text-[10px]">
          <thead className="text-ink-mute">
            <tr className="border-b border-bg-line">
              {['id','name','gpa','attendance'].map(h => (
                <th key={h} className="text-left font-medium py-1 pr-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b border-dashed border-bg-line/60">
                <td className="py-1 pr-2 text-ink-dim">{s[0]}</td>
                <td className="py-1 pr-2 text-ink">{s[1]}</td>
                <td className="py-1 pr-2 text-accent">{s[2]}</td>
                <td className="py-1 pr-2 text-emerald-400">{s[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 flex gap-3 text-[10px] text-accent">
          <span>1,234 students</span>
          <span className="text-ink-mute">Real-time updates</span>
        </div>
      </div>
    </div>
  );
}
