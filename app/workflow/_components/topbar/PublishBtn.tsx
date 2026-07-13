import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import React from "react";
import useExecutionPlan from "@/components/hooks/useExecutionPlan";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import { useReactFlow } from "@xyflow/react";

type Props = {
  workflowId: string;
};

function PublishBtn({ workflowId }: Props) {
  const generate = useExecutionPlan();
  const { toObject } = useReactFlow();

  const mutation = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      toast.success("Execution started", { id: "flow-execution" });
    },
    onError: () => {
      toast.error("Something went wrong", { id: "flow-execution" });
    },
  });
  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2"
      disabled={mutation.isPending}
      onClick={() => {
        const plan = generate();
        if (!plan) return;

        mutation.mutate({
          workflowId,
          flowDefinition: JSON.stringify(toObject()),
        });
      }}
    >
      <UploadIcon size={16} className="stroke-green-400" />
      Publish
    </Button>
  );
}

export default PublishBtn;
