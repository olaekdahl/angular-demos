import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chatclient',
  templateUrl: './chatclient.component.html',
  styleUrls: ['./chatclient.component.css']
})
export class ChatclientComponent implements OnInit{
  title = 'app';

  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage(msg: string) {
    this.chat.sendMsg(msg);
  }
}
