import { ErrorAlert } from "components/Elements/Alert/ErrorAlert";
import { InfoAlert } from "components/Elements/Alert/InfoAlert";
import { SuccessAlert } from "components/Elements/Alert/SuccessAlert";
import { WarningAlert } from "components/Elements/Alert/WarningAlert";
import { ReactNode, useEffect } from "react";

export type NotificationProps = {
  notification: {
    id: string;
    type: "info" | "warning" | "success" | "error";
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

const NotificationTypes = {
  info: (children: ReactNode) => <InfoAlert withOutIcon>{children}</InfoAlert>,
  success: (children: ReactNode) => (
    <SuccessAlert withOutIcon>{children}</SuccessAlert>
  ),
  warning: (children: ReactNode) => (
    <WarningAlert withOutIcon>{children}</WarningAlert>
  ),
  error: (children: ReactNode) => (
    <ErrorAlert withOutIcon>{children}</ErrorAlert>
  ),
};

export const Notification = ({
  notification: { id, type, title, message },
  onDismiss,
}: NotificationProps) => {
  useEffect(() => {
    setTimeout(() => {
      onDismiss(id);
    }, 5000);
  }, []);

  return (
    <>
      <div className="toast z-50">
        {NotificationTypes[type](
          <div className="relative w-60">
            <p className="text-xl mb-1 pr-3 font-bold">{title}</p>
            <p>{message}</p>
            <button
              className="absolute -top-1 -right-1"
              onClick={() => {
                onDismiss(id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
