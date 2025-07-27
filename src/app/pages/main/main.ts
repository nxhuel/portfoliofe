import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeSection } from "../../features/main/about-me-section/about-me-section";
import { ProjectsSection } from "../../features/main/projects-section/projects-section";
import { ContactSection } from "../../features/main/contact-section/contact-section";
import { HomeSection } from "../../features/main/home-section/home-section";
import { Experience } from "../../features/main/experience/experience";

@Component({
  selector: 'app-main',
  imports: [TranslateModule, AboutMeSection, ProjectsSection, ContactSection, HomeSection, Experience],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
