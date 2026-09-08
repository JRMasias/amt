interface YellowButtonProps {
     children: React.ReactNode;
}

export default function YellowButton({ children }: YellowButtonProps) {
     return (
          <button type="button" className="bg-linear-to-br from-[#FFAA00] to-[#FF5500] text-white text-2xl font-bold yellow-button py-4 px-8 rounded-md">
               { children }
          </button>
     );
}
