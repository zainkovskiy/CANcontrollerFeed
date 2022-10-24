import React, { useContext } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { Context } from 'components/Layout';

export const Fake = () => {
  const { fake, handleFake } = useContext(Context);
  return(
    <>
      <FormControlLabel
      sx={{ml: '0.5rem'}}
      label={
        <div className="platform-label_wrap">
          <span className="text">Фейк</span>
        </div>
      }
      onChange={handleFake}
      labelPlacement='end'
      control={<Switch
        checked={fake}
      />}
      />
    </>
  )
}