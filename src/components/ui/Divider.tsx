interface DividerProps {
     children: React.ReactNode;
}

export default function Divider({ children }: DividerProps) {
     return (

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="w-full border-t border-neutral-800 mt-10 py-5 flex justify-evenly items-center">
=======
          <div className="w-full border-t border-b border-neutral-800 my-10 py-5 flex justify-evenly items-center">
>>>>>>> 8a41aae (Initialize footer)
=======
          <div className="w-full border-t border-neutral-800 mt-10 py-5 flex justify-evenly items-center">
>>>>>>> 25e2ed2 (Fix spacing issues)
               { children }
          </div>
     );
}
