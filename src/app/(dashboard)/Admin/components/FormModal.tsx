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
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormModal({
  children,
  buttonText,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="w-full justify-end flex">
            <Button
              className="w-56  h-12 bg-info dark:border-darkMode-primary dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary text-lg font-semibold text-info-content hover:bg-transparent hover:text-info hover:border-info hover:border-2 shadow transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              variant="outline"
            >
              {buttonText}
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[90%] md:max-h-[90%] lg:max-h-[80%] xl:max-h-[80%] 2xl:max-h-[80%]">
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
