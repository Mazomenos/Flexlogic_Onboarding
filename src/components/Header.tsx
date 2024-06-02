import ThemeChanger from "./ThemeChanger";
import FlexLogicLogo from "./FlexLogicLogo";
import { useAppContext } from "@/context/context";

export default function Header({ children }: { children: React.ReactNode }) {

  const {state, setState} = useAppContext()
  return (
    <div className="bg-base-100 dark:bg-darkMode-base-100 shadow-md  h-20 flex justify-center items-center">
      <div className="basis-1/4 grid justify-items-center ">
        <FlexLogicLogo />
      </div>
      <div className="text-4xl justify-center items-center text-center font-semibold   basis-1/2">
        {state}
      </div>
      <div className="basis-1/4 items-center grid justify-items-center">
        <ThemeChanger />
      </div>
    </div>
  );
}
