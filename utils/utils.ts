export const alphaNumericSort = (arr:any) => {
  const sorter = (a:any, b:any) => {
     const isNumber = (v:any) => (+v).toString() === v;
     const aPart = a.name.match(/\d+|\D+/g);
     const bPart = b.name.match(/\d+|\D+/g);
     let i = 0; let len = Math.min(aPart.length, bPart.length);
     while (i < len && aPart[i] === bPart[i]) { i++; };
        if (i === len) {
           return aPart.length - bPart.length;
     };
     if (isNumber(aPart[i]) && isNumber(bPart[i])) {
        return aPart[i] - bPart[i];
     };
     return aPart[i].localeCompare(bPart[i]); };
     arr.sort(sorter);
};

 