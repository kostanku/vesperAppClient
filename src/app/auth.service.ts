import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './profile';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private profiles_url = 'api/profiles';
  profile: Profile;
  isLoggedIn = false;

  constructor(
    private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profiles_url)
      .pipe(
        catchError(this.handleError('getProfiles', []))
      );
  }

  loadProfile(email: string) {
    this.getProfiles().subscribe(profiles => this.profile = profiles.find(profile => email === profile.email));
  }

  login(email: string, password: string) {
    // validate login with backend
    this.loadProfile(email);
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.profile = null;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
