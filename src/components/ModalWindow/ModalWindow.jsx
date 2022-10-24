import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { optiondescription } from '../../optionDescription';

export function ModalWindow(props) {
  const { onClose, open, info, maxSize } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={maxSize || 'lg'}
      sx={{ zIndex: 999 }}
    >
      <DialogTitle>
        <span className="text">{info.source}</span>
      </DialogTitle>
      <DialogContent>
        <span className="text">{optiondescription[info.source][info.option].name}</span>
        <p className="text"><b>Как работает.</b> {optiondescription[info.source][info.option].work}</p>
        <p className="text"><b>Сколько действует.</b> {optiondescription[info.source][info.option].duration}</p>
        <p className="text"><b>Где можно применить.</b> {optiondescription[info.source][info.option].use}</p>
        {
          optiondescription[info.source][info.option].image &&
          <img
            style={{ width: '100%' }}
            src={optiondescription[info.source][info.option].image}
            alt='photo'
          />
        }
      </DialogContent>
    </Dialog>
  )
}