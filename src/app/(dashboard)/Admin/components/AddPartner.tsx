"use client";
import BrakeRule from "@/components/BrakeRule";
import { useRouter } from "next/navigation";

import { DialogTitle } from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Button } from "@/components/ui/button";
import FormModal from "./FormModal";
import ButtonB from "./ButtonB";
import { FaUpload } from "react-icons/fa6";
import { ChangeEvent, useRef, useState } from "react";

const FormSchema = z.object({
  partnerName: z
    .string({
      required_error: "Please input a trading partner name",
    })
    .min(2, { message: "Please input at least 2 characters" }),
  delimeters: z.string({
    required_error: "Please select a set of delimieters",
  }),
  ediVersion: z.string({ required_error: "Please select an EDI version" }),
  eol: z.string({ required_error: "Please select an EOL" }),
});

// !TODO: Change to DB call
const delimitersOptions = [
  { value: ",", label: "Comma (,)" },
  { value: ";", label: "Semicolon (;)" },
  { value: "|", label: "Pipe (|)" },
];

// !TODO: Change to DB call
const ediVersionOptions = [{ value: "4010", label: "X12 4010" }];

// !TODO: Change to DB call
const eolOptions = [{ value: "LF", label: " ~ " }];

export default function AddPartner() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      partnerName: "",
    },
  });

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // !TODO: Here we are going to use a POST method to post to DB
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newData = {
      ...data,
      partnerName: data.partnerName.split(" ").join("_"),
    };
    console.log(JSON.stringify(newData, null, 2));
    console.log(file);
  }

  return (
    <FormModal buttonText="Add Trading Partner +">
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
                  name="partnerName"
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
                  name="delimeters"
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
                  name="ediVersion"
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
                  name="eol"
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
                accept=".pdf"
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
