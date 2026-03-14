import React from "react";
import layout from "../layout";
import { Separator } from "react-resizable-panels";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          Workflow AI
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 contianer py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
