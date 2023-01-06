import { useNotificationStore } from "stores/notifications";

import { Notification } from "./Notification";

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </>
  );
};
