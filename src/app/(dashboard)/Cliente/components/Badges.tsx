import { complete, failed, in_process } from "../constants/Badges";

export default function Badges({ status }: { status: string }) {
  if (status === complete) {
    return (
      <span className="flex items-center justify-center p-1 text-primary-content rounded min-w-28 bg-success/40 ring-2 ring-success">
        {" "}
        <p className="font-bold text-lg">{status}</p>
      </span>
    );
  } else if (status === in_process) {
    return (
      <span className="flex items-center justify-center p-1 text-primary-content font-bold rounded min-w-28 bg-warning/40 ring-2 ring-warning">
        {" "}
        {status}{" "}
      </span>
    );
  } else if (status === failed) {
    return (
      <span className="flex items-center justify-center p-1 text-primary-content font-bold rounded min-w-28 bg-error/40 ring-2 ring-error">
        {" "}
        {status}{" "}
      </span>
    );
  } else {
    return (
      <span className="flex items-center justify-center p-1 text-primary-content font-bold rounded min-w-28 bg-info/40 ring-2 ring-info">
        {" "}
        {status}{" "}
      </span>
    );
  }
}
