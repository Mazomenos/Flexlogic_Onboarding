import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}
