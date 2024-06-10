"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import BrakeRule from "@/components/BrakeRule";
import { FaUpload } from "react-icons/fa6";

import { DialogClose, DialogFooter, DialogTitle } from "@/components/ui/dialog";

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
import { Button } from "@/components/ui/button";
import FormModal from "./FormModal";

// Form main schema, here Zod knows how to validate form data
const FormSchema = z.object({
  ediType: z.string({ required_error: "Please select an EDI type" }),
  delimeters: z.string({ required_error: "Please select delimiters" }),
  eol: z.string({ required_error: "Please select an EOL" }),
});

// #TODO: Change to DB data
const EdiDocument = [
  { key: "856", label: "EDI 856" },
  { key: "810", label: "EDI 810" },
];

// #TODO: Change to DB data
const delimitersOptions = [
  { value: ",", label: "Comma (,)" },
  { value: ";", label: "Semicolon (;)" },
  { value: "|", label: "Pipe (|)" },
];

// #TODO: Change to DB data
const eolOptions = [{ value: "LF", label: " ~ " }];

export default function AddDocument() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isOpen, setIsOpenForms] = useState(false);
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

  // #TODO: Change to post data to DB, the uploaded file is in the
  // 'file' useState
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsOpenForms(false);
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <FormModal
      isOpen={isOpen}
      setIsOpen={setIsOpenForms}
      buttonText="Add Document +"
    >
      <DialogTitle className="text-2xl text-center">
        Create Document
      </DialogTitle>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid px-1 grid-cols-1 sm:grid-cols-3 gap-4 justify-between">
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="ediType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base"> EDI Type </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an EDI document type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="850">EDI 850</SelectItem>
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
                            <SelectValue placeholder="Select a delimiter set" />
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
            <p>EDI Specifications Document </p>
            <div
              className="flex flex-col mt-0 text-primary-content/40 dark:text-darkMode-foreground/40 items-center hover:bg-info/30 hover:text-info-content dark:hover:bg-darkMode-info dark:hover:text-darkMode-info-content justify-center border-2 border-dashed border-primary-content/40 dark:border-darkMode-foreground/40 p-6 rounded-lg cursor-pointer hover:border-info-content dark:hover:border-darkMode-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleUploadClick}
              style={{ marginTop: "0.8rem" }}
            >
              <FaUpload className="text-4xl mb-2" />
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
                className="w-28 p-1 text-base bg-info dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-brand-blue ring-2 ring-primary hover:ring-primary dark:ring-darkMode-primary hover:border-1"
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
