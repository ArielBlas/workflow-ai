import "server-only";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function ExecuteWorkflow(executionId: string) {
  const execution = await prisma.workflowExecution.findUnique({
    where: {
      id: executionId,
    },
    include: {
      workflow: true,
      phases: true,
    },
  });

  if (!execution) {
    throw new Error("execution not found");
  }

  const environment = { phases: {} };

  revalidatePath("/workflows/runs");
}
