import toast from "react-hot-toast";

export const GenericToast = (text:string) => {
    toast(text)
}

export const SuccessAction = (text: string) => {
    toast.success(text)
}

export const FailedAction = (text:string) => {
    toast.error(text)
}