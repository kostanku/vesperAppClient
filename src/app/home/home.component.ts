import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Profile } from '../profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appointments: Appointment[];

  constructor(private authService: AuthService, private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments()
      .subscribe(appointments => this.appointments = appointments);
  }

  getProfile(): Profile {
    return this.authService.profile;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
