import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { FormControl, InputLabel } from '@mui/material';
import { useFilterDispatch } from '../contexts/filterContext';

const filterExperiences = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];


export default function ExperienceFilter() {
    const [experience, setExperience] = useState<string>('');
    const filterDispatch = useFilterDispatch();

    const handleChange = (event: SelectChangeEvent<string>) => {
        const {
            target: { value },
        } = event;
        setExperience(value);
        filterDispatch({ type: 'SET_EXPERIENCE', payload: value })
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
            <InputLabel id="demo-simple-select-label-exp">Experience</InputLabel>
            <Select
                labelId="demo-multiple-chip-label-exp"
                id="demo-multiple-chip-exp"
                value={experience}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip-exp" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        <Chip
                            key={selected}
                            label={selected}
                            onDelete={() => {
                                setExperience('')
                                filterDispatch({ type: 'SET_EXPERIENCE', payload: undefined })
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                        />
                    </Box>
                )}
            >
                {filterExperiences.map((experience) => (
                    <MenuItem
                        key={experience}
                        value={experience}
                    >
                        {experience}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}