import { cn } from "@/lib/utils";
import { WorkflowExecutionStatus } from "@/types/workflow";
import React from "react";

type Props = {
  status: WorkflowExecutionStatus;
};

const indicatorColors: Record<WorkflowExecutionStatus, string> = {
  PENDING: "bg-slate-400",
  RUNNING: "bg-yellow-400",
  FAILED: "bg-red-400",
  COMPLETED: "bg-esmerald-600",
};

const ExecutionStatusIndicator = ({ status }: Props) => {
  return (
    <div className={cn("w-2 h-2 rounded-full", indicatorColors[status])}></div>
  );
};

export default ExecutionStatusIndicator;
