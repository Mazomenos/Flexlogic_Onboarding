import { Status, statusColors } from "../enums/Status";

export default function Badge({ status }: { status: string }) {
  const colorClass =
    statusColors[status as Status] || statusColors[Status.UNKNOWN];

  return (
    <span
      className={`flex items-center justify-center p-1 text-lg font-semibold rounded min-w-28  ring-2 ${colorClass}`}
    >
      {status}
    </span>
  );
}
