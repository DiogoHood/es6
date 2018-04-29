const Message = require('./message.model');
const fs = require('fs');
const path = require('path');

class MessageService {
  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      // console.log(JSON.parse(data));
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray.map(item =>
          new Message(item.text, item.created));
        resolvePromise(dataObj);
      }
    });
  }

  get Message() {
    return this.messagesPromise;
  }
}

const messageService = new MessageService();
messageService.messagesPromise.then((messages) => {
  console.log(messages);
}).catch((err) => {
  console.log(err);
});
