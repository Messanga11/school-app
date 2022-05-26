import MessagePage from "@/components/MessagePage";
import DashboardLayout from "@/layouts/DashboardLayout";

const Messages = () => {

  return (
    <DashboardLayout title="Messages" guardian>
      <MessagePage guardian />
    </DashboardLayout>
  );
};

export default Messages;
