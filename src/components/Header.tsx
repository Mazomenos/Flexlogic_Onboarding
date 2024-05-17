import ThemeChanger from "./ThemeChanger";
import FlexLogicLogo from "./FlexLogicLogo";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-base-100 shadow-md  h-20 flex justify-center items-center">
      <div className="basis-1/4 grid justify-items-center ">
        <FlexLogicLogo />
      </div>
      <div className="text-4xl font-sans-serif justify-center items-center text-center font-bold basis-1/2">
        {" "}
        {children}{" "}
      </div>
      <div className="basis-1/4 items-center grid justify-items-center">
        <ThemeChanger />
      </div>
    </div>
  );
}
