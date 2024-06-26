"use client";

import { Welcome, Stat, DashboardPanel } from "./components";
import {
  CategoryIcon,
  BellSVG,
  IconEntrada,
  UserIcon,
  BillsIcon,
} from "@/assets/svg";
import ProductsDashboard from "./components/ProductsDashboard";
import Link from "next/link";
import { useState } from "react";
import ConfirmationModal from "@/components/modal-cmp/ConfirmationModal";
import FormCreateNewBill from "@/components/navbar-cmp/components/FormCreateNewBill";

export default function Dashboard() {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <div className='w-full px-5 mt-5'>
        <Welcome />
        <div className='flex flex-col cursor-pointer justify-center  gap-5 mb-5 md:flex-row md:flex-wrap py-5'>
          <Stat
            title='Nueva factura'
            onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}
            Icon={IconEntrada}
            url={"/product"}
          />
          <Stat title='Categorias' Icon={CategoryIcon} url={"/categories"} />
          <Stat title='Facturas' Icon={BillsIcon} url={"/bill"} />
        </div>

        <div className=' flex gap-5'>
          <DashboardPanel
            title={"Últimas facturas registradas"}
            Icon={UserIcon}
            isProduct={true}
          >
            <DashboardPanel.Content>
              <ProductsDashboard />
            </DashboardPanel.Content>
            <DashboardPanel.Footer>
              <Link href={"/bill"} className='w-full mt-5 btn btn-primary'>
                Ver más facturas
              </Link>
            </DashboardPanel.Footer>
          </DashboardPanel>

          <DashboardPanel
            title={"Notificaciones"}
            Icon={BellSVG}
            isProduct={false}
          >
            {/* <DashboardPanel.Content>
            <NotificationDash />
          </DashboardPanel.Content> */}

            <DashboardPanel.Footer>
              <div className='flex flex-col gap-3 mt-5'>
                <Link
                  href={"/notification"}
                  className='btn-disabled w-full btn btn-primary'
                >
                  Ver más notificaciones
                </Link>
              </div>
            </DashboardPanel.Footer>
          </DashboardPanel>
        </div>
      </div>
      {confirmationModalOpen && (
        <ConfirmationModal
          title='CREAR FACTURA'
          isOpen={confirmationModalOpen}
          handleClose={() => setConfirmationModalOpen(!confirmationModalOpen)}
        >
          <div className='overflow-auto h-[462px]'>
            <FormCreateNewBill />
          </div>
        </ConfirmationModal>
      )}
    </>
  );
}
