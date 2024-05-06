// Remote/on-site

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { FormControl, InputLabel } from '@mui/material';
import { useFilterDispatch } from '../contexts/filterContext';



const filterLocations = [
    'remote',
    'OnSite'
];


export default function LocationFilter() {
    const [locations, setLocations] = useState<string[]>([]);
    const filterDispatch = useFilterDispatch();
    const [open, setOpen] = useState(false);
    const handleChange = (event: SelectChangeEvent<typeof locations>) => {
        const {
            target: { value },
        } = event;
        setLocations(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        filterDispatch({ type: 'ADD_LOCATION', payload: value })
        setOpen(false)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
            <InputLabel id="demo-simple-select-label-lc">Location</InputLabel>
            <Select
                labelId="demo-multiple-chip-label-lc"
                id="demo-multiple-chip-lc"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                multiple
                value={locations}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip-lc" label="Chip" />}
                renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map(value => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() => {
                                    setLocations(locations.filter(l => l !== value));
                                    filterDispatch({ type: 'REMOVE_LOCATION', payload: value });
                                }}
                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                }}
                            />
                        ))}

                    </Box>
                )}
            >
                {filterLocations.map((location) => (
                    <MenuItem
                        key={location}
                        value={location}
                    >
                        {location}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}