"use client";
import Image from "next/image";
import { ThemeProvider } from "@/components/ThemeProvider";
import FlexLogicLogo from "@/components/FlexLogicLogo";
import LoginButton from "@/components/LoginButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClient = () => {
    router.push(`/Cliente/`);
  }

  const handleFlexlogic = () => {
    router.push(`/Admin/`);
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-info w-screen h-screen dark:bg-darkMode-base-200">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-20 mt-32">
            <FlexLogicLogo />
          </div>
          <div className="flex justify-evenly w-full h-full">

            <div className="w-2/5 xl:w-1/5 lg:w-2/5 md:w-2/5 sm:w-1/3 h-5/6 xl:h-4/5 lg:h-4/5 md:h-4/5 sm:h-3/4 bg-slate-100 rounded flex flex-col items-center p-4 justify-around dark:bg-darkMode-base-100 ">
              <div>
                <p className="md:text-3xl sm:text-sm text-center mb-4 text-black dark:text-slate-100">
                  Welcome,
                </p>
                <p className="md:text-3xl sm:text-sm text-center mb-4 text-black dark:text-slate-100">
                  User Flexlogic
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/FlexLogic.svg"
                  alt="Logo Flexlogic"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-full">
                <LoginButton onClick={() => handleFlexlogic()} />
              </div>
            </div>

            <div className="w-2/5 xl:w-1/5 lg:w-2/5 md:w-2/5 sm:w-1/3 h-5/6 xl:h-4/5 lg:h-4/5 md:h-4/5 sm:h-3/4 bg-slate-100 rounded flex flex-col items-center p-4 justify-around dark:bg-darkMode-base-100 ">
              <div>
                <p className="md:text-3xl sm:text-sm text-center mb-4 text-black dark:text-slate-100">
                  Welcome,
                </p>
                <p className="md:text-3xl sm:text-sm text-center mb-4 text-black dark:text-slate-100">
                  User Flexlogic
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/Client.svg"
                  alt="Logo Client"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-full">
                <LoginButton onClick={() => handleClient()} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
