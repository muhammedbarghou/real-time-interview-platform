import Agent from "@/components/interview/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

async function Page() {
  const user = await getCurrentUser();
  return (
    <div>
      <h3>Interview agent</h3>
      <Agent userName={user?.name} userId={user?.id} type={"generate"} />
    </div>
  );
}

export default Page;
