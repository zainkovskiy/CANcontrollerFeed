import React, { createContext, useEffect, useState, useRef } from "react";
import { requestData, sendToServer } from 'api/Api';
import { Linear } from "components/Linear";
import { ModalWindow } from "components/ModalWindow";

export const Context = createContext();

export const Layout = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(null);
  const isLoading = useRef(true);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if (isLoading.current) {
      isLoading.current = false;
      return
    }
    sendObject();
  }, [data])

  const sendObject = () => {
    sendToServer(data);
  }

  const getData = async () => {
    requestData()
      .then((res) => {
        if (res.status === 200) {
          // setData(res.data);
          setData({
            fake: true,
            address: {
              reqCity: 'Novosibirsk',
              reqStreet: 'Krasniy Prospekt',
              reqHouseNumber: '184/1',
              reqTypeofRealty: 'Квартира',
              reqArea: 'kalininskiy',
            },
            price: {
              currentPrice: 700,
              balance: 5000
            },
            platforms: [
              {
                UID: 3,
                name: 'Avito',
                isOnline: false,
                daysInPromotion: '5 дней',
                accommodation: {
                  from: '12-12-2022',
                  to: '12-15-2022'
                },
                options: [
                  {
                    status: false,
                    description: 'XL',
                    cost: 380,
                    name: 'XL',
                    type: 'check',
                    UID: 3,
                  },
                  {
                    status: false,
                    description: 'Выделение цветом',
                    cost: 380,
                    name: 'Highlight',
                    type: 'check',
                    UID: 4,
                  },
                  {
                    status: false,
                    description: 'Поднятие в Х раз в день',
                    name: 'Pack',
                    type: 'select',
                    defaultValue: 'x10_7',
                    UID: 5,
                    list: [
                      {
                        "UID": 5,
                        "name": "x10_7",
                        "description": "Объявление поднимается в выдаче 10 раз в день",
                        "price": 1830,
                        "expiration": null,
                        "duration": 7
                      },
                      {
                        "UID": 6,
                        "name": "x10_1",
                        "description": "Объявление поднимается в выдаче 10 раз в день",
                        "price": 540,
                        "expiration": null,
                        "duration": 1
                      },
                      {
                        "UID": 7,
                        "name": "x5_7",
                        "description": "Объявление поднимается в выдаче 5 раз в день",
                        "price": 1070,
                        "expiration": null,
                        "duration": 7
                      },
                      {
                        "UID": 8,
                        "name": "x5_1",
                        "description": "Объявление поднимается в выдаче 5 раз в день",
                        "price": 300,
                        "expiration": null,
                        "duration": 1
                      },
                      {
                        "UID": 9,
                        "name": "x2_7",
                        "description": "Объявление поднимается в выдаче 2 раза в день",
                        "price": 540,
                        "expiration": null,
                        "duration": 7
                      },
                      {
                        "UID": 10,
                        "name": "x2_1",
                        "description": "Объявление поднимается в выдаче 2 раза в день",
                        "price": 150,
                        "expiration": null,
                        "duration": 1
                      }
                    ]
                  }
                ]
              },
              {
                UID: 5,
                name: 'CIAN',
                isOnline: false,
                accommodation: {
                  from: '12-12-2022',
                  to: '12-16-2022'
                },
                options: [
                  {
                    status: false,
                    description: 'Премиум',
                    cost: 380,
                    name: 'Premium',
                    type: 'check',
                    UID: 3,
                  },
                  {
                    status: false,
                    description: 'Выделение цветом',
                    cost: 380,
                    name: 'Highlight',
                    type: 'check',
                    UID: 9,
                  },
                  {
                    status: false,
                    description: 'Платное объявление',
                    cost: 380,
                    name: 'Paid',
                    type: 'check',
                    UID: 8,
                  },
                  {
                    status: false,
                    description: 'Топ объявление',
                    cost: 380,
                    name: 'Top3',
                    type: 'check',
                    UID: 1,
                  },
                ]
              },
              {
                UID: 9,
                name: 'Яндекс',
                isOnline: false,
                accommodation: {
                  from: '12-12-2022',
                  to: '12-18-2022'
                },
                options: [
                  {
                    status: false,
                    description: 'Премиум',
                    cost: 380,
                    name: 'Premium',
                    type: 'check',
                    UID: 3,
                  },
                  {
                    status: false,
                    description: 'Поднятие',
                    cost: 380,
                    name: 'Promotion',
                    type: 'check',
                    UID: 9,
                  },
                  {
                    status: false,
                    description: 'Продвижение',
                    cost: 380,
                    name: 'Raise',
                    type: 'date',
                    defaultValue: '',
                    UID: 8,
                  },
                ]
              },
              {
                UID: 11,
                name: 'Домклик',
                isOnline: false,
                accommodation: {
                  from: '12-12-2022',
                  to: '12-16-2022'
                },
                options: [
                  {
                    status: false,
                    description: 'Экспресс',
                    cost: 380,
                    name: 'express',
                    type: 'check',
                    UID: 3,
                  },
                  {
                    status: false,
                    description: 'Premium',
                    cost: 380,
                    name: 'premium',
                    type: 'check',
                    UID: 9,
                  },
                  {
                    status: false,
                    description: 'Top',
                    cost: 380,
                    name: 'top',
                    type: 'check',
                    UID: 4,
                  },
                ]
              },
            ]
          });
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onClose = () => {
    setOpen(null);
  }
  const openInfo = (info) => {
    setOpen(info);
  }
  const whatsRender = () => {
    if (loading) {
      return <Linear />
    }
    if (error) {
      return <span className="text">error</span>
    }
    return (
      <>
        {
          props.children
        }
        {
          Boolean(open) &&
          <ModalWindow
            open={Boolean(open)}
            info={open}
            onClose={onClose}
          />
        }
      </>
    )
  }

  const handlePlatform = (UID) => {
    const changePlatform = data.platforms;
    changePlatform.forEach(element => {
      if (element.UID === UID) {
        element.isOnline = !element.isOnline;
      }
    })
    setData((prevState) => ({
      ...prevState,
      platforms: changePlatform
    }))
  }

  const handleOptions = (sourceUID, optionUID, value, optionSource) => {
    const findPlatform = data.platforms.find(item => item.UID === sourceUID);
    findPlatform.options = findPlatform.options.map((item) => {
      if (item.UID === optionUID) { item[optionSource === 'check' ? 'status' : 'defaultValue'] = value }
      return item
    })
    const changePlatforms = data.platforms;
    changePlatforms.splice(changePlatforms.indexOf(findPlatform), 1, findPlatform);

    setData((prevState) => ({
      ...prevState,
      platforms: changePlatforms
    }))
  }

  const handleFake = () => {
    setData((prevState) => ({
      ...prevState,
      fake: event.target.checked
    }))
  }

  const value = {
    address: data?.address || {},
    price: data?.price,
    platforms: data?.platforms || [],
    fake: data?.fake || false,
    openInfo: openInfo,
    handlePlatform: handlePlatform,
    handleOptions: handleOptions,
    handleFake: handleFake,
  }

  return (
    <Context.Provider value={value}>
      {
        whatsRender()
      }
    </Context.Provider>
  )
}
