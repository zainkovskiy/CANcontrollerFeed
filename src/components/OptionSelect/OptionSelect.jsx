import React, { useContext } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { Context } from 'components/Layout';

export const OptionSelect = ({ option, source, sourceUID }) => {
  const { openInfo, handleOptions } = useContext(Context);
  const handleChange = () => {
    handleOptions(sourceUID, option.UID, event.target.dataset.value, "select")
  }
  return (
    <div className="platform__option" key={option.UID}>
      <FormControlLabel
        sx={{
          margin: 0,
          width: '100%',
          color: `${option.status ? 'green' : ''}`
        }}
        label={
          <div className="platform-label_wrap">
            <span className="text">{option.description}</span>
            <IconButton
              size="small"
              onClick={() => openInfo({ source: source, option: option.name })}
            >
              <HelpOutlineIcon />
            </IconButton>
          </div>
        }
        labelPlacement='top'
        control={
          <Select
            fullWidth
            // disabled={selectOption && selectOption?.name !== option.name}
            // value={JSON.stringify(option.selected)}
            value={option.defaultValue}
            size='small'
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem
              value=''
            >Выбрать</MenuItem>
            {
              option?.list.length > 0 &&
              option.list.map(item =>
                <MenuItem
                  key={item.UID}
                  value={item.name}
                  // disabled={balance - item.price <= 0}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                >
                  {item.description} {item.price}&#8381;
                  {/* {
                    (balance - item.price <= 0) &&
                    <span
                      className='ad__text ad__text_small ad__text_error'
                    >
                      Не достаточно средств
                    </span>
                  } */}
                </MenuItem>
              )
            }
          </Select>
        } />
    </div>
  )
}