import Agent from "@/components/interview/Agent";
function Page() {
  return (
    <div>
      <h3>Interview agent</h3>
      <Agent userName={"you"} type={"generate"} />
    </div>
  );
}

export default Page;
