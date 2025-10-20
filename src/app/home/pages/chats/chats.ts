import { Component } from '@angular/core';
import { timestamp } from 'rxjs';


interface Chat {
  image: string,
  name: string,
}

@Component({
  selector: 'app-chats',
  standalone: false,
  templateUrl: './chats.html',
  styleUrl: './chats.scss'
})
export class Chats {
  loading=true;
  selectedChat:any=null;
  chats!:Chat[];
  messageInput: string="";
  messages!:any[]

  ngOnInit(){
    setTimeout(()=>{
      this.chats=[
        {image:"../../../assets/images/Profile Pictures/pexels-ketut-subiyanto-4307869.jpg", name:"Ryan"},
        {image:"../../../assets/images/Profile Pictures/pexels-gabby-k-5876695.jpg",name:"Gabby"},
        {image:"../../../assets/images/Profile Pictures/pexels-dziana-hasanbekava-7275385.jpg",name:"Kelly"},
        {image:"../../../assets/images/Profile Pictures/pexels-wesleydavi-7116213.jpg",name:"Andrew"},
        {image:"../../../assets/images/Profile Pictures/pexels-carol-wd-1531174-3454298.jpg", name:"Carol"}

      ]
      this.loading=false
    },2000);

  }


  openChats(chat:any){
    this.selectedChat = chat;
    this.messages = [];
    this.messageInput="";
  }

  closeChat(){
    this.selectedChat=null;
  }

  sendMessage() {
    if (this.messageInput.trim() === '') {
      return;
    }

    this.messages.push({
      text: this.messageInput,
      sender: 'user',
      timestamp: new Date()
    });

    const userMessage = this.messageInput;
    this.messageInput = '';

    setTimeout(() => {
      this.messages.push({
        text: `${this.selectedChat.name} respondió a: "${userMessage}"`,
        sender: 'other',
        timestamp: new Date()
      });
    }, 1000);
  }

  onKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
