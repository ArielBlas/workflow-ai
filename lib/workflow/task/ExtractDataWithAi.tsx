import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import {
  TextIcon,
  LucideProps,
  MousePointerClick,
  BrainIcon,
} from "lucide-react";

export const ExtractDataWithAiTask = {
  type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
  label: "Extract data with AI",
  icon: (props: LucideProps) => (
    <BrainIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: false,
  credits: 4,
  inputs: [
    {
      name: "Content",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
    {
      name: "Credentials",
      type: TaskParamType.CREDENTIAL,
      required: true,
    },
    {
      name: "Prompt",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
  ] as const,
  outputs: [
    {
      name: "Extracted data",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
