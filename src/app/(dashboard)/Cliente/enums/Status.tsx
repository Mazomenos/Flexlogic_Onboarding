export enum Status {
  COMPLETE = "Complete",
  IN_PROCESS = "In Process",
  FAILED = "Failed",
  UNKNOWN = "unknown",
}

export const statusColors: Record<Status, string> = {
  [Status.COMPLETE]: "text-success-content bg-success/30 ring-success",
  [Status.IN_PROCESS]: "text-warning-content bg-warning/40 ring-warning",
  [Status.FAILED]: "text-error-content bg-error/40 ring-error",
  [Status.UNKNOWN]: "text-base-content bg-info/40 ring-info",
};
