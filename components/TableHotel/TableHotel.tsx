"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    sites: "Charmes",
    nom: "RELAIS DE VINCEY 33 Rue de Lorraine, 88450 Vincey - 03 29 67 40 11",
    "nuit-petit-dej": 117.1,
    "nuit-petit-dej-repas": null,
    detail: "restaurant sur place contact@relaisdevincey.fr",
  },
  {
    sites: "Fougères",
    nom: "Brit Hotel 5 rue de la Pilais - 35133 Fougères-Lécousse - 2 23 51 50 50  fougeres@brithotel.fr",
    "nuit-petit-dej": 82,
    "nuit-petit-dej-repas": 100,
    detail:
      "Chambres classiques : 70 euros (tarif public 75 à 160 euros) Chambres supérieures : 85 euros (tarif public 95 à 170 euros) Junior suite : 100 euros (tarifs public 125 à 175 euros) Petit déjeuner : 10,40 euros par personne Diners : formule 2 plats 16 euros. Formule 3 plats 19 euros. Le prix de la soirée étape s’articule de la façon suivante : chambre + PDJ + diner + taxe de séjour. Hotel complètement rénové, avec piscine ",
  },
  {
    sites: "Fougères",
    nom: "Best Western Fougères hotel.voyageurs.fougeres01@gmail.com",
    "nuit-petit-dej": 105.88,
    "nuit-petit-dej-repas": 130.88,
    detail:
      "veuillez noter: Les chambres sont annulables 48 heures avant l'arrivée de vos collaborateurs, passé ce délais les chambres seront considérées, comme no show ,donc facturées .",
  },
  {
    sites: "Saint-Priest",
    nom: "Kyriad PRESTIGE LYON – SAINT PRIEST EUREXPO 9 Rue Aimé Cotton – ZI Champ Dollin – 69800 SAINT PRIEST  04 37 25 80 00 seminaire.lyon.saintpriest@kyriadprestige.fr",
    "nuit-petit-dej": 115,
    "nuit-petit-dej-repas": 140,
    detail:
      "Objectifs 100 Nuitées sur 2023 Une remise de 15 % nous est accordée sur le Tarif public pendant les périodes de salon à Eurexpo C PRINT, POLLUTEC, SIRAH, GLOBAL INDUSTRIE, SOLUTRANS sur l'hébergement et à partir de 10 chambres un contrat de réservation  envoyé",
  },
  {
    sites: "Gardanne",
    nom: "Mercure St Victoire D7N, 13790 chateauneuf-le-rouge tel 04 42 20 21 51 mail : H7019-SB@accor.com",
    "nuit-petit-dej": 113,
    "nuit-petit-dej-repas": 138,
    detail: ` 2023 nuitées avec petit déj. 113 € et avec soirée étape 138 € (2,53 € de taxe de séjour en plus) minimum de nuitées sur 2023 100, si pas 100 nuitées alors il n'y aura plus de partenariat pour 2024 Rappel : pour toutes vos réservations, merci de contacter la réception au 
    04 42 20 21 51 ou  par email à l’adresse h7019@accor.com Nous demanderons un N° de CB en garantie pour chaque séjour Et vous ferons bénéficier d’une annulation sans frais jusqu’à 18h00 le jour de l’arrivée 
    `,
  },
  {
    sites: "Gradignan",
    nom: "Quality & Confort Hotel (best western) Avenue de l’Europe – 33170 GRADIGNAN 05 56 75 20 00",
    "nuit-petit-dej": 100,
    "nuit-petit-dej-repas": null,
    detail:
      "Chambre Confort 100 € + 1,72 frais de séjour il y a un restaurant sur place",
  },
  {
    sites: "Rungis",
    nom: "Ibis styles - Rungis",
    "nuit-petit-dej": null,
    "nuit-petit-dej-repas": null,
    detail: "Pas de négociation possible, demande trop de nuitées",
  },
  {
    sites: "Rungis",
    nom: "HOTEL CAMPANILE RUNGIS-ORLY 8 RUE DU SEMINAIRE 94550 Chevilly-Larue T : +33 1 84 04 08 39",
    "nuit-petit-dej": 101,
    "nuit-petit-dej-repas": 130,
    detail:
      "Chambre + petit déj. 101 € / demi pension en formule 2 plats (entrée + plat ou plat + dessert) 130 €",
  },
  {
    sites: "Rungis",
    nom: `best western4 avenue Charles Lindbergh 94656 Rungis Cedex 0661333750 
    Pour les invités 
    Navette entre l’hotel et l’aéroport
    `,
    "nuit-petit-dej": 145,
    "nuit-petit-dej-repas": 180,
    detail: `40 nuitées Chambre Double à usage single petit déjeuner buffet inclus taxe de séjour 2,53 €/personnes/nuit sup chambre supérieure 20 € sup chambre Exécutive 30 € diner formule 2 plats entrée plat OU plat dessert 1 boisson incluse : 1/4 vin au pichet, eau minérale ou café.diner formule 3 plats entrée plat dessert 1 boisson incluse : 1/4 vin au pichet, eau minérale ou café. Parking Gratuit Accès wifi très haut débit Offert
    `,
  },
  {
    sites: "Bondoufle",
    nom: "IBIS STYLE 8 rue du bois Chaland 91090 LISSES Tel 01.60.86.90.00",
    "nuit-petit-dej": 118,
    "nuit-petit-dej-repas": null,
    detail:
      "Ils ne font pas de soirée étape mais il y a un restaurant la taxe de séjour est de 1,14 € minimum 50 nuitées par an",
  },
  {
    sites: "Les Sorinières",
    nom: `HOTEL AKENA Rue des Bruyères - 44400 Rezé –
    02 55 59 05 50
   `,
    "nuit-petit-dej": 97,
    "nuit-petit-dej-repas": 112,
    detail: "",
  },
];

export type Payment = {
  sites: string;
  nom: string;
  "nuit-petit-dej": number | null;
  "nuit-petit-dej-repas": number | null;
  detail: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "sites",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sites
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("sites")}</div>
    ),
  },
  {
    accessorKey: "nom",
    header: "Nom de la Société",
    cell: ({ row }) => <div className="lowercase">{row.getValue("nom")}</div>,
  },
  {
    accessorKey: "nuit-petit-dej",
    header: () => <div className="text-right">Nuit + Petit déjeuner</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("nuit-petit-dej"));
      if (!amount) {
        return <div className="text-right font-medium"></div>;
      }

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "nuit-petit-dej-repas",
    header: () => (
      <div className="text-right">Nuit + Petit déjeuner + Repas</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("nuit-petit-dej-repas"));

      if (!amount) {
        return <div className="text-right font-medium"></div>;
      }

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "detail",
    header: "Détails / Commentaires",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("detail")}</div>
    ),
  },
];

export function TableHotel() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex justify-center items-center w-full min-h-[350px]">
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filtrer sites..."
            value={(table.getColumn("sites")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("sites")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
