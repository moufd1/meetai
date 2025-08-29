import  {CommandDialog, CommandInput, CommandResponsiveDialog}   from "@/components/ui/command";
import { CommandItem, CommandList } from "cmdk";
import { Dispatch, SetStateAction } from "react";


interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DashboardCommand = ({open,setOpen}: Props)=>{
    return(
        <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
            <CommandInput 
            placeholder="find a meetinh or agent"/>
            <CommandList>
                <CommandItem>
                    Test
                </CommandItem>
            </CommandList>
        </CommandResponsiveDialog>
    )   
}