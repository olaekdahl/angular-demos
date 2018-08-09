import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chatclient',
  templateUrl: './chatclient.component.html',
  styleUrls: ['./chatclient.component.css']
})
export class ChatclientComponent implements OnInit{
  title = 'app';
  message: string;
  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.message = msg,
      console.log(msg);
    })
  }

  onSubmit(form) {
    console.log("Submitted:" +
      JSON.stringify(form.form.value, null, 2));
      this.chat.sendMsg(form.form.value);
  }
}
