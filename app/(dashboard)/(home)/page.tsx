import { GetPeriods } from "@/actions/analytics/getPeriods";
import React, { Suspense } from "react";
import PeriodSelector from "./_components/PeriodSelector";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Suspense>
        <PeriodSelectorWrapper />
      </Suspense>
    </div>
  );
};

async function PeriodSelectorWrapper() {
  const periods = await GetPeriods();

  return <PeriodSelector periods={periods} />;
}

export default HomePage;
