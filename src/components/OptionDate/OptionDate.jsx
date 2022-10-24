import React, { useContext } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Context } from 'components/Layout';
import moment from "moment";

export const OptionDate = ({ option, source, sourceUID }) => {
  const { openInfo, handleOptions } = useContext(Context);
  const handleChange = () => {
    handleOptions(sourceUID, option.UID, event.target.value, "select")
  }
  return (
    <div className="platform__option" key={option.UID}>
      <div className="platform-label_wrap">
      <span
        className='text'
      >
        {option.description} за {option.cost} &#8381;
      </span>
        <IconButton
          size="small"
          onClick={() => openInfo({ source: source, option: option.name })}
        >
          <HelpOutlineIcon />
        </IconButton>
      </div>
      <TextField
          type="datetime-local"
          size="small"
          value={option.defaultValue}
          onChange={handleChange}
          // sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ fontFamily: 'Montserrat' }}
        />
    </div>
  )
}

