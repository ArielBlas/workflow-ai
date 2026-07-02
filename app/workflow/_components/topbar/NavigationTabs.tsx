"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type Props = {
  workflowId: string;
};

const NavigationTabs = ({ workflowId }: Props) => {
  return (
    <Tabs className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <Link href={`/workflow/editor/${workflowId}`}>Editor</Link>
        <Link href={`/workflow/runs/${workflowId})`}>Runs</Link>
      </TabsList>
    </Tabs>
  );
};

export default NavigationTabs;
