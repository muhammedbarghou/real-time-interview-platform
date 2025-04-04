import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/home/InterviewCard";

function Page() {
  return (
    <>
      <section className={"card-cta"}>
        <div className={"flex flex-col gap-6 max-w-lg"}>
          <h2>Get Interview-Ready with AI-powered practice & feedback</h2>
          <p className={"text-lg"}>
            Practice on realistic interview scenarios & get real-time feedback
          </p>
          <Button className={"btn-primary"}>
            <Link href="/interview">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt={"robot-dude"}
          className={"max-sm:hidden"}
          height={400}
          width={400}
        />
      </section>
      <section className={"flex flex-col gap-6 mt-8 "}>
        <h2>Your Interviews</h2>
        <div className={"interviews-section"}>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      <section className={"flex flex-col gap-6 mt-8"}>
        <h2>Take your first interview</h2>
        <div className={"interviews-section"}>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
        {/*<p>You can practice and get feedback on your first interview</p>*/}
      </section>
    </>
  );
}

export default Page;
