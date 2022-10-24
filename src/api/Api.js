import axios from 'axios';

export const requestData = async () => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/errorTest.php'
  );
};

export const sendToServer = async (raw) => {
  return await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Feed/UserController.php', raw)
}