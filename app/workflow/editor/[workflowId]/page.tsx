import React from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

type Props = {
  params: {
    workflowId: string;
  };
};

const page = async ({ params }: Props) => {
  const { workflowId } = params;
  const { userId } = auth();
  if (!userId) return <div>Unauthenticated</div>;

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) return <div>Workflow not found</div>;

  return <pre className="h-screen">{JSON.stringify(workflow, null, 4)}</pre>;
};

export default page;
