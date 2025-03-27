import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function FeedbackFormPage() {
  return (
    <SidebarProvider>
      {//<AppSidebar>
      }
      <SidebarInset className="bg-[#ffffff] bg-cover bg-center">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-white" />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default FeedbackFormPage;