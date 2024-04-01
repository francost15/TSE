import { NavBar } from "@/components";

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
    return (

        <div>
        <NavBar />
            <div>
            {children}
            </div>
        </div>
    );
}