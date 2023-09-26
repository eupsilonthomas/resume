import WordList from './WordList';
import ButtonMore from './ButtonMore';

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex center flex-wrap-reverse  min-h-[79vh] overflow-hidden center-container m-4 shadow-xl rounded-xl  ">
      <div className="sm:flex-12 lg:flex-1">
        <WordList/>
        <ButtonMore/>
      </div>
      <div className="xs:flex-1">{children}</div>
    </main>
  )
}