import { GetPeriods } from "@/actions/analytics/getPeriods";
import React, { Suspense } from "react";
import PeriodSelector from "./_components/PeriodSelector";
import { Period } from "@/types/analytics";

type Props = {
  searchParams: {
    month?: string;
    year?: string;
  };
};

const HomePage = ({ searchParams }: Props) => {
  const currentDate = new Date();
  const { month, year } = searchParams;
  const period: Period = {
    month: month ? parseInt(month) : currentDate.getMonth(),
    year: year ? parseInt(year) : currentDate.getFullYear(),
  };
  return (
    <div>
      <Suspense>
        <PeriodSelectorWrapper selectedPeriod={period} />
      </Suspense>
    </div>
  );
};

async function PeriodSelectorWrapper({
  selectedPeriod,
}: {
  selectedPeriod: Period;
}) {
  const periods = await GetPeriods();

  return <PeriodSelector selectedPeriod={selectedPeriod} periods={periods} />;
}

export default HomePage;
