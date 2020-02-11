const fs = require('fs');


const fileMessages = './messages.json';
let data = [];

module.exports = {
  init(){
      try{
          const readFileMessages = fs.readFileSync(fileMessages);
          data = JSON.parse(readFileMessages.toString());
      }catch (e) {
          data = []
      }
  },

  getMessages(){
      return data;
  },

  postMessage(message){
      data.push(message);
      this.save()
  },

  save(){
      const fileContents = JSON.stringify(data, null,2);
      fs.writeFileSync(fileMessages, fileContents)
  }

};

