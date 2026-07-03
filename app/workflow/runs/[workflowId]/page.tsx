import React from "react";
import Topbar from "@/app/workflow/_components/topbar/Topbar";
import { GetWorkflowExecutions } from "@/actions/workflows/getWorkflowExecutions";

type Props = {
  params: { workflowId: string };
};

const ExecutionPage = ({ params }: Props) => {
  return (
    <div className="h-full w-full overflow-auto">
      <Topbar
        workflowId={params.workflowId}
        hideButtons
        title="All runs"
        subtitle="List of all your workflow runs"
      />
      <ExecutionsTable workflowId={params.workflowId} />
    </div>
  );
};

async function ExecutionsTable({ workflowId }: { workflowId: string }) {
  const executions = await GetWorkflowExecutions(workflowId);
  if (!executions) {
    return <div>No data</div>;
  }
}

export default ExecutionPage;
