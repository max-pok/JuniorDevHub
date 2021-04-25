import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { faGraduationCap, faBuilding, faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfoUrl = "http://localhost:8080/api/users/"

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

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserInfo(userId) {    
    return this.http.get<User>(this.userInfoUrl + userId).toPromise()
  }

  isCurrentUser(userId) {
    return userId == this.auth.userId
  }

}
