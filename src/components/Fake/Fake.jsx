import React, { useContext } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Context } from 'components/Layout';

export const Fake = () => {
  const { fake, handleFake } = useContext(Context);
  return(
    <div sx={{display: 'flex', gap: '0.5rem'}}>
      <FormControlLabel
      sx={{ml: '0.5rem'}}
      label={
        <div className="platform-label_wrap">
          <span className="text">Фейк</span>
        </div>
      }
      name='isActive'
      onChange={handleFake}
      labelPlacement='end'
      control={<Switch
        checked={fake?.isActive}
      />}
      />
      <TextField
          type="date"
          size="small"
          value={fake?.dateTo}
          onChange={handleFake}
          name='dateTo'
          // sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ fontFamily: 'Montserrat' }}
        />
    </div>
  )
}