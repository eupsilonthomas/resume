 

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-[80vh]">
      <div>
        <div>{children}</div>
      </div>
    </main>
  )
}