import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faBuilding, faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading = false;
  information = {};
  data = [
    {
      title: "Studied at",
      description: "-",
      icon: faGraduationCap
    },
    {
      title: "Works at",
      description: "-",
      icon: faBuilding
    },
    {
      title: "From",
      description: "-",
      icon: faGlobeAmericas
    },
    {
      title: "Lives in",
      description: "-",
      icon: faMapMarkerAlt
    },
    {
      title: "GitHub",
      description: "-",
      icon: faGithub
    },
    {
      title: "LinkedIn",
      description: "-",
      icon: faLinkedinIn
    },
  ]
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
