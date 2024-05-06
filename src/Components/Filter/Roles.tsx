// Remote/on-site

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { FormControl, InputLabel } from '@mui/material';
import { useFilterDispatch } from '../contexts/filterContext';


const filterRoles = [
    'backend',
    'frontend',
    'fullStack',
    'ios',
    'react native',
    'android',
    'dev-Ops'
];


export default function LocationFilter() {
    const [roles, setRoles] = useState<string[]>([]);
    const filterDispatch = useFilterDispatch();
    const [open, setOpen] = useState(false);
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event;
        setRoles(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        filterDispatch({ type: 'ADD_ROLE', payload: value })
        setOpen(false)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 230, maxWidth: 450 }} size="small">
            <InputLabel id="demo-simple-select-label-rl">Roles</InputLabel>
            <Select
                labelId="demo-multiple-chip-label-rl"
                id="demo-multiple-chip-rl"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                multiple
                value={roles}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip-rl" label="Chip" />}
                renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map(value => (
                            <Chip
                                key={value}
                                label={value}
                                onMouseDown={(e) => e.stopPropagation()}
                                onDelete={() => {
                                    setRoles(roles.filter(l => l !== value));
                                    filterDispatch({ type: 'REMOVE_ROLE', payload: value });
                                }}
                            />
                        ))}

                    </Box>
                )}
            >
                {filterRoles.map((role) => (
                    <MenuItem
                        key={role}
                        value={role}
                    >
                        {role}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}