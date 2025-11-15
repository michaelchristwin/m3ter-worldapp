"use client";

import { Button, Input, Skeleton } from "@worldcoin/mini-apps-ui-kit-react";
import { M3terHead } from "m3ters";
import { useState } from "react";

function M3ter() {
  const [m3terId, setM3terId] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        {!m3terId ? (
          <Skeleton className="rounded-full h-20 w-20" />
        ) : (
          <M3terHead size={80} seed={m3terId.toString()} />
        )}
      </div>
      <div className="w-full space-y-2">
        <Input
          label="M3ter ID"
          type="number"
          value={m3terId || ""}
          onChange={(e) => {
            setM3terId(Number(e.target.value));
          }}
          className="w-full h-15 rounded-xl"
        />
        <Input
          label="Amount"
          type="number"
          value={amount || ""}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          className="w-full h-15 rounded-xl"
        />
        <Button className="w-full h-20 rounded-xl bg-green-400">Pay</Button>
      </div>
    </div>
  );
}

export default M3ter;
