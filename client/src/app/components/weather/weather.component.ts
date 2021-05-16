import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  weather_api = environment.WEATHER_API;
  weather_data;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=holon&appid=' + this.weather_api + '&units=metric').subscribe(response => {
      this.weather_data = response;      
    })
  }

}
// http://api.openweathermap.org/data/2.5/weather?q=dimona&appid=bce0e560d0b631a58040daa6546eed48