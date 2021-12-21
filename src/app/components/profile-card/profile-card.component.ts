import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  imagePath = "../../assets/profile.JPG";
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFile = faFile;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
