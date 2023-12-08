/* eslint-disable react/no-unescaped-entities */
import { TableHotel } from "@/components/TableHotel/TableHotel";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-3xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Annexes</h3>
        </div>
        <Separator />
        <TableHotel />
      </div>
    </div>
  );
}
