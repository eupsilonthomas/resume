import WordList from './WordList';


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex  min-h-[79vh] center-container">
      <div className="grid-cols-1">
        <div className="grid">
          <WordList/>
        </div>
        <div className="grid">
          <div>{children}</div>
        </div>
      </div>
    </main>
  )
}