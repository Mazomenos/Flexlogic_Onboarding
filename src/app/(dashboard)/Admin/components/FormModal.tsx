import CloseButton from "@/components/CloseButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children: React.ReactNode;
  buttonText: string;
}

export default function FormModal({ children, buttonText }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-56 h-12 bg-info dark:border-darkMode-primary dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary text-lg font-semibold text-info-content hover:bg-transparent hover:text-info hover:border-info hover:border-2 shadow transition motion-reduce:transition-none motion-reduce:hover:transform-none"
            variant="outline"
          >
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="w-full flex flex-col justify-center">
            <DialogClose asChild>
              <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                <CloseButton onClick={() => {}} />
              </div>
            </DialogClose>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
