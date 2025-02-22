import { useState } from "react";
import { Button, Input, Card, CardContent } from "@/components/ui";
export default function Payments() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const handlePayment = () => {
    if (amount) {
      setStatus("Pago procesado con éxito.");
    } else {
      setStatus("Ingrese una cantidad válida.");
    }
  };
  return (
    <div className="p-6 max-w-md mx-auto">
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Realizar Pago</h2>
          <Input
            type="number"
            placeholder="Ingrese la cantidad"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button className="mt-4" onClick={handlePayment}>
            Pagar
          </Button>
          {status && <p className="mt-2 text-green-600">{status}</p>}
        </CardContent>
      </Card>
    </div>
  );
}