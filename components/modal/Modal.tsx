import  React, { ReactNode } from 'react' 
 
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
        <div role="dialog" aria-modal="true" aria-live="assertive" aria-labelledby="myModal" id="myModal" className="modal-overlay" >
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
          </div>
        </div>
    </>
  );
}

 
