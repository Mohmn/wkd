import LocationFilter from "./Location";
import RolesFilter from "./Roles";
import SaloryFilter from "./Salary";
import ExperienceFilter from "./Experience";
import { Box } from "@mui/material";



export default function Filters() {
    return <>
        <Box sx={{
            display: 'flex',
            gap: 2,
            paddingLeft:'3rem'
        }}>
            <ExperienceFilter />
            <SaloryFilter />
            <RolesFilter />
            <LocationFilter />
        </Box>
    </>
}