import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ThrowStmt } from '@angular/compiler';

// node app.js to start server on port 5000.

@Component({
  selector: 'app-chatclient',
  templateUrl: './chatclient.component.html',
  styleUrls: ['./chatclient.component.css']
})
export class ChatclientComponent implements OnInit{
  title = 'app';
  data;
  message: string;
  rawMessage: string;
  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      if(msg != undefined) {
        this.rawMessage = msg;
        this.message = JSON.parse(msg.text).data,
        console.log(msg);
      }
    })
  }

  onSubmit(form) {
    console.log("Submitted:" +
      JSON.stringify(form.form.value, null, 2));
      this.chat.sendMsg(form.form.value);
  }
}
