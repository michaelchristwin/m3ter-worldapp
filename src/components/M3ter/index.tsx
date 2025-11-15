"use client";

import { Button, Input, Skeleton } from "@worldcoin/mini-apps-ui-kit-react";
import { M3terHead } from "m3ters";
import { useState } from "react";

function M3ter() {
  const [m3terId, setM3terId] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  return (
    <div className="w-full">
      {!m3terId ? (
        <Skeleton className="rounded-full h-10 w-10" />
      ) : (
        <M3terHead size={40} seed={m3terId.toString()} />
      )}
      <Input
        label="M3ter ID"
        type="number"
        value={m3terId?.toString()}
        onChange={(e) => {
          setM3terId(Number(e.target.value));
        }}
        className="w-full h-10 rounded-2xl"
      />
      <Input
        label="Amount"
        value={amount?.toString()}
        type="number"
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        className="w-full h-10 rounded-2xl"
      />
      <Button>Pay</Button>
    </div>
  );
}

export default M3ter;
