import { Loader2Icon } from "lucide-react";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div
      className="flex h-screen w-full
     items-center justify-center"
    >
      <Loader2Icon size={30} className="animate-spin stroke-primary" />
    </div>
  );
};

export default loading;
