import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {EducationComponent} from "./pages/education/education.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {GoalsComponent} from "./pages/goals/goals.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about-me',
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
