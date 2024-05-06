import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { FormControl, InputLabel } from '@mui/material';
import { useFilterDispatch } from '../contexts/filterContext';

const filterSalaries = [
    '10k',
    '20k',
    '30k',
    '40k',
    '50k',
    '60k',
    '70k',
    '80k',
    '90k',
    '100k'
];


export default function SaloryFilter() {
    const [salary, setSalary] = useState<string>('');
    const filterDispatch = useFilterDispatch();

    const handleChange = (event: SelectChangeEvent<string>) => {
        const {
            target: { value },
        } = event;
        setSalary(value);
        filterDispatch({ type: 'SET_SALARY', payload: value.substring(0,value.length-1) })
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
            <InputLabel id="demo-simple-select-label-sl">Salary</InputLabel>
            <Select
                labelId="demo-multiple-chip-labe-sl"
                id="demo-multiple-chip-sl"
                value={salary}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip-sl" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        <Chip
                            key={selected}
                            label={selected}
                            onDelete={ () => {
                                setSalary('')
                                filterDispatch({ type: 'SET_SALARY', payload: undefined })
                            } }
                            onMouseDown={(e) => e.stopPropagation()}

                        />
                    </Box>
                )}
            >
                {filterSalaries.map((salary) => (
                    <MenuItem
                        key={salary}
                        value={salary}
                    >
                        {salary}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}