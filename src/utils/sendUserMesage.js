const getStatus = () => {
  return Math.ceil(Math.random() * 5) < 4;
};

export const sendUserMessage = (message) => {
  return new Promise((resolve, reject) => {
    const status = getStatus();
    const result = {message,status};

    setTimeout(() => {
      if (status) {
        resolve(result);
      } else {
        reject(new Error("Can't send message"));
      }
    }, 2000);

  })
};

