"use client";

import React from "react";
import { Period } from "@/types/analytics";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  periods: Period[];
};

function PeriodSelector({ periods }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {periods.map((period, index) => (
          <SelectItem
            key={index}
            value={`${period.month}-${period.year}`}
          >{`${period.month}-${period.year}`}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default PeriodSelector;
