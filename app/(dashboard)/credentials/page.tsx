import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { ShieldIcon } from "lucide-react";
import React, { Suspense } from "react";
import { GetCredentialsForUser } from "@/actions/credentials/getCredentialsForUser";

type Props = {};

const CredentialsPage = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Credentials</h1>
          <p className="text-muted-foreground">Manage your credentials</p>
        </div>
      </div>

      <div className="h-full py-6 space-y-8">
        <Alert>
          <ShieldIcon className="w-4 h-4 stroke-primary" />
          <AlertTitle className="text-primary">Encryption</AlertTitle>
          <AlertDescription>
            All information is securely encrypted, ensuring your data remains
            safe
          </AlertDescription>
        </Alert>

        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <UserCredentials />
        </Suspense>
      </div>
    </div>
  );
};

async function UserCredentials() {
  const credentials = await GetCredentialsForUser();
  return <div>User creds</div>;
}

export default CredentialsPage;
