"use client";

import React, { useState, useRef, ChangeEvent} from "react";
import { FaUpload } from "react-icons/fa6";

import { DialogTitle } from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uploadFileToAzure } from "@/DA/fileManagerControllers";
import { postTPDoc } from "@/DA/TpDocsController";

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
import { url } from "inspector";
import { Delimiters_enum, DocType_enum, EOL_enum } from "@prisma/client";

const FormSchema = z.object({
  ediType: z.nativeEnum(DocType_enum, { required_error: "Please select an EDI type" }),
  delimeters: z.nativeEnum(Delimiters_enum, { required_error: "Please select delimiters" }),
  eol: z.nativeEnum(EOL_enum, { required_error: "Please select an EOL" }),
});

// #TODO: Change to DB data
const edi_documentOptions = [
  { value: DocType_enum.EDI_810, label: "EDI 810" },
  { value: DocType_enum.EDI_855, label: "EDI 855" },
  { value: DocType_enum.EDI_856, label: "EDI 856" },
];
const delimitersOptions = [
  { value: Delimiters_enum.STAR_MORE, label: "Star(*), More(>)" },
];

const eolOptions = [
  { value: EOL_enum.TILDE, label: "Tilde (~)" },
  { value: EOL_enum.CR, label: "CR (\r)" },
  { value: EOL_enum.LF, label: "LF (\n)" }
];

export default function AddDocument({ partnerName }: { partnerName: string }) {

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
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsOpenForms(false);

    console.log(JSON.stringify(data, null, 2));

    // Use url for db
    // #TODO: Add new parameter to TradingPartner to store the URL
    let url = ""
    if (file) {
      const base64 = await readFileAsBase64(file);
      url = await uploadFileToAzure({
        name: file.name,
        type: file.type,
        data: base64,
      },"");
    }

    try {
      const response = await postTPDoc(partnerName, data.ediType, data.delimeters, data.eol, url);
      if (response) { console.log("posted") }
    }
    catch (error) {
      console.log(error);
    }

  };

  function readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

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
                          {edi_documentOptions.map((doctype, index) => (
                            <SelectItem key={index} value={doctype.value}>
                              {doctype.label}
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
                  : "Click to upload a file"}
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