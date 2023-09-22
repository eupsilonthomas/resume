import WordList from './WordList';


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-[79vh] center-container">
      <div className="grid-cols m-auto">
        <div className="center m-8">
          <div>{children}</div>
          <WordList/>
        </div>
      </div>
    </main>
  )
}