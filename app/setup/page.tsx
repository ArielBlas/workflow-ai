import { SetupUser } from "@/actions/billing/setupUser";
import React from "react";

type Props = {};

const SetupPage = async (props: Props) => {
  return await SetupUser();
};

export default SetupPage;
