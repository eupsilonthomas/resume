//the cards
'use client';
import Card from '../../../components/card';
 
type Word = {
  word: string | '';
  gloss: string | '';
}

function Cards(props:any) {
  let { word }  = props;
  // let { words } = props;
  let background:string ='';

  console.log('WORD', word)


    return (
      <div className="flex flex-col items-center overflow-auto">
        <div className="mb-8 pb-8 pt-8 mt-8 shadow-xl rounded-xl gap-4 min-w-[85%] bg-slate-50 grid grid-flow-col auto-cols-max ] ">
           { word ? (
            <div key={word.word} className={`${background} word-card`}> <Card playCards={true} info={true} word={word} key={word.word}></Card></div>
           ):false
           }
        </div>
      </div>
    )
  }

export default Cards;