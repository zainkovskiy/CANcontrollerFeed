import React, { useContext } from "react";
import moment from "moment";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { OptionCheck } from 'components/OptionCheck';
import { OptionSelect } from 'components/OptionSelect';
import { OptionDate } from 'components/OptionDate';
import { Context } from 'components/Layout';

export const PlatformItem = ({ settings }) => {
  const { handlePlatform } = useContext(Context);

  const getOption = (option) => {
    if (option.type === 'check') {
      return (
        <OptionCheck option={option} source={settings.name} sourceUID={settings.UID} key={option.UID} />
      )
    }
    if (option.type === 'select') {
      return (
        <OptionSelect option={option} source={settings.name} sourceUID={settings.UID} key={option.UID} />
      )
    }
    if (option.type === 'date') {
      return (
        <OptionDate option={option} source={settings.name} sourceUID={settings.UID} key={option.UID} />
      )
    }
  }

  const handleClick = () => {
    handlePlatform(settings.UID);
  }

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="platform__header">
          <div className="platform__header-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CircleIcon sx={{ fontSize: '10px' }} color={settings?.isOnline ? 'success' : 'error'} />
              <span className="platform__title text">{settings?.name}</span>
            </div>
            <span className="platform__subtitle text">
              Ошибка: {settings?.mistake || 'нет'}
            </span>
          </div>
          <div className="platform__header-top">

            {
              settings?.accommodation &&
              <span className="platform__subtitle text">
                Размещено 
                {' '}
                { moment(settings?.accommodation?.from).locale('ru').format('DD MMMM YYYY') } до 
                {' '}
                { moment(settings?.accommodation?.to).locale('ru').format('DD MMMM YYYY') }
              </span>
            }
            {
              settings?.daysInPromotion &&
              <span className="platform__subtitle text">
                Всего размещено {settings?.daysInPromotion}
              </span>
            }
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="platform__content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              size='small'
              color={settings?.isOnline ? 'error' : 'success'}
              onClick={handleClick}
            >
              {
                settings?.isOnline ? 'Отключить' : 'Включить'
              }
            </Button>
            <div>
              <span className="text">Дни выгрузки: </span>
              <ToggleButtonGroup
                color="primary"
                // value={alignment}
                // onChange={handleChange}
                aria-label="Platform"
                size="small"
              >
                <ToggleButton value="mon">ПН</ToggleButton>
                <ToggleButton value="tue">ВТ</ToggleButton>
                <ToggleButton value="wed">СР</ToggleButton>
                <ToggleButton value="thu">ЧТ</ToggleButton>
                <ToggleButton value="fri">ПТ</ToggleButton>
                <ToggleButton value="sat">СБ</ToggleButton>
                <ToggleButton value="sun">ВС</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <hr style={{width: '100%'}}/>
          <div className="platform__options">
            {
              settings?.options &&
              settings.options.map((item) =>
                getOption(item)
              )
            }
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}