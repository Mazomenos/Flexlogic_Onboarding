"use client";
import BrakeRule from "@/components/BrakeRule";
import { useRouter } from "next/navigation";
import { CreateTradingPartner } from "@/DA/tradingPartnerControllers";
import { TradingPartner } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,

  DialogTitle,
} from "@/components/ui/dialog";
import CloseButton from "@/components/CloseButton";
import { Button } from "@/components/ui/button";
import { useHeaderContext } from "@/app/context/headerTrigger";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import FormModal from "./FormModal";
import ButtonB from "./ButtonB";
import { FaUpload } from "react-icons/fa6";
import { ChangeEvent, useRef, useState } from "react";
import { TradingPartners } from "../../../../../prisma/TradingPartners";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  Name: z
    .string({
      required_error: "Please input a trading partner name",
    })
    .min(2, { message: "Please input at least 2 characters" }),
  Delimiters: z.string({
    required_error: "Please select a set of delimieters",
  }),
  Version: z.string({ required_error: "Please select an EDI version" }),
  EOL: z.string({ required_error: "Please select an EOL" }),
});

// #TODO: Change to DB call
const delimitersOptions = [
  { value: ", - @", label: "Comma (,)" },
  { value: ";", label: "Semicolon (;)" },
  { value: "|", label: "Pipe (|)" },
];

// #TODO: Change to DB call
const ediVersionOptions = [{ value: "4010", label: "X12 4010" }];

// #TODO: Change to DB call
const eolOptions = [{ value: "LF", label: " ~ " }];

export default function AddPartner() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
    },
  });

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isOpen, setIsOpenForms] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {headerTrigger, setHeaderTrigger} = useHeaderContext()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setFile(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const router = useRouter();

  const newTP = async (newData: 
    {
      Name: string,
      Initial850EDI: string, 
      Delimiters: string[],
      Version: string,
      EOL: string,
      isVisible: boolean
      DocsRequired: any[]}) => 
    {
    try {
      const response = await CreateTradingPartner(newData)

      if (response) {
        const data = await response;
        console.log(data)
        if (data) {
          setHeaderTrigger(!headerTrigger)
          return data
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  // !TODO: Here we are going to use a POST method to post to DB
  async function onSubmit(data: {
    Name: string,
    Delimiters: string,
    Version: string,
    EOL: string,
  }) {

    //Proceso de string a array para delimiters

    const DelimitersArr = data.Delimiters.split(" ")
    console.log(DelimitersArr);

    //Proceso de subir documento a la base y recibir url al storage
    //PENDING

    const newData: {
      Name: string,
      Initial850EDI: string, 
      Delimiters: string[],
      Version: string,
      EOL: string,
      isVisible: boolean
      DocsRequired: any[]
    } = {
      Name: data.Name.split(" ").join("_"),
      Initial850EDI: "",
      Delimiters: DelimitersArr,
      Version: data.Version,
      EOL: data.EOL,
      isVisible: false,
      DocsRequired: []

    };

    //Llamada a la base de datos
    const newTradingPartner = await newTP(newData)
    setIsOpenForms(false);
    //router.refresh()
    router.push(`/Admin/${newData.Name}`)
    console.log(JSON.stringify(newData, null, 2));
    console.log(file);
  }

  return (
    <FormModal
      buttonText="Add Trading Partner +"
      isOpen={isOpen}
      setIsOpen={setIsOpenForms}
    >
      <DialogTitle className="text-2xl text-center">
        Add Trading Partner
      </DialogTitle>
      <BrakeRule classname="my-2" />
      <div className="w-full overflow-y-scroll">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid px-1 grid-cols-1 gap-4 justify-between">
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Partner Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type trading partner name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid px-1 grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="Delimiters"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base"> Delimiters </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a delimiters set" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {delimitersOptions.map((delimiter, index) => (
                            <SelectItem key={index} value={delimiter.value}>
                              {delimiter.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="Version"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base"> EDI Version </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an EDI version" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ediVersionOptions.map((version, index) => (
                            <SelectItem key={index} value={version.value}>
                              {version.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="EOL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base"> EOL </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a EOL set" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eolOptions.map((eol, index) => (
                            <SelectItem key={index} value={eol.value}>
                              {eol.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <p>EDI 850 document sample </p>
            <div
              className="flex flex-col mt-0 text-primary-content/40 dark:text-darkMode-foreground/40 items-center hover:bg-info/30 hover:text-info-content dark:hover:bg-darkMode-info dark:hover:text-darkMode-info-content justify-center border-2 border-dashed border-primary-content/40 dark:border-darkMode-foreground/40 p-6 rounded-lg cursor-pointer hover:border-info-content dark:hover:border-darkMode-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleUploadClick}
              style={{ marginTop: "0.8rem" }}
            >
              <FaUpload className="text-6xl mb-4" />
              <input
                type="file"
                id="fileInput"
                accept=".edi,.txt,.example"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <p className="">
                {fileName
                  ? fileName
                  : "Drag & drop a file here or click to upload"}
              </p>
            </div>
            <div className="p-1 w-full flex justify-center">
              
              <Button
                disabled={file == null ? true : false}
                className="w-36 p-1 text-base bg-info dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-brand-blue ring-2 ring-primary hover:ring-primary dark:ring-darkMode-primary hover:border-1"
                type="submit"
                
                
              >
                Create
              </Button>
             
            </div>
          </form>
        </Form>

        </div>
      </FormModal>
    );
}

