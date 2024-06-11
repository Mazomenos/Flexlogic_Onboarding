/*
"use client"

import { GetUser } from "@/DA/usersControllers";
import { DeletePartnership, GetPartnershipsFromUser, PostPartnership, UpdatePartnership } from "@/DA/tradingPartnerControllers";
import { GetElement } from "@/DA/elementControllers";
import { GetSegment } from "@/DA/segmentControllers";
import { GetTPDocsFromPartnership, postTPDoc, updateTPDoc } from "@/DA/TpDocsController";
import { useState } from "react";
import { TPDocRequired } from "@prisma/client";


export default function Home() {
    const [id, setId] = useState("")
    //Partnership data
    const [name, setName] = useState("")
    const [initial850EDI, setInitial850EDI] = useState("")
    const [delimeters, setDelimeters] = useState("")
    const [EDIVersion, setEDIVersion] = useState("")
    const [EOL, setEOL] = useState("")


    const useGetUser = async () => {
        const res = await GetUser(id)
        console.log(res)
    }

    const useGetPartnershipsFromUser = async () => {
        const res = await GetPartnershipsFromUser(id)
        console.log(res)
    }

    const usePostPartnership = async () => {
        const res = await PostPartnership("El pepe", ["*", ">", "~"], "X12 4010", "CR")
        console.log(res)
    }

    const useUpdatePartnership = async () => {
        const DocsRequired: TPDocRequired[] = [{
            idDoc: "jejejeje",
            Doc: "850",
            Version: "lkdfjlñ",
            isVisible: true
        }]
        const res = await UpdatePartnership(id, "Etesesh", "jejejeje", ["*", ">", "~"], "X12 4010", "CR", DocsRequired)
        console.log(res)
    }

    const useDeletePartnership = async () => {
        const res = await DeletePartnership(id)
        console.log(res)
    }

    const useGetTPDocsFromPartnership = async () => {
        const res = await GetTPDocsFromPartnership(id)
        console.log(res)
    }

    const usePostTPDoc = async () => {
        const res = await postTPDoc(id, 999)
        console.log(res)
    }

    const useUpdateTPDoc = async () => {
        const res = await updateTPDoc(id, {})
        console.log(res)
    }

    const useDeleteTPDoc = async () => {
        const res = await DeletePartnership(id)
        console.log(res)
    }

    const useGetElement = async () => {
        const res = await GetElement(id)
        console.log(res)
    }

    const useGetSegment = async () => {
        const res = await GetSegment(id)
        console.log(res)
    }

    return (
        <main>
            <h1>Test de controladores</h1>
            <div>
                <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)}></input>
            </div>
            <div>
                <button className="primary" onClick={useGetUser}>GetUser()</button>
            </div>
            <div>
                <button className="primary" onClick={useGetPartnershipsFromUser}>GetPartnershipsFromUser()</button>
                <button className="primary" onClick={usePostPartnership}>PostPartnership()</button>
                <button className="primary" onClick={useUpdatePartnership}>UpdatePartnership()</button>
                <button className="primary" onClick={useDeletePartnership}>DeletePartnership()</button>
            </div>
            <div>
                <button className="primary" onClick={useGetTPDocsFromPartnership}>GetTPDocsFromPartnership()</button>
                <button className="primary" onClick={usePostTPDoc}>PostTPDoc()</button>
                <button className="primary" onClick={useUpdateTPDoc}>UpdateTPDoc()</button>
                <button className="primary" onClick={useDeleteTPDoc}>DeleteTPDoc()</button>
            </div>
            <div>
                <button className="primary" onClick={useGetElement}>GetElement()</button>
            </div>
            <div>
                <button className="primary" onClick={useGetSegment}>GetSegment()</button>
            </div>
        </main>
    );
}
    */