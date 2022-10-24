import React, { useContext } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { Context } from 'components/Layout';

export const OptionCheck = ({ option, source, sourceUID }) => {
  const { openInfo, handleOptions } = useContext(Context);

  const handleChange = () => {
    handleOptions(sourceUID, option.UID, event.target.checked, "check")
  }
  return (
    <div className="platform__option" key={option.UID}>
      <FormControlLabel
        sx={{
          margin: 0,
          color: `${option.status ? 'green' : ''}`
        }}
        onChange={handleChange}
        label={
          <div className="platform-label_wrap">
            <span className="text">{option.description} за {option.cost} &#8381;</span>
            <IconButton
              size="small"
              onClick={() => openInfo({source: source, option: option.name})}
            >
              <HelpOutlineIcon />
            </IconButton>
          </div>
        }
        labelPlacement='end'
        control={<Switch
          // disabled={balance - option.cost <= 0 || (selectOption && selectOption?.name !== option.name)}
          checked={option.status}
        // onChange={() => setOption(option)}
        />}
      />
    </div>
  )
}