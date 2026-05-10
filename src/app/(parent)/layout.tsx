export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-4xl p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Welldrum Academy: Parent Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
