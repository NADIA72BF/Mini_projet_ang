import { Routes } from '@angular/router';
import { TeachersComponent } from './components/teachers/teachers.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SessionsComponent } from './components/sessions/sessions.component';



export const routes: Routes = [
    { path: '', redirectTo: '/teachers', pathMatch: 'full' },
    { path: 'teachers', component: TeachersComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'sessions', component: SessionsComponent },
  ];