export enum Status {
  COMPLETE = "Complete",
  IN_PROCESS = "In Process",
  FAILED = "Failed",
  UNKNOWN = "unknown",
  VALIDATE = "Validate",
}

export const statusColors: Record<Status, string> = {
  [Status.COMPLETE]:
    "text-success-content dark:text-darkMode-success-content bg-success/30 dark:bg-darkMode-success ring-success dark:ring-darkMode-success-content",
  [Status.IN_PROCESS]:
    "text-warning-content dark:text-darkMode-warning-content bg-warning/40 dark:bg-darkMode-warning ring-warning dark:ring-darkMode-warning-content",
  [Status.FAILED]:
    "text-error-content dark:text-darkMode-error-content bg-error/40 dark:bg-darkMode-error ring-error dark:ring-darkMode-error-content",
  [Status.UNKNOWN]:
    "text-base-content dark:text-darkMode-info-content bg-info/40 dark:bg-darkMode-info ring-info dark:ring-darkMode-info-content",
  [Status.VALIDATE]:
    "text-base-content dark:text-primary  bg-primary/40 ring-primary",
};
